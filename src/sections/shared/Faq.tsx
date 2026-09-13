"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone="surface">
      <SectionHeading tone="surface" eyebrow="FAQ" title="Frequently asked questions" />

      <ul className="mt-12 border-t border-line-dark">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <li key={faq.question} className="border-b border-line-dark">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-h3 text-cloud">{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 shrink-0 place-items-center border border-line-dark text-lime"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      {!isOpen ? (
                        <path d="M8 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      ) : null}
                    </svg>
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                <p className="max-w-3xl pb-7 text-body text-slate">{faq.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
