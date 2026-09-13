import React from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { virtualOffice } from "@/content/services";
import { media } from "@/content/media";

const icons: IconName[] = ["address", "mail", "grow", "shield", "conference"];

export function VirtualOffice() {
  return (
    <Section tone="cloud" id="virtual-office">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <Eyebrow tone="cloud">Virtual office</Eyebrow>
          <h2 className="mt-5 text-h2 text-ink">Your business. A professional address.</h2>
          <p className="mt-6 text-lead text-steel">
            Establish a professional business presence in Perinthalmanna without the cost of
            maintaining a traditional office.
          </p>
          <ButtonLink href="/virtual-office" variant="secondaryLight" arrow className="group mt-8">
            Explore virtual office
          </ButtonLink>
          <div className="mt-10">
            <Figure slot={media.virtualOffice} sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-px bg-line-light">
            {virtualOffice.map((f, i) => (
              <li key={f.title} className="flex gap-5 bg-cloud p-6 sm:p-7">
                {/* Lime is a fill here, never a stroke on light - it fails contrast as a line colour. */}
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
          <p className="mt-6 text-small text-steel">
            Registration support covers the workspace and address requirements involved in business
            registration and related formalities.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
