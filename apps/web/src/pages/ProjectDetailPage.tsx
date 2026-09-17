import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { projectStatusLabels } from "@aikemal/shared";
import { useProjects } from "../lib/projectStore";
export function ProjectDetailPage() {
  const { slug } = useParams();
  const { projects } = useProjects();
  const p = projects.find((x) => x.slug === slug);
  if (!p)
    return (
      <section className="container page">
        <p className="eyebrow">404 / ATÖLYEDE BULUNAMADI</p>
        <h1>Bu repo başka bir evrende olabilir.</h1>
        <Link className="button dark" to="/projects">
          Atölyeye dön
        </Link>
      </section>
    );
  return (
    <article className="container page project-detail">
      <Link className="text-link" to="/projects">
        <ArrowLeft size={16} /> Atölyeye dön
      </Link>
      <p className="eyebrow detail-category">
        {p.category} / {projectStatusLabels[p.status]}
      </p>
      <h1>{p.name}</h1>
      <p className="detail-lead">{p.description}</p>
      <div className="tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="case-layout">
        <div className="case-main">
          <section>
            <p className="eyebrow">01 / MESELE</p>
            <h2>Neye takıldık?</h2>
            <p>{p.problem}</p>
          </section>
          <section>
            <p className="eyebrow">02 / YAKLAŞIM</p>
            <h2>Nasıl ele aldık?</h2>
            <p>{p.approach}</p>
          </section>
          {p.builderNote && (
            <section>
              <p className="eyebrow">TEK KİŞİLİK ÜRÜN EKİBİ</p>
              <h2>Sıfırdan, uçtan uca.</h2>
              <p>{p.builderNote}</p>
            </section>
          )}
        </div>
        <aside className="case-note">
          <p className="eyebrow">PROJE NOTU</p>
          <p>{p.scope}</p>
          {p.credit && <p className="credit">{p.credit}</p>}
          {p.website && (
            <a
              className="button dark"
              href={p.website}
              target="_blank"
              rel="noreferrer"
            >
              {p.slug === "karmatik" ? "Kârmatik’i aç" : "Aracı aç"}{" "}
              <ArrowUpRight size={16} />
            </a>
          )}
          {p.github && (
            <a
              className="button dark"
              href={p.github}
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={16} /> Repoyu incele <ArrowUpRight size={16} />
            </a>
          )}
        </aside>
      </div>
      {p.architectureNote && (
        <aside className="architecture-note">
          <div>
            <p className="eyebrow">MİMARİ PRENSİBİ</p>
            <h2>Minimum maliyet, maksimum çıktı.</h2>
          </div>
          <p>{p.architectureNote}</p>
        </aside>
      )}
      {p.features && (
        <section className="project-capabilities">
          <p className="eyebrow">03 / ÜRÜNÜN İÇİNDE</p>
          <h2>Bir mağazanın günlük işleri, birlikte.</h2>
          <div className="capability-grid">
            {p.features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a
                  className="text-link"
                  href={feature.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Özelliği incele <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
          {p.integrations && (
            <aside className="integration-note">
              <p className="eyebrow">KANALLAR ARASINDA</p>
              <p>{p.integrations}</p>
              <a
                className="text-link"
                href="https://karmatik.io/entegrasyonlar"
                target="_blank"
                rel="noreferrer"
              >
                Entegrasyonları gör <ArrowUpRight size={16} />
              </a>
            </aside>
          )}
        </section>
      )}
      <div className="small-cta">
        <h2>Başka bir problem, benzer bir merak?</h2>
        <Link to="/ask" className="text-link">
          Birlikte düşünelim <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}
