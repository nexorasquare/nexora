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
  services: [
    { label: "Coworking Space in Perinthalmanna", href: "/" },
    { label: "Office Space in Perinthalmanna", href: "/workspaces" },
    { label: "Private Office in Perinthalmanna", href: "/private-office" },
    { label: "Meeting Room in Perinthalmanna", href: "/meeting-room" },
    { label: "Virtual Office in Perinthalmanna", href: "/virtual-office" },
  ] as NavLink[],
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
