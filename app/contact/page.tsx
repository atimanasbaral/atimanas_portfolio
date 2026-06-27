import PageStub from "@/components/layout/PageStub";
import { profile } from "@/lib/data/profile";

export default function ContactPage() {
  return (
    <PageStub
      eyebrow="Mission Control"
      title="CONTACT"
      description={`Reach me at ${profile.email} or ${profile.phone}. Cyberpunk skyline contact section arrives in Phase 9.`}
      phase="Coming in Phase 9"
    />
  );
}
