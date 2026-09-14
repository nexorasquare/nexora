import { site, addressLines } from "@/content/site";
import { workspaces } from "@/content/workspaces";
import { plans, nexoraMeet, virtualOfficePackages } from "@/content/plans";
import { amenityGroups } from "@/content/amenities";
import { faqs } from "@/content/faq";

export const dynamic = "force-static";

/**
 * llms.txt - a plain-text summary of the site for AI assistants and crawlers,
 * built from the same content layer as the pages so it cannot drift.
 * Spec: https://llmstxt.org
 */
export function GET() {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.positioning}`,
    "",
    `${site.name} is a coworking space and business community in ${site.address.city}, ${site.address.district}, ${site.address.state}, India. Brand line: ${site.tagline}`,
    "",
    "## Contact",
    "",
    `- Phone / WhatsApp: ${site.phoneDisplay}`,
    `- Alternate phone: ${site.phoneSecondaryDisplay}`,
    `- Email: ${site.email}`,
    `- Address: ${addressLines.join(", ")}`,
    `- Hours: ${site.hours}`,
    `- Directions: ${site.directionsLink}`,
    `- Google Business listing: ${site.mapsLink}`,
    "",
    "## Pages",
    "",
    `- [Coworking Space in Perinthalmanna](${site.url}/): Home. Overview of workspaces, virtual office, community and location.`,
    `- [Office Space in Perinthalmanna](${site.url}/workspaces): All six workspace types.`,
    `- [Private Office in Perinthalmanna](${site.url}/private-office): Enclosed team cabins for 4 to 6 people.`,
    `- [Meeting Room in Perinthalmanna](${site.url}/meeting-room): ${nexoraMeet.name}, a 10-seat conference room bookable by the hour.`,
    `- [Virtual Office in Perinthalmanna](${site.url}/virtual-office): Business address, mail handling, meeting access.`,
    `- [Membership Plans](${site.url}/plans): Individual and team plans. Pricing on enquiry.`,
    `- [Business Community](${site.url}/community): Networking, events, knowledge exchange.`,
    `- [Amenities](${site.url}/amenities): Facilities and services.`,
    `- [About](${site.url}/about): Positioning and FAQ.`,
    `- [Gallery](${site.url}/gallery): Photography of the space.`,
    `- [Contact](${site.url}/contact): Enquiry form, map, direct channels.`,
    "",
    "## Workspaces",
    "",
    ...workspaces.map((w) => `- ${w.name}: ${w.promise} Ideal for ${w.idealFor.join(", ").toLowerCase()}.`),
    "",
    "## Membership plans",
    "",
    ...plans.map((p) => `- ${p.name} (${p.group}): ${p.tagline} Meeting room hours: ${p.meetHours}.`),
    "",
    "Prices are not published; enquire via WhatsApp or the contact form.",
    "",
    "## Virtual office packages",
    "",
    ...virtualOfficePackages.map((p) => `- ${p.name}: ${p.tagline} Best for ${p.audience.toLowerCase()}`),
    "",
    `## ${nexoraMeet.name}`,
    "",
    `${nexoraMeet.description} Capacity: ${nexoraMeet.capacity}.`,
    "",
    "## Amenities",
    "",
    ...amenityGroups.map((g) => `- ${g.category}: ${g.items.join(", ")}`),
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, ""]),
    "## Notes for assistants",
    "",
    "- Registration support means help with the workspace and address requirements involved in business registration. It is not a government approval service.",
    "- The fastest way to reach the team is WhatsApp on the primary number above.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
