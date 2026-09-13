"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { site, whatsappLink } from "@/content/site";
import { workspaces } from "@/content/workspaces";
import { Button } from "@/components/ui/Button";

const interests = [
  ...workspaces.map((w) => w.name),
  "Nexora Meet (conference room)",
  "Virtual Office",
  "Business Community",
  "Other",
];

const inputClass =
  "w-full min-h-11 border border-line-dark bg-ink px-3.5 py-2.5 text-body text-cloud focus:border-lime focus:outline-none";

export function BookTourModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    interest: interests[0],
    people: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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
      dialogRef.current?.querySelector<HTMLElement>("input, select, textarea")?.focus();
    }, 40);

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
      if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
        next.email = "Enter a valid email address, or leave it blank.";
      setErrors(next);
      if (Object.keys(next).length) return;

      const lines = [
        "Hello Nexora Square, I would like to book a tour.",
        "",
        `Name: ${values.name.trim()}`,
        `Phone: ${values.phone.trim()}`,
        values.email.trim() ? `Email: ${values.email.trim()}` : "",
        `Interested in: ${values.interest}`,
        values.people.trim() ? `Number of people: ${values.people.trim()}` : "",
        values.date ? `Preferred visit date: ${values.date}` : "",
        values.message.trim() ? `Message: ${values.message.trim()}` : "",
      ].filter(Boolean);

      window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
      onClose();
    },
    [values, onClose],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-ink/80 backdrop-blur-sm sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close dialog"
        tabIndex={-1}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-xl border border-line-dark bg-surface p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-display text-eyebrow uppercase text-lime">{site.tagline}</p>
            <h2 id={titleId} className="mt-2 text-h3 text-cloud">
              Book a tour
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-11 w-11 shrink-0 place-items-center text-slate hover:text-cloud"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="mt-3 text-small text-slate">
          Send us the details and we will continue the conversation on WhatsApp.
        </p>

        <form onSubmit={submit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Name" required error={errors.name} className="sm:col-span-2">
            {(id, describedBy) => (
              <input
                id={id}
                value={values.name}
                onChange={set("name")}
                autoComplete="name"
                aria-describedby={describedBy}
                className={inputClass}
              />
            )}
          </Field>

          <Field label="Phone" required error={errors.phone}>
            {(id, describedBy) => (
              <input
                id={id}
                type="tel"
                value={values.phone}
                onChange={set("phone")}
                autoComplete="tel"
                aria-describedby={describedBy}
                className={inputClass}
              />
            )}
          </Field>

          <Field label="Email" error={errors.email}>
            {(id, describedBy) => (
              <input
                id={id}
                type="email"
                value={values.email}
                onChange={set("email")}
                autoComplete="email"
                aria-describedby={describedBy}
                className={inputClass}
              />
            )}
          </Field>

          <Field label="Interested in">
            {(id) => (
              <select id={id} value={values.interest} onChange={set("interest")} className={inputClass}>
                {interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            )}
          </Field>

          <Field label="Number of people">
            {(id) => (
              <input
                id={id}
                inputMode="numeric"
                value={values.people}
                onChange={set("people")}
                className={inputClass}
              />
            )}
          </Field>

          <Field label="Preferred visit date" className="sm:col-span-2">
            {(id) => (
              <input id={id} type="date" value={values.date} onChange={set("date")} className={inputClass} />
            )}
          </Field>

          <Field label="Message" className="sm:col-span-2">
            {(id) => (
              <textarea
                id={id}
                rows={3}
                value={values.message}
                onChange={set("message")}
                className={inputClass}
              />
            )}
          </Field>

          <div className="mt-2 sm:col-span-2">
            <Button type="submit" variant="primary" arrow className="group w-full sm:w-auto">
              Send enquiry
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
