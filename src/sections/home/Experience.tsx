import React from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/content/services";
import { media } from "@/content/media";
import { Figure } from "@/components/ui/Figure";

export function Experience() {
  return (
    <Section tone="ink" className="overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Figure slot={media.experienceBackground} background sizes="100vw" />
        <div className="absolute inset-0 bg-ink/88" />
      </div>

      <div className="relative">
        <Eyebrow tone="ink">The Nexora experience</Eyebrow>

        <ol className="mt-12 grid gap-px bg-line-dark md:grid-cols-3">
          {experience.map((item, i) => {
            const [promise, ...rest] = item.description.split(". ");
            return (
              <li key={item.title} className="bg-ink">
                <Reveal delay={i * 110} className="flex h-full flex-col gap-5 p-8 md:p-10">
                  <span className="font-display text-eyebrow uppercase text-slate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-h1 uppercase text-lime">{item.title}.</h2>
                  <p className="text-lead text-cloud">{promise}.</p>
                  <p className="text-small text-slate">{rest.join(". ")}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
