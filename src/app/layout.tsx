import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Raleway } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { site, addressLines } from "@/content/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060B0F",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.descriptor} in Perinthalmanna`,
    template: `%s | ${site.name}`,
  },
  description:
    "Premium workspaces, private cabins, virtual office solutions and a business community in Perinthalmanna. Work. Connect. Innovate.",
  keywords: [
    "coworking space Perinthalmanna",
    "premium coworking space Perinthalmanna",
    "office space Perinthalmanna",
    "private office Perinthalmanna",
    "meeting room Perinthalmanna",
    "virtual office Perinthalmanna",
    "business centre Perinthalmanna",
    "flexible workspace Perinthalmanna",
    "team office Perinthalmanna",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.descriptor}`,
    description:
      "Premium workspaces, virtual office solutions and a business community in Perinthalmanna.",
    images: [{ url: "/images/logo-emblem-3d.png", width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.descriptor}`,
    description:
      "Premium workspaces, virtual office solutions and a business community in Perinthalmanna.",
    images: ["/images/logo-emblem-3d.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.positioning,
  url: site.url,
  telephone: site.phoneDisplay,
  email: site.email,
  image: `${site.url}/images/logo-emblem-3d.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: addressLines.slice(0, 2).join(", "),
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${raleway.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
