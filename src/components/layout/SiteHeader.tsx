"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, cta } from "@/content/nav";
import { site } from "@/content/site";
import { Button, ButtonLink } from "@/components/ui/Button";
import { BookTourModal } from "./BookTourModal";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Sync the initial value on the next frame rather than synchronously here,
    // so a page loaded part-way down still gets the solid header.
    const frame = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mobile sheet: lock scroll, trap Tab, close on Escape, restore focus.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = sheetRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
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
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:bg-lime focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-colors duration-300",
          scrolled || menuOpen
            ? "border-b border-line-dark bg-ink/95 backdrop-blur"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-shell items-center justify-between px-gutter">
          <Link href="/" aria-label={`${site.name} home`} className="relative block h-11 w-48 shrink-0 md:h-14 md:w-60">
            <Image
              src="/images/logo-transparent-v2.webp"
              alt={`${site.name} logo`}
              fill
              sizes="(max-width: 768px) 192px, 240px"
              priority
              className="object-contain object-left"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "font-display text-xs uppercase tracking-[0.16em] transition-colors duration-200",
                  isActive(link.href) ? "text-lime" : "text-slate hover:text-cloud",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              onClick={() => setTourOpen(true)}
              className="hidden px-5 text-xs md:inline-flex"
            >
              {cta.primary}
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center text-cloud xl:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet sheet */}
      <div
        id="mobile-menu"
        ref={sheetRef}
        hidden={!menuOpen}
        className="fixed inset-0 top-20 z-[85] flex flex-col overflow-y-auto bg-ink px-gutter pb-10 pt-8 xl:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "border-b border-line-dark py-4 font-display text-2xl tracking-tight",
                isActive(link.href) ? "text-lime" : "text-cloud",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <Button
            variant="primary"
            onClick={() => {
              setMenuOpen(false);
              setTourOpen(true);
            }}
            className="w-full"
          >
            {cta.primary}
          </Button>
          <ButtonLink href={site.phoneHref} variant="secondary" external className="w-full">
            {site.phoneDisplay}
          </ButtonLink>
        </div>
      </div>

      <BookTourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </>
  );
}
