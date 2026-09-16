import { useLayoutEffect, useRef } from "react";

type RevealGroup = [string, string[]];

const sharedGroups: RevealGroup[] = [
  [".section-heading > *", ["wipe", "slide-right"]],
];

const pageGroups: Record<string, RevealGroup[]> = {
  home: [
    [".about > *", ["slide-left", "slide-right"]],
    [".client-ecosystem > *", ["tilt-left", "scale"]],
    [".ecosystem-grid article", ["scale", "tilt-right", "tilt-left"]],
    [".expertise-card", ["slide-left", "rise", "slide-right", "scale"]],
    [".project-card", ["clip-left", "scale", "clip-right"]],
    [".step", ["slide-right", "wipe"]],
    [".ask-banner > *", ["scale", "slide-left", "slide-right"]],
  ],
  about: [
    [".about-hero > *", ["liquid-left", "liquid-scale"]],
    [".bio-section > *", ["text-unfold", "slide-right"]],
    [
      ".impossible-manifesto > *",
      ["counter-pop", "text-unfold", "slide-right"],
    ],
    [".magic-gear-scene > *", ["slide-left", "liquid-scale"]],
    [".solo-builder-section > *", ["tilt-left", "slide-right"]],
    [".builder-principles article", ["float-up", "tilt-left", "tilt-right"]],
    [".current-work > *", ["slide-left", "slide-right"]],
    [".outcomes-grid article", ["counter-pop", "counter-pop", "counter-pop"]],
    [".career-section > *", ["text-unfold", "slide-right"]],
    [".timeline article", ["timeline-in", "timeline-in"]],
    [".background-grid article", ["tilt-left", "scale", "tilt-right"]],
  ],
  projects: [
    [".project-filters", ["catalog-drop"]],
    [".result-count", ["wipe"]],
    [".project-card", ["catalog-left", "catalog-up", "catalog-right"]],
    [".solution-archive-heading > *", ["slide-left", "slide-right"]],
    [".solution-family", ["catalog-left", "catalog-up", "catalog-right"]],
  ],
  expertise: [
    [".expertise-jumps", ["wipe"]],
    [".expertise-detail", ["blueprint-left", "blueprint-right"]],
    [".task-list li", ["slide-right", "slide-right"]],
    [".example-box", ["scale"]],
  ],
  ask: [
    [".ask-heading > *", ["form-left", "form-right"]],
    [".brief-progress", ["wipe"]],
    [".brief-form", ["form-rise"]],
    [".brief-result-grid > *", ["form-left", "form-right"]],
  ],
  "project-detail": [
    [".project-detail > *", ["document-rise", "text-unfold"]],
    [".case-layout > *", ["clip-left", "clip-right"]],
    [".project-capabilities > *", ["document-rise", "wipe"]],
    [".capability-grid > *", ["scale", "document-rise"]],
  ],
  admin: [
    [".admin-hero > *", ["slide-left", "slide-right"]],
    [".admin-form", ["document-rise"]],
    [".admin-project-list", ["document-rise"]],
  ],
  en: [
    [".english-about > *", ["slide-left", "slide-right"]],
    [".english-field-note > *", ["counter-pop", "counter-pop", "slide-right"]],
    [
      ".english-skill-grid article",
      ["tilt-left", "scale", "tilt-right", "rise"],
    ],
    [
      ".english-venture-grid article",
      ["catalog-left", "catalog-up", "catalog-right"],
    ],
    [".magic-gear-scene > *", ["slide-left", "liquid-scale"]],
    [".english-manifesto > *", ["counter-pop", "text-unfold", "slide-right"]],
    [".english-cta > *", ["slide-left", "slide-right"]],
    [".english-brief-heading > *", ["form-left", "form-right"]],
    [".english-brief-form", ["form-rise"]],
  ],
};

const fallbackGroups: RevealGroup[] = [
  [".about-hero > *", ["slide-left", "scale"]],
];

const parallaxGroups: Array<[string, number]> = [
  [".hero-visual", 18],
  [".human-card > img", 14],
  [".project-art > svg", 12],
  [".project-art > img", 16],
  [".banner-star", 16],
];

export function ScrollEffects({ routeKey }: { routeKey: string }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const pageName =
      routeKey === "/"
        ? "home"
        : routeKey.startsWith("/projects/")
          ? "project-detail"
          : routeKey.slice(1).split("/")[0] || "home";
    const revealGroups = [
      ...sharedGroups,
      ...(pageGroups[pageName] ?? fallbackGroups),
    ];
    main.dataset.motionPage = pageName;
    const revealElements = new Set<HTMLElement>();

    revealGroups.forEach(([selector, effects]) => {
      main.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.dataset.reveal = effects[index % effects.length];
        element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
        revealElements.add(element);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -7%" },
    );

    revealElements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("motion-enabled");

    const parallaxElements: Array<[HTMLElement, number]> = [];
    parallaxGroups.forEach(([selector, strength]) => {
      main.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        element.dataset.parallax = "true";
        parallaxElements.push([element, strength]);
      });
    });

    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const pageRange = document.documentElement.scrollHeight - viewportHeight;
      const progress = pageRange > 0 ? window.scrollY / pageRange : 0;
      progressRef.current?.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, progress))),
      );

      parallaxElements.forEach(([element, strength]) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > viewportHeight + 100) return;
        const center = rect.top + rect.height / 2;
        const distance = (center - viewportHeight / 2) / viewportHeight;
        const offset = Math.max(-1, Math.min(1, distance)) * strength;
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-enabled");
      delete main.dataset.motionPage;
      revealElements.forEach((element) => {
        delete element.dataset.reveal;
        element.classList.remove("is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
      parallaxElements.forEach(([element]) => {
        delete element.dataset.parallax;
        element.style.removeProperty("--parallax-y");
      });
    };
  }, [routeKey]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={progressRef} className="scroll-progress__bar" />
    </div>
  );
}
