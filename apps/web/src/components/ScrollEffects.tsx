import { useLayoutEffect, useRef } from "react";

const revealGroups = [
  ".section-heading > *",
  ".about > *",
  ".client-ecosystem > *",
  ".ecosystem-grid article",
  ".expertise-card",
  ".project-card",
  ".step",
  ".ask-banner > *",
  ".about-hero > *",
  ".bio-section > *",
  ".solo-builder-section > *",
  ".builder-principles article",
  ".current-work > *",
  ".outcomes-grid article",
  ".career-section > *",
  ".timeline article",
  ".background-grid article",
  ".project-page-heading > *",
  ".case-layout > *",
  ".ask-heading > *",
  ".brief-progress",
  ".brief-form",
];

const parallaxGroups: Array<[string, number]> = [
  [".hero-visual", 18],
  [".human-card > img", 14],
  [".project-art > svg", 12],
  [".banner-star", 16],
];

export function ScrollEffects({ routeKey }: { routeKey: string }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const revealElements = new Set<HTMLElement>();

    revealGroups.forEach((selector, groupIndex) => {
      main.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.dataset.reveal =
          groupIndex % 3 === 1 && index % 2 === 0 ? "left" : "up";
        element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
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
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
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
