import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "@aikemal/shared";

const origin = "https://aikemal.com";
const defaultImage = `${origin}/images/ai-kemal-watercolor-eyes.webp`;

type PageMeta = {
  title: string;
  description: string;
  type?: "website" | "profile" | "article";
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const personSchema = {
  "@type": "Person",
  "@id": `${origin}/#mustafa-kemal-karatas`,
  name: "Mustafa Kemal Karataş",
  alternateName: "AI Kemal",
  url: origin,
  sameAs: ["https://github.com/MukeTR"],
  jobTitle: "Founder & AI Product Builder",
  knowsAbout: [
    "Artificial intelligence",
    "SaaS product development",
    "E-commerce",
    "CRM and automation",
    "Competitive analysis",
    "Web research and data extraction",
    "Meta advertising",
  ],
};

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "AI Kemal — Fikirden çalışan ürüne",
    description:
      "Mustafa Kemal Karataş’ın dijital atölyesi: yapay zekâ, SaaS, e-ticaret, CRM, araştırma ve çalışan ürünler.",
    schema: [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: "AI Kemal",
        description:
          "Mustafa Kemal Karataş’ın ürünlerini, uzmanlıklarını ve çalışma biçimini anlatan dijital atölye.",
        inLanguage: "tr-TR",
        publisher: { "@id": `${origin}/#mustafa-kemal-karatas` },
      },
      personSchema,
    ],
  },
  "/about": {
    title: "Kemal kim? — AI Kemal",
    description:
      "Mustafa Kemal Karataş’ın müşteri deneyimi, SaaS, CRM, e-ticaret, yapay zekâ ve sıfırdan ürün geliştirme hikâyesi.",
    type: "profile",
    schema: {
      "@type": "ProfilePage",
      mainEntity: { "@id": `${origin}/#mustafa-kemal-karatas` },
      name: "Mustafa Kemal Karataş hakkında",
      url: `${origin}/about`,
      inLanguage: "tr-TR",
    },
  },
  "/expertise": {
    title: "Uzmanlıklar — AI Kemal",
    description:
      "Yapay zekâ, strateji, rakip analizi, CRM, otomasyon, ürün mimarisi, e-ticaret, Meta reklamları ve web araştırması.",
    schema: {
      "@type": "CollectionPage",
      name: "AI Kemal uzmanlıkları",
      url: `${origin}/expertise`,
      inLanguage: "tr-TR",
      about: { "@id": `${origin}/#mustafa-kemal-karatas` },
    },
  },
  "/projects": {
    title: "Projeler ve araçlar — AI Kemal",
    description:
      "Kârmatik, Independent AI, Dipixel Media, WorkspaceOS, AccessAI ve diğer ürünlerin problem, yaklaşım ve kapsamları.",
    schema: {
      "@type": "CollectionPage",
      name: "AI Kemal projeleri ve araçları",
      url: `${origin}/projects`,
      inLanguage: "tr-TR",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects
          .filter((project) => project.status !== "planned")
          .map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.name,
            url: `${origin}/projects/${project.slug}`,
          })),
      },
    },
  },
  "/ask": {
    title: "Birlikte düşünelim — AI Kemal",
    description:
      "Problemini kısa bir briefe dönüştür; ürün, büyüme, otomasyon veya yapay zekâ fikrini AI Kemal’in masasına koy.",
    schema: {
      "@type": "ContactPage",
      name: "AI Kemal ile birlikte düşünelim",
      url: `${origin}/ask`,
      inLanguage: "tr-TR",
    },
  },
  "/admin": {
    title: "Yönetim — AI Kemal",
    description: "Yerel proje vitrini yönetimi.",
    noindex: true,
  },
  "/en": {
    title: "AI Kemal — From curious question to working product",
    description:
      "Mustafa Kemal Karataş builds AI products, SaaS systems and growth operations across e-commerce, CRM, research and automation.",
    schema: [
      {
        "@type": "WebPage",
        name: "AI Kemal — English",
        url: `${origin}/en`,
        inLanguage: "en",
        about: { "@id": `${origin}/#mustafa-kemal-karatas` },
      },
      personSchema,
    ],
  },
  "/en/ask": {
    title: "Think together — AI Kemal",
    description:
      "Turn an AI, product, growth, automation or research problem into a short and useful brief.",
    schema: {
      "@type": "ContactPage",
      name: "Think together with AI Kemal",
      url: `${origin}/en/ask`,
      inLanguage: "en",
    },
  },
};

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    const [name, key] = attribute.split(":");
    element.setAttribute(name, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

function projectMeta(pathname: string): PageMeta | undefined {
  if (!pathname.startsWith("/projects/")) return undefined;
  const slug = pathname.split("/")[2];
  const project = projects.find((item) => item.slug === slug);
  if (!project) return undefined;
  return {
    title: `${project.name} — AI Kemal`,
    description: project.description,
    type: "article",
    noindex: project.status === "planned",
    schema: {
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: `${origin}${pathname}`,
      creator: { "@id": `${origin}/#mustafa-kemal-karatas` },
      inLanguage: "tr-TR",
      keywords: project.tags.join(", "),
      ...(project.github ? { codeRepository: project.github } : {}),
      ...(project.website ? { mainEntityOfPage: project.website } : {}),
    },
  };
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = projectMeta(pathname) ?? pageMeta[pathname];
    const resolved: PageMeta = meta ?? {
      title: "Sayfa bulunamadı — AI Kemal",
      description: "Aradığın sayfa AI Kemal’in atölyesinde bulunamadı.",
      noindex: true,
    };
    const canonicalPath = meta ? pathname : "/";
    const canonicalUrl = `${origin}${canonicalPath === "/" ? "" : canonicalPath}`;

    document.title = resolved.title;
    setMeta(
      'meta[name="description"]',
      "name:description",
      resolved.description,
    );
    setMeta(
      'meta[name="robots"]',
      "name:robots",
      resolved.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large",
    );
    setMeta('meta[property="og:title"]', "property:og:title", resolved.title);
    setMeta(
      'meta[property="og:description"]',
      "property:og:description",
      resolved.description,
    );
    setMeta(
      'meta[property="og:type"]',
      "property:og:type",
      resolved.type ?? "website",
    );
    setMeta('meta[property="og:url"]', "property:og:url", canonicalUrl);
    setMeta(
      'meta[property="og:locale"]',
      "property:og:locale",
      pathname.startsWith("/en") ? "en_US" : "tr_TR",
    );
    setMeta('meta[property="og:image"]', "property:og:image", defaultImage);
    setMeta('meta[name="twitter:title"]', "name:twitter:title", resolved.title);
    setMeta(
      'meta[name="twitter:description"]',
      "name:twitter:description",
      resolved.description,
    );

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const llmsLink = document.head.querySelector<HTMLLinkElement>(
      'link[rel="describedby"]',
    );
    if (llmsLink) {
      llmsLink.href = pathname.startsWith("/en") ? "/llms-en.txt" : "/llms.txt";
    }

    document.getElementById("route-json-ld")?.remove();
    if (resolved.schema) {
      const script = document.createElement("script");
      script.id = "route-json-ld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": Array.isArray(resolved.schema)
          ? resolved.schema
          : [resolved.schema],
      });
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}
