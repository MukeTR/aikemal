import { projects } from "@aikemal/shared";
import { ProjectCard } from "../components/ProjectCard";
export function ProjectsPage() {
  return (
    <section className="container page section">
      <p className="eyebrow">ATÖLYE / 001</p>
      <h1>Deneyden ürüne.</h1>
      <p className="page-intro">
        Bu atölye henüz kuruluyor. Aşağıdaki kartlar geliştirilmesi planlanan
        projeleri gösteriyor; araçlar henüz kullanıma açık değil.
      </p>
      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
