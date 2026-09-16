import { useSearchParams } from "react-router-dom";
import { Code2 } from "lucide-react";
import { projects } from "@aikemal/shared";
import { ProjectCard } from "../components/ProjectCard";
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
    </section>
  );
}
