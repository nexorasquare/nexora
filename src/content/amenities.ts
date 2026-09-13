export type AmenityGroup = { category: string; items: string[] };

export const amenityGroups: AmenityGroup[] = [
  {
    category: "Workspace",
    items: [
      "Flexible Hot Desks",
      "Dedicated Workstations",
      "Private Team Cabins",
      "Private Meeting Pods",
    ],
  },
  {
    category: "Business",
    items: [
      "Conference & Presentation Room",
      "Virtual Office Services",
      "Professional Business Address",
      "Reception & Visitor Assistance",
    ],
  },
  {
    category: "Technology",
    items: ["Unlimited High-Speed Wi-Fi", "Power Backup", "Technology-Enabled Workspace"],
  },
  {
    category: "Community",
    items: [
      "Business Networking Events",
      "Professional Community Access",
      "Collaboration Opportunities",
    ],
  },
  {
    category: "Convenience",
    items: [
      "Printing & Scanning",
      "Office Essentials",
      "Complimentary Tea & Coffee",
      "Air-Conditioned Workspace",
      "Secure Access & CCTV",
    ],
  },
  {
    category: "Creative",
    items: ["Podcast & Content Space", "Content Creation Facilities"],
  },
];
