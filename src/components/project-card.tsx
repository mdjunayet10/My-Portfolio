import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, GitPullRequest } from "lucide-react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

const hasUsableUrl = (url?: string) => Boolean(url && url.trim() && url.trim() !== "#");

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveUrl = hasUsableUrl(project.liveUrl);
  const hasGithubUrl = hasUsableUrl(project.githubUrl);

  return (
    <article className={project.featured ? "project-card featured" : "project-card"} data-reveal>
      <div className="project-screenshot">
        <Image
          src={project.screenshot}
          alt={`${project.title} project screenshot`}
          width={1200}
          height={675}
          sizes="(min-width: 1180px) 360px, (min-width: 760px) 50vw, 100vw"
          unoptimized
          loading="lazy"
          decoding="async"
          className="screenshot-image"
        />
      </div>

      <div className="project-content">
        <div className="project-labels">
          {project.featured ? <span className="project-featured-badge">Featured</span> : null}
          <span className="project-category-badge">{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          {hasLiveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-button primary">
              Live Demo
              <ExternalLink size={16} />
            </a>
          ) : null}

          {hasGithubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-button">
              GitHub
              <GitPullRequest size={16} />
            </a>
          ) : null}

          <Link href={`/contact?project=${encodeURIComponent(project.title)}`} className="project-button">
            Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
