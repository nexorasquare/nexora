import React from "react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { site, whatsappLink } from "@/content/site";
import { media } from "@/content/media";
import { Figure } from "@/components/ui/Figure";

export function FinalCta() {
  return (
    <Section tone="ink" className="overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Figure slot={media.ctaBackground} background sizes="100vw" />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 dot-texture opacity-40" />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <h2 className="text-h1 text-cloud">Ready to work differently?</h2>
        <p className="mt-6 max-w-xl text-lead text-slate">
          Step into a workspace designed for modern professionals and ambitious businesses.
        </p>
        <p className="mt-8 font-display text-eyebrow uppercase text-lime">{site.tagline}</p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <BookTourButton className="w-full sm:w-auto" />
          <ButtonLink
            href={whatsappLink(`Hello ${site.name}, I would like to talk about your workspaces.`)}
            external
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Talk to us
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
