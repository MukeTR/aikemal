export const expertise = [
  {
    id: "claude",
    number: "01",
    name: "Claude",
    label: "DÜŞÜNCEDEN UYGULAMAYA",
    line: "Uzun meseleleri birlikte açıyoruz.",
    description:
      "Karmaşık bir fikri parçalara ayırırken, kod üzerinde çalışırken ve bir ürünün nasıl işleyeceğini kurgularken Claude çalışma masamın bir parçası.",
    tasks: [
      "İşi doğru bağlam ve net bir hedefle tarif etmek",
      "Büyük problemi küçük, kontrol edilebilir adımlara bölmek",
      "Üretilen kodu ve yaklaşımı deneyerek geliştirmek",
    ],
    example:
      "WorkspaceOS, isteğe bağlı Claude yorumlayıcısını doğal dil → incelenebilir işlem planı akışına yerleştiriyor.",
    project: "/projects/workspace-os",
    aside: "“Bir de şunu yapalım” cümlesinin sonu bazen yeni bir repo.",
  },
  {
    id: "chatgpt",
    number: "02",
    name: "ChatGPT",
    label: "ARAŞTIRMA & ÜRETİM",
    line: "Düşünceye hız, işe devamlılık.",
    description:
      "Araştırmadan içerik taslağına, bir fikri sınamaktan günlük işleri yapılandırmaya kadar ChatGPT’yi üretim sürecimin içinde kullanıyorum.",
    tasks: [
      "Dağınık bilgiyi anlaşılır bir çalışma planına çevirmek",
      "Alternatifler üretip varsayımları sorgulamak",
      "Taslakları bağlama göre iyileştirip son kontrolü yapmak",
    ],
    example:
      "Independent AI, ChatGPT dâhil farklı modellerin yanıtlarında marka görünürlüğünü izlemeyi ele alıyor.",
    project: "/projects/independentai",
    aside: "İlk yanıt başlangıçtır. “Tamamdır” demeden bir tur daha bakarız.",
  },
  {
    id: "crm",
    number: "03",
    name: "CRM & otomasyon",
    label: "İŞİN ARKA PLANI",
    line: "Müşteri takibi hafızaya kalmasın.",
    description:
      "Melontik’te CRM altyapısı, segmentasyon ve lead scoring; Roketfy’de müşteri başarısı ve onboarding üzerinde çalıştım. HubSpot, e-posta, WhatsApp ve CRM akışlarını müşteri yolculuğuyla birlikte düşünüyorum.",
    tasks: [
      "Talep, görüşme ve sonraki adımı aynı akışta düşünmek",
      "Tekrar eden işleri ve insan kararı gereken noktaları ayırmak",
      "Ekibin gerçekten kullanabileceği sade süreçler tasarlamak",
    ],
    example:
      "CV’mdeki Melontik ve Roketfy deneyimleri: satış akışları, otomasyon, müşteri aktivasyonu ve elde tutma.",
    aside: "“Ben onu hatırlarım” da bir CRM yöntemi. Pek ölçeklenmiyor.",
  },
  {
    id: "products",
    number: "04",
    name: "Ürün & e-ticaret",
    label: "FİKİRDEN KULLANIMA",
    line: "Güzel fikir, çalışan bir şey olsun.",
    description:
      "Arayüz, iş mantığı ve kullanıcı ihtiyacını birlikte düşünüyorum. Küçük bir araçtan daha kapsamlı bir ürüne kadar asıl odağım kullanılabilir bir sonuç.",
    tasks: [
      "İlk sürüm için gerçekten gerekli olanı seçmek",
      "Kullanıcı akışını ve arayüzü birlikte geliştirmek",
      "Deneyip geri bildirimle bir sonraki sürümü şekillendirmek",
    ],
    example:
      "Kârmatik, sipariş kârlılığı ve buybox takibi için yayında. AccessAI ise web erişilebilirliğine odaklanıyor.",
    project: "/projects/karmatik",
    aside: "MVP küçük başlar. Fikirler toplantıya kalabalık gelir.",
  },
  {
    id: "meta",
    number: "05",
    name: "Meta reklamları",
    label: "AKTİF HESAP YÖNETİMİ",
    line: "Panel açık. İş sahada.",
    description:
      "Şu anda aktif olarak 8 Meta hesabı yönetiyorum. Reklam yönetimini CRM, müşteri yolculuğu ve e-ticaret deneyimimle birlikte ele alıyorum.",
    tasks: [
      "Hesapların günlük yönetimini yürütmek",
      "Reklam çalışmalarını müşteri yolculuğuyla birlikte düşünmek",
      "Verileri sonraki kararlar için değerlendirmek",
    ],
    example:
      "Aktif yönetimde 8 Meta hesabı; büyüme çalışmalarımın günlük uygulama alanı.",
    aside: "Reklamı açtık diye çay molası başlamıyor.",
  },
  {
    id: "architecture",
    number: "06",
    name: "Ürün mimarisi",
    label: "MİN MALİYET × MAKSİMUM ÇIKTI",
    line: "Her projeye aynı stack yakışmaz.",
    description:
      "Bir ürünün altyapısını alışkanlığa göre değil; trafik, veri, arka plan işleri ve bütçesine göre kuruyorum. Serverless, yönetilen veritabanı veya cihaz üzerinde çalışma seçeneklerini gerçek ihtiyaca göre değerlendiriyorum.",
    tasks: [
      "Ürünün gerçek yükünü ve işletme maliyetini birlikte haritalamak",
      "Boşta maliyeti düşük, büyüdüğünde ölçeklenebilir bir yapı seçmek",
      "Model kalitesi ve token maliyetini ölçüp sağlayıcı kararını yenilemek",
    ],
    example:
      "AI Kemal’de Cloudflare Workers + Supabase; Independent AI’da Vercel + Neon; WorkspaceOS’ta cihaz üzerinde çalışan bir yaklaşım. Mimari, ürünle birlikte seçiliyor.",
    project: "/projects/karmatik",
    aside: "Stack seçimi görünmez. Faturası oldukça görünür.",
  },
  {
    id: "research",
    number: "07",
    name: "Web araştırması & veri",
    label: "DOĞRU TAŞI KALDIRMAK",
    line: "Bilgiyi aramıyorum; nerede olacağını çözüyorum.",
    description:
      "İnternette hangi verinin nerede bulunacağını, bir kaynağın yapısının nasıl okunacağını ve gerektiğinde bilginin nasıl düzenli biçimde çıkarılacağını biliyorum. Arama, kaynak doğrulama, scraping ve veri temizleme benim için aynı araştırma zincirinin parçaları.",
    tasks: [
      "Soruyu doğru arama stratejisine ve kaynak haritasına çevirmek",
      "Sayfa, ağ isteği ve yapılandırılmış veri katmanlarını incelemek",
      "Veriyi temizleyip doğrulayarak üründe kullanılabilir hâle getirmek",
    ],
    example:
      "Pazar, rakip veya ürün verisi gerektiğinde önce en güvenilir kaynağı buluyor; sonra uygun yöntemle tekrarlanabilir bir veri akışı kuruyorum.",
    aside:
      "İnsanlar bilgi için her taşın altına bakar. Ben hangi taşı kaldıracağımı bilirim.",
  },
];
