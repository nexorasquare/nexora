import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "secondaryLight" | "link" | "linkLight";

const base =
  "inline-flex items-center justify-center gap-2.5 min-h-11 font-display text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-lime text-ink px-7 py-3 rounded-pill hover:bg-lime-dim",
  secondary:
    "border border-cloud/35 text-cloud px-7 py-3 rounded-pill hover:border-cloud hover:bg-cloud hover:text-ink",
  secondaryLight:
    "border border-ink/25 text-ink px-7 py-3 rounded-pill hover:border-ink hover:bg-ink hover:text-cloud",
  link: "text-lime hover:text-cloud",
  linkLight: "text-ink hover:text-steel",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  /** Appends a right arrow, the house convention for forward actions. */
  arrow?: boolean;
};

export function Button({
  variant = "primary",
  className,
  children,
  arrow,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
      {arrow ? <Arrow /> : null}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  arrow,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const content = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  );
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
