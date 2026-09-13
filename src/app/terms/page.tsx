import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use ${site.name} workspaces and services.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro={`These terms apply when you book, visit or use the workspaces and services at ${site.name}.`}
      sections={[
        {
          heading: "Use of the workspace",
          body: "Members and guests are expected to use the space respectfully, keep shared areas usable for others, and follow the access and security procedures in place at the facility.",
        },
        {
          heading: "Bookings and memberships",
          body: "Workspace availability, membership terms and meeting room access are confirmed at the time of booking. Specific commercial terms are agreed directly with you before your membership begins.",
        },
        {
          heading: "Contact us",
          body: `For questions about these terms, email ${site.email} or call ${site.phoneDisplay}.`,
        },
      ]}
    />
  );
}
