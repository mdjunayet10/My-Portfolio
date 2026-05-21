import { AcademicsSection } from "@/components/academics-section";
import { PageHeader } from "@/components/page-header";

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Academic foundation shaped by hands-on building."
        description="A concise timeline of my education and practical software development journey."
      />
      <AcademicsSection showHeading={false} />
    </>
  );
}
