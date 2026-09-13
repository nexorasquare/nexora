import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { workspaces } from "@/content/workspaces";

export function WorkspacesGrid() {
  return (
    <Section tone="ink" id="workspaces">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          tone="ink"
          eyebrow="Our workspaces"
          title="A space for every way of working"
          lead="Flexible desks, private cabins, meeting spaces and more, designed around your needs."
        />
        <ButtonLink href="/workspaces" variant="link" arrow className="group shrink-0">
          View all workspaces
        </ButtonLink>
      </div>

      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {workspaces.map((w, i) => (
          <li key={w.slug}>
            <Reveal delay={(i % 3) * 90}>
              <Link
                href={`/workspaces#${w.slug}`}
                className="group flex h-full flex-col border border-line-dark bg-surface transition-colors duration-300 hover:border-lime/60"
              >
                <Figure slot={w.image} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="font-display text-eyebrow uppercase text-lime">{w.number}</span>
                  <h3 className="text-h3 text-cloud">{w.name}</h3>
                  <p className="text-small text-slate">{w.promise}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 font-display text-xs uppercase tracking-[0.16em] text-lime">
                    Explore
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line-dark pt-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-eyebrow uppercase text-lime">Membership plans</p>
          <p className="mt-2 max-w-xl text-body text-slate">
            Flexible memberships for individuals, private cabins for teams, and Nexora Meet for everyone.
          </p>
        </div>
        <ButtonLink href="/plans" variant="secondary" arrow className="group shrink-0">
          Compare plans
        </ButtonLink>
      </div>
    </Section>
  );
}
