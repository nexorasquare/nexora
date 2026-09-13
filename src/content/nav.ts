export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Workspaces", href: "/workspaces" },
  { label: "Plans", href: "/plans" },
  { label: "Virtual Office", href: "/virtual-office" },
  { label: "Community", href: "/community" },
  { label: "Amenities", href: "/amenities" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  explore: navLinks.filter((l) => l.href !== "/"),
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Policy", href: "/cookies" },
  ] as NavLink[],
};

export const cta = {
  primary: "Book a Tour",
  secondary: "Explore Spaces",
} as const;
