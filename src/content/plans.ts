export type Plan = {
  slug: string;
  name: string;
  group: "individual" | "team";
  tagline: string;
  audience: string;
  includes: string[];
  meetHours: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    slug: "flex",
    name: "Nexora Flex",
    group: "individual",
    tagline: "Flexible access, no fixed desk.",
    audience:
      "Freelancers, remote workers, students, consultants and professionals who want a professional workspace without a dedicated desk every day.",
    includes: [
      "Up to 10 days access per month",
      "Flexible seating in the common workspace",
      "High-speed Wi-Fi",
      "Power and charging access",
      "Professional work environment",
      "Business-hours access",
      "Community networking opportunities",
    ],
    meetHours: "Discounted hourly rate",
  },
  {
    slug: "desk",
    name: "Nexora Desk",
    group: "individual",
    tagline: "Your own desk, ready every day.",
    audience:
      "Professionals and freelancers who want the comfort, consistency and privacy of a dedicated workstation.",
    includes: [
      "Dedicated desk and personal workstation",
      "High-speed Wi-Fi and power access",
      "Comfortable professional workspace",
      "Storage option / locker",
      "Business address benefits",
      "4 complimentary conference room hours per month",
      "Premium pantry and refreshment zone",
    ],
    meetHours: "4 hours / month",
  },
  {
    slug: "pro",
    name: "Nexora Pro",
    group: "individual",
    tagline: "Premium workspace with business support.",
    audience:
      "Entrepreneurs, consultants, business owners and professionals who want enhanced facilities, priority access and business support.",
    includes: [
      "Everything in Nexora Desk",
      "Priority workspace access",
      "Premium dedicated desk",
      "6 complimentary conference room hours per month",
      "Business / professional address",
      "Mail handling",
      "Priority meeting room booking",
      "Community events and networking",
      "Premium pantry and refreshment zone",
    ],
    meetHours: "6 hours / month",
    featured: true,
  },
  {
    slug: "team-4",
    name: "Nexora Team 4",
    group: "team",
    tagline: "Private cabin for teams of up to 4.",
    audience: "Small teams, startups and agencies that need a fully private, branded space.",
    includes: [
      "Fully private cabin",
      "4 workstations",
      "High-speed Wi-Fi and power access",
      "Professional business environment",
      "Team branding / nameplate option",
      "6 conference room hours per month",
      "Priority meeting room booking",
      "Access to Nexora community events",
      "Premium pantry and refreshment zone",
    ],
    meetHours: "6 hours / month",
  },
  {
    slug: "team-6",
    name: "Nexora Team 6",
    group: "team",
    tagline: "Private cabin for teams of up to 6.",
    audience: "Growing teams and businesses that need room to expand without leaving the building.",
    includes: [
      "Fully private cabin",
      "6 workstations",
      "High-speed Wi-Fi and power access",
      "Professional business environment",
      "Team branding / nameplate option",
      "8 conference room hours per month",
      "Priority meeting room booking",
      "Access to Nexora community events",
      "Premium pantry and refreshment zone",
    ],
    meetHours: "8 hours / month",
  },
];

export const nexoraMeet = {
  name: "Nexora Meet",
  tagline: "Where ideas come together.",
  capacity: "Up to 10 people",
  description:
    "A professional meeting and conference space designed for productive conversations, presentations, interviews and team discussions. Members receive complimentary hours with their plan; additional hours and non-member bookings are available on an hourly basis.",
  features: [
    "Seating for up to 10 people",
    "High-speed Wi-Fi",
    "Presentation-ready setup",
    "Professional meeting environment",
    "Suitable for meetings and discussions",
    "Ideal for interviews and client meetings",
  ],
};

export type VirtualOfficePackage = {
  slug: string;
  name: string;
  tagline: string;
  audience: string;
  includes: string[];
  featured?: boolean;
};

export const virtualOfficePackages: VirtualOfficePackage[] = [
  {
    slug: "basic",
    name: "Basic Business Address",
    tagline: "A professional address for your business.",
    audience: "Freelancers and small businesses.",
    includes: [
      "Professional business address",
      "Address usage for business communication",
      "Mail receiving notification",
      "Nexora Square business community access",
    ],
  },
  {
    slug: "professional",
    name: "Professional Virtual Office",
    tagline: "Address, mail handling and meeting access.",
    audience: "Startups and growing businesses.",
    includes: [
      "Everything in Basic",
      "Mail and courier receiving",
      "Mail notification via WhatsApp or email",
      "2 hours meeting room access per month",
      "Business address for website and marketing materials",
    ],
    featured: true,
  },
  {
    slug: "premium",
    name: "Premium Virtual Office",
    tagline: "A stronger professional presence.",
    audience: "Companies that want a fuller front-of-house.",
    includes: [
      "Everything in Professional",
      "5 hours meeting room access per month",
      "Reception support for visitors",
      "Mail and courier handling",
      "Business address usage",
      "1 complimentary coworking day per month",
    ],
  },
];
