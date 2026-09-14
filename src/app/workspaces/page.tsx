import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { FinalCta } from "@/sections/home/FinalCta";
import { workspaces } from "@/content/workspaces";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Office Space in Perinthalmanna",
  description:
    "Office space in Perinthalmanna to suit every way of working: hot desks, dedicated workstations, private team cabins, meeting pods, a conference room and a podcast space at Nexora Square.",
  alternates: { canonical: "/workspaces" },
};

export default function WorkspacesPage() {
  return (
    <>
      <PageHero
        eyebrow="Office space in Perinthalmanna"
        title="A space for every way of working"
        lead="Flexible desks, private cabins, meeting spaces and more, designed around how you actually work. All near MarketCity Mall, Perinthalmanna."
      >
        <BookTourButton />
        <ButtonLink href="/contact" variant="secondary" arrow className="group">
          Talk to us
        </ButtonLink>
      </PageHero>

      {workspaces.map((w, i) => {
        const light = i % 2 === 1;
        return (
          <Section key={w.slug} id={w.slug} tone={light ? "cloud" : "ink"}>
            <div
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <Reveal>
                <Figure slot={w.image} sizes="(max-width: 1024px) 100vw, 50vw" />
              </Reveal>

              <Reveal delay={110}>
                <span className={cn("font-display text-eyebrow uppercase", light ? "text-steel" : "text-lime")}>
                  {w.number} — Workspace
                </span>
                <h2 className={cn("mt-4 text-h2", light ? "text-ink" : "text-cloud")}>{w.name}</h2>
                <p className={cn("mt-5 text-lead", light ? "text-steel" : "text-slate")}>{w.promise}</p>
                <p className={cn("mt-4 text-body", light ? "text-steel" : "text-slate")}>{w.description}</p>

                <h3 className={cn("mt-8 font-display text-eyebrow uppercase", light ? "text-ink" : "text-cloud")}>
                  Ideal for
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {w.idealFor.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "rounded-pill border px-4 py-1.5 text-small",
                        light ? "border-line-light text-steel" : "border-line-dark text-slate",
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <BookTourButton
                    label="Book a tour"
                    variant={light ? "secondaryLight" : "primary"}
                  />
                  {w.slug === "private-team-cabins" ? (
                    <ButtonLink href="/private-office" variant={light ? "linkLight" : "link"} arrow className="group">
                      Private office in Perinthalmanna
                    </ButtonLink>
                  ) : w.slug === "conference-room" ? (
                    <ButtonLink href="/meeting-room" variant={light ? "linkLight" : "link"} arrow className="group">
                      Book the meeting room
                    </ButtonLink>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <FinalCta />
    </>
  );
}
