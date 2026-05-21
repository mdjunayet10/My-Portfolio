import { PageHeader } from "@/components/page-header";
import { ProjectsSection } from "@/components/projects-section";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Featured digital products and interactive experiences."
        description="A curated collection of apps, platforms, tools, and games built with practical functionality and clean user experience."
      />
      <ProjectsSection showHeading={false} />
    </>
  );
}
