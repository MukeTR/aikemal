import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BarChart3,
  Layers3,
  Calculator,
  Sparkles,
  Monitor,
  Accessibility,
  Users,
} from "lucide-react";
import type { Project } from "@aikemal/shared";
const icons = {
  karmatik: BarChart3,
  "profit-calculator": Calculator,
  independentai: Sparkles,
  "workspace-os": Monitor,
  accessai: Accessibility,
  "instagram-unfollowers": Users,
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
      <div className={"project-art art-" + (index % 3)}>
        <Icon size={56} strokeWidth={1.2} />
        <span className="soon">
          {project.status === "repository" ? "GITHUB’DAN" : "FİKİR AŞAMASINDA"}
        </span>
        <span className="art-number">0{index + 1}</span>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>
          <Link to={"/projects/" + project.slug}>
            {project.name}
            <ArrowUpRight size={21} aria-hidden="true" />
          </Link>
        </h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <Link className="project-detail-link" to={"/projects/" + project.slug}>
          Hikâyesine bak <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
