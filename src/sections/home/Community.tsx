import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { communityBenefits } from "@/content/services";
import { media } from "@/content/media";

const icons: IconName[] = ["community", "handshake", "calendar", "spark", "grow"];

export function Community() {
  return (
    <Section tone="ink" id="community">
      <SectionHeading
        tone="ink"
        eyebrow="Business community"
        title="Connect beyond your workspace"
        lead="Nexora Square is more than desks and offices. It is a professional community where entrepreneurs, freelancers, startups, teams and businesses meet, exchange ideas, discover opportunities and build meaningful connections."
      />

      <div className="mt-14">
        <Reveal>
          <Figure slot={media.community} sizes="100vw" />
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {communityBenefits.map((b, i) => (
          <li key={b.title}>
            <Reveal delay={(i % 3) * 90} className="flex flex-col gap-4">
              <Icon name={icons[i]} size={28} className="text-lime" />
              <h3 className="text-h3 text-cloud">{b.title}</h3>
              <p className="text-small text-slate">{b.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>

      <ButtonLink href="/community" variant="secondary" arrow className="group mt-12">
        Join the Nexora community
      </ButtonLink>
    </Section>
  );
}
