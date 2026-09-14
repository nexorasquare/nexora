import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { Icon } from "@/components/ui/Icon";
import { FinalCta } from "@/sections/home/FinalCta";
import { plans, nexoraMeet, type Plan } from "@/content/plans";
import { workspaces } from "@/content/workspaces";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Flexible, dedicated and premium memberships plus private team cabins at Nexora Square, Perinthalmanna. Find the workspace that fits the way you work.",
};

const individual = plans.filter((p) => p.group === "individual");
const team = plans.filter((p) => p.group === "team");
const conferenceRoom = workspaces.find((w) => w.slug === "conference-room");

function Check({ light }: { light: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("mt-1 shrink-0", light ? "text-ink" : "text-lime")}
    >
      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan, light }: { plan: Plan; light: boolean }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col border p-7",
        light ? "border-line-light bg-cloud" : "border-line-dark bg-surface",
        plan.featured && (light ? "border-ink" : "border-lime/60"),
      )}
    >
      {plan.featured ? (
        <span className={cn("mb-4 inline-block self-start px-2.5 py-1 font-display text-eyebrow uppercase", light ? "bg-ink text-lime" : "bg-lime text-ink")}>
          Most popular
        </span>
      ) : null}
      <h3 className={cn("text-h3", light ? "text-ink" : "text-cloud")}>{plan.name}</h3>
      <p className={cn("mt-2 text-body font-medium", light ? "text-ink" : "text-cloud")}>{plan.tagline}</p>
      <p className={cn("mt-3 text-small", light ? "text-steel" : "text-slate")}>{plan.audience}</p>

      <ul className={cn("mt-6 flex flex-col gap-2.5 border-t pt-6", light ? "border-line-light" : "border-line-dark")}>
        {plan.includes.map((item) => (
          <li key={item} className={cn("flex items-start gap-2.5 text-small", light ? "text-steel" : "text-slate")}>
            <Check light={light} />
            {item}
          </li>
        ))}
      </ul>

      <div className={cn("mt-auto border-t pt-6", light ? "border-line-light" : "border-line-dark")}>
        <p className={cn("font-display text-eyebrow uppercase", light ? "text-steel" : "text-slate")}>Pricing</p>
        <p className={cn("mt-1 text-body", light ? "text-ink" : "text-cloud")}>Enquire for current rates and offers</p>
        <div className="mt-5">
          <BookTourButton label="Enquire" variant={light ? "secondaryLight" : "primary"} className="w-full" />
        </div>
      </div>
    </article>
  );
}

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership and workspace plans"
        title="Find the workspace that fits the way you work"
        lead="Flexible memberships for individuals, private cabins for teams, and a professional conference room available to everyone."
      >
        <BookTourButton />
        <ButtonLink href="/workspaces" variant="secondary" arrow className="group">
          See the spaces
        </ButtonLink>
      </PageHero>

      <Section tone="ink">
        <SectionHeading tone="ink" eyebrow="Flexible memberships" title="Individual spaces" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {individual.map((plan, i) => (
            <Reveal key={plan.slug} delay={i * 90}>
              <PlanCard plan={plan} light={false} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cloud">
        <SectionHeading tone="cloud" eyebrow="Private team spaces" title="Team cabins" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((plan, i) => (
            <Reveal key={plan.slug} delay={i * 90}>
              <PlanCard plan={plan} light />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface" id="nexora-meet">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              tone="surface"
              eyebrow={`${nexoraMeet.name} · ${nexoraMeet.capacity}`}
              title={nexoraMeet.tagline}
              lead={nexoraMeet.description}
            />
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {nexoraMeet.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-small text-slate">
                  <Check light={false} />
                  {f}
                </li>
              ))}
            </ul>
            {conferenceRoom ? (
              <div className="mt-8">
                <Figure slot={conferenceRoom.image} sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={110}>
            <div className="border border-line-dark">
              <div className="flex items-center gap-4 border-b border-line-dark p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-lime text-ink">
                  <Icon name="conference" size={21} />
                </span>
                <div>
                  <h3 className="text-h3 text-cloud">Complimentary hours for members</h3>
                  <p className="mt-1 text-small text-slate">Included every month with your plan.</p>
                </div>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-line-dark">
                    <th scope="col" className="px-6 py-3 font-display text-eyebrow uppercase text-slate">Membership</th>
                    <th scope="col" className="px-6 py-3 font-display text-eyebrow uppercase text-slate">Hours / month</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((p) => (
                    <tr key={p.slug} className="border-b border-line-dark last:border-0">
                      <th scope="row" className="px-6 py-4 text-body font-normal text-cloud">{p.name}</th>
                      <td className="px-6 py-4 text-body text-slate">{p.meetHours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6">
                <p className="text-small text-slate">
                  Additional hours for members and hourly bookings for non-members are available.
                  Enquire for current rates.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <BookTourButton label="Book Nexora Meet" className="flex-1" />
                  <ButtonLink href="/meeting-room" variant="secondary" arrow className="group flex-1">
                    Meeting room details
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
