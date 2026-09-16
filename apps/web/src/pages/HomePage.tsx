import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown, Asterisk } from "lucide-react";
import { projects } from "@aikemal/shared";
import { ProjectCard } from "../components/ProjectCard";
import { HeroVisual } from "../components/home/HeroVisual";
import { ExpertiseSection } from "../components/home/ExpertiseSection";
import { ApproachSection } from "../components/home/ApproachSection";
export function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" /> İNSAN MERAKI × YAPAY ZEKÂ
          </p>
          <h1>
            Yapay zekâ
            <br />
            benim <span>sağ kolum.</span>
          </h1>
          <p className="hero-description">
            Ben Kemal. Claude, ChatGPT ve bir dolu aracı elim gibi kullanıyorum.
            Fikirleri ürüne, dağınık işleri sisteme dönüştürüyorum.
          </p>
          <div className="hero-actions">
            <Link className="button dark" to="/projects">
              Neler üretiyorum? <ArrowUpRight size={19} />
            </Link>
            <Link className="text-link" to="/ask">
              Birlikte düşünelim <ArrowUpRight size={17} />
            </Link>
          </div>
          <p className="hero-note">
            <span className="mini-spark">✳</span> Kahveyi hâlâ ben yapıyorum.
            Şimdilik.
          </p>
        </div>
        <HeroVisual />
      </section>
      <div className="focus-strip">
        <div className="container">
          <span>AYNI MASADA BULUŞANLAR</span>
          <p>
            Claude & ChatGPT <Asterisk /> CRM & otomasyon <Asterisk /> Ürün &
            büyüme
          </p>
        </div>
      </div>
      <nav className="container layer-nav" aria-label="Ana sayfa bölümleri">
        <a href="#about">
          <span>01</span> Kemal kim?
        </a>
        <a href="#expertise">
          <span>02</span> İşin mutfağı
        </a>
        <a href="#projects">
          <span>03</span> Somut işler
        </a>
        <a href="#approach">
          <span>04</span> Nasıl çalışırım? <ArrowDown size={14} />
        </a>
      </nav>
      <section id="about" className="about container section">
        <div>
          <p className="eyebrow">01 / TANIŞALIM</p>
          <h2>
            Biraz satış.
            <br />
            Biraz yazılım.
            <br />
            Bolca “ya şöyle yapsak?”
          </h2>
          <Link className="text-link" to="/about">
            Kemal’in uzun versiyonu <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="about-copy">
          <h3>AI Kemal nedir?</h3>
          <p>
            Mustafa Kemal Karataş’ın dijital atölyesi. Müşteri deneyimi, SaaS,
            CRM ve e-ticaretten gelen birikimin; yapay zekâ ve ürün
            geliştirmeyle buluştuğu yer.
          </p>
          <p>
            Müşterinin nerede takıldığını da, bir sistemin nasıl kurulacağını da
            merak ediyorum. Claude ve ChatGPT bu merakın günlük çalışma
            arkadaşları. Fikri konuşuyor, küçük bir sürüm yapıyor, sonra
            gerçekten işe yarıyor mu diye bakıyoruz.
          </p>
          <p>
            Burada uzmanlıklarım, GitHub projelerim ve henüz tezgâhtan kalkmamış
            fikirlerim var. İçerisi biraz kalabalık. Kafa da öyle.
          </p>
          <div className="tags">
            <span>SaaS & büyüme</span>
            <span>CRM & müşteri yolculuğu</span>
            <span>AI ile üretim</span>
          </div>
        </div>
      </section>
      <ExpertiseSection />
      <section id="projects" className="projects-wrap">
        <div className="container section projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / KONUŞTUK, SONRA YAPTIK</p>
              <h2>Repo var. Laf kalabalığı az.</h2>
            </div>
            <Link className="text-link" to="/projects">
              Atölyenin tamamı <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="section-intro">
            GitHub’dan seçilmiş çalışmalar. Her birinin arkasında bir “bunu daha
            iyi yapamaz mıyız?” sorusu var.
          </p>
          <div className="project-grid">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <div id="approach">
        <ApproachSection />
      </div>
      <section className="container">
        <div className="ask-banner">
          <Asterisk className="banner-star" size={82} strokeWidth={1} />
          <div>
            <p className="eyebrow">05 / SÖZ SENDE</p>
            <h2>“Aklımda bir şey var” diyorsan…</h2>
            <p>
              Tamam, en sevdiğim cümle. Biraz anlat; gerisini birlikte açarız.
            </p>
          </div>
          <Link className="button dark" to="/ask">
            Masaya koy <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
