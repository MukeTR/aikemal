import { Link } from "react-router-dom";
import { ArrowUpRight, Asterisk, MapPin, Code2 } from "lucide-react";
import { experience, outcomes } from "../content/profile";
import { MagicGearScene } from "../components/about/MagicGearScene";
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
        <aside className="human-card liquid-portrait">
          <img
            src="/images/ai-kemal-watercolor-eyes.webp"
            alt="Merak ve empatiyi anlatan özgün suluboya göz kolajı"
          />
          <div className="liquid-top-label">
            <Asterisk size={18} strokeWidth={1.5} />
            <span>KISA KULLANIM KILAVUZU</span>
          </div>
          <div className="liquid-chip empathy-chip">
            <small>EMPATİ</small>
            <strong>Yüksek.</strong>
          </div>
          <div className="liquid-chip startup-chip">
            <small>ÇALIŞMA MODU</small>
            <strong>Startup canavarı.</strong>
          </div>
          <div className="liquid-story">
            <h2>
              İyi dinlerim.
              <br />
              Doğru yeri duyarım.
            </h2>
            <p>
              İnsanların yalnızca söylediğine değil, takıldığı ve sustuğu yere
              de dikkat ederim.
            </p>
            <span>
              “AI Kemal” · arkadaşlar tarafından verilmiş, ortam onaylı lakap
            </span>
          </div>
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
            Beni tek bir unvanla anlatmak zor. Satış yaptım, müşteri deneyimi
            yönettim, CRM sistemleri kurdum, e-ticaret operasyonlarının içinde
            çalıştım ve sıfırdan yazılımlar geliştirdim. Fakat bütün bu işlerin
            altında değişmeyen tek bir refleks var: İnsanların yaşadığı problemi
            dinlemek, tekrar eden örüntüyü görmek ve oraya çalışan bir sistem
            yerleştirmek.
          </p>
          <p>
            Ana yeteneğimin yalnızca yazılım, satış veya yapay zekâ olduğunu
            düşünmüyorum. Ben problem örüntülerini görüyorum. Bir insanın
            söylediği kadar söylemediğine, takıldığı ve sustuğu yere de dikkat
            ediyorum. Çünkü iyi ürünün ilk prototipi çoğu zaman doğru dinlenmiş
            bir cümledir.
          </p>
          <p>
            Satış benim için birini ikna etme yarışı değil; ihtiyacın doğru
            teşhis edilmesidir. Turkcell’de öfkenin arkasındaki problemi,
            Roketfy ve Melontik’te ise günde onlarca satıcının anlattığı ortak
            sürtünmeleri dinledim. Zamanla bu konuşmalar onboarding akışlarına,
            CRM sistemlerine, paketlere, fiyatlandırmaya ve ürün kararlarına
            dönüştü.
          </p>
          <p>
            Bu yüzden kurduğum ürünler, bir toplantıda aklıma gelen rastgele
            fikirler değil. Freelance çalışmalardan Dipixel’e, e-ticaret
            sahasından Kârmatik’e, markaların yeni görünürlük probleminden
            Independent AI’a uzanan her yapının arkasında defalarca duyduğum,
            araştırdığım ve bizzat temas ettiğim gerçek bir ihtiyaç var. Her
            deneyim, bir sonrakinin zeminini hazırladı.
          </p>
          <p>
            Yeni araçlardan çekinmiyorum. Bir model, program, dil veya teknoloji
            karşıma çıktığında “Bunu biliyor muyum?” yerine “Çalışma mantığını
            nereden çözerim?” diye düşünüyorum. Claude, ChatGPT, HubSpot, Adobe,
            kod, scraping veya altyapı; araç değişiyor ama yöntem değişmiyor:
            öğren, sistemi çöz ve problemi çalışır hâle getir.
          </p>
          <p>
            Beni klasik yazılımcıdan ayıran müşteriyi bilmem; klasik satışçıdan
            ayıran sistemi kurabilmem; klasik pazarlamacıdan ayıran veriyi ve
            altyapıyı okuyabilmem. Belirsizlik, az kaynak ve hızlı karar beni
            germiyor. Startup ortamında iştahım açılıyor; gereken şapkayı takıp
            işi çalışan noktaya taşımayı seviyorum.
          </p>
          <p className="bio-punchline">
            Mustafa Kemal, müşterinin söylediğini dinler; söylemediğini fark
            eder. Sonra o problemi çözen sistemi kendi kurar.
          </p>
          <Link className="text-link" to="/expertise">
            Nasıl çalıştığımı keşfet <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section
        className="origin-stories section"
        aria-label="Beni oluşturan hikâyeler"
      >
        <header>
          <p className="eyebrow">BENİ YAPAN SAHNELER / CV’YE SIĞMAYANLAR</p>
          <h2>
            Önce dinledim.
            <br />
            Sonra sistemi kurdum.
          </h2>
          <p>
            Bugün bir ürüne, müşteriye ya da probleme nasıl baktığımı unvanlar
            değil; bu sahneler daha iyi anlatıyor.
          </p>
        </header>
        <div className="origin-story-list">
          <article className="origin-story">
            <span className="origin-story-number">01</span>
            <div>
              <p className="eyebrow">MERAK / KAYNAK YOKSA KAYNAĞI BUL</p>
              <h3>Oyun alamıyorduk. Ben de Portekizce öğrendim sayılır.</h3>
              <p>
                Eve gelen ilk iPhone 4’ü jailbreak yaparak başlayan merakım, 14
                yaşında hediye edilen PlayStation 3’le başka bir seviyeye çıktı.
                Oyun alacak bütçemiz yoktu; Türkçe kaynak da neredeyse yoktu.
                Brezilya merkezli bir sitedeki anlatımı sözlükler ve Google
                Translate yardımıyla sayfa sayfa çözüp cihazı jailbreak yapmayı
                öğrendim.
              </p>
              <p>
                Sonra bu beceriyle Yazıcıoğlu İş Hanı’ndaki Koçer Elektronik’in
                kapısını çaldım ve o yaşta işe girdim. Bugün “hangi taşı
                kaldıracağını bilmek” dediğim araştırma refleksinin ilk ciddi
                örneklerinden biri buydu.
              </p>
            </div>
          </article>
          <article className="origin-story">
            <span className="origin-story-number">02</span>
            <div>
              <p className="eyebrow">
                BİLGEADAM / MERAKIN TEMELE DÖNÜŞTÜĞÜ YER
              </p>
              <h3>Lise diploması yoktu. Masada doktoralı insanlar vardı.</h3>
              <p>
                Lise 2’de okuldan sonra hâlâ boş vaktim kalınca babam beni
                BilgeAdam Akademi’ye gönderdi. İki yıl boyunca kurumun sunduğu
                eğitimleri yoğun bir tempoda aldım. Merakla kendi kendime
                açtığım teknik kapı, orada daha düzenli bir temele oturdu;
                yazılımın yalnızca cihazları kurcalamak değil, sistem kurmak
                olduğunu görmeye başladım.
              </p>
              <p>
                Daha lise mezunu bile değilken, aralarında doktoralı insanların
                da bulunduğu ekiplerle ASP.NET projelerinde çalışmaya başladım.
                Yaşım masadaki herkesten küçüktü ama gerçek bir projede
                sorumluluk almanın yaşı olmadığını orada öğrendim. Bilmediğimi
                hızla öğrenip üreten insanların arasına girmek, teknik
                özgüvenimin temelini oluşturdu.
              </p>
            </div>
          </article>
          <article className="origin-story">
            <span className="origin-story-number">03</span>
            <div>
              <p className="eyebrow">TURKCELL / PROBLEM KİŞİ DEĞİLDİ</p>
              <h3>Kafama telefon fırlattı. Iskaladı. Ben faturaya baktım.</h3>
              <p>
                Beklemediğim bir satış başarısını, satış yapmaya çalışarak elde
                etmedim. Fazla gelen faturasına öfkelenen bir müşteri telefonu
                bana fırlattı. Sakin biçimde karşıladım, masaya davet ettim,
                kahve ikram ettim ve faturayı birlikte inceledik. Çünkü o anda
                müşterinin problemi ben değildim; çözemediği faturasıydı.
              </p>
              <p>
                Telefonu da kırılmıştı. İhtiyacını doğru anladıktan sonra 24 ay
                taksitle yeni bir telefon alarak ayrıldı ve 24 ay daha şirkette
                kaldı. Bana kalan esas sonuç satış değildi: İnsan sakinleşmeden
                çözümü, gerçekten dinlemeden de ihtiyacı göremiyorsun.
              </p>
            </div>
          </article>
          <article className="origin-story">
            <span className="origin-story-number">04</span>
            <div>
              <p className="eyebrow">ROKETFY → MELONTİK / SAHADAN ÜRÜNE</p>
              <h3>Günde en az 50 konuşma. Geceleri aynı soru.</h3>
              <p>
                Roketfy’a telesatış rolüyle girdim. Her gün en az 50 satıcıyla
                telefonda konuşuyor, çok dinliyor ve çok not alıyordum. Bu tempo
                Melontik’te de devam etti. Akşam yatağa yattığımda insanların
                neden aynı noktalarda takıldığını düşünüyordum.
              </p>
              <p>
                O konuşmalar zamanla satış cümlelerinden onboarding’e, CRM
                akışlarına, paketlere, fiyatlandırmaya ve ürün kararlarına
                dönüştü. Bugün yaptığım yazılımlarda saha hissinin güçlü
                olmasının nedeni bu: Problemleri toplantı odasında tahmin
                etmedim; sahiplerinden defalarca dinledim.
              </p>
            </div>
          </article>
        </div>
      </section>
      <aside className="impossible-manifesto">
        <p className="eyebrow">BİR DEĞİŞMEYEN / ÇALIŞMA İNADI</p>
        <blockquote>
          “SpaceX’i yapan da insan.
          <br />
          Ben de insanım. Neden yapamayayım?”
        </blockquote>
        <p>
          Benim gözümde “imkânsız”, çoğu zaman henüz yeterince parçalanmamış bir
          problemdir. Önce nasıl yapılacağını bulur, sonra maliyetini ve en
          doğru yolunu çözerim.
        </p>
      </aside>
      <MagicGearScene />
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
            geliştiriyorum. Dipixel tarafında 24 markalık bir ekosistemle
            çalışıyorum; bunların içindeki 8 Meta hesabını aktif olarak
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
              {e.highlights && (
                <div className="experience-highlights">
                  {e.highlights.map((highlight) => (
                    <span key={highlight.label}>
                      <strong>{highlight.value}</strong>
                      {highlight.label}
                    </span>
                  ))}
                </div>
              )}
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
            HubSpot’un satış, pazarlama, servis, otomasyon ve raporlama
            araçları; CRM sistemleri, Shopify, API entegrasyonları, KPI
            raporlama ve yaşam döngüsü pazarlaması.
          </p>
        </article>
        <article>
          <p className="eyebrow">ÜRETİM ARAÇLARI</p>
          <h3>Dosya türü fark etmez</h3>
          <p>
            Adobe Creative Cloud · Microsoft Office · FL Studio · DaVinci
            Resolve · Sony Vegas
          </p>
          <p>
            Tasarım, ses, video, sunum, veri veya operasyon: araç değişir;
            öğrenme refleksi değişmez.
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
