import { GraduationCap } from "lucide-react";
import { academics } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function AcademicsSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section
      id="academics"
      className={showHeading ? "section-shell section-spacing" : "section-shell section-spacing section-after-page-header"}
    >
      {showHeading ? (
        <div data-reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation backed by hands-on building."
            description="My academic path supports the software products, platforms, tools, and games I continue to design and ship."
            centered
          />
        </div>
      ) : null}

      <div className="education-timeline">
        {academics.map((item, index) => (
          <article
            key={item.title}
            className="glass-card academic-card timeline-card"
            data-reveal
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="timeline-marker" aria-hidden="true">
              <span />
            </div>
            <div className="academic-card-inner">
              <div className="card-icon">
                <GraduationCap size={24} />
              </div>
              <div className="academic-meta">
                <p className="academic-index">0{index + 1}</p>
                <span>{item.period}</span>
              </div>
              <h3>{item.title}</h3>
              <strong>{item.institution}</strong>
              <p className="academic-location">{item.location}</p>
              <p className="academic-result">{item.result}</p>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
