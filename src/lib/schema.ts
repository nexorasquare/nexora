import { site, addressLines } from "@/content/site";
import { workspaces } from "@/content/workspaces";
import { nexoraMeet } from "@/content/plans";

const orgId = `${site.url}/#organization`;
const placeId = `${site.url}/#localbusiness`;
const siteId = `${site.url}/#website`;

const services = [
  { name: "Coworking Space in Perinthalmanna", path: "/", description: "Flexible hot desks and dedicated workstations in a premium shared workspace." },
  { name: "Office Space in Perinthalmanna", path: "/workspaces", description: "Desks, private cabins, meeting spaces and a podcast studio to suit every way of working." },
  { name: "Private Office in Perinthalmanna", path: "/private-office", description: "Fully enclosed, furnished team cabins for 4 to 6 people with meeting hours and a business address." },
  { name: "Meeting Room in Perinthalmanna", path: "/meeting-room", description: `${nexoraMeet.name}: a 10-seat conference room with presentation screen, bookable by the hour.` },
  { name: "Virtual Office in Perinthalmanna", path: "/virtual-office", description: "Professional business address, mail and courier handling, and meeting room access." },
];

/**
 * Sitewide structured data as one @graph so every entity can reference the
 * others by @id. Rendered once in the root layout.
 */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo-transparent-v2.webp` },
      slogan: site.tagline,
      sameAs: [site.instagram],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: site.phoneDisplay,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["en", "ml"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": placeId,
      name: site.name,
      description: site.positioning,
      url: site.url,
      telephone: site.phoneDisplay,
      email: site.email,
      image: `${site.url}/images/og.jpg`,
      priceRange: "₹₹",
      parentOrganization: { "@id": orgId },
      address: {
        "@type": "PostalAddress",
        streetAddress: addressLines.slice(0, 2).join(", "),
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.coordinates.lat, longitude: site.coordinates.lng },
      hasMap: site.mapsLink,
      areaServed: [
        { "@type": "City", name: "Perinthalmanna" },
        { "@type": "AdministrativeArea", name: "Malappuram" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      amenityFeature: [
        "High-speed Wi-Fi",
        "Power backup",
        "Air conditioning",
        "Printing and scanning",
        "Reception",
        "Pantry and refreshments",
        "CCTV and secure access",
      ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: `${site.url}${s.path}`,
          provider: { "@id": orgId },
          areaServed: { "@type": "City", name: "Perinthalmanna" },
        },
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Workspaces",
        itemListElement: workspaces.map((w) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: w.name, description: w.promise },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: site.url,
      name: site.name,
      publisher: { "@id": orgId },
      inLanguage: "en-IN",
    },
  ],
};

/** BreadcrumbList for an inner page. `trail` excludes Home, which is added. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
