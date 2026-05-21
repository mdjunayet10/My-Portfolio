import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, GraduationCap, Sparkles, Target } from "lucide-react";
import { owner, stats } from "@/data/portfolio";

const profileTags = ["Flutter", "Firebase", "Web", "Games"];

const aboutCards = [
  {
    title: "Personal Interests",
    icon: Sparkles,
    items: [
      "Building useful web and mobile apps",
      "Islamic learning and educational tools",
      "Productivity and finance applications",
      "Game development and interactive systems",
    ],
  },
  {
    title: "Development Philosophy",
    icon: Code2,
    items: [
      "Clean and maintainable code",
      "Practical features over unnecessary complexity",
      "Smooth user experience",
      "Continuous improvement",
    ],
  },
  {
    title: "Learning Journey",
    icon: GraduationCap,
    items: [
      "Computer Science fundamentals",
      "Flutter and Firebase development",
      "Full-stack web development",
      "Game development and product thinking",
    ],
  },
  {
    title: "Future Goals",
    icon: Target,
    items: [
      "Build more polished real-world products",
      "Improve backend and cloud architecture skills",
      "Publish apps across platforms",
      "Create useful tools for education and productivity",
    ],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-spacing section-after-page-header">
      <div className="about-main-grid">
        <div className="about-photo-card glass-card" data-reveal>
          <div className="about-photo-frame">
            <Image
              src={owner.avatarUrl}
              alt="Md Junayet profile photo"
              width={560}
              height={560}
              unoptimized
              className="about-photo"
            />
          </div>
          <div className="about-profile-meta">
            <strong>{owner.fullName}</strong>
            <span>{owner.subtitle}</span>
          </div>
          <div className="about-floating-tags" aria-label="Focus tags">
            {profileTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="glass-card about-who-card" data-reveal>
          <div className="card-icon">
            <BookOpen size={22} />
          </div>
          <p className="eyebrow">Who am I?</p>
          <h2>Developer, builder, and product-minded learner.</h2>
          <p>
            I&apos;m Md Junayet, a developer focused on building practical digital products
            with clean design and real functionality. My work includes study apps, Islamic
            learning tools, career platforms, finance tools, and games. I enjoy turning
            ideas into usable applications that feel polished, responsive, and helpful.
          </p>
          <p>
            I work with Flutter, Firebase, JavaScript, Node.js, and modern frontend
            technologies to build projects across web, mobile, and interactive experiences.
          </p>
          <div className="about-actions">
            <Link href="/projects" className="button-primary">
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="about-insight-grid">
        {aboutCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="glass-card about-insight-card"
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="card-icon">
                <Icon size={22} />
              </div>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="stats-grid about-stats" data-reveal>
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
