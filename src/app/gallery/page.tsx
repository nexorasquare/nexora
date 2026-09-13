import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { FinalCta } from "@/sections/home/FinalCta";
import { galleryCategories } from "@/content/media";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Nexora Square: workspaces, private cabins, meeting spaces, community, amenities and events in Perinthalmanna.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Experience Nexora Square"
        lead="The spaces, the details and the people. Photography of the finished facility is being produced now."
      >
        <BookTourButton label="See it in person" />
      </PageHero>

      {galleryCategories.map((category, i) => (
        <Section key={category.name} tone={i % 2 === 0 ? "ink" : "surface"}>
          <div className="flex flex-col gap-2">
            <span className="font-display text-eyebrow uppercase text-lime">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="text-h2 text-cloud">{category.name}</h2>
            <p className="max-w-xl text-body text-slate">{category.blurb}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {category.shots.map((shot, j) => (
              <Reveal key={shot.label} delay={j * 100}>
                <Figure slot={shot} sizes="(max-width: 768px) 100vw, 50vw" />
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <FinalCta />
    </>
  );
}
