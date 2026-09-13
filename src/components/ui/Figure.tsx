import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageSlot } from "@/content/media";

const ratioClass: Record<ImageSlot["ratio"], string> = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
};

/**
 * Renders a real photograph when one exists, and an explicitly labelled brand
 * placeholder when it does not. Real facility photography is still pending, so
 * every slot reserves its final aspect ratio now - dropping images in later
 * causes no layout shift.
 */
export function Figure({
  slot,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  /** Background slots fill their parent and drop the placeholder caption, which
   *  would otherwise compete with the headline sitting on top of them. */
  background,
}: {
  slot: ImageSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  background?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface",
        background ? "h-full w-full" : cn("w-full", ratioClass[slot.ratio]),
        className,
      )}
    >
      {slot.src ? (
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : background ? (
        <div className="absolute inset-0 bg-surface" aria-hidden="true" />
      ) : (
        <Placeholder label={slot.label} />
      )}
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Photography pending: ${label}`}
      className="absolute inset-0 grid place-items-center border border-line-dark bg-surface grid-texture"
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-lime/60">
          <rect x="2.75" y="4.75" width="18.5" height="14.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M2.75 15.5l5-4.5 4.5 4 3.5-3 5.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="9.25" r="1.4" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <p className="font-display text-eyebrow uppercase text-slate">Photography pending</p>
        <p className="max-w-[24ch] text-small text-slate/70">{label}</p>
      </div>
    </div>
  );
}
