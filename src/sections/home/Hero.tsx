import React from "react";
import { site } from "@/content/site";
import { cta } from "@/content/nav";
import { media } from "@/content/media";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink pb-16 pt-32 md:pb-24">
      {/* Photography slot sits behind the type, dimmed just enough to stay readable. */}
      <div className="absolute inset-0 -z-10">
        <Figure slot={media.hero} priority background sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
        <div className="absolute inset-0 grid-texture opacity-60" />
      </div>

      <div className="mx-auto w-full max-w-shell px-gutter">
        <p className="font-display text-eyebrow uppercase text-lime">
          Premium coworking space in Perinthalmanna
        </p>

        <h1 className="mt-6 text-display text-cloud">
          Work.
          <br />
          Connect.
          <br />
          <span className="text-lime">Innovate.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lead text-cloud/90">
          Premium workspaces, flexible offices, virtual office solutions and a thriving business
          community, all designed to help professionals and businesses move forward.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookTourButton className="w-full sm:w-auto" />
          <ButtonLink href="/workspaces" variant="secondary" arrow className="group w-full sm:w-auto">
            {cta.secondary}
          </ButtonLink>
        </div>

        <p className="mt-10 border-t border-line-dark pt-6 font-display text-eyebrow uppercase text-lime">
          {site.address.city}, {site.address.state}
        </p>
      </div>
    </section>
  );
}
