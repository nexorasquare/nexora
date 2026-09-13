import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FinalCta } from "@/sections/home/FinalCta";
import { amenityGroups } from "@/content/amenities";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "High-speed Wi-Fi, power backup, meeting facilities, printing, refreshments, secure access and a podcast space at Nexora Square, Perinthalmanna.",
};

const icons: Record<string, IconName> = {
  Workspace: "desk",
  Business: "reception",
  Technology: "wifi",
  Community: "community",
  Convenience: "coffee",
  Creative: "podcast",
};

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities"
        title="Everything you need. All in one place."
        lead="The infrastructure, services and everyday details that let you focus on the work."
      >
        <BookTourButton />
        <ButtonLink href="/workspaces" variant="secondary" arrow className="group">
          See workspaces
        </ButtonLink>
      </PageHero>

      {amenityGroups.map((group, i) => (
        <Section key={group.category} tone={i % 2 === 0 ? "cloud" : "ink"}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <span
                className={`grid h-12 w-12 place-items-center ${
                  i % 2 === 0 ? "bg-ink text-lime" : "bg-lime text-ink"
                }`}
              >
                <Icon name={icons[group.category]} size={23} />
              </span>
              <h2 className={`mt-5 text-h2 ${i % 2 === 0 ? "text-ink" : "text-cloud"}`}>
                {group.category}
              </h2>
            </Reveal>

            <Reveal delay={110}>
              <ul className="grid gap-px bg-current/10 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`flex min-h-16 items-center gap-3 p-5 ${
                      i % 2 === 0 ? "bg-cloud text-steel" : "bg-ink text-slate"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className={`shrink-0 ${i % 2 === 0 ? "text-ink" : "text-lime"}`}
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <FinalCta />
    </>
  );
}
