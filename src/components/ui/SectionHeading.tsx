import React from "react";
import { cn } from "@/lib/utils";
import { isLight, type Tone } from "./Section";

export function Eyebrow({ children, tone = "ink" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <p
      className={cn(
        "font-display text-eyebrow uppercase",
        tone === "lime" ? "text-ink/70" : isLight(tone) ? "text-steel" : "text-lime",
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "ink",
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Tag className={cn("text-h2", isLight(tone) ? "text-ink" : "text-cloud")}>{title}</Tag>
      {lead ? (
        <p
          className={cn(
            "max-w-2xl text-lead",
            tone === "lime" ? "text-ink/80" : isLight(tone) ? "text-steel" : "text-slate",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
