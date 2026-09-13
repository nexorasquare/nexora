import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FinalCta } from "@/sections/home/FinalCta";
import { communityBenefits, communityEvents } from "@/content/services";
import { media, galleryCategories } from "@/content/media";

export const metadata: Metadata = {
  title: "Business Community",
  description:
    "A professional community in Perinthalmanna where entrepreneurs, freelancers, startups and businesses meet, exchange ideas and build connections.",
};

const icons: IconName[] = ["community", "handshake", "calendar", "spark", "grow"];
const eventShots = galleryCategories.find((c) => c.name === "Events")?.shots ?? [];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Business community"
        title="Connect beyond your workspace"
        lead="Nexora Square is more than desks and offices. It is a professional community where entrepreneurs, freelancers, startups, teams and businesses meet, exchange ideas, discover opportunities and build meaningful connections."
      >
        <ButtonLink href="/contact" variant="primary" arrow className="group">
          Join the Nexora community
        </ButtonLink>
      </PageHero>

      <Section tone="cloud">
        <SectionHeading tone="cloud" eyebrow="Community benefits" title="What membership opens up" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {communityBenefits.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={(i % 3) * 80} className="flex h-full flex-col border border-line-light p-7">
                <span className="grid h-11 w-11 place-items-center bg-ink text-lime">
                  <Icon name={icons[i]} size={21} />
                </span>
                <h2 className="mt-5 text-h3 text-ink">{b.title}</h2>
                <p className="mt-3 text-small text-steel">{b.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink">
        <SectionHeading
          tone="ink"
          eyebrow="Community events"
          title="Where connections become opportunities"
          lead="From business networking to knowledge-sharing sessions, Nexora Square creates opportunities for members to connect, collaborate and learn."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {eventShots.map((shot, i) => (
            <Reveal key={shot.label} delay={i * 90}>
              <Figure slot={shot} sizes="(max-width: 768px) 100vw, 50vw" />
            </Reveal>
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {communityEvents.map((e) => (
            <li key={e} className="rounded-pill border border-line-dark px-5 py-2 text-small text-slate">
              {e}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Figure slot={media.community} sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>
          <Reveal delay={110}>
            <SectionHeading
              tone="surface"
              eyebrow="Knowledge exchange"
              title="A network that compounds"
              lead="Members share expertise, experiences, ideas and opportunities. The longer you are here, the more the community gives back."
            />
            <ButtonLink href="/contact" variant="secondary" arrow className="group mt-8">
              Become a member
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
