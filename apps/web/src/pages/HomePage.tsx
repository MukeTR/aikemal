import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown, Asterisk } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { HeroVisual } from "../components/home/HeroVisual";
import { ExpertiseSection } from "../components/home/ExpertiseSection";
import { ApproachSection } from "../components/home/ApproachSection";
import { useProjects } from "../lib/projectStore";
import { translateProject } from "../content/projectsEn";

export function HomePage({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const english = locale === "en";
  const { projects } = useProjects();
  const featuredProjects = [
    "karmatik",
    "independentai",
    "dipixel-media",
  ].flatMap((slug) => projects.filter((project) => project.slug === slug));
  const cards = english
    ? featuredProjects.map(translateProject)
    : featuredProjects;

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" />{" "}
            {english
              ? "CURIOSITY × DATA × WORKING PRODUCT"
              : "MERAK × VERİ × ÇALIŞAN ÜRÜN"}
          </p>
          <h1>
            {english ? "I get curious." : "Merak ederim."}
            <br />
            {english ? "I find the data." : "Veriyi bulurum."}
            <br />
            <span>{english ? "I build the thing." : "Bir şey kurarım."}</span>
          </h1>
          <p className="hero-description">
            {english
              ? "Usually, it works. If it does not, I find out why. From research and data to infrastructure and launch, I sit at every product table."
              : "Genellikle çalışır. Çalışmıyorsa nedenini de bulurum. Araştırmadan veriye, altyapıdan yayına kadar ürünün bütün masalarında ben varım."}
          </p>
          <div className="hero-actions">
            <Link
              className="button dark"
              to={english ? "/en#projects" : "/projects"}
            >
              {english ? "See what I built" : "Yaptıklarıma bak"}{" "}
              <ArrowUpRight size={19} />
            </Link>
            <Link className="text-link" to={english ? "/en/ask" : "/ask"}>
              {english ? "Bring a problem" : "Bir problem getir"}{" "}
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <p className="hero-note">
            <span className="mini-spark">✳</span>{" "}
            {english
              ? "One-person team. Crowded tool stack."
              : "Tek kişilik ekip. Kalabalık bir tool stack."}
          </p>
        </div>
        <HeroVisual locale={locale} />
      </section>
      <div className="focus-strip">
        <div className="container">
          <span>
            {english ? "AT THE SAME TABLE" : "AYNI MASADA BULUŞANLAR"}
          </span>
          <p>
            Claude & ChatGPT <Asterisk />{" "}
            {english ? "CRM & automation" : "CRM & otomasyon"} <Asterisk />{" "}
            {english ? "Product & growth" : "Ürün & büyüme"} <Asterisk />{" "}
            {english ? "Cost-smart architecture" : "Maliyet akıllı mimari"}
          </p>
        </div>
      </div>
      <nav
        className="container layer-nav"
        aria-label={english ? "Homepage sections" : "Ana sayfa bölümleri"}
      >
        <a href="#about">
          <span>01</span> {english ? "Who is Kemal?" : "Kemal kim?"}
        </a>
        <a href="#expertise">
          <span>02</span> {english ? "Inside the workshop" : "İşin mutfağı"}
        </a>
        <a href="#projects">
          <span>03</span> {english ? "Things made real" : "Somut işler"}
        </a>
        <a href="#approach">
          <span>04</span> {english ? "How I work" : "Nasıl çalışırım?"}{" "}
          <ArrowDown size={14} />
        </a>
      </nav>
      <section id="about" className="about container section">
        <div>
          <p className="eyebrow">
            {english ? "01 / NICE TO MEET YOU" : "01 / TANIŞALIM"}
          </p>
          <h2>
            {english ? "A little sales." : "Biraz satış."}
            <br />
            {english ? "A little software." : "Biraz yazılım."}
            <br />
            {english ? "Plenty of “what if?”" : "Bolca “ya şöyle yapsak?”"}
          </h2>
          <Link className="text-link" to={english ? "/en#about" : "/about"}>
            {english
              ? "The longer version of Kemal"
              : "Kemal’in uzun versiyonu"}{" "}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="about-copy">
          <h3>{english ? "What is AI Kemal?" : "AI Kemal nedir?"}</h3>
          {english ? (
            <>
              <p>
                Not a shiny name I invented in a branding workshop. My friends
                gave me the nickname; it stayed because it became slightly too
                accurate. This is Mustafa Kemal Karataş’s digital workshop.
              </p>
              <p>
                Where experience in customer journeys, SaaS, CRM and e-commerce
                meets AI and product building.
              </p>
              <p>
                Today I am the founder of Kârmatik and Independent AI, building
                both products from zero as a solopreneur. I am also co-founder
                of Dipixel Media. In all three, I work from the first question
                to the running system.
              </p>
              <p>
                I am equally curious about where a customer gets stuck and how
                the system behind them should work. Claude and ChatGPT are daily
                collaborators; infrastructure and models change with workload,
                quality and cost.
              </p>
              <p>
                The workshop contains expertise, GitHub projects and ideas not
                yet cleared from the bench. It is a little crowded. So is the
                head.
              </p>
            </>
          ) : (
            <>
              <p>
                Adını benim koyduğum havalı bir marka değil. Arkadaşlarımın
                ortamda taktığı bir lakap; sonra biraz fazla isabetli olduğu
                için kaldı. Burası da Mustafa Kemal Karataş’ın dijital atölyesi.
              </p>
              <p>
                Müşteri deneyimi, SaaS, CRM ve e-ticaretten gelen birikimin;
                yapay zekâ ve ürün geliştirmeyle buluştuğu yer.
              </p>
              <p>
                Bugün Kârmatik ve Independent AI’ın kurucusuyum; iki yazılımı da
                solopreneur olarak sıfırdan, uçtan uca geliştiriyorum. Dipixel
                Media’da ise ortak kurucuyum. Üçünde de fikirden çalışan sisteme
                uzanan işin içindeyim.
              </p>
              <p>
                Müşterinin nerede takıldığını da, bir sistemin nasıl
                kurulacağını da merak ediyorum. Claude ve ChatGPT bu merakın
                günlük çalışma arkadaşları. Ürünleri sıfırdan tek başıma
                kuruyor; altyapıyı ve modeli de işin yüküne, kalitesine ve
                maliyetine göre seçiyorum.
              </p>
              <p>
                Burada uzmanlıklarım, GitHub projelerim ve henüz tezgâhtan
                kalkmamış fikirlerim var. İçerisi biraz kalabalık. Kafa da öyle.
              </p>
            </>
          )}
          <blockquote className="curiosity-quote">
            {english
              ? "“I do not look under every rock. I know which rock to lift.”"
              : "“Bilgi ararken her taşın altına bakmam. Hangi taşı kaldıracağımı bilirim.”"}
          </blockquote>
          <div className="tags">
            {(english
              ? [
                  "SaaS & growth",
                  "CRM & customer journey",
                  "Building with AI",
                  "End-to-end product development",
                  "Web research & scraping",
                ]
              : [
                  "SaaS & büyüme",
                  "CRM & müşteri yolculuğu",
                  "AI ile üretim",
                  "Uçtan uca ürün geliştirme",
                  "Web araştırması & scraping",
                ]
            ).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
      <section
        className="client-ecosystem container"
        aria-label={english ? "Client ecosystem" : "Müşteri ekosistemi"}
      >
        <div className="ecosystem-copy">
          <p className="eyebrow">
            {english
              ? "RIGHT IN THE MIDDLE OF THE FIELD"
              : "SAHANIN TAM ORTASINDA"}
          </p>
          <h2>
            {english ? "I know the buyer." : "Alanı da tanıyorum."}
            <br />
            {english ? "The seller. The builder." : "Satanı da. Üreteni de."}
          </h2>
          <p>
            {english
              ? "I am not an outside consultant to one narrow industry. I work inside the same processes as e-commerce brands, sellers, software companies, platforms and service businesses. So I see the problem across the whole journey—from sales and operations to product and customer."
              : "Tek bir sektörün dışarıdan danışmanı değilim. E-ticaret markaları, satıcılar, yazılım şirketleri, platformlar ve hizmet işletmeleriyle aynı süreçlerin içinde çalışıyorum. Bu yüzden problemi yalnızca reklam ekranından değil; satıştan operasyona, üründen müşteriye uzanan bütün yolculukta görebiliyorum."}
          </p>
          <span>
            {english
              ? "At Dipixel I work across an ecosystem of 24 brands and actively manage 8 Meta accounts within it."
              : "Dipixel’de 24 markalık bir ekosistemle çalışıyorum; bunların içindeki 8 Meta hesabını aktif olarak yönetiyorum."}
          </span>
        </div>
        <div className="ecosystem-grid">
          {(english
            ? [
                [
                  "01 / MAKES",
                  "Brands & e-commerce companies",
                  "Product, offer, price, campaign and actual profitability.",
                ],
                [
                  "02 / SELLS",
                  "Marketplace sellers",
                  "Competition, buybox, advertising, operations and customer experience.",
                ],
                [
                  "03 / BUILDS THE SYSTEM",
                  "Software, platforms & agencies",
                  "SaaS, e-commerce infrastructure, digital agencies and growth flows.",
                ],
                [
                  "04 / WORKS WITH PEOPLE",
                  "Beauty & service businesses",
                  "From salons and aesthetic clinics to appointments and loyalty.",
                ],
              ]
            : [
                [
                  "01 / ÜRETEN",
                  "Markalar & e-ticaret firmaları",
                  "Ürün, teklif, fiyat, kampanya ve gerçek kârlılık.",
                ],
                [
                  "02 / SATAN",
                  "Pazaryeri satıcıları",
                  "Rekabet, buybox, reklam, operasyon ve müşteri deneyimi.",
                ],
                [
                  "03 / SİSTEMİ KURAN",
                  "Yazılımlar, platformlar & ajanslar",
                  "SaaS, e-ticaret altyapıları, dijital pazarlama ajansları ve büyüme akışları.",
                ],
                [
                  "04 / İNSANA DOKUNAN",
                  "Güzellik & hizmet sektörü",
                  "Kuaförlerden estetik merkezlerine, randevudan sadakate.",
                ],
              ]
          ).map(([label, title, text]) => (
            <article key={label}>
              <small>{label}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <ExpertiseSection locale={locale} />
      <section id="projects" className="projects-wrap">
        <div className="container section projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {english
                  ? "03 / WE TALKED. THEN WE BUILT."
                  : "03 / KONUŞTUK, SONRA YAPTIK"}
              </p>
              <h2>
                {english
                  ? "An idea left. A product returned."
                  : "Fikir çıktı. Ürün oldu."}
              </h2>
            </div>
            <Link
              className="text-link"
              to={english ? "/en#projects" : "/projects"}
            >
              {english ? "The whole workshop" : "Atölyenin tamamı"}{" "}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="section-intro">
            {english
              ? "Three different fronts, one working style: see the problem in the field, connect the data, mind the cost and build the system that runs."
              : "Üç farklı cephe, aynı çalışma biçimi: problemi sahada gör, veriyi birleştir, maliyeti düşün ve çalışan sistemi kur."}
          </p>
          <div className="project-grid">
            {cards.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} locale={locale} />
            ))}
          </div>
        </div>
      </section>
      <div id="approach">
        <ApproachSection locale={locale} />
      </div>
      <section className="container">
        <div className="ask-banner">
          <Asterisk className="banner-star" size={82} strokeWidth={1} />
          <div>
            <p className="eyebrow">
              {english ? "05 / YOUR TURN" : "05 / SÖZ SENDE"}
            </p>
            <h2>
              {english
                ? "If you are saying, “I have an idea…”"
                : "“Aklımda bir şey var” diyorsan…"}
            </h2>
            <p>
              {english
                ? "Good. One of my favourite sentences. Tell me a little; we will open the rest together."
                : "Tamam, en sevdiğim cümle. Biraz anlat; gerisini birlikte açarız."}
            </p>
          </div>
          <Link className="button dark" to={english ? "/en/ask" : "/ask"}>
            {english ? "Put it on the table" : "Masaya koy"}{" "}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
