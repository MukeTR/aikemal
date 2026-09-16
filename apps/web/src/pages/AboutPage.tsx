import { Link } from "react-router-dom";
import { ArrowUpRight, Asterisk, MapPin, Code2 } from "lucide-react";
import { experience, outcomes } from "../content/profile";
export function AboutPage() {
  return (
    <div className="container page about-page">
      <section className="about-hero">
        <div>
          <p className="eyebrow">
            HAKKIMDA / YAPAY ZEKÂ GERÇEK, KEMAL DE ÖYLE.
          </p>
          <h1>
            Merhaba, ben
            <br />
            <span>Mustafa Kemal.</span>
          </h1>
          <p className="about-full-name">
            Mustafa Kemal Karataş · Founder & AI Product Builder
          </p>
          <p className="page-intro">
            İşin müşteri tarafını da, sistemi kuran tarafını da seviyorum. SaaS,
            CRM ve e-ticarette edindiğim deneyimi; bugün yapay zekâyla düşünen,
            deneyen ve ürün geliştiren çalışma biçimimle birleştiriyorum.
          </p>
          <div className="about-links">
            <span>
              <MapPin size={16} /> İstanbul, Türkiye
            </span>
            <a
              href="https://github.com/MukeTR"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={16} /> MukeTR <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <aside className="human-card">
          <p className="eyebrow">KISA KULLANIM KILAVUZU</p>
          <Asterisk size={88} strokeWidth={1} />
          <h2>
            Merak: yüksek.
            <br />
            Boş durma: düşük.
          </h2>
          <p>
            Bir işi üçüncü kez elle yapıyorsam, dördüncü için bir şeyler kurmayı
            düşünmeye başlamışımdır.
          </p>
          <span>
            “AI Kemal” · arkadaşlar tarafından verilmiş, ortam onaylı lakap
          </span>
        </aside>
      </section>
      <section className="bio-section section">
        <p className="eyebrow">UNVANIN ARKASINDAKİ HİKÂYE</p>
        <div>
          <h2>
            İnsanları anlamak.
            <br />
            Sistemleri iyileştirmek.
          </h2>
          <p>
            Müşteri deneyiminden satışa, e-ticaretten SaaS’a uzanan yolculuğumda
            hep aynı soruya döndüm: İnsanların işini nasıl kolaylaştırır, bunun
            sonucunu nasıl ölçeriz?
          </p>
          <p>
            Turkcell’de müşteri davranışını ve elde tutmanın önemini sahada
            öğrendim. Atam Güzellik’te reklam, lojistik, CRM ve ERP’nin aynı
            operasyon içinde çalışmasını ele aldım. Roketfy’de satış ve müşteri
            başarısı tarafında onboarding, aktivasyon ve büyüme süreçlerine
            odaklandım. Melontik’te bu birikimi CRM altyapısı, segmentasyon ve
            satış otomasyonlarıyla bir araya getirdim.
          </p>
          <p>
            Benim için yapay zekâ, bu birikimin günlük üretimdeki uzantısı.
            Claude’la bir problemi parçalara ayırıyor, ChatGPT’yle düşüncemi
            geliştiriyor, doğru araçları birleştirip fikri çalışan bir şeye
            dönüştürüyorum. Araçlar elim gibi; neyi neden yapacağımıza karar
            veren hâlâ benim.
          </p>
          <p>
            İnternette bilginin nerede saklandığını, hangi kaynağın ne kadar
            güvenilir olduğunu ve gerektiğinde verinin nasıl düzenli biçimde
            çıkarılacağını iyi biliyorum. Araştırırken her taşın altına bakan
            biri değilim; çocukluğumdan beri taşıdığım merak sayesinde hangi
            taşı kaldırmam gerektiğini bilen biriyim.
          </p>
          <p className="bio-punchline">
            Kısacası, hem satış hunisine hem hata mesajına bakıyorum. İkisinin
            de bir şey anlatmaya çalıştığına inanıyorum.
          </p>
          <Link className="text-link" to="/expertise">
            Nasıl çalıştığımı keşfet <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section
        className="solo-builder-section"
        aria-label="Ürün geliştirme yaklaşımı"
      >
        <div className="solo-builder-copy">
          <p className="eyebrow">TEK KİŞİLİK ÜRÜN EKİBİ</p>
          <h2>
            Fikirden altyapıya,
            <br />
            bütün masalarda ben varım.
          </h2>
          <p>
            Kârmatik, Independent AI, WorkspaceOS ve AccessAI gibi ürünlerde
            problem seçimini, ürün kurgusunu, arayüzü, geliştirmeyi ve altyapı
            kararlarını sıfırdan tek başıma üstlendim.
          </p>
          <p>
            Her projeye aynı teknoloji listesini yapıştırmıyorum. Trafiği, veri
            yapısını, arka plan işlerini ve işletme maliyetini birlikte
            değerlendiriyorum. Amaç; boşta para yakmayan, bugün yönetilebilir,
            yarın büyüyebilir bir sistem kurmak.
          </p>
          <p className="solo-punchline">
            Tek kişilik ekipte toplantılar kısa. Backlog yine uzun.
          </p>
        </div>
        <div className="builder-principles">
          <article>
            <span>01</span>
            <h3>İhtiyaca göre altyapı</h3>
            <p>Stack, projenin gösterişi değil çalışma biçimi.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Düşük sabit maliyet</h3>
            <p>Kullanılmayan kapasiteye fatura çıkarmayan sistemler.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Modeli işe göre seç</h3>
            <p>Kalite ve maliyeti ölç; gerekiyorsa modeli değiştir.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Önce çalışan ürün</h3>
            <p>Kararı gerçek kullanım ve geri bildirimle geliştir.</p>
          </article>
          <article>
            <span>05</span>
            <h3>Doğru veriyi bul</h3>
            <p>
              Kaynağı keşfet, doğrula, yapısını çöz ve kullanılabilir hâle
              getir.
            </p>
          </article>
          <article>
            <span>06</span>
            <h3>Merakı yönteme çevir</h3>
            <p>Her yere bakmak yerine doğru soruyu doğru kaynağa sor.</p>
          </article>
        </div>
      </section>
      <section className="current-work" aria-label="Güncel çalışmalar">
        <div>
          <p className="eyebrow">ŞU SIRALAR / İŞİN İÇİNDE</p>
          <h2>
            Üç kurucu rolü.
            <br />
            Tek üretim disiplini.
          </h2>
        </div>
        <div>
          <p>
            Kârmatik’te e-ticaret SaaS’ı, Dipixel Media’da markaların büyüme
            süreçlerini, Independent AI’da yapay zekâ görünürlüğünü
            geliştiriyorum. Dipixel tarafında 8 Meta hesabını aktif olarak
            yönetiyorum.
          </p>
          <Link className="text-link" to="/projects">
            Ürünleri incele <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="outcomes-section">
        <p className="eyebrow">ÇALIŞMALARIMDAN SONUÇLAR</p>
        <div className="outcomes-grid">
          {outcomes.map((o) => (
            <article key={o.label}>
              <strong>{o.value}</strong>
              <h3>{o.label}</h3>
              <p>{o.context}</p>
            </article>
          ))}
        </div>
        <p className="source-note">
          Özgeçmişimde paylaştığım sonuçlar; ilgili görev dönemlerine aittir.
        </p>
      </section>
      <section className="section career-section">
        <div>
          <p className="eyebrow">DENEYİM / SAHADAN GELEN BİRİKİM</p>
          <h2>Buraya bir anda gelmedik.</h2>
          <p className="section-intro">
            Müşteriyle başlayan, veriye ve ürüne uzanan bir yol.
          </p>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <article key={e.company}>
              <span className="timeline-dot" />
              <p className="eyebrow">{e.period}</p>
              <h3>{e.company}</h3>
              <h4>{e.role}</h4>
              <p>{e.text}</p>
              <div className="tags">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="background-grid">
        <article>
          <p className="eyebrow">SERTİFİKALAR</p>
          <h3>Teknik temeller</h3>
          <ul>
            <li>Microsoft Certified Solution Developer (MCSD)</li>
            <li>Programming in C#</li>
            <li>ASP.NET MVC 4 Web Applications</li>
            <li>HTML5, JavaScript & CSS3</li>
          </ul>
        </article>
        <article>
          <p className="eyebrow">DİLLER & ÇALIŞMA ALANLARI</p>
          <h3>İletişimden entegrasyona</h3>
          <p>
            Türkçe · ana dil
            <br />
            İngilizce · üst orta seviye
          </p>
          <p>
            HubSpot, CRM sistemleri, Shopify, API entegrasyonları, KPI raporlama
            ve yaşam döngüsü pazarlaması.
          </p>
        </article>
      </section>
      <div className="small-cta">
        <div>
          <p className="eyebrow">CV TAMAM. ŞİMDİ NE ÜRETECEĞİMİZE BAKALIM.</p>
          <h2>Aklındaki işi konuşalım.</h2>
        </div>
        <Link to="/ask" className="button dark">
          AI Kemal’e sor <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
