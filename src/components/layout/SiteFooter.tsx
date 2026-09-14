import React from "react";
import Link from "next/link";
import Image from "next/image";
import { site, addressLines, whatsappLink } from "@/content/site";
import { footerLinks } from "@/content/nav";
import { Icon } from "@/components/ui/Icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-dark bg-ink">
      <div className="mx-auto w-full max-w-shell px-gutter py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="relative h-16 w-64">
              <Image
                src="/images/logo-transparent-v2.webp"
                alt={`${site.name} logo`}
                fill
                sizes="256px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-5 font-display text-eyebrow uppercase text-lime">{site.tagline}</p>
            <p className="mt-3 max-w-xs text-small text-slate">{site.descriptor}</p>
            <p className="mt-1 text-small text-slate">
              {site.address.city}, {site.address.state}
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="font-display text-eyebrow uppercase text-cloud">
              Explore
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-small text-slate transition-colors hover:text-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="font-display text-eyebrow uppercase text-cloud">
              Services
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-small text-slate transition-colors hover:text-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-eyebrow uppercase text-cloud">Contact</h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2.5 text-small text-slate transition-colors hover:text-lime">
                  <Icon name="phone" size={17} />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.phoneSecondaryHref} className="inline-flex items-center gap-2.5 text-small text-slate transition-colors hover:text-lime">
                  <Icon name="phone" size={17} />
                  {site.phoneSecondaryDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hello ${site.name}, I would like to know more.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-small text-slate transition-colors hover:text-lime"
                >
                  <Icon name="whatsapp" size={17} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-small text-slate transition-colors hover:text-lime">
                  <Icon name="mail" size={17} />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-small text-slate transition-colors hover:text-lime"
                >
                  <Icon name="pin" size={17} />
                  Get directions
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-small text-slate">
                <Icon name="clock" size={17} className="mt-0.5 shrink-0" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-eyebrow uppercase text-cloud">Address</h2>
            <address className="mt-5 not-italic text-small text-slate">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2.5 text-small text-slate transition-colors hover:text-lime"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-slate">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-small text-slate transition-colors hover:text-lime">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
