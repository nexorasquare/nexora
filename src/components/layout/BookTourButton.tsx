"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { BookTourModal } from "./BookTourModal";
import { cta } from "@/content/nav";

/**
 * Self-contained tour trigger, so sections that use it can remain server
 * components rather than becoming client components just to hold modal state.
 */
export function BookTourButton({
  label = cta.primary,
  variant = "primary",
  className,
}: {
  label?: string;
  variant?: "primary" | "secondary" | "secondaryLight";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={variant} className={className} onClick={() => setOpen(true)}>
        {label}
      </Button>
      <BookTourModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
