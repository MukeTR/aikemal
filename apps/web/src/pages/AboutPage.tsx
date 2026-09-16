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
            Mustafa Kemal Karataş · Tech Sales & Growth Specialist
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
          <span>İnsan sürümü · düzenli güncellenir</span>
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
          <p className="bio-punchline">
            Kısacası, hem satış hunisine hem hata mesajına bakıyorum. İkisinin
            de bir şey anlatmaya çalıştığına inanıyorum.
          </p>
          <Link className="text-link" to="/expertise">
            Nasıl çalıştığımı keşfet <ArrowUpRight size={17} />
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
          <p className="eyebrow">EĞİTİM</p>
          <h3>WSB University · Polonya</h3>
          <p>
            Computer Science, B.Sc.
            <br />
            2021’de başladı · eğitimime ara verdim.
          </p>
        </article>
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
