import { ArrowUpRight, BarChart3, Layers3, Calculator } from "lucide-react";
import type { Project } from "@aikemal/shared";
const icons = {
  karmatik: BarChart3,
  dipixel: Layers3,
  "profit-calculator": Calculator,
};
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = icons[project.slug as keyof typeof icons] ?? Layers3;
  return (
    <article className="project-card">
      <div className={"project-art art-" + index}>
        <Icon size={56} strokeWidth={1.2} />
        <span className="soon">YAPIM AŞAMASINDA</span>
        <span className="art-number">0{index + 1}</span>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>
          {project.name}
          <ArrowUpRight size={22} aria-hidden="true" />
        </h3>
        <p>{project.description}</p>
        <span className="planned">Yakında · Ön izleme</span>
      </div>
    </article>
  );
}
