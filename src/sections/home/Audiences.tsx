import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { audiences } from "@/content/services";

export function Audiences() {
  return (
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
  );
}
