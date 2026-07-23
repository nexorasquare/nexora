import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0E1317",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexorasquare.com"),
  title: {
    default: "Nexora Square | Premium Coworking Space in Perinthalmanna",
    template: "%s | Nexora Square",
  },
  description: "Premium Coworking Spaces crafted for Startups, Businesses, Freelancers & Remote Teams in Perinthalmanna. Experience executive suites, hot desks, and more.",
  keywords: ["coworking space", "Perinthalmanna", "shared office", "startup workspace", "freelance space", "executive suites", "hot desks", "meeting rooms", "Kerala coworking"],
  authors: [{ name: "Nexora Square" }],
  creator: "Nexora Square",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nexorasquare.com",
    title: "Nexora Square | Premium Coworking Space in Perinthalmanna",
    description: "Premium Coworking Spaces crafted for Startups, Businesses, Freelancers & Remote Teams in Perinthalmanna.",
    siteName: "Nexora Square",
    images: [
      {
        url: "/images/logo-emblem-3d.png",
        width: 1024,
        height: 1024,
        alt: "Nexora Square Metallic Emblem",
      },
      {
        url: "/images/hero-slide-1.webp",
        width: 1200,
        height: 630,
        alt: "Nexora Square Premium Coworking Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Square | Premium Coworking Space in Perinthalmanna",
    description: "Premium Coworking Spaces crafted for Startups, Businesses, Freelancers & Remote Teams in Perinthalmanna.",
    images: ["/images/logo-emblem-3d.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} dark antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-on-surface font-body-md text-body-md min-h-screen flex flex-col overflow-x-hidden">
        <main className="flex-1 w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
