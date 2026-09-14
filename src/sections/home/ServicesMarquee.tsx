import React from "react";
import { workspaces } from "@/content/workspaces";
import { nexoraMeet } from "@/content/plans";

const services = [
  ...workspaces.map((w) => w.name),
  nexoraMeet.name,
  "Virtual Office",
  "Professional Business Address",
  "Business Community",
  "Networking Events",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 font-display text-sm font-medium uppercase tracking-[0.18em] text-ink"
    >
      {services.map((s) => (
        <li key={s} className="flex items-center gap-10 whitespace-nowrap">
          {s}
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-ink/50" />
        </li>
      ))}
    </ul>
  );
}

/**
 * Continuous service ticker. The list is rendered twice so the loop is seamless;
 * the duplicate is hidden from assistive tech. Pauses on hover, and the global
 * prefers-reduced-motion rule stops it entirely.
 */
export function ServicesMarquee() {
  return (
    <section aria-label="Our services" className="overflow-hidden border-y border-ink/15 bg-lime py-4">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
