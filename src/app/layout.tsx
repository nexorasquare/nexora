import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nexorasquare.com",
    title: "Nexora Square | Premium Coworking in Perinthalmanna",
    description: "Premium Coworking Spaces crafted for Startups, Businesses, Freelancers & Remote Teams in Perinthalmanna.",
    siteName: "Nexora Square",
    images: [
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
    title: "Nexora Square | Premium Coworking in Perinthalmanna",
    description: "Premium Coworking Spaces crafted for Startups, Businesses, Freelancers & Remote Teams in Perinthalmanna.",
    images: ["/images/hero-slide-1.webp"],
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
      className={`${inter.variable} ${jetbrainsMono.variable} dark antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-surface font-body-md text-body-md min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
