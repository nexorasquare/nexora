import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { Experience } from "@/sections/home/Experience";
import { Faq } from "@/sections/shared/Faq";
import { FinalCta } from "@/sections/home/FinalCta";
import { whyNexora, audiences } from "@/content/services";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { faqs } from "@/content/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export const metadata: Metadata = {
  title: "About Nexora Square",
  alternates: { canonical: "/about" },
  description:
    "Nexora Square is a premium workspace and business community in Perinthalmanna for professionals, freelancers, startups, remote teams and growing businesses.",
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="About"
        title="More than a workspace"
        lead={site.positioning}
      >
        <ButtonLink href="/contact" variant="primary" arrow className="group">
          Book a tour
        </ButtonLink>
      </PageHero>

      <Section tone="cloud">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-h2 text-ink">
              Premium workspaces, professional services and a business community under one roof
            </h2>
            <p className="mt-6 text-lead text-steel">
              Whether you are a freelancer looking for a productive desk, a startup building your
              team, or an established business seeking a professional presence in Perinthalmanna,
              Nexora Square gives you the space, infrastructure and connections to move forward.
            </p>
            <p className="mt-4 text-body text-steel">
              We deliberately do not describe ourselves as only a coworking space. Coworking is one
              part of it. Private offices, virtual office solutions, meeting facilities, networking
              and events all sit under the same roof, so the place can grow with your business rather
              than being outgrown by it.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Figure slot={media.intro} sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading tone="ink" eyebrow="Why Nexora Square" title="Why choose Nexora Square?" />
        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyNexora.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 90} className="border-t border-line-dark pt-6">
                <span className="font-display text-eyebrow uppercase text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-h3 text-cloud">{item.title}</h3>
                <p className="mt-3 text-small text-slate">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Experience />

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <figure>
              <Figure slot={media.vision} sizes="(max-width: 1024px) 100vw, 40vw" />
              <figcaption className="mt-3 text-small text-slate">
                Concept render. Not the current building.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <SectionHeading
              tone="surface"
              eyebrow="Where this is going"
              title="Built to grow with Perinthalmanna"
              lead="Nexora Square started as a premium workspace near MarketCity Mall. The ambition is a business destination for the district: more space, more community, and the infrastructure growing businesses need close to home."
            />
            <ButtonLink href="/community" variant="secondary" arrow className="group mt-8">
              Join the community
            </ButtonLink>
          </Reveal>
        </div>
      </Section>


      <Section tone="cloud">
        <SectionHeading
          tone="cloud"
          eyebrow="Who it is for"
          title="Built for ambitious people and businesses"
        />
        <ul className="mt-14 grid gap-px border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <li key={a.title} className="bg-cloud">
              <Reveal delay={(i % 3) * 80} className="flex h-full flex-col gap-3 p-8">
                <h3 className="text-h3 text-ink">{a.title}</h3>
                <p className="text-small text-steel">{a.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Faq />
      <FinalCta />
    </>
  );
}
