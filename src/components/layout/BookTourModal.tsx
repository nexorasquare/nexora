"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { whatsappLink } from "@/content/site";
import { workspaces } from "@/content/workspaces";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const interests = [
  ...workspaces.map((w) => w.name),
  "Nexora Meet (conference room)",
  "Virtual Office",
  "Business Community",
  "Other",
];

// 16px text stops iOS zooming into the field; min-h-12 keeps every target
// comfortably above the 44px touch minimum.
const inputClass =
  "w-full min-h-12 rounded-card border border-line-dark bg-ink px-4 py-3 text-[16px] leading-snug text-cloud placeholder:text-slate/60 focus:border-lime focus:outline-none";

export function BookTourModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    interest: interests[0],
    people: "",
    date: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  // Escape to close, Tab trapped inside, background scroll locked, and focus
  // returned to whatever opened the dialog.
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])",
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("input")?.focus();
    }, 60);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  const submit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const next: Record<string, string> = {};
      if (values.name.trim().length < 2) next.name = "Please enter your name.";
      if (!/^\+?[0-9\s-]{10,15}$/.test(values.phone.trim()))
        next.phone = "Enter a valid phone number.";
      setErrors(next);
      if (Object.keys(next).length) return;

      const lines = [
        "Hello Nexora Square, I would like to book a tour.",
        "",
        `Name: ${values.name.trim()}`,
        `Phone: ${values.phone.trim()}`,
        `Interested in: ${values.interest}`,
        values.people.trim() ? `Number of people: ${values.people.trim()}` : "",
        values.date ? `Preferred visit date: ${values.date}` : "",
      ].filter(Boolean);

      window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
      onClose();
    },
    [values, onClose],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/80 backdrop-blur-sm sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close dialog"
        tabIndex={-1}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      {/* Bottom sheet on phones, centred card from sm up. The sheet itself scrolls,
          so the header and the submit button stay put on every screen size. */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92dvh] w-full flex-col rounded-t-2xl border border-line-dark bg-surface sm:max-w-lg sm:rounded-card"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line-dark px-5 pb-4 pt-5 sm:px-7">
          <div>
            <p className="font-display text-eyebrow uppercase text-lime">Book a tour</p>
            <h2 id={titleId} className="mt-1 text-h3 text-cloud">
              Come and see the space
            </h2>
            <p className="mt-1 text-small text-slate">Takes a minute. We reply on WhatsApp.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-2 -mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-pill text-slate hover:bg-ink hover:text-cloud"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={submit} noValidate className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7">
            <div className="grid gap-4">
              <Field label="Your name" required error={errors.name}>
                {(id, describedBy) => (
                  <input
                    id={id}
                    value={values.name}
                    onChange={set("name")}
                    autoComplete="name"
                    autoCapitalize="words"
                    aria-describedby={describedBy}
                    className={inputClass}
                  />
                )}
              </Field>

              <Field label="Phone / WhatsApp" required error={errors.phone}>
                {(id, describedBy) => (
                  <input
                    id={id}
                    type="tel"
                    inputMode="tel"
                    value={values.phone}
                    onChange={set("phone")}
                    autoComplete="tel"
                    placeholder="+91"
                    aria-describedby={describedBy}
                    className={inputClass}
                  />
                )}
              </Field>

              <Field label="I'm interested in">
                {(id) => (
                  <select
                    id={id}
                    value={values.interest}
                    onChange={set("interest")}
                    className={cn(inputClass, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M4 6l4 4 4-4%22 stroke=%22%237C7C7C%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")}
                  >
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Number of people">
                  {(id) => (
                    <input
                      id={id}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={values.people}
                      onChange={set("people")}
                      className={inputClass}
                    />
                  )}
                </Field>
                <Field label="Preferred visit date">
                  {(id) => (
                    <input
                      id={id}
                      type="date"
                      value={values.date}
                      onChange={set("date")}
                      className={cn(inputClass, "[color-scheme:dark]")}
                    />
                  )}
                </Field>
              </div>
            </div>
          </div>

          <div className="border-t border-line-dark px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-4 sm:px-7 sm:pb-6">
            <Button type="submit" variant="primary" arrow className="group w-full">
              Send on WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: (id: string, describedBy: string | undefined) => React.ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block font-display text-eyebrow uppercase text-slate">
        {label}
        {required ? <span className="text-lime"> *</span> : null}
      </label>
      {children(id, error ? errorId : undefined)}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-small text-lime">
          {error}
        </p>
      ) : null}
    </div>
  );
}
