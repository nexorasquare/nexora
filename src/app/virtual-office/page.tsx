import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FinalCta } from "@/sections/home/FinalCta";
import { virtualOffice, businessSupport } from "@/content/services";
import { virtualOfficePackages } from "@/content/plans";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Virtual Office in Perinthalmanna",
  description:
    "Virtual office in Perinthalmanna: a professional business address with mail and courier handling, meeting room access and registration support, without maintaining a traditional office.",
  alternates: { canonical: "/virtual-office" },
};

const icons: IconName[] = ["address", "mail", "grow", "shield", "conference"];

export default function VirtualOfficePage() {
  return (
    <>
      <PageHero
        eyebrow="Virtual office in Perinthalmanna"
        title="Your business. A professional address."
        lead="Establish a professional business presence in Perinthalmanna without the cost of maintaining a traditional office."
      >
        <BookTourButton label="Get started" />
        <ButtonLink href="/contact" variant="secondary" arrow className="group">
          Ask a question
        </ButtonLink>
      </PageHero>

      <Section tone="cloud">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading tone="cloud" eyebrow="What is included" title="Services" />
            <ul className="mt-10 grid gap-px bg-line-light">
              {virtualOffice.map((f, i) => (
                <li key={f.title} className="flex gap-5 bg-cloud p-6 sm:p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-lime">
                    <Icon name={icons[i]} size={21} />
                  </span>
                  <div>
                    <h3 className="text-h3 text-ink">{f.title}</h3>
                    <p className="mt-2 text-small text-steel">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-ink pl-4 text-small text-steel">
              Registration support covers the workspace and address requirements involved in business
              registration and related formalities. It is not a government approval service.
            </p>
          </div>

          <Reveal delay={120}>
            <Figure slot={media.virtualOffice} sizes="(max-width: 1024px) 100vw, 40vw" />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" id="packages">
        <SectionHeading
          tone="surface"
          eyebrow="Virtual office packages"
          title="Choose the level of presence you need"
          lead="Three packages, from a professional address alone to full reception support. Pricing is shared on enquiry."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {virtualOfficePackages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 90}>
              <article
                className={cn(
                  "flex h-full flex-col border bg-ink p-7",
                  pkg.featured ? "border-lime/60" : "border-line-dark",
                )}
              >
                {pkg.featured ? (
                  <span className="mb-4 inline-block self-start bg-lime px-2.5 py-1 font-display text-eyebrow uppercase text-ink">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-h3 text-cloud">{pkg.name}</h3>
                <p className="mt-2 text-body font-medium text-cloud">{pkg.tagline}</p>
                <p className="mt-3 text-small text-slate">Best for {pkg.audience.charAt(0).toLowerCase() + pkg.audience.slice(1)}</p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-line-dark pt-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-small text-slate">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-lime">
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-line-dark pt-6">
                  <p className="font-display text-eyebrow uppercase text-slate">Pricing</p>
                  <p className="mt-1 text-body text-cloud">Monthly and annual options. Enquire for current rates.</p>
                  <div className="mt-5">
                    <BookTourButton label="Enquire" className="w-full" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          tone="ink"
          eyebrow="Business support ecosystem"
          title="Built around your business"
          lead="From starting your business to scaling your team, Nexora Square grows with you."
        />
        <ul className="mt-12 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
          {businessSupport.map((item, i) => (
            <li key={item} className="bg-ink">
              <Reveal delay={(i % 3) * 70} className="flex min-h-24 items-center gap-4 p-6">
                <span className="font-display text-eyebrow text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-body text-cloud">{item}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
