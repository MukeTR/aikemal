import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Code2, LockKeyhole } from "lucide-react";
import { projects } from "@aikemal/shared";
import { ProjectCard } from "../components/ProjectCard";
import { solutionCount, solutionFamilies } from "../content/solutions";
const filters = [
  "Tümü",
  "YAPAY ZEKÂ",
  "DİJİTAL ÜRÜN",
  "MİNİ ARAÇ",
  "E-TİCARET",
];
export function ProjectsPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("category") ?? "Tümü";
  const selected = filters.includes(query) ? query : "Tümü";
  const visible = projects.filter(
    (p) => selected === "Tümü" || p.category === selected,
  );
  return (
    <section className="container page section">
      <p className="eyebrow">ATÖLYE / FİKİRLERİN SOMUT HALİ</p>
      <h1>
        “Bunu da yaparız.”
        <br />
        Sonra gerçekten yaptık.
      </h1>
      <p className="page-intro">
        Yapay zekâ ürünleri, masaüstü araçları, küçük deneyler. GitHub’daki
        çalışmalarım ve sıradaki fikirlerim burada. Her projenin içinde neyi
        çözmeye çalıştığını bulabilirsin.
      </p>
      <a
        className="text-link github-profile"
        href="https://github.com/MukeTR"
        target="_blank"
        rel="noreferrer"
      >
        <Code2 size={18} /> GitHub / MukeTR ↗
      </a>
      <div className="project-filters" aria-label="Proje kategorileri">
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={selected === f}
            onClick={() => setParams(f === "Tümü" ? {} : { category: f })}
          >
            {f === "Tümü" ? "Hepsi" : f.toLocaleLowerCase("tr-TR")}
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        {visible.length} proje ·{" "}
        {selected === "Tümü"
          ? "Bütün atölye"
          : selected.toLocaleLowerCase("tr-TR")}
      </p>
      <div className="project-grid">
        {visible.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
      <p className="catalog-note">
        GitHub kartları repo ve README incelemesine dayanır; canlı hizmet veya
        tamamlanmış ürün garantisi değildir. Fikir aşamasındakiler ayrıca
        işaretlendi.
      </p>
      <section
        className="solution-archive"
        aria-labelledby="solution-archive-title"
      >
        <div className="solution-archive-heading">
          <div>
            <p className="eyebrow">ÇÖZÜM ARŞİVİ / REPO SAYISINDAN FAZLASI</p>
            <h2 id="solution-archive-title">
              {solutionCount} çözüm.
              <br />
              Dört problem ailesi.
            </h2>
          </div>
          <p>
            Bazısı yayında bir ürün, bazısı müşteri için kurulmuş sistem, bazısı
            da daha büyük bir fikrin çalışan deneyi. Ortak tarafları aynı:
            gerçek bir probleme dokunmaları.
          </p>
        </div>
        <div className="solution-family-grid">
          {solutionFamilies.map((family) => (
            <article className="solution-family" key={family.title}>
              <span className="solution-family-number">{family.number}</span>
              <h3>{family.title}</h3>
              <p className="solution-family-intro">{family.intro}</p>
              <div className="solution-list">
                {family.items.map((item) => {
                  const content = (
                    <>
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.note}</small>
                      </span>
                      {item.private ? (
                        <LockKeyhole size={15} aria-label="Özel çalışma" />
                      ) : (
                        <ArrowUpRight size={16} aria-hidden="true" />
                      )}
                    </>
                  );

                  if (!item.href) {
                    return (
                      <div className="solution-row" key={item.name}>
                        {content}
                      </div>
                    );
                  }

                  return item.href.startsWith("/") ? (
                    <Link
                      className="solution-row"
                      to={item.href}
                      key={item.name}
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      className="solution-row"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      key={item.name}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        <p className="solution-archive-note">
          Kilit simgesi, kodu herkese açık olmayan çalışmaları gösterir. Ürünü
          saklamıyoruz; anahtarı internete bırakmıyoruz.
        </p>
      </section>
    </section>
  );
}
