export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: "repository" | "planned";
  tags: string[];
  github?: string;
  problem: string;
  approach: string;
  scope: string;
  credit?: string;
};
export const projects: Project[] = [
  {
    slug: "independentai",
    name: "Independent AI",
    category: "YAPAY ZEKÂ",
    status: "repository",
    tags: ["GEO", "Çoklu model", "TypeScript"],
    github: "https://github.com/MukeTR/independentai",
    description:
      "Markan yapay zekânın aklına geliyor mu? Gelmiyorsa, bir konuşmamız lazım.",
    problem:
      "İnsanlar markaları artık yapay zekâya da soruyor. Bir markanın yanıtlarda geçip geçmediğini ve rakipleriyle birlikte nasıl konumlandığını izlemek gerekiyor.",
    approach:
      "ChatGPT, Claude ve Gemini yanıtlarında marka görünürlüğünü ölçmeye yönelik bir uygulama. Model bağlantıları, marka bahsi çıkarımı ve raporlama aynı ürün akışında buluşuyor.",
    scope:
      "Repo, Next.js arayüzü, Prisma veri katmanı ve model adaptörleri içeriyor. API anahtarları olmadan mock moduyla çalışacak şekilde tasarlanmış.",
  },
  {
    slug: "workspace-os",
    name: "WorkspaceOS",
    category: "DİJİTAL ÜRÜN",
    status: "repository",
    tags: ["macOS", "Swift", "Claude"],
    github: "https://github.com/MukeTR/Workspace-OS",
    description:
      "“Disk neden dolu?” sorusuyla başlayıp masaüstüne düzen getirme meselesi.",
    problem:
      "Dosyalar, ekran görüntüleri, önbellekler ve geliştirme artıkları biriktikçe bilgisayarda neyin nerede olduğunu bulmak zorlaşıyor.",
    approach:
      "Depolama analizi, kopya dosya bulma, cihaz üzerinde OCR ve aramayı yerel bir macOS uygulamasında birleştiriyor. İsteğe bağlı Claude yorumlayıcısı, doğal dildeki isteği önce incelenebilir bir plana dönüştürüyor.",
    scope:
      "SwiftUI ve AppKit tabanlı, macOS 14+ için bir repo. README’ye göre yapay zekâ varsayılan olarak kapalı; temel işlevler cihaz üzerinde çalışıyor.",
  },
  {
    slug: "accessai",
    name: "AccessAI",
    category: "YAPAY ZEKÂ",
    status: "repository",
    tags: ["Erişilebilirlik", "OpenAI", "Next.js"],
    github: "https://github.com/MukeTR/reachableai",
    description:
      "Site güzel. Peki herkes kullanabiliyor mu? Asıl kontrol burada başlıyor.",
    problem:
      "Bir web sitesinin iyi görünmesi, etiketlerinin, başlık yapısının ve etkileşimlerinin herkes için anlaşılır olduğu anlamına gelmiyor.",
    approach:
      "Web sayfasını tarayıp kural tabanlı erişilebilirlik kontrollerini AI analiziyle bir araya getiriyor. Sorunlar, etki düzeyi ve geliştiriciye yönelik düzeltme önerileriyle raporlanıyor.",
    scope:
      "GitHub’daki repo adı reachableai, README’deki ürün adı AccessAI. Next.js, Puppeteer, OpenAI ve SQLite kullanıyor. Otomatik rapor, erişilebilirlik sertifikası veya manuel denetim yerine geçmez.",
  },
  {
    slug: "instagram-unfollowers",
    name: "Instagram Unfollowers",
    category: "MİNİ ARAÇ",
    status: "repository",
    tags: ["Dipixel", "Türkçe arayüz", "Preact"],
    github: "https://github.com/MukeTR/InstagramUnfollowers",
    description: "Takipleşme tek taraflı mı? En azından tabloyu net görelim.",
    problem:
      "Takip ilişkilerini incelemek, filtrelemek ve gerektiğinde dışarı aktarmak için daha anlaşılır bir arayüz ihtiyacı.",
    approach:
      "Tarayıcıda çalışan aracın arayüz, tasarım ve Türkçe sürümü Dipixel Media tarafından geliştirilmiş. Filtreler, beyaz liste ve dışa aktarma seçenekleri sunuyor.",
    scope: "README masaüstü tarayıcı gerektirdiğini belirtiyor.",
    credit:
      "davidarroyo1234/InstagramUnfollowers üzerine kurulu. Buradaki katkı: Dipixel Media arayüzü, tasarımı ve Türkçe sürüm.",
  },
  {
    slug: "karmatik",
    name: "Karmatik",
    category: "E-TİCARET",
    status: "planned",
    tags: ["Kârlılık", "Karar desteği"],
    description:
      "Ciro egoyu okşar. Kâr faturayı öder. Biz ikincisine bakıyoruz.",
    problem:
      "Komisyon, kargo ve ürün maliyeti hesaba katılmadan görülen satış rakamları tek başına yeterli değil.",
    approach:
      "E-ticaret kararlarını gerçek kârlılık üzerinden değerlendiren bir araç fikri.",
    scope:
      "Önceki AI Kemal planından gelen ürün fikri. Bu sitede hesaplama veya mağaza entegrasyonu henüz yok.",
  },
  {
    slug: "profit-calculator",
    name: "Kâr Hesaplayıcı",
    category: "E-TİCARET",
    status: "planned",
    tags: ["Hesaplama", "Mini araç"],
    description:
      "“Bu satıştan ne kaldı?” sorusuna duygusal değil, sayısal yaklaşım.",
    problem:
      "Bir satışın sonunda kalan net tutarı hızlı ve anlaşılır biçimde görmek.",
    approach:
      "Komisyon, maliyet ve kargo girdileriyle basit bir kâr hesabı akışı planlanıyor.",
    scope: "Planlanan araç. Henüz çalışan hesaplama ekranı yok.",
  },
];
export type ChatRequest = { message: string };
export type ChatResponse = { mode: "mock"; reply: string };
