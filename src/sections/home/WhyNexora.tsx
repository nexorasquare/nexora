import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyNexora } from "@/content/services";

export function WhyNexora() {
  return (
    <Section tone="surface">
      <SectionHeading
        tone="surface"
        eyebrow="Why Nexora Square"
        title="Why choose Nexora Square?"
      />

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
  );
}
