import React from "react";
import { Eyebrow } from "./SectionHeading";

/** Standard inner-page opener. Sits under the fixed header, so it carries top padding. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line-dark bg-ink pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="absolute inset-0 grid-texture opacity-70" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-shell px-gutter">
        <Eyebrow tone="ink">{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-h1 text-cloud">{title}</h1>
        {lead ? <p className="mt-6 max-w-2xl text-lead text-slate">{lead}</p> : null}
        {children ? <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
      </div>
    </section>
  );
}
