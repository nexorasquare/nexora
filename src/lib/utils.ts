import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The design system defines named font sizes (text-h2, text-eyebrow, ...).
 * tailwind-merge cannot know these are sizes rather than colours, so without
 * this it treats `text-h2 text-cloud` as a conflict and drops the size.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["eyebrow", "display", "h1", "h2", "h3", "lead", "body", "small"] },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
