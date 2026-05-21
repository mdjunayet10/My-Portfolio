import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Database, Flame, Smartphone } from "lucide-react";
import { owner, stats } from "@/data/portfolio";
import { TypewriterText } from "./typewriter-text";

const floatingTech = [
  { label: "Flutter", className: "tech-chip tech-chip-one" },
  { label: "Firebase", className: "tech-chip tech-chip-two" },
  { label: "Next.js", className: "tech-chip tech-chip-three" },
  { label: "Node.js", className: "tech-chip tech-chip-four" },
];

const roles = ["Software Developer", "Flutter Developer", "Web Developer", "Firebase Developer", "Game Developer"];

export function HeroSection() {
  return (
    <section className="section-shell hero-section" aria-label="Home">
      <div className="hero-copy" data-reveal>
        <p className="hero-kicker">Welcome to my portfolio</p>
        <h1>
          <span className="hero-heading-soft">Hi, I&apos;m</span>
          <span className="hero-name">Md Junayet</span>
        </h1>
        <p className="hero-role-line">
          <span>I&apos;m a</span>
          <TypewriterText words={roles} />
        </p>
        <p className="hero-text">{owner.intro}</p>

        <div className="hero-actions">
          <Link href="/projects" className="button-primary">
            View Projects
            <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="button-secondary">
            Contact Me
          </Link>
        </div>

        <div className="hero-stats" aria-label="Portfolio highlights">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" data-reveal>
        <div className="orbit-card">
          <div className="profile-aura">
            <Image
              src={owner.avatarUrl}
              alt="Md Junayet profile photo"
              width={512}
              height={512}
              priority
              unoptimized
              sizes="(min-width: 1024px) 430px, 82vw"
              className="profile-photo"
            />
          </div>

          <div className="developer-panel">
            <div>
              <span>Status</span>
              <strong>Building useful digital products</strong>
            </div>
            <div className="panel-icons" aria-hidden="true">
              <Smartphone size={18} />
              <Flame size={18} />
              <Database size={18} />
              <Code2 size={18} />
            </div>
          </div>

          {floatingTech.map((tech) => (
            <span key={tech.label} className={tech.className}>
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
