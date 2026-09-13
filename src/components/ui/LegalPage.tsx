import React from "react";
import { PageHero } from "./PageHero";
import { Section } from "./Section";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <Section tone="ink" containerClassName="max-w-3xl">
        <p className="text-lead text-slate">{intro}</p>
        {sections.map((s, i) => (
          <div key={s.heading} className="mt-10">
            <h2 className="text-h3 text-cloud">
              <span className="mr-2 text-lime">{String(i + 1).padStart(2, "0")}</span>
              {s.heading}
            </h2>
            <p className="mt-3 text-body text-slate">{s.body}</p>
          </div>
        ))}
      </Section>
    </>
  );
}
