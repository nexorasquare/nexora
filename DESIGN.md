# Nexora Square — Website Design System

**Brand line:** WORK. CONNECT. INNOVATE.
**Positioning:** Perinthalmanna's premium workspace and business community.
**Stack:** Next.js 16 (App Router), React 19, Tailwind v4. No component library, no animation library.

This document is the reference for how the site looks and behaves, and where each decision lives in code. Everything below is enforced by tokens and shared components rather than by convention, so following it mostly means using the primitives in `src/components/ui/`.

---

## 1. Colour

Sampled from the official swatch row in `refer/LOGO3-01.png`. Defined once in `src/app/globals.css` under `@theme`; never write a raw hex in a component.

| Token | Hex | Role |
|---|---|---|
| `ink` | `#060B0F` | Dominant dark background. Header, footer, hero, most sections. |
| `surface` | `#10171F` | Raised dark surfaces: cards, alternate dark sections, form fields' parent. |
| `lime` | `#99D508` | Brand green. **Accent only** — CTAs, eyebrows, icons, active states. |
| `lime-dim` | `#7CAE06` | Hover state for lime fills. |
| `steel` | `#666666` | Body text on light backgrounds. |
| `slate` | `#7C7C7C` | Body text on dark backgrounds. |
| `cloud` | `#F4F5F6` | Light section background; primary text on dark. |
| `line-dark` / `line-light` | 12% cloud / 12% ink | Hairline borders on dark / light. |

### Contrast rules (measured, non-negotiable)

| Pair | Ratio | Verdict |
|---|---|---|
| lime on ink | 11.1 : 1 | Lime text is safe **on dark only** |
| lime on cloud | 1.65 : 1 | **Never** lime text or thin lime icons on light. On light, lime is a fill behind ink text, or a large block. |
| cloud on ink | 18.3 : 1 | Primary text on dark |
| slate on ink | 5.2 : 1 | Body text on dark (AA) |
| steel on cloud | 5.35 : 1 | Body text on light (AA) |
| steel on ink | 3.4 : 1 | Large text only |
| slate on cloud | 3.5 : 1 | Large text only |

**Balance:** dark dominant, cloud supporting, lime strategic. If a screen is more than ~10% lime, it is too much.

---

## 2. Typography

Loaded via `next/font/google` in `src/app/layout.tsx`, `display: swap`. Only five weights ship.

| Role | Font | Weights | Token |
|---|---|---|---|
| Display, headings, numerals, nav, labels | **Space Grotesk** | 500, 700 | `font-display` |
| Body, descriptions, form text | **Raleway** | 400, 500, 600 | `font-body` (default on `html`) |

### Type scale (fluid, `clamp()`)

| Utility | Size | Line | Tracking | Use |
|---|---|---|---|---|
| `text-display` | 2.75–6rem | 0.95 | −0.03em | Hero headline only |
| `text-h1` | 2.25–4rem | 1.05 | −0.025em | Page titles, Final CTA |
| `text-h2` | 1.875–3rem | 1.1 | −0.02em | Section titles |
| `text-h3` | 1.25–1.75rem | 1.2 | −0.01em | Card titles |
| `text-lead` | 1.06–1.25rem | 1.6 | — | Section intros |
| `text-body` | 1rem | 1.65 | — | Paragraphs, form inputs |
| `text-small` | 0.875rem | 1.6 | — | Card copy, captions |
| `text-eyebrow` | 0.75rem | 1.2 | +0.22em | Uppercase labels above headings |

Principles: large headlines, short paragraphs, generous line height, uppercase reserved for eyebrows and buttons. Body text never below 16px in forms (stops iOS zoom).

> **Gotcha:** these named sizes are registered with `tailwind-merge` in `src/lib/utils.ts`. Without that, `cn("text-h2", "text-cloud")` silently drops the size. If you add a new named size, add it there too.

---

## 3. Spacing and layout

| Token | Value | Use |
|---|---|---|
| `py-section` | 4.5–8.5rem fluid | Vertical padding of every section |
| `px-gutter` | 1.25–3rem fluid | Horizontal page padding |
| `max-w-shell` | 1440px | Content container |
| `rounded-card` | 4px | Cards, inputs. Deliberately tight — architectural, not bubbly |
| `rounded-pill` | 999px | Buttons only |

Grids use hairline gaps (`gap-px` + `bg-line-dark`) so cards read as one architectural block rather than floating tiles.

**Breakpoints:** mobile-first. Tested at 375, 768, 1024, 1280, 1440. Desktop nav appears at `xl` (1280); below that the hamburger sheet is used. No horizontal scroll at any width.

---

## 4. Section rhythm

Every section is a `<Section tone="…">` from `src/components/ui/Section.tsx`. The `tone` prop sets background *and* text colours so the contrast rules above hold by construction.

| Tone | Background | Text | Used for |
|---|---|---|---|
| `ink` | ink | cloud / slate | Hero, workspaces, community, gallery, final CTA |
| `surface` | surface | cloud / slate | Value strip, why-us, location, FAQ, Nexora Meet |
| `cloud` | cloud | ink / steel | Intro, virtual office, amenities, audiences — the editorial "breaths" |
| `lime` | lime | ink | Services ticker only |

The homepage deliberately alternates dark → dark → light → dark → light… so the page feels editorial rather than one long dark scroll. Do not put two cloud sections back to back.

---

## 5. Components

All in `src/components/ui/` unless noted.

**Button / ButtonLink** — `primary` (lime fill, ink text), `secondary` (cloud outline, for dark), `secondaryLight` (ink outline, for light), `link` / `linkLight` (text + arrow). All uppercase Space Grotesk, 44px minimum height. Add `arrow` and the `group` class for the sliding arrow.

**SectionHeading / Eyebrow** — eyebrow + title + lead, tone-aware. Use for every section opener so hierarchy is consistent.

**PageHero** — inner-page opener with the grid texture. Carries top padding for the fixed header.

**Figure** — every image goes through this. Takes an `ImageSlot` from `src/content/media.ts`; renders `next/image` at the slot's aspect ratio, or a labelled "Photography pending" placeholder when `src` is null. `background` mode fills the parent and drops the caption. Swapping a photo is a one-line content edit and causes no layout shift.

**Icon** — thin-line geometric set, 1.4 stroke, `currentColor`. Matches the brand guide's technical icon style. No emoji, no multicolour, no filled icons.

**Reveal** — fade-and-rise on first scroll into view, IntersectionObserver, ~40 lines. Disabled by the global reduced-motion rule.

**Layout (`src/components/layout/`)** — `SiteHeader` (fixed, transparent over hero, solid after 24px scroll, mobile sheet with focus trap), `SiteFooter`, `WhatsAppFab` (persistent, safe-area aware), `BookTourModal` + `BookTourButton`.

---

## 6. Forms and the booking modal

There is no backend. Every form builds a pre-filled WhatsApp message and opens `wa.me/919946620909`. The number lives in one place: `src/content/site.ts`.

**BookTourModal** rules, learned the hard way:
- **Portalled to `<body>`.** Sections like the hero use `isolate`; a modal rendered inside them is trapped beneath the fixed header regardless of z-index.
- **Sized from `visualViewport`** on phones. iOS Safari scrolls the page rather than resizing fixed elements when the keyboard opens; a bottom-anchored sheet ends up half off-screen. The sheet is top-anchored, height = visual viewport height, and the submit button is pinned at the bottom of the visible area.
- Five fields only (name, phone, interest, people, date). 48px inputs at 16px text. Real `<label for>`, inline errors with `role="alert"`, focus trap, Escape closes, focus returns to the trigger.
- Native `<select>` option lists are forced to the dark scheme in `globals.css`.

---

## 7. Motion

Brief: subtle and sophisticated, never a showcase. Everything is CSS.

- Section content: `Reveal` — 700ms fade + 20px rise, once, staggered 70–110ms across a row.
- Buttons: 200ms colour transitions, arrow slides 4px on hover.
- Cards: border colour shifts to lime on hover. No lift, no shadow, no scale.
- Services ticker: 38s linear loop, pauses on hover.
- **`prefers-reduced-motion`:** a single global rule in `globals.css` zeroes every animation and transition. Nothing needs per-component handling.

Avoid: bouncing, spinning, parallax, glassmorphism, neon glows, gradient text. The previous site had all of these and they were removed on purpose.

---

## 8. Imagery

Direction from the brief: premium architectural + authentic lifestyle; Indian professionals; natural light, plants, glass, warm wood, charcoal, lime details. Avoid generic stock and empty rooms everywhere.

**Pipeline:** camera originals live in `refer/photos/` (git-ignored). Site assets are WebP in `public/images/facility/`, produced with `sharp` at the slot's exact aspect ratio, quality 76–82, typically 45–160 KB. Portrait originals are centre-cropped to landscape, which also crops out ceiling cabling.

**Slots** are declared in `src/content/media.ts` and `src/content/workspaces.ts`. Three are still placeholders: podcast/content space, lounge candid, coffee station.

**Honesty note:** several current images are AI renders (hero, community, workshop, and the building exterior used in Virtual Office and Location). The About page labels its render as a concept; the others are presented as-is by decision of the owner. Replace with real photography as it becomes available — every slot is a one-line swap.

---

## 9. Content layer

`src/content/` is the single source of truth. Components never hard-code copy, numbers, or addresses.

| File | Holds |
|---|---|
| `site.ts` | Name, tagline, phones, WhatsApp, email, address, hours, maps and directions links, coordinates |
| `nav.ts` | Navigation and footer links, CTA labels |
| `workspaces.ts` | The six workspace types |
| `plans.ts` | Membership tiers, Nexora Meet, virtual office packages (no prices, by decision) |
| `services.ts` | Value strip, virtual office features, community benefits, why-us, experience, audiences |
| `amenities.ts`, `faq.ts`, `nearby.ts`, `media.ts` | As named |

Changing the phone number, address, or a workspace name is a one-file edit that propagates everywhere, including JSON-LD.

---

## 10. Routes

| Route | Tone pattern |
|---|---|
| `/` | Hero → lime ticker → surface → cloud → ink → cloud → ink → surface → cloud → ink → cloud → ink → surface → ink |
| `/workspaces` | PageHero, then alternating ink/cloud per workspace |
| `/plans` | ink (individual) → cloud (team) → surface (Nexora Meet) |
| `/virtual-office` | cloud (services) → surface (packages) → ink (support) |
| `/community`, `/amenities`, `/about`, `/gallery`, `/contact` | Alternating, each ends in Final CTA except Contact (ends in map) |
| `/facilities`, `/location` | Redirects (old indexed URLs) |

---

## 11. Accessibility checklist (all currently passing)

- One `<h1>` per page, no heading-level skips
- Visible lime focus ring on every interactive element (`:focus-visible` in globals) — never removed
- 44px minimum touch targets; 48px in forms
- All contrast pairs at AA or better (see §1)
- Skip-to-content link, `aria-current` on active nav, labelled landmarks
- Modal: `role="dialog"`, `aria-modal`, `aria-labelledby`, focus trap, Escape, focus restore
- Every image has alt text from the content layer; placeholders announce "Photography pending"
- Reduced motion respected globally

---

## 12. Performance posture

- Dependencies: 8 (down from 24). No GSAP, Framer Motion, Lenis, Three.js.
- Server components by default; `"use client"` only on header, modal, forms, map, Reveal, FAQ.
- Leaflet map is `dynamic({ ssr: false })` and below the fold.
- Fonts: two families, five weights, `swap`.
- Images: WebP, explicit aspect ratios (no CLS), `sizes` set per placement, hero `priority`.
- `public/images` is 3 MB total.
