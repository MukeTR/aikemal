import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Asterisk,
  Sparkles,
  Terminal,
  TrendingUp,
} from "lucide-react";
import { projects } from "@aikemal/shared";
import { ProjectCard } from "../components/ProjectCard";
export function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" /> MERAKTAN ÜRETİME, HER GÜN.
          </p>
          <h1>
            Fikir çok.
            <br />
            Mesele <span>üretmek.</span>
          </h1>
          <p className="hero-description">
            Benim dünyamda yapay zekâ, e-ticaret ve dijital ürünler bir araya
            geliyor. Fikirleri konuşuyor, deniyor ve işe yarayan şeylere
            dönüştürüyoruz.
          </p>
          <div className="hero-actions">
            <Link className="button dark" to="/ask">
              AI Kemal’e sor <ArrowUpRight size={19} />
            </Link>
            <Link className="text-link" to="/#projects">
              Neler üretiyorum? <ArrowDownIcon />
            </Link>
          </div>
          <p className="hero-note">
            <span className="mini-spark">✳</span> Biraz teknoloji. Biraz
            girişimcilik. Bolca merak.
          </p>
        </div>
        <div
          className="hero-visual"
          aria-label="Fikir, deney ve ürün arasında bağ kuran AI Kemal illüstrasyonu"
        >
          <div className="visual-top">
            <span>AI KEMAL / ÜRETİM ALANI</span>
            <span>V.01 ↗</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="float-chip chip-ai">
            <Sparkles size={16} /> Yapay zekâ
          </div>
          <div className="float-chip chip-code">
            <Terminal size={16} /> Dijital ürünler
          </div>
          <div className="float-chip chip-growth">
            <TrendingUp size={16} /> Büyüme
          </div>
          <div className="core">
            <Asterisk strokeWidth={1.1} />
          </div>
          <span className="visual-plus plus-one">+</span>
          <span className="visual-plus plus-two">+</span>
          <div className="visual-bottom">
            <span>
              <i /> Sürekli yapım aşamasında.
            </span>
            <span>FİKİR → DENEY → ÜRÜN</span>
          </div>
        </div>
      </section>
      <div className="focus-strip">
        <div className="container">
          <span>ODAK NOKTALARIM</span>
          <p>
            Yapay zekâ <Asterisk /> E-ticaret <Asterisk /> Dijital ürünler{" "}
            <Asterisk /> Büyüme
          </p>
        </div>
      </div>
      <section id="about" className="about container section">
        <div>
          <p className="eyebrow">01 / TANIŞALIM</p>
          <h2>
            Bir chatbot’tan
            <br />
            biraz daha fazlası.
          </h2>
        </div>
        <div className="about-copy">
          <h3>AI Kemal nedir?</h3>
          <p>
            Düşündüklerimin, ürettiklerimin ve öğrendiklerimin buluştuğu bir
            alan. Yapay zekâyı gerçek problemlere uygulamak ve iyi fikirlerin
            ilk adımını atmak için buradayım.
          </p>
          <p>
            Burası aynı zamanda açık bir atölye. Yeni araçlar, küçük deneyler ve
            zamanla büyüyen projeler. Her şey tamamlanmış değil; zaten güzel
            tarafı da bu.
          </p>
          <div className="tags">
            <span>Pratik düşünce</span>
            <span>Gerçek problemler</span>
            <span>Sürekli üretim</span>
          </div>
        </div>
      </section>
      <section id="projects" className="container section projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / ATÖLYEDEN</p>
            <h2>Fikirler, iş başında.</h2>
          </div>
          <Link className="text-link" to="/projects">
            Tüm projeler <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="container">
        <div className="ask-banner">
          <Asterisk className="banner-star" size={92} strokeWidth={1} />
          <div>
            <p className="eyebrow">03 / BİRLİKTE DÜŞÜNELİM</p>
            <h2>Aklında bir şey mi var?</h2>
            <p>
              Bir fikir, bir soru ya da “nereden başlasam?” dediğin o proje.
            </p>
          </div>
          <Link className="button dark" to="/ask">
            AI Kemal’e sor <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
function ArrowDownIcon() {
  return <ArrowRight size={17} className="down-arrow" />;
}
