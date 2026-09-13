"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { site, addressLines } from "@/content/site";
import { media } from "@/content/media";
import { nearbyByCategory, type NearbyPlace } from "@/content/nearby";
import { cn } from "@/lib/utils";

const MapComponent = dynamic(() => import("@/components/ui/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center border border-line-dark bg-surface">
      <span className="font-display text-eyebrow uppercase text-slate">Loading map</span>
    </div>
  ),
});

const categories = Object.keys(nearbyByCategory);

export function Location() {
  const [active, setActive] = useState<NearbyPlace | null>(null);
  const allPlaces = categories.flatMap((c) => nearbyByCategory[c]);

  return (
    <Section tone="surface" id="location">
      <SectionHeading
        tone="surface"
        eyebrow="Location"
        title="Your new business address in Perinthalmanna"
        lead="Strategically located with quick access to transport, hotels, hospitals, banks, shopping and everyday business essentials."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <div className="h-[420px] overflow-hidden border border-line-dark md:h-[560px]">
          <MapComponent
            locations={allPlaces}
            activeLocation={active}
            setActiveLocation={setActive}
            center={site.coordinates}
          />
        </div>

        <div className="flex flex-col">
          <div className="border border-line-dark">
            <Figure slot={media.exterior} sizes="(max-width: 1024px) 100vw, 40vw" className="!aspect-[16/10]" />
            <div className="p-6">
            <h3 className="text-h3 text-cloud">{site.name}</h3>
            <address className="mt-3 not-italic text-small text-slate">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-3 text-small text-slate">{site.hours}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.directionsLink} external variant="secondary" arrow className="group flex-1">
                Get directions
              </ButtonLink>
              <BookTourButton label="Book a visit" className="flex-1" />
            </div>
            </div>
          </div>

          <div className="mt-6 flex-1 overflow-y-auto border border-line-dark p-6 lg:max-h-[300px]">
            <h3 className="font-display text-eyebrow uppercase text-lime">Nearby</h3>
            <ul className="mt-4 flex flex-col gap-5">
              {categories.map((category) => (
                <li key={category}>
                  <p className="font-display text-eyebrow uppercase text-slate">{category}</p>
                  <ul className="mt-2 flex flex-col">
                    {nearbyByCategory[category].map((place) => (
                      <li key={place.id}>
                        <button
                          type="button"
                          onClick={() => setActive(place)}
                          aria-pressed={active?.id === place.id}
                          className={cn(
                            "flex min-h-11 w-full items-center justify-between gap-4 border-b border-line-dark text-left text-small transition-colors",
                            active?.id === place.id ? "text-lime" : "text-cloud hover:text-lime",
                          )}
                        >
                          <span>{place.name}</span>
                          <span className="shrink-0 text-slate">{place.dist}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
