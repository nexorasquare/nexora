import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`At ${site.name} we are committed to protecting your privacy and ensuring your personal information is handled safely and responsibly.`}
      sections={[
        {
          heading: "Information we collect",
          body: "We collect information you provide directly to us when you book a tour, enquire about a workspace or contact us. This may include your name, phone number, email address and professional details.",
        },
        {
          heading: "How we use your information",
          body: "We use the information to respond to your enquiry, provide and improve our workspace services, and send you information you have asked for. We do not sell your personal information.",
        },
        {
          heading: "Contact us",
          body: `If you have questions about this policy, contact us on WhatsApp, email ${site.email}, or call ${site.phoneDisplay}.`,
        },
      ]}
    />
  );
}
