import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: `How ${site.name} uses cookies and similar technologies on this website.`,
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookies Policy"
      intro="This policy explains how cookies and similar technologies are used on this website."
      sections={[
        {
          heading: "What cookies are",
          body: "Cookies are small text files stored on your device by your browser. They help a website remember your preferences and understand how the site is being used.",
        },
        {
          heading: "How we use them",
          body: "We use a small number of cookies to keep the site working correctly and to understand which pages are useful to visitors. We do not use cookies to build advertising profiles.",
        },
        {
          heading: "Managing cookies",
          body: `You can block or delete cookies through your browser settings at any time. If you have questions, contact us at ${site.email}.`,
        },
      ]}
    />
  );
}
