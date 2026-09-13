import React from "react";
import { site, whatsappLink } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

/**
 * Persistent contact affordance. Sits above the mobile safe area so it never
 * covers content or a footer CTA.
 */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, I would like to know more about your workspaces.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-[80] inline-flex min-h-12 items-center gap-2.5 rounded-pill bg-lime px-4 py-3 text-ink shadow-lg transition-colors hover:bg-lime-dim sm:px-5"
    >
      <Icon name="whatsapp" size={20} />
      <span className="hidden font-display text-xs uppercase tracking-[0.14em] sm:inline">
        Chat with Nexora
      </span>
      <span className="sr-only sm:hidden">Chat with Nexora on WhatsApp</span>
    </a>
  );
}
