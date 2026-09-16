# AI Kemal

Fikirden çalışan ürüne. `aikemal.com` için lokal öncelikli, TypeScript monorepo.

## Hızlı başlangıç

Node.js 22.12+ ve npm gerekir (Node 22 LTS önerilir). Cloudflare hesabı, Supabase hesabı, Docker veya API anahtarı ilk demo için gerekmez.

```sh
npm ci
npm run dev
```

Ana sayfa: http://localhost:5173 · API: http://127.0.0.1:8787/api/health

`npm run dev` iki süreci birlikte başlatır; Ctrl+C ikisini de kapatır. 5173 ve 8787 portlarının boş olması gerekir. Vite `/api` isteklerini Worker'a yönlendirir; tarayıcı aynı origin üzerinden çalışır.

```sh
npm run check     # TypeScript, API testleri, frontend production build
npm run build     # apps/web/dist
npm run preview   # build + gerçek Workers runtime üzerinde SPA/API (8787)
```

## Yapı

```text
apps/web/                  React + Vite + React Router
  src/components/          Layout, ProjectCard gibi tekrar kullanılabilir parçalar
  src/pages/               HomePage, AskPage, ProjectsPage
  src/lib/                 API istemcisi, isteğe bağlı Supabase istemcisi
apps/api/                  Hono API, Cloudflare Workers üzerinde
packages/shared/           İstek/yanıt tipleri ve başlangıç proje verisi
supabase/migrations/       RLS etkin ilk projects tablosu
```

Web → aynı origin `/api/*` → Worker → ileride Supabase / LLM. Production için Vite çıktısı Workers Static Assets üzerinden sunulur. SSR, sürekli çalışan sunucu, ücretli AI servisi ve veritabanı çağrısı bu aşamada yoktur. Ortak TypeScript paketi Vite/Wrangler tarafından derlenir; ayrı paket yayınlamak gerekmez.

## Sayfalar ve endpoint'ler

- `/`: hero, AI Kemal nedir, proje placeholder'ları, sohbet CTA, footer.
- `/projects`: GitHub projeleri ve planlanan araçlar; kategori filtresi ve detay sayfaları.
- `/ask`: boş/gönderiliyor/başarılı/hata durumları olan mock sohbet formu.
- Diğer UI yolları: 404 ekranı.
- `GET /api/health`: mock modu ve Supabase yapılandırmasının varlığı. Bağlantı testi değildir.
- `GET /api/projects`: ortak paketten proje kataloğu.
- `POST /api/chat`: `{ "message": "Merhaba" }` → `{ "mode": "mock", "reply": "..." }`.

Chat JSON gerektirir; 1–1000 karakter mesaj ve 8 KiB istek sınırı vardır. Yanıt sabit bir örnektir. Mesajlar loglanmaz veya saklanmaz. Gerçek LLM, kimlik doğrulama, konuşma hafızası ve rate limiting henüz eklenmedi.

## Env ve Supabase hazırlığı

Demo için env dosyası oluşturmak gerekmez. Entegrasyona geçerken:

```sh
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.dev.vars.example apps/api/.dev.vars
```

Frontend: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`.
Worker: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`.

Supabase projesinin URL'sini ve **publishable key** değerini ekle. Vite `VITE_*` değişkenleri tarayıcıya açıktır. Bu alanlara secret/service-role anahtarı koyma. Env değiştirdikten sonra geliştirme süreçlerini yeniden başlat.

`apps/web/src/lib/supabase.ts` ve `apps/api/src/supabase.ts` istemci hazırlığı içerir. Anahtarlar yoksa `null` döner; bu sürümde herhangi bir veri sorgusu yapılmaz. Anahtarın varlığı gerçek bağlantı doğrulaması anlamına gelmez. Worker istemcisi istek başına oluşturulmalıdır; gelecekte kullanıcıya özel işlemler için doğrulanmış kullanıcı JWT'si ile RLS uygulanmalıdır.

Migration'ı Supabase SQL Editor ile çalıştırabilir veya Supabase CLI kuruluyken repo kökünde `supabase init`, `supabase link --project-ref YOUR_PROJECT_REF`, `supabase db push` kullanabilirsin. Bunlar isteğe bağlıdır ve bu teslimde uzak bir veritabanında çalıştırılmadı. Tablo RLS ile yalnızca `published = true` kayıtlarını okumaya açar; istemciye yazma yetkisi vermez. Projeler şu anda bu tablodan okunmaz. İlk gerçek entegrasyonda API veri kaynağını bu tabloya taşı.

## Sayfa sayfa geliştirme

Yeni ekranı `apps/web/src/pages/` altına ekle ve `App.tsx` içinde route tanımla. Ortak navigasyon/footer `Layout` içinde kalır. Tekrar eden parçaları `components/`, API çağrılarını `lib/`, ortak sözleşmeleri `packages/shared/` içine koy. Yeni veri tablolarını ayrı migration dosyalarıyla ve RLS politikalarıyla ekle.

## Daha sonra yayınlama

Bu repo yalnızca lokalde hazırlanmıştır; domain/DNS veya hesaplarda değişiklik yapılmadı.

```sh
npx wrangler login
npm run check
npm run deploy
```

Deploy komutu frontend'i build edip `production` ortamına Worker + statik dosyaları birlikte gönderir. Wrangler girişini, hesap seçimini ve domain bağlantısını kendi hesabında yap. `aikemal.com` custom domain'i daha sonra Cloudflare dashboard üzerinden eklenebilir. SPA fallback `/ask` gibi derin bağlantıları destekler; `/api` ve `/api/*` her zaman Worker'a gider ve hatalı API yolları HTML yerine JSON 404 döndürür. Gerekirse production Worker env değerlerini Cloudflare dashboard veya `wrangler secret put ... --env production` ile ekle. Vite env değerleri ise build anında sağlanır.

## Free tier yaklaşımı

Statik frontend ve hafif mock API, ücretsiz katmanlara uygun şekilde tasarlandı. Workers Free dinamik istek limiti günlük 100.000; statik asset istekleri ücretsiz ve sınırsızdır. Supabase'in ücretsiz kullanımında kota ve hareketsizlik nedeniyle duraklatma sınırları vardır; sınırsız ya da her koşulda ücretsiz çalışma sözü değildir. Güncel planları yayına çıkarken yeniden kontrol et. Gerçek LLM açılmadan önce rate limiting, kötüye kullanım koruması ve harcama sınırları ekle.

Resmî kaynaklar: [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/), [Workers limitleri](https://developers.cloudflare.com/workers/platform/limits/), [Supabase fiyatlandırma](https://supabase.com/pricing), [Supabase API anahtarları](https://supabase.com/docs/guides/getting-started/api-keys).

Google Fonts üzerinden Manrope ve DM Sans yüklenir; ağ yoksa yerel sans-serif fallback kullanılır. Görsel dil CSS ve SVG ile oluşturuldu; harici görsel servisine ihtiyaç yoktur.

## Kişisel içerik ve portfolio (ikinci sürüm)

- `/about`: CV'den hazırlanan biyografi, kariyer zaman çizelgesi, görev dönemlerine ait sonuçlar, sertifikalar ve diller.
- `/expertise`: Claude, ChatGPT, CRM/otomasyon, Meta reklamları, ürün mimarisi ve web araştırması/veri çıkarımı çalışma alanları; bölüm bağlantıları.
- `/projects`: URL parametresiyle korunabilen kategori filtreleri, seçili proje vitrini ve public/özel çalışmaları ayıran çözüm arşivi.
- `/projects/:slug`: problem, yaklaşım, kapsam, kaynak repo ve gerektiğinde katkı atfı.
- `/admin`: proje ekleme, düzenleme, vitrinden kaldırma ve geri yükleme paneli. Bu ilk lokal sürüm değişiklikleri tarayıcının `localStorage` alanında saklar; Supabase Auth/veritabanı bağlandığında aynı veri katmanı kalıcı yönetime taşınacaktır.
- Ana sayfa: sarıya yakın vurgu rengi, bölüm navigasyonu, uzmanlık kartları, seçilmiş projeler, açılır çalışma adımları ve yıldızdaki küçük mizahi etkileşim.

İçerik kaynakları: kullanıcının sağladığı CV, güncel LinkedIn deneyim ekran görüntüsü ve 17 Eylül 2026 tarihinde incelenen GitHub repo/README'leri. Kariyer verileri `apps/web/src/content/profile.ts`, uzmanlık metinleri `apps/web/src/content/expertise.ts`, proje kataloğu `packages/shared/src/index.ts` içinde tutulur. CV'nin ve ekran görüntüsünün kendisi, telefon ve e-posta repo/public dizinine eklenmedi. Eğitim bilgileri kullanıcının tercihiyle sitede yer almıyor. Başarı oranları CV'deki görev bağlamıyla aktarıldı. Kârmatik, Dipixel Media ve Independent AI rolleri kullanıcının paylaştığı güncel deneyim bilgilerini yansıtır.

GitHub kaynakları:

- [Independent AI](https://github.com/MukeTR/independentai/blob/main/README.md)
- [WorkspaceOS](https://github.com/MukeTR/Workspace-OS/blob/main/README.md)
- [AccessAI / reachableai](https://github.com/MukeTR/reachableai/blob/main/README.md)
- [Instagram Unfollowers](https://github.com/MukeTR/InstagramUnfollowers/blob/main/README.md): upstream üzerine geliştirilmiş Dipixel arayüzü/tasarımı/Türkçe sürümü; orijinal araç sahipliği iddia edilmez.

Kârmatik, kullanıcının güncellemesi ve https://karmatik.io incelemesi doğrultusunda yayında olarak listelenir; ana sayfada yer alır. Kâr Hesaplayıcı ayrı bir planlanan araçtır ve ana sayfada gösterilmez. Aktif yönetilen 8 Meta hesabı, özgün ürünlerin tek başına sıfırdan geliştirildiği, altyapı/model kararlarının maliyet ve çıktı dengesine göre verildiği ve web araştırması/scraping yetkinliği bilgileri kullanıcı beyanıyla kişisel anlatıya eklendi. Instagram Unfollowers için upstream atfı korunur. Boş `crm` reposu bir tamamlanmış ürün olarak sunulmadı. Dayflow bir fork olduğu için özgün proje vitrinine alınmadı. GitHub verisi build-time yerel içeriktir; ziyaretçi başına GitHub çağrısı veya token gerektirmez. Eski `/projects` placeholder vitrini bu katalogla değiştirilmiştir.
