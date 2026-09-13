import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/sections/contact/ContactForm";
import { Location } from "@/sections/home/Location";
import { site, addressLines, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a tour of Nexora Square in Perinthalmanna. Call, WhatsApp or email us, or send an enquiry and we will get straight back to you.",
};

const channels = [
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: "Chat with Nexora",
    href: whatsappLink(`Hello ${site.name}, I would like to know more about your workspaces.`),
    external: true,
  },
  {
    icon: "phone" as const,
    label: "Call",
    value: site.phoneDisplay,
    href: site.phoneHref,
    external: false,
  },
  {
    icon: "phone" as const,
    label: "Call (alternate)",
    value: site.phoneSecondaryDisplay,
    href: site.phoneSecondaryHref,
    external: false,
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: "pin" as const,
    label: "Directions",
    value: "Open in Google Maps",
    href: site.directionsLink,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us find your space"
        lead="Tell us how you work and we will recommend the right option. Or just come and see the place."
      />

      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading tone="ink" eyebrow="Enquiry" title="Send us the details" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHeading tone="ink" eyebrow="Direct" title="Reach us now" />
            <ul className="mt-10 grid gap-px border border-line-dark bg-line-dark">
              {channels.map((c) => (
                <li key={c.label} className="bg-ink">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex min-h-20 items-center gap-5 p-6 transition-colors hover:bg-surface"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-line-dark text-lime">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <span>
                      <span className="block font-display text-eyebrow uppercase text-slate">
                        {c.label}
                      </span>
                      <span className="mt-1 block text-body text-cloud">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border border-line-dark p-6">
              <h2 className="font-display text-eyebrow uppercase text-lime">Visit us</h2>
              <address className="mt-4 not-italic text-body text-cloud">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4 flex items-center gap-2.5 text-small text-slate">
                <Icon name="clock" size={17} />
                {site.hours}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Location />
    </>
  );
}
