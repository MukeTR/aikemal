import type { Project } from "@aikemal/shared";

const copy: Record<string, Partial<Project>> = {
  "dipixel-media": {
    category: "GROWTH & PERFORMANCE",
    tags: ["24 brands", "8 Meta accounts", "Performance"],
    description:
      "The growth desk for brands spanning beauty, e-commerce, software and services.",
    problem:
      "When advertising, offer, customer journey and operations are managed in isolation, dashboards move while the business remains unclear.",
    approach:
      "Meta account management is handled together with CRM, e-commerce, sales and customer experience. Campaigns are judged by their effect across the full business flow, not only by ad metrics.",
    scope:
      "A 24-brand ecosystem spanning beauty businesses, e-commerce companies, marketplace sellers, software companies, platforms and digital agencies. I actively manage 8 Meta accounts within this structure.",
    builderNote:
      "As co-founder of Dipixel Media, I work directly across strategy, performance, systems and customer operations.",
  },
  independentai: {
    category: "ARTIFICIAL INTELLIGENCE",
    tags: ["Solopreneur", "GEO", "Multi-model"],
    description:
      "The awkward brand question: why does AI recommend my competitor instead of me?",
    problem:
      "Brands invest in visibility but struggle to see whether they appear when people ask ChatGPT, Claude or Gemini. Independent AI focuses on that visibility gap.",
    approach:
      "A product for measuring brand visibility across model answers. Model connections, mention extraction, comparison and reporting meet in one flow.",
    scope:
      "The repository contains a Next.js interface, Prisma data layer and model adapters, with a mock mode that runs without API keys.",
    builderNote:
      "I am the founder of Independent AI. I build the product end to end as a solopreneur, from strategy and model connections to interface, data and reporting.",
  },
  "workspace-os": {
    category: "DIGITAL PRODUCT",
    tags: ["macOS", "Swift", "Claude"],
    description:
      "It began with ‘why is the disk full?’ and became a desktop order problem.",
    problem:
      "As files, screenshots, caches and development leftovers accumulate, understanding what lives where becomes difficult.",
    approach:
      "Storage analysis, duplicate detection, on-device OCR and search meet in a native macOS application. An optional Claude interpreter turns natural language requests into a reviewable plan first.",
    scope:
      "A SwiftUI and AppKit repository for macOS 14+. AI is off by default and the core features work on-device.",
  },
  accessai: {
    category: "ARTIFICIAL INTELLIGENCE",
    tags: ["Accessibility", "OpenAI", "Next.js"],
    description:
      "The site looks lovely. Can everybody use it? That is where the real review begins.",
    problem:
      "A website looking good does not guarantee that its labels, heading structure and interactions are understandable to everyone.",
    approach:
      "The product combines rule-based accessibility checks with AI analysis and reports problems, impact and developer-facing recommendations.",
    scope:
      "The GitHub repository is named reachableai; the product is AccessAI. It uses Next.js, Puppeteer, OpenAI and SQLite. Automated output does not replace a manual audit or certification.",
  },
  "instagram-unfollowers": {
    category: "SMALL TOOL",
    tags: ["Dipixel", "Turkish interface", "Preact"],
    description:
      "Is the follow relationship one-sided? At least let the table be honest.",
    problem:
      "A clearer interface was needed to inspect, filter and export follow relationships.",
    approach:
      "Dipixel Media developed the interface, design and Turkish edition of the browser-based tool, including filters, allowlists and export options.",
    scope: "The README states that a desktop browser is required.",
    credit:
      "Built on davidarroyo1234/InstagramUnfollowers. The contribution here is the Dipixel Media interface, design and Turkish edition.",
  },
  karmatik: {
    category: "E-COMMERCE",
    tags: ["Live", "Solopreneur", "Profitability", "Buybox"],
    description:
      "Profit, price competition and marketing decisions in one panel. Excel may take the afternoon off.",
    problem:
      "Making sales is not enough. Sellers need to see the profit left after deductions, competitor prices and which products actually make money.",
    approach:
      "Marketplace and store data come together across profitability, settlement checks, pricing automation and campaign decisions. A copilot layer converts store data into prioritised work.",
    scope: "A completed, live product available at karmatik.io.",
    builderNote:
      "I built Kârmatik alone from zero, from product strategy and interface to data flows and automations.",
    architectureNote:
      "Infrastructure and model decisions follow the product’s real needs: low fixed cost, simple operations and room to scale. Model quality and cost are reviewed continuously.",
    integrations:
      "Trendyol, Ticimax and T-Soft are listed as connected channels. T-Soft also includes Akakçe competition tracking and bounded automatic price updates.",
    features: [
      {
        title: "Profitability & settlement checks",
        description:
          "Order and product expense breakdowns, return impact and comparison between expected deductions and actual payouts.",
        source: "https://karmatik.io/cozumler/raporlama",
      },
      {
        title: "Buybox & pricing automation",
        description:
          "Competitor price, stock and buybox monitoring with updates kept inside seller-defined profit and price limits.",
        source: "https://karmatik.io/cozumler/buybox",
      },
      {
        title: "Campaign decision support",
        description:
          "See the profit impact of discounts and coupons before committing; analyse campaign spreadsheets in their original format.",
        source: "https://karmatik.io/cozumler/pazarlama",
      },
      {
        title: "Brand & competitor analysis",
        description:
          "Sales velocity, estimated revenue, trending products and advertising movement, shown with confidence signals.",
        source: "https://karmatik.io/cozumler/marka-takibi",
      },
      {
        title: "Copilot AI · Alpha",
        description:
          "Weekly store scans and prioritised task suggestions. Price actions stay within defined boundaries.",
        source: "https://karmatik.io/kopilot",
      },
    ],
  },
  "profit-calculator": {
    category: "E-COMMERCE",
    tags: ["Calculation", "Small tool"],
    description:
      "A numerical, rather than emotional, answer to ‘what did this sale actually leave us?’",
    problem: "See the net amount left after a sale quickly and clearly.",
    approach:
      "A simple flow is planned around commission, cost and shipping inputs.",
    scope: "Planned tool. No working calculator screen exists yet.",
  },
};

export function translateProject(project: Project): Project {
  return { ...project, ...copy[project.slug] };
}
