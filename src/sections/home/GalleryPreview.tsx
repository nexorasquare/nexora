import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { galleryCategories } from "@/content/media";

const preview = galleryCategories.slice(0, 3);

export function GalleryPreview() {
  return (
    <Section tone="ink">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          tone="ink"
          eyebrow="Gallery"
          title="Experience Nexora Square"
          lead="A closer look at the spaces, the details and the people."
        />
        <ButtonLink href="/gallery" variant="link" arrow className="group shrink-0">
          View the gallery
        </ButtonLink>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {preview.map((category, i) => (
          <li key={category.name}>
            <Reveal delay={i * 90}>
              <Figure slot={category.shots[0]} sizes="(max-width: 768px) 100vw, 33vw" />
              <h3 className="mt-4 text-h3 text-cloud">{category.name}</h3>
              <p className="mt-1.5 text-small text-slate">{category.blurb}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
