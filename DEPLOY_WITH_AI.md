# AI Kemal'i yayına alma promptu

Aşağıdaki metni, bu proje klasörünü açabilen Claude/Codex benzeri bir geliştirme ajanına görev olarak ver.

---

Bu klasördeki **AI Kemal** monoreposunu incele, doğrula ve `aikemal.com` alan adında production'a al.

Proje React + Vite frontend, Hono tabanlı Cloudflare Workers API ve isteğe bağlı Supabase hazırlığından oluşuyor. Mevcut tasarım, Türkçe/İngilizce metinler, animasyonlar, proje içerikleri ve mizahi dil onaylandı. Bunları yeniden tasarlama, sadeleştirme veya kendi zevkine göre değiştirme. Görevin mevcut ürünü güvenli ve doğrulanabilir biçimde yayına almak.

Şu sırayla ilerle:

1. Önce `README.md`, kök `package.json`, `apps/api/wrangler.jsonc`, env örnekleri ve mevcut git durumunu incele. Kullanıcının tamamlanmış değişikliklerini silme, geri alma veya ezme.
2. Node.js `22.12+` kullan. Repo kökünde `npm ci`, ardından `npm run check` ve `npm run format:check` çalıştır. Bir hata varsa asıl sebebini düzelt; tasarımı veya içeriği değiştirerek testten kaçma.
3. `npm run preview` ile Workers runtime ve statik asset sunumunu yerelde doğrula. En az şu yolları kontrol et:
   - `/`
   - `/about`
   - `/expertise`
   - `/projects`
   - `/projects/karmatik`
   - `/ask`
   - `/en`
   - `/en/ask`
   - `/api/health`
   - `/api/projects`
   - bilinmeyen bir frontend yolu için SPA/404 davranışı
   - bilinmeyen bir `/api/*` yolu için JSON 404 davranışı
4. Tarayıcı konsolunda hata, kırık asset, yatay taşma veya boş kalan animasyonlu bölüm olmadığını masaüstü ve mobil genişlikte doğrula. `prefers-reduced-motion` desteğini bozma.
5. Production deploy öncesinde güvenlik sınırlarını koru:
   - Gerçek LLM entegrasyonu ekleme.
   - API anahtarı veya service-role anahtarını frontend'e koyma.
   - Secret değerlerini repoya yazma veya loglarda gösterme.
   - Supabase şu anda hazırlık seviyesinde ve ilk yayın için zorunlu değil. Yapılandırılmamışsa deploy'u bunun için durdurma.
   - `/admin` yalnızca localStorage kullanan yerel bir içerik arayüzüdür; gerçek, kimlik doğrulamalı production CMS gibi sunma.
   - Ücretli servis veya plan açma.
6. Cloudflare hesabında gerekiyorsa kullanıcıyı yalnızca resmi interaktif `wrangler login` adımı için yönlendir; parola, token veya gizli anahtar isteme. Giriş tamamlandıktan sonra `npm run deploy` ile `production` ortamına Worker ve statik dosyaları birlikte gönder.
7. Önce oluşan `workers.dev` adresinde smoke test yap. Başarılı olduktan sonra Cloudflare'da `aikemal.com` alan adını bu Worker'a bağla. `www.aikemal.com` kullanılıyorsa kalıcı olarak `https://aikemal.com` adresine yönlendir. Var olan ilgisiz DNS kayıtlarını değiştirme. SSL'in aktif olduğunu doğrula.
8. Canlı sitede şunları ayrıca doğrula:
   - Türkçe ve İngilizce dil geçişleri
   - derin bağlantıların doğrudan açılması
   - favicon ve `site.webmanifest`
   - `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `llms-en.txt`, `humans.txt`
   - canonical, hreflang, Open Graph ve JSON-LD çıktıları
   - Kârmatik dış bağlantısı ve GitHub bağlantıları
   - `/api/health` yanıtı
9. Deploy tamamlanmadan “yayında” deme. Son raporda canlı URL'yi, Worker adını, kullanılan komutları, yapılan zorunlu değişiklikleri, test sonuçlarını ve hâlâ mock/local olan özellikleri açıkça belirt.

İçerik doğruluğu için şu sınırları koru:

- Kârmatik ve Independent AI, Mustafa Kemal'in solopreneur olarak geliştirdiği ürünlerdir.
- Dipixel Media ortak kuruculuk rolüdür; 24 markalık ekosistemde 8 Meta hesabı aktif yönetilmektedir.
- Roketfy'a telesatış rolüyle başlanmış, günde en az 50 satıcıyla görüşülmüş ve müşteri ölçeği yaklaşık 30'dan 500'e çıkmıştır.
- Melontik dönemi Haziran 2026'da bitmiştir; müşteri ölçeği yaklaşık 300'den 1.500'e çıkmıştır.
- 12 yaşında PlayStation 3 jailbreak araştırması yapılmış; Koçer Elektronik'te işe giriş bundan bir–iki yıl sonra gerçekleşmiştir.
- BilgeAdam dönemi lise 2'de başlamış, iki yıl sürmüş ve lise mezuniyetinden önce Türkiye'nin önde gelen üniversitelerinden mezun, ülkedeki erken kuşak yazılım profesyonelleriyle ASP.NET projelerinde sorumluluk alınmıştır.
- Formal eğitim listelenmez. BilgeAdam yalnızca kişisel hikâyedeki biçimlendirici teknik dönem olarak anlatılır.
- Planlanan özellikleri tamamlanmış gibi gösterme ve üçüncü taraf projelerin sahipliğini iddia etme.

---
