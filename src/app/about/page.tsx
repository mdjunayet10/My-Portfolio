import { AboutSection } from "@/components/about-section";
import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Know more about me."
        description="I'm a software developer focused on practical digital products, clean interfaces, and smooth user experiences."
      />
      <AboutSection />
    </>
  );
}
