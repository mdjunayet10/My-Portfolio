import { BriefcaseBusiness, Code2, Database, Download, ExternalLink, FileText, Gamepad2, Rocket } from "lucide-react";
import { owner, resume } from "@/data/portfolio";

const highlightIcons = [BriefcaseBusiness, Code2, Rocket, FileText, Gamepad2, Database];

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell section-spacing section-after-page-header resume-section">
      <div className="resume-grid">
        <article className="glass-card resume-card" data-reveal>
          <div className="resume-icon">
            <FileText size={30} />
          </div>
          <p className="eyebrow">Latest CV</p>
          <h2>{owner.name} CV</h2>
          <p>
            A concise overview of my education, skills, projects, and development work
            across Flutter, Firebase, web technologies, backend systems, and game projects.
          </p>

          <div className="resume-actions">
            <a href={resume.url} download className="button-primary">
              Download CV
              <Download size={18} />
            </a>
            <a href={resume.url} target="_blank" rel="noreferrer" className="button-secondary">
              View CV
              <ExternalLink size={18} />
            </a>
          </div>
        </article>

        <div className="resume-highlights" aria-label="Resume highlights">
          {resume.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index] ?? Rocket;

            return (
              <article
                key={highlight}
                className="glass-card resume-highlight-card"
                data-reveal
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                <div className="card-icon">
                  <Icon size={21} />
                </div>
                <span>{highlight}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
