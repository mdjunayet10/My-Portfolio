import { PageHeader } from "@/components/page-header";
import { SkillsSection } from "@/components/skills-section";

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tech Stack"
        title="A focused stack for modern product development."
        description="The tools I use to build mobile apps, websites, APIs, databases, Firebase products, and interactive projects."
      />
      <SkillsSection showHeading={false} />
    </>
  );
}
