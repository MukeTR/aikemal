export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: "live" | "repository" | "planned";
  tags: string[];
  github?: string;
  website?: string;
  problem: string;
  approach: string;
  scope: string;
  credit?: string;
  builderNote?: string;
  architectureNote?: string;
  features?: { title: string; description: string; source: string }[];
  integrations?: string;
};
export const projects: Project[] = [
  {
    slug: "dipixel-media",
    name: "Dipixel Media",
    category: "BÜYÜME & PERFORMANS",
    status: "live",
    tags: ["24 marka", "8 Meta hesabı", "Performans"],
    description:
      "Güzellikten e-ticarete, yazılımdan hizmet sektörüne uzanan markaların büyüme masası.",
    problem:
      "Reklam, teklif, müşteri yolculuğu ve operasyon birbirinden kopuk yönetildiğinde ekranlarda hareket olur; işte aynı netlik oluşmaz.",
    approach:
      "Meta hesaplarının günlük yönetimini CRM, e-ticaret, satış ve müşteri deneyimiyle birlikte ele alıyor. Kampanyayı yalnızca reklam metriğiyle değil, işin bütün akışındaki etkisiyle değerlendiriyor.",
    scope:
      "24 markalık müşteri ekosistemi; kuaför ve estetik merkezleri gibi güzellik işletmelerinden e-ticaret firmalarına, satıcılara, yazılım şirketlerine, platformlara ve dijital pazarlama ajanslarına uzanıyor. Bu yapı içindeki 8 Meta hesabını aktif olarak yönetiyorum.",
    builderNote:
      "Dipixel Media’nın ortak kurucusu olarak strateji, performans, sistem ve müşteri tarafında doğrudan işin içindeyim.",
  },
  {
    slug: "independentai",
    name: "Independent AI",
    category: "YAPAY ZEKÂ",
    status: "repository",
    tags: ["Solopreneur", "GEO", "Çoklu model"],
    github: "https://github.com/MukeTR/independentai",
    description:
      "Markalar için can sıkıcı soru: Yapay zekâ neden beni değil, rakibimi öneriyor?",
    problem:
      "Markalar görünürlük için emek harcıyor; ama ChatGPT, Claude veya Gemini’ye sorulduğunda yanıtta yer alıp almadıklarını görmekte zorlanıyor. Independent AI bu görünürlük boşluğuna odaklanıyor.",
    approach:
      "ChatGPT, Claude ve Gemini yanıtlarında marka görünürlüğünü ölçmeye yönelik bir uygulama. Model bağlantıları, marka bahsi çıkarımı ve raporlama aynı ürün akışında buluşuyor.",
    builderNote:
      "Independent AI’ın kurucusuyum. Ürün stratejisinden model bağlantılarına, arayüzden veri ve raporlama akışlarına kadar yazılımı solopreneur olarak sıfırdan geliştiriyorum.",
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
    name: "Kârmatik",
    category: "E-TİCARET",
    status: "live",
    website: "https://karmatik.io",
    tags: ["Yayında", "Solopreneur", "Kârlılık", "Buybox takibi"],
    description:
      "Mağazanın kârı, fiyat rekabeti ve pazarlama kararları aynı panelde. Excel biraz dinlensin.",
    problem:
      "Satış yapmak tek başına yetmiyor. Kesintilerden sonra kalan kârı, rakip fiyatlarını ve hangi ürünün gerçekten kazandırdığını birlikte takip etmek gerekiyor.",
    approach:
      "Pazaryeri ve e-ticaret sitesi verilerini bir araya getirerek kârlılık, hakediş denetimi, fiyat otomasyonu ve kampanya kararlarını aynı iş akışına bağlıyor. Kopilot katmanı mağaza verisini önceliklendirilmiş görevlere dönüştürüyor.",
    builderNote:
      "Ürün stratejisinden arayüze, veri akışlarından otomasyonlara kadar Kârmatik’i sıfırdan tek başıma geliştirdim.",
    architectureNote:
      "Altyapı ve model kararlarını alışkanlığa göre değil, işin gerçek ihtiyacına göre veriyorum: düşük sabit maliyet, sade işletim ve kullanım arttığında büyüyebilen bir yapı. Yapay zekâ katmanında da kaliteyi korurken model maliyetini düzenli olarak yeniden değerlendiriyorum.",
    integrations:
      "Trendyol, Ticimax ve T-Soft, entegrasyon sayfasında bağlı olarak listeleniyor. T-Soft bağlantısında Akakçe rekabet takibi ve belirlenen sınırlar içinde otomatik fiyat güncelleme de bulunuyor.",
    features: [
      {
        title: "Kârlılık & hakediş denetimi",
        description:
          "Sipariş ve ürün bazında gider kırılımı, iadelerin etkisi ve beklenen kesintilerle gerçek ödemelerin karşılaştırılması. Çoklu mağaza raporları, PDF ve Excel çıktıları.",
        source: "https://karmatik.io/cozumler/raporlama",
      },
      {
        title: "Buybox & fiyat otomasyonu",
        description:
          "Rakip fiyat, stok ve buybox hareketlerini izleme; satıcının belirlediği kâr ve fiyat sınırlarına göre güncelleme, bildirimler ve işlem kayıtları.",
        source: "https://karmatik.io/cozumler/buybox",
      },
      {
        title: "Kampanya karar desteği",
        description:
          "İndirim ve kuponların kâra etkisini önceden görme; Flaş, Plus ve etiket kampanyalarını değerlendirme. Kampanya Excel dosyasını analiz edip aynı formatta geri alma.",
        source: "https://karmatik.io/cozumler/pazarlama",
      },
      {
        title: "Marka & rekabet analizi",
        description:
          "Ürün satış hızı, tahmini ciro, trend ürünler ve reklam hareketleri. Tahminlerin yanında güven göstergeleriyle rakipleri değerlendirme.",
        source: "https://karmatik.io/cozumler/marka-takibi",
      },
      {
        title: "Kopilot AI · Alpha",
        description:
          "Mağaza verisine dayalı haftalık tarama ve görev önerileri. Fiyat müdahaleleri tanımlı sınırlarla çalışıyor; robot kapalıyken yalnızca öneri sunuyor. Kopilot sayfasına göre Alpha erişimi Enterprise paketine özel.",
        source: "https://karmatik.io/kopilot",
      },
    ],
    scope:
      "Tamamlanmış ve kullanıma açık bir araç. Kârmatik’i karmatik.io üzerinden inceleyebilir ve kullanmaya başlayabilirsin.",
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

export const projectStatusLabels: Record<Project["status"], string> = {
  live: "YAYINDA",
  repository: "GITHUB PROJESİ",
  planned: "FİKİR AŞAMASINDA",
};
