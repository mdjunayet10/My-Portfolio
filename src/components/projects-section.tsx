import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

type ProjectsSectionProps = {
  preview?: boolean;
  showHeading?: boolean;
};

export function ProjectsSection({ preview = false, showHeading = true }: ProjectsSectionProps) {
  const visibleProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section id="projects" className={showHeading ? "section-shell section-spacing" : "section-shell section-spacing section-after-page-header"}>
      {showHeading ? (
        <div data-reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A curated selection of products, platforms, tools, and games I've built."
            centered
          />
        </div>
      ) : null}

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {preview ? (
        <div className="section-action" data-reveal>
          <Link href="/projects" className="button-secondary">
            View All Projects
          </Link>
        </div>
      ) : null}
    </section>
  );
}
