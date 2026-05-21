import Link from "next/link";
import { ArrowRight, Code2, Layers, Quote, Sparkles } from "lucide-react";
import { focusAreas } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

const previewSkills = ["Flutter", "Firebase", "Next.js", "Node.js", "TypeScript", "PostgreSQL"];

export function HomeOverview() {
  return (
    <section className="section-shell section-spacing">
      <article className="faith-quote-card glass-card" data-reveal>
        <div className="faith-quote-icon" aria-hidden="true">
          <Quote size={22} />
        </div>
        <div>
          <p className="eyebrow">Guiding Reminder</p>
          <blockquote>
            “And whoever relies upon Allah — then He is sufficient for him.”
          </blockquote>
          <p className="faith-quote-source">Surah At-Talāq, 65:3</p>
        </div>
      </article>

      <div className="home-preview-grid">
        <article className="glass-card home-preview-card home-preview-large" data-reveal>
          <div className="card-icon">
            <Sparkles size={22} />
          </div>
          <p className="eyebrow">About Me</p>
          <h2>Building useful products with clean interfaces.</h2>
          <p>
            I work across mobile apps, web platforms, Firebase-backed products, backend
            systems, and 2D game projects with a focus on practical user experience.
          </p>
          <Link href="/about" className="inline-link">
            Learn More
            <ArrowRight size={16} />
          </Link>
        </article>

        <article className="glass-card home-preview-card" data-reveal>
          <div className="card-icon">
            <Layers size={22} />
          </div>
          <h3>Focus Areas</h3>
          <div className="mini-list">
            {focusAreas.slice(0, 4).map((area) => (
              <span key={area.title}>{area.title}</span>
            ))}
          </div>
        </article>

        <article className="glass-card home-preview-card" data-reveal>
          <div className="card-icon">
            <Code2 size={22} />
          </div>
          <h3>Core Stack</h3>
          <div className="mini-list">
            {previewSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <Link href="/skills" className="inline-link">
            View Stack
            <ArrowRight size={16} />
          </Link>
        </article>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="section-shell contact-cta section-spacing" data-reveal>
      <SectionHeading
        eyebrow="Get in Touch"
        title="Have a project or collaboration in mind?"
        description="Tell me what you want to build, improve, or launch. I can help shape the idea into a clean working product."
        centered
      />
      <div className="cta-actions">
        <Link href="/contact" className="button-primary">
          Contact Me
          <ArrowRight size={18} />
        </Link>
        <Link href="/resume" className="button-secondary">
          View Resume
        </Link>
        <Link href="/projects" className="button-secondary">
          See Projects
        </Link>
      </div>
    </section>
  );
}
