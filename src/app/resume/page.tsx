import { PageHeader } from "@/components/page-header";
import { ResumeSection } from "@/components/resume-section";

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="A quick overview of my skills, projects, and experience."
        description="Download or view my latest CV."
      />
      <ResumeSection />
    </>
  );
}
