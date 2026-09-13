import React from "react";
import { cn } from "@/lib/utils";

export type Tone = "ink" | "surface" | "cloud" | "lime";

const toneClass: Record<Tone, string> = {
  ink: "bg-ink text-cloud",
  surface: "bg-surface text-cloud",
  cloud: "bg-cloud text-ink",
  lime: "bg-lime text-ink",
};

export function Section({
  tone = "ink",
  id,
  className,
  containerClassName,
  children,
  as: Tag = "section",
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag id={id} className={cn("relative py-section", toneClass[tone], className)}>
      <div className={cn("mx-auto w-full max-w-shell px-gutter", containerClassName)}>{children}</div>
    </Tag>
  );
}

/** True when the section background is light, so children can pick readable colours. */
export function isLight(tone: Tone) {
  return tone === "cloud" || tone === "lime";
}
