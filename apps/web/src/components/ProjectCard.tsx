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
  Megaphone,
} from "lucide-react";
import { projectStatusLabels, type Project } from "@aikemal/shared";
const icons = {
  karmatik: BarChart3,
  "profit-calculator": Calculator,
  independentai: Sparkles,
  "workspace-os": Monitor,
  accessai: Accessibility,
  "instagram-unfollowers": Users,
  "dipixel-media": Megaphone,
};
const artworks: Record<string, string> = {
  karmatik: "/images/project-karmatik.webp",
  independentai: "/images/project-independent-ai.webp",
  "dipixel-media": "/images/project-dipixel.webp",
};
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = icons[project.slug as keyof typeof icons] ?? Layers3;
  const artwork = artworks[project.slug];
  return (
    <article
      className={`project-card project-card--${index % 3}`}
      data-project-card={project.slug}
    >
      <div
        className={`project-art art-${index % 3}${artwork ? " has-art" : ""}`}
        data-project={project.slug}
      >
        {artwork ? (
          <img src={artwork} alt="" loading="lazy" decoding="async" />
        ) : (
          <Icon size={56} strokeWidth={1.2} />
        )}
        <span className="soon">{projectStatusLabels[project.status]}</span>
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
        {project.website && (
          <a
            className="live-project-link"
            href={project.website}
            target="_blank"
            rel="noreferrer"
          >
            Aracı aç <ArrowUpRight size={16} />
          </a>
        )}
        <Link className="project-detail-link" to={"/projects/" + project.slug}>
          Hikâyesine bak <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
