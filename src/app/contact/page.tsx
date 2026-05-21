import { ContactSection } from "@/components/contact-section";
import { PageHeader } from "@/components/page-header";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something useful."
        description="Reach out for collaboration, projects, or development opportunities."
      />
      <ContactSection showHeading={false} />
    </>
  );
}
