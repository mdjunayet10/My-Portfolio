import { HeroSection } from "@/components/hero-section";
import { ContactCta, HomeOverview } from "@/components/home-overview";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeOverview />
      <SkillsSection preview />
      <ProjectsSection preview />
      <ContactCta />
    </>
  );
}
