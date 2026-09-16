export type SolutionItem = {
  name: string;
  note: string;
  href?: string;
  private?: boolean;
};

export type SolutionFamily = {
  number: string;
  title: string;
  intro: string;
  items: SolutionItem[];
};

export const solutionFamilies: SolutionFamily[] = [
  {
    number: "01",
    title: "Pazaryeri & ticari zekâ",
    intro:
      "Kârı, buybox’ı, komisyonu ve satıcı operasyonunu görünür hâle getiren ürünler.",
    items: [
      {
        name: "Kârmatik",
        note: "Yayındaki e-ticaret ticari zekâ platformu.",
        href: "/projects/karmatik",
      },
      {
        name: "Karmatik Dev",
        note: "Kârmatik’in aktif ürün ve altyapı geliştirme hattı.",
        private: true,
      },
      {
        name: "Buybox Buddy Bot",
        note: "Buybox, fiyatlandırma, rakip analizi ve kârlılık otomasyonları.",
        private: true,
      },
      {
        name: "Trendyol Yardım Asistanım",
        note: "Satıcı operasyonlarına odaklanan yardımcı uygulama.",
        private: true,
      },
      {
        name: "Trend Komisyon",
        note: "Trendyol komisyonlarını anlamaya odaklanan platform çalışması.",
        href: "https://github.com/MukeTR/trendkomisyon",
      },
      {
        name: "Trendyol Dashboard",
        note: "Satıcı metriklerini tek yerde toplama deneyi.",
        href: "https://github.com/MukeTR/trendyol-dashboard",
      },
    ],
  },
  {
    number: "02",
    title: "CRM & otomasyon",
    intro:
      "Takibi hafızadan çıkarıp sistemlere bırakan bağlantılar, paneller ve iş akışları.",
    items: [
      {
        name: "CRM Heartbeat Sync",
        note: "CRM akışlarını düzenli senkronizasyonla canlı tutan otomasyon.",
        private: true,
      },
      {
        name: "MelCRM",
        note: "Satış ve müşteri ilişkileri süreçleri için CRM çözümü.",
        private: true,
      },
      {
        name: "Open CRM",
        note: "Kullanıcılar için açık kaynak CRM çalışması.",
        href: "https://github.com/MukeTR/crm",
      },
      {
        name: "WP Messenger Humanlike",
        note: "WordPress mesaj akışlarını daha doğal hâle getiren otomasyon.",
        href: "https://github.com/MukeTR/wp-messenger-humanlike",
      },
    ],
  },
  {
    number: "03",
    title: "Markalar için dijital sistemler",
    intro:
      "Kurumsal siteden içerik yönetimine, dönüşüm aracından ölçüm altyapısına uzanan işler.",
    items: [
      {
        name: "Three Point Digital",
        note: "Pazaryeri ajansı sitesi, 30 yazılık içerik sistemi ve Kârlılık Merkezi.",
        href: "https://github.com/MukeTR/threepointdigital",
      },
      {
        name: "Dipixel Media",
        note: "Ajansın dijital yüzü ve büyüme altyapısı.",
        private: true,
      },
      {
        name: "Özel Hortum Çözümleri",
        note: "Kurumsal site, bilgi merkezi, SEO ve dönüşüm ölçümü altyapısı.",
        href: "https://github.com/MukeTR/ozel-hortum-cozumleri-",
      },
      {
        name: "Ergen Tekstil",
        note: "Tekstil markası için Next.js tabanlı dijital deneyim.",
        href: "https://github.com/MukeTR/ErgenTekstil",
      },
      {
        name: "VDM Vize",
        note: "Vize hizmetleri için web ürünü çalışması.",
        href: "https://github.com/MukeTR/vdmvize",
      },
      {
        name: "Gençay Karadeniz",
        note: "Kişisel marka için bağımsız web deneyimi.",
        href: "https://github.com/MukeTR/gencaykaradeniz",
      },
    ],
  },
  {
    number: "04",
    title: "Veri, AI & ürün deneyleri",
    intro:
      "Web’den veri çıkarmanın, modeli işe bağlamanın ve yeni arayüzler denemenin farklı biçimleri.",
    items: [
      {
        name: "Perde",
        note: "Türkiye tiyatrosu için oyun, kişi, sahne ve aile feed’i veri katmanı.",
        private: true,
      },
      {
        name: "Independent AI",
        note: "Markaların yapay zekâ yanıtlarındaki görünürlüğü.",
        href: "/projects/independentai",
      },
      {
        name: "WorkspaceOS",
        note: "macOS’ta dosya, depolama, OCR ve yerel çalışma alanı yönetimi.",
        href: "/projects/workspace-os",
      },
      {
        name: "AccessAI",
        note: "Web erişilebilirliğini kural ve AI analiziyle inceleyen araç.",
        href: "/projects/accessai",
      },
      {
        name: "The Novel Engine",
        note: "Dallanabilen hikâyeler için modüler anlatı motoru.",
        private: true,
      },
      {
        name: "Offroad Gauges",
        note: "Araç göstergeleri üzerine arayüz ve veri deneyi.",
        href: "https://github.com/MukeTR/offroad_gauges",
      },
    ],
  },
];

export const solutionCount = solutionFamilies.reduce(
  (total, family) => total + family.items.length,
  0,
);
