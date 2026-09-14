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
import { plans, nexoraMeet } from "@/content/plans";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Meeting Room in Perinthalmanna",
  description:
    "Book a professional meeting room in Perinthalmanna. Nexora Meet seats up to 10 with a presentation screen, high-speed Wi-Fi and reception support. Hourly bookings for members and non-members.",
  alternates: { canonical: "/meeting-room" },
};

const conference = workspaces.find((w) => w.slug === "conference-room");
const pod = workspaces.find((w) => w.slug === "private-meeting-pods");

const useCases: { icon: IconName; title: string; body: string }[] = [
  { icon: "handshake", title: "Client meetings", body: "A professional room near MarketCity Mall to meet clients, partners and investors." },
  { icon: "community", title: "Interviews", body: "A quiet, neutral space to interview candidates away from your own office." },
  { icon: "conference", title: "Presentations and training", body: "Screen, seating for ten and a layout that works for pitching, reviewing and teaching." },
  { icon: "spark", title: "Team offsites", body: "Bring a remote or distributed team together for a day of planning in one room." },
];

const faqs = [
  {
    q: "How many people does the meeting room in Perinthalmanna seat?",
    a: "Nexora Meet seats up to 10 people around a single table, with a presentation screen at one end. For one-to-one calls or interviews, private meeting pods are also available.",
  },
  {
    q: "Can I book the meeting room without being a member?",
    a: "Yes. Non-members can book by the hour. Members receive complimentary hours every month with their plan and a discounted rate beyond that.",
  },
  {
    q: "What equipment is included?",
    a: "A presentation screen, high-speed Wi-Fi, power at the table, whiteboard, air conditioning and access to the pantry. Reception can receive your guests.",
  },
  {
    q: "How do I book?",
    a: "Send a booking request through the form on this page or message us on WhatsApp with your preferred date and time. We confirm the same day.",
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

export default function MeetingRoomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Meeting Room in Perinthalmanna", path: "/meeting-room" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="Meeting room in Perinthalmanna"
        title="A professional meeting room, bookable by the hour"
        lead={`${nexoraMeet.name} seats up to 10 people with a presentation screen, high-speed Wi-Fi and reception support. Available to members and non-members near MarketCity Mall, Perinthalmanna.`}
      >
        <BookTourButton label="Book the meeting room" />
        <ButtonLink href="/plans#nexora-meet" variant="secondary" arrow className="group">
          Member hours
        </ButtonLink>
      </PageHero>

      <Section tone="cloud">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            {conference ? <Figure slot={conference.image} sizes="(max-width: 1024px) 100vw, 50vw" /> : null}
          </Reveal>
          <Reveal delay={110}>
            <SectionHeading
              tone="cloud"
              eyebrow={nexoraMeet.name}
              title="Meet. Present. Collaborate."
              lead={nexoraMeet.description}
            />
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {nexoraMeet.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-small text-steel">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-ink">
                    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading tone="ink" eyebrow="Use it for" title="One room, many kinds of meeting" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u, i) => (
            <li key={u.title}>
              <Reveal delay={i * 80} className="flex flex-col gap-4">
                <Icon name={u.icon} size={28} className="text-lime" />
                <h3 className="text-h3 text-cloud">{u.title}</h3>
                <p className="text-small text-slate">{u.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              tone="surface"
              eyebrow="Members"
              title="Complimentary hours with every plan"
              lead="Members get meeting room hours included each month, then a discounted hourly rate. Non-members book by the hour."
            />
            <table className="mt-8 w-full border border-line-dark text-left">
              <thead>
                <tr className="border-b border-line-dark">
                  <th scope="col" className="px-5 py-3 font-display text-eyebrow uppercase text-slate">Membership</th>
                  <th scope="col" className="px-5 py-3 font-display text-eyebrow uppercase text-slate">Hours / month</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.slug} className="border-b border-line-dark last:border-0">
                    <th scope="row" className="px-5 py-3.5 text-body font-normal text-cloud">{p.name}</th>
                    <td className="px-5 py-3.5 text-body text-slate">{p.meetHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-small text-slate">Rates are shared on enquiry.</p>
          </Reveal>
          <Reveal delay={110}>
            <SectionHeading
              tone="surface"
              eyebrow="Smaller meetings"
              title="Private meeting pods"
              lead={pod ? pod.description : "Quiet pods for calls, interviews and one-to-ones."}
            />
            {pod ? (
              <div className="mt-8">
                <Figure slot={pod.image} sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ) : null}
          </Reveal>
        </div>
      </Section>

      <Section tone="cloud">
        <SectionHeading tone="cloud" eyebrow="FAQ" title="Meeting room questions" />
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
          <Link href="/private-office" className="text-ink underline underline-offset-4">private office</Link>,{" "}
          <Link href="/virtual-office" className="text-ink underline underline-offset-4">virtual office</Link> and{" "}
          <Link href="/" className="text-ink underline underline-offset-4">coworking space</Link> in Perinthalmanna.
        </p>
      </Section>

      <FinalCta />
    </>
  );
}
