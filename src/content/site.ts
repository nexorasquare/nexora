export const site = {
  name: "Nexora Square",
  tagline: "WORK. CONNECT. INNOVATE.",
  descriptor: "Premium Workspace & Business Community",
  positioning:
    "A premium workspace and business ecosystem for ambitious professionals and growing businesses in Perinthalmanna.",
  url: "https://www.nexorasquare.com",
  phoneDisplay: "+91 994 662 0909",
  phoneHref: "tel:+919946620909",
  phoneSecondaryDisplay: "+91 994 663 0909",
  phoneSecondaryHref: "tel:+919946630909",
  whatsappNumber: "919946620909",
  email: "info@nexorasquare.com",
  instagram: "https://www.instagram.com/nexorasquare?igsh=cXJtN2xyc2RvNmVk",
  /** Google Business listing - reviews, photos, opening hours. */
  mapsLink: "https://share.google/AzXC6KE5tEIlGP92Y",
  coordinates: { lat: 10.9864, lng: 76.2236 },
  /** Opens Google Maps straight into turn-by-turn navigation to the building. */
  directionsLink:
    "https://www.google.com/maps/dir/?api=1&destination=10.9864,76.2236&travelmode=driving",
  address: {
    line1: "Near MarketCity Mall",
    line2: "Perinthalmanna, Malappuram",
    city: "Perinthalmanna",
    district: "Malappuram",
    state: "Kerala",
    postalCode: "679322",
    country: "IN",
  },
  hours: "Monday to Saturday, 9:00 AM - 8:00 PM",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  `${site.address.state}, Pin code: ${site.address.postalCode}`,
];

/** Builds a wa.me deep link with a pre-filled, URL-encoded message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
