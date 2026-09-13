import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { quickValue } from "@/content/services";

const icons: IconName[] = ["desk", "cabin", "address", "community"];

export function ValueStrip() {
  return (
    <Section tone="surface">
      <SectionHeading
        tone="surface"
        eyebrow="What you get"
        title="Everything you need to work and build"
      />

      <ul className="mt-12 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
        {quickValue.map((item, i) => (
          <li key={item.title} className="bg-surface">
            <Reveal delay={i * 70} className="flex h-full flex-col gap-4 p-7">
              <Icon name={icons[i]} size={30} className="text-lime" />
              <h3 className="text-h3 text-cloud">{item.title}</h3>
              <p className="text-small text-slate">{item.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
