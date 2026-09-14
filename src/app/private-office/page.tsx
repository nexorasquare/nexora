import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/schema";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import { ButtonLink } from "@/components/ui/Button";
import { BookTourButton } from "@/components/layout/BookTourButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FinalCta } from "@/sections/home/FinalCta";
import { workspaces } from "@/content/workspaces";
import { plans } from "@/content/plans";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Private Office in Perinthalmanna",
  description:
    "Private office space in Perinthalmanna for teams of 4 to 6. Fully enclosed cabins with dedicated workstations, high-speed Wi-Fi, meeting room hours and a professional business address at Nexora Square.",
  alternates: { canonical: "/private-office" },
};

const cabin = workspaces.find((w) => w.slug === "private-team-cabins");
const dedicated = workspaces.find((w) => w.slug === "dedicated-workstations");
const teamPlans = plans.filter((p) => p.group === "team");

const benefits: { icon: IconName; title: string; body: string }[] = [
  { icon: "cabin", title: "Fully enclosed", body: "Glass-walled private cabins with their own door and lock. Your team, your space." },
  { icon: "desk", title: "Ready on day one", body: "Ergonomic chairs, workstations, storage, power and Wi-Fi already in place. Move in and start." },
  { icon: "conference", title: "Meeting hours included", body: "Private team plans include monthly conference room hours for client meetings and reviews." },
  { icon: "address", title: "A business address", body: "Use Nexora Square as your registered business address for correspondence and marketing." },
  { icon: "shield", title: "Secure and managed", body: "Access control, CCTV, reception and daily housekeeping, so nothing distracts from the work." },
  { icon: "grow", title: "Room to grow", body: "Start with a four-seat cabin and move up to six without changing your address." },
];

const faqs = [
  {
    q: "What sizes of private office are available in Perinthalmanna?",
    a: "Nexora Square offers private team cabins for 4 and for 6 people. Larger teams can combine cabins or take dedicated workstations in the open workspace alongside a cabin.",
  },
  {
    q: "Is the private office furnished?",
    a: "Yes. Every cabin comes with workstations, ergonomic chairs, storage, power and high-speed Wi-Fi. There is nothing to buy or set up.",
  },
  {
    q: "Can I use the private office address for my company registration?",
    a: "Team plans include business address usage. We can support the workspace and address requirements involved in registration and related formalities.",
  },
  {
    q: "What is the minimum commitment?",
    a: "Private team cabins are available on monthly plans. Talk to us about longer terms if you would like a fixed rate.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PrivateOfficePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Private Office in Perinthalmanna", path: "/private-office" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="Private office in Perinthalmanna"
        title="A private office for your team, without the overheads of your own premises"
        lead="Fully enclosed team cabins near MarketCity Mall, Perinthalmanna. Furnished, secure and ready to move into, with meeting room hours and a business address included."
      >
        <BookTourButton />
        <ButtonLink href="/plans" variant="secondary" arrow className="group">
          See team plans
        </ButtonLink>
      </PageHero>

      <Section tone="cloud">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            {cabin ? <Figure slot={cabin.image} sizes="(max-width: 1024px) 100vw, 50vw" /> : null}
          </Reveal>
          <Reveal delay={110}>
            <SectionHeading
              tone="cloud"
              eyebrow="Private team cabins"
              title="Private office space built for focused teams"
              lead="Startups, IT teams, agencies and growing businesses in Perinthalmanna use Nexora Square's private cabins as a professional office without a long lease, a fit-out, or a facilities headache."
            />
            <p className="mt-5 text-body text-steel">
              Each cabin is glass-walled for light, closed for privacy, and sits inside a managed
              workspace with reception, pantry, meeting rooms and a business community on the other
              side of the door.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading tone="ink" eyebrow="What is included" title="Everything a private office needs" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={(i % 3) * 90} className="flex flex-col gap-4">
                <Icon name={b.icon} size={28} className="text-lime" />
                <h3 className="text-h3 text-cloud">{b.title}</h3>
                <p className="text-small text-slate">{b.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading tone="surface" eyebrow="Options" title="Choose your private office" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {teamPlans.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <article className="flex h-full flex-col border border-line-dark bg-ink p-7">
                <h3 className="text-h3 text-cloud">{p.name}</h3>
                <p className="mt-2 text-body font-medium text-cloud">{p.tagline}</p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-line-dark pt-6">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-small text-slate">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-lime">
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <BookTourButton label="Enquire" className="w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {dedicated ? (
          <p className="mt-8 text-small text-slate">
            Working solo? A{" "}
            <Link href="/workspaces#dedicated-workstations" className="text-lime underline-offset-4 hover:underline">
              dedicated workstation
            </Link>{" "}
            gives you your own desk in the shared workspace at a lower cost than a cabin.
          </p>
        ) : null}
      </Section>

      <Section tone="cloud">
        <SectionHeading tone="cloud" eyebrow="FAQ" title="Private office questions" />
        <dl className="mt-10 grid gap-8 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="border-t border-line-light pt-5">
              <dt className="text-h3 text-ink">{f.q}</dt>
              <dd className="mt-3 text-body text-steel">{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-small text-steel">
          Nexora Square is at {site.address.line1}, {site.address.city}. Also see our{" "}
          <Link href="/meeting-room" className="text-ink underline underline-offset-4">meeting room</Link>,{" "}
          <Link href="/virtual-office" className="text-ink underline underline-offset-4">virtual office</Link> and{" "}
          <Link href="/workspaces" className="text-ink underline underline-offset-4">office space</Link> options in Perinthalmanna.
        </p>
      </Section>

      <FinalCta />
    </>
  );
}
