export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: "planned";
};
export const projects: Project[] = [
  {
    slug: "karmatik",
    name: "Karmatik",
    category: "E-TİCARET",
    description:
      "Ciroyu değil, gerçek kârı gör. E-ticaret kararlarını veriye dayandır.",
    status: "planned",
  },
  {
    slug: "dipixel",
    name: "Dipixel",
    category: "BÜYÜME & TASARIM",
    description: "İyi fikirleri, iyi çalışan dijital deneyimlere dönüştür.",
    status: "planned",
  },
  {
    slug: "profit-calculator",
    name: "Kâr Hesaplayıcı",
    category: "MİNİ ARAÇ",
    description:
      "Komisyon, kargo, maliyet. Satışın sonunda cebinde ne kalıyor?",
    status: "planned",
  },
];
export type ChatRequest = { message: string };
export type ChatResponse = { mode: "mock"; reply: string };
