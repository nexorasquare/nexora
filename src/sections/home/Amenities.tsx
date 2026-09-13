import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { amenityGroups } from "@/content/amenities";

const icons: Record<string, IconName> = {
  Workspace: "desk",
  Business: "reception",
  Technology: "wifi",
  Community: "community",
  Convenience: "coffee",
  Creative: "podcast",
};

export function Amenities() {
  return (
    <Section tone="cloud" id="amenities">
      <SectionHeading
        tone="cloud"
        eyebrow="Amenities"
        title="Everything you need. All in one place."
      />

      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {amenityGroups.map((group, i) => (
          <li key={group.category}>
            <Reveal delay={(i % 3) * 90} className="flex h-full flex-col border border-line-light p-7">
              <span className="grid h-11 w-11 place-items-center bg-ink text-lime">
                <Icon name={icons[group.category]} size={21} />
              </span>
              <h3 className="mt-5 text-h3 text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-small text-steel">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-ink">
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>

      <ButtonLink href="/amenities" variant="secondaryLight" arrow className="group mt-12">
        See all amenities
      </ButtonLink>
    </Section>
  );
}
