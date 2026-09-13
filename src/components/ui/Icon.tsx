import React from "react";

/**
 * Thin-line geometric icons matching the brand guide's technical icon language.
 * Single consistent 1.4 stroke, currentColor only - no fills, no multicolour.
 */
export type IconName =
  | "desk"
  | "cabin"
  | "address"
  | "community"
  | "pod"
  | "conference"
  | "podcast"
  | "wifi"
  | "power"
  | "print"
  | "coffee"
  | "shield"
  | "mail"
  | "reception"
  | "spark"
  | "handshake"
  | "calendar"
  | "grow"
  | "phone"
  | "whatsapp"
  | "pin"
  | "clock"
  | "arrow";

const paths: Record<IconName, React.ReactNode> = {
  desk: <><path d="M3 9h18M4.5 9v10M19.5 9v10M3 6.5h18v2.5H3z" /></>,
  cabin: <><path d="M4 5h16v14H4z" /><path d="M14 5v14M4 12h10" /></>,
  address: <><path d="M5 20V7l7-3 7 3v13" /><path d="M10 20v-5h4v5M9 10h2M13 10h2" /></>,
  community: <><circle cx="8" cy="9" r="2.5" /><circle cx="16" cy="9" r="2.5" /><path d="M3.5 19c0-2.8 2-4.5 4.5-4.5S12.5 16.2 12.5 19M11.5 19c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" /></>,
  pod: <><rect x="6" y="3.5" width="12" height="17" rx="2" /><path d="M9.5 8h5M9.5 11.5h5" /></>,
  conference: <><ellipse cx="12" cy="13.5" rx="8" ry="3.5" /><path d="M12 10V4M8 4h8" /></>,
  podcast: <><rect x="9.5" y="3" width="5" height="9" rx="2.5" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" /></>,
  wifi: <><path d="M3 9a14 14 0 0 1 18 0M6 12.5a9 9 0 0 1 12 0M9 16a4.5 4.5 0 0 1 6 0" /><circle cx="12" cy="19.5" r="0.9" /></>,
  power: <><path d="M13.5 3 6 13h5l-.5 8 7.5-10h-5z" /></>,
  print: <><path d="M7 9V4h10v5M7 18H5v-6h14v6h-2" /><path d="M7 14h10v6H7z" /></>,
  coffee: <><path d="M5 8h12v6a5 5 0 0 1-10 0z" /><path d="M17 9.5h1.8a2.2 2.2 0 1 1 0 4.4H17M4 21h14" /></>,
  shield: <><path d="M12 3.5 5 6.5v6c0 4 3 6.9 7 8 4-1.1 7-4 7-8v-6z" /><path d="M9.5 12l2 2 3.5-3.5" /></>,
  mail: <><rect x="3" y="5.5" width="18" height="13" rx="1.5" /><path d="M3.5 6.5 12 13l8.5-6.5" /></>,
  reception: <><path d="M4 19h16M6 19v-5a6 6 0 0 1 12 0v5" /><path d="M12 8V5M10 5h4" /></>,
  spark: <><path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" /></>,
  handshake: <><path d="M3 12l4-4 5 1 4-1 5 4-4 5-3-2-3 3-3-3-2 1z" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="1.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  grow: <><path d="M3 20h18M6 20v-6M11 20V9M16 20v-9" /><path d="M13.5 5.5 16 3l2.5 2.5" /></>,
  phone: <><path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" /></>,
  whatsapp: <><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-1l-1.5-.8-1 .8a5 5 0 0 1-2.3-2.3l.8-1L10.5 9c-.5 0-1.5 0-1.5.5z" /></>,
  pin: <><path d="M12 21s6.5-6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15 12 21 12 21z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5.2l3.3 2" /></>,
  arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
};

export function Icon({
  name,
  className,
  size = 24,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
