import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SectionHeading } from "./section-heading";

type Skill = {
  name: string;
  category: string;
  description: string;
  icon: IconType;
  color: string;
  tone: "light" | "dark";
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Mobile & App",
    description: "Cross-platform app interfaces and Firebase-backed product flows.",
    skills: [
      { name: "Flutter", category: "Mobile UI", description: "Cross-platform apps", icon: SiFlutter, color: "#54C5F8", tone: "dark" },
      { name: "Dart", category: "Language", description: "Flutter app logic", icon: SiDart, color: "#0175C2", tone: "dark" },
      { name: "Firebase", category: "Cloud", description: "Auth, hosting, data", icon: SiFirebase, color: "#FFCA28", tone: "light" },
    ],
  },
  {
    title: "Frontend",
    description: "Modern responsive interfaces with typed components and polished styling.",
    skills: [
      { name: "HTML5", category: "Markup", description: "Semantic structure", icon: SiHtml5, color: "#E34F26", tone: "dark" },
      { name: "CSS3", category: "Styling", description: "Responsive layouts", icon: SiCss, color: "#1572B6", tone: "dark" },
      { name: "JavaScript", category: "Language", description: "Interactive browser logic", icon: SiJavascript, color: "#F7DF1E", tone: "light" },
      { name: "TypeScript", category: "Language", description: "Typed application code", icon: SiTypescript, color: "#3178C6", tone: "dark" },
      { name: "React", category: "UI Library", description: "Component interfaces", icon: SiReact, color: "#61DAFB", tone: "dark" },
      { name: "Next.js", category: "Framework", description: "Static portfolio routing", icon: SiNextdotjs, color: "#F8FAFC", tone: "dark" },
      { name: "Tailwind CSS", category: "Styling", description: "Utility-first design", icon: SiTailwindcss, color: "#06B6D4", tone: "dark" },
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, persistence, and database-backed product features.",
    skills: [
      { name: "Node.js", category: "Runtime", description: "Backend JavaScript", icon: SiNodedotjs, color: "#5FA04E", tone: "dark" },
      { name: "Express", category: "Framework", description: "API routing", icon: SiExpress, color: "#F8FAFC", tone: "dark" },
      { name: "PostgreSQL", category: "Database", description: "Relational data", icon: SiPostgresql, color: "#4169E1", tone: "dark" },
      { name: "Prisma", category: "ORM", description: "Typed data models", icon: SiPrisma, color: "#B7C7FF", tone: "dark" },
    ],
  },
  {
    title: "Tools",
    description: "Version control and collaboration tools for clean delivery.",
    skills: [
      { name: "Git", category: "Version Control", description: "Branching and history", icon: SiGit, color: "#F05032", tone: "dark" },
      { name: "GitHub", category: "Collaboration", description: "Code hosting", icon: SiGithub, color: "#F8FAFC", tone: "dark" },
    ],
  },
];

const previewSkills = skillGroups.flatMap((group) => group.skills).slice(0, 8);

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  const style = {
    "--skill-color": skill.color,
    transitionDelay: `${index * 35}ms`,
  } as CSSProperties;

  return (
    <article className={`skill-card tech-card logo-tone-${skill.tone}`} data-reveal style={style}>
      <div className="skill-logo-wrap" aria-hidden="true">
        <div className="skill-logo-surface">
          <Icon className="skill-logo" />
        </div>
      </div>
      <div className="skill-copy">
        <h3>{skill.name}</h3>
        <p>{skill.category}</p>
        <span>{skill.description}</span>
      </div>
    </article>
  );
}

type SkillsSectionProps = {
  preview?: boolean;
  showHeading?: boolean;
};

export function SkillsSection({ preview = false, showHeading = true }: SkillsSectionProps) {
  const flatSkills = preview ? previewSkills : skillGroups.flatMap((group) => group.skills);

  return (
    <section id="skills" className={showHeading ? "section-shell section-spacing" : "section-shell section-spacing section-after-page-header"}>
      {showHeading ? (
        <div data-reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title={preview ? "A focused stack for modern products." : "Tools I use to build and ship."}
            description={
              preview
                ? "The core technologies behind my web, mobile, Firebase, backend, and game projects."
                : "Brand-level tools for mobile apps, static and dynamic websites, Firebase products, APIs, databases, and interactive game projects."
            }
            centered
          />
        </div>
      ) : null}

      {preview ? (
        <div className="skills-grid compact-skills-grid">
          {flatSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      ) : (
        <div className="skill-groups">
          {skillGroups.map((group, groupIndex) => (
            <section key={group.title} className="skill-group glass-card" data-reveal>
              <div className="skill-group-heading">
                <span>0{groupIndex + 1}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="skills-grid">
                {group.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  );
}
