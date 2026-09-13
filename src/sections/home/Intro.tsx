import React from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { media } from "@/content/media";

export function Intro() {
  return (
    <Section tone="cloud" id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow tone="cloud">More than a workspace</Eyebrow>
          <h2 className="mt-5 text-h2 text-ink">
            A premium workspace and business community
          </h2>
          <p className="mt-6 text-lead text-steel">
            Nexora Square brings together premium workspaces, professional services and a vibrant
            business community under one roof.
          </p>
          <p className="mt-4 text-body text-steel">
            Whether you are a freelancer looking for a productive desk, a startup building your
            team, or an established business seeking a professional presence in Perinthalmanna,
            Nexora Square gives you the space, infrastructure and connections to move forward.
          </p>
          <ButtonLink href="/about" variant="secondaryLight" arrow className="group mt-9">
            Discover Nexora Square
          </ButtonLink>
        </Reveal>

        <Reveal delay={120}>
          <Figure slot={media.intro} sizes="(max-width: 1024px) 100vw, 50vw" />
        </Reveal>
      </div>
    </Section>
  );
}
