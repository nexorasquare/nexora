import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Raleway } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { site } from "@/content/site";
import { siteJsonLd } from "@/lib/schema";

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
    default: `Coworking Space in Perinthalmanna | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Premium coworking space in Perinthalmanna near MarketCity Mall: hot desks, dedicated workstations, private offices, a meeting room and virtual office services. Work. Connect. Innovate.",
  alternates: { canonical: "/" },
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
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=3",
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
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: `${site.name} - Work. Connect. Innovate.` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.descriptor}`,
    description:
      "Premium workspaces, virtual office solutions and a business community in Perinthalmanna.",
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${raleway.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
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
