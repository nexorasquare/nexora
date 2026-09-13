"use client";

import React, { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { site, whatsappLink } from "@/content/site";
import { workspaces } from "@/content/workspaces";

const interests = [
  ...workspaces.map((w) => w.name),
  "Nexora Meet (conference room)",
  "Virtual Office",
  "Business Community",
  "Other",
];

const inputClass =
  "w-full min-h-11 border border-line-dark bg-ink px-3.5 py-2.5 text-body text-cloud focus:border-lime focus:outline-none";

export function ContactForm() {
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\+?[0-9\s-]{10,15}$/.test(values.phone.trim())) next.phone = "Enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address, or leave it blank.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const lines = [
      `Hello ${site.name}, I would like to enquire about a workspace.`,
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
  };

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
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
            rows={4}
            value={values.message}
            onChange={set("message")}
            className={inputClass}
          />
        )}
      </Field>

      <div className="sm:col-span-2">
        <Button type="submit" variant="primary" arrow className="group w-full sm:w-auto">
          Send enquiry
        </Button>
        <p className="mt-3 text-small text-slate">
          Your details open a pre-filled WhatsApp message so we can reply straight away.
        </p>
      </div>
    </form>
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
