/**
 * Photography slots. Real facility photography is pending; every slot renders a
 * labelled branded placeholder until `src` is filled in. Adding a photo is a
 * one-line edit here - layouts already reserve the correct aspect ratio, so
 * nothing reflows when images land.
 */
export type ImageSlot = {
  src: string | null;
  alt: string;
  /** Shown inside the placeholder so the intended shot is unambiguous. */
  label: string;
  ratio: "16/9" | "4/3" | "3/4" | "1/1" | "21/9";
};

export const media = {
  hero: {
    src: "/images/facility/hero.webp",
    alt: "Professionals working and collaborating inside Nexora Square",
    label: "Hero — wide interior, people at work, natural light",
    ratio: "21/9",
  },
  intro: {
    src: "/images/facility/open-floor.webp",
    alt: "The Nexora Square workspace floor",
    label: "Intro — workspace floor, wide",
    ratio: "4/3",
  },
  virtualOffice: {
    src: "/images/facility/vision-render-4x3.webp",
    alt: "Nexora Square, Perinthalmanna",
    label: "Virtual Office — reception / front desk",
    ratio: "4/3",
  },
  community: {
    src: "/images/facility/community.webp",
    alt: "Members networking at a Nexora Square community event",
    label: "Community — members networking at an event",
    ratio: "16/9",
  },
  experience: {
    src: "/images/facility/open-floor-wide.webp",
    alt: "Collaboration inside Nexora Square",
    label: "Experience — collaboration moment",
    ratio: "16/9",
  },
  exterior: {
    src: "/images/facility/vision-render.webp",
    alt: "Nexora Square, Perinthalmanna",
    label: "Exterior — building and signage",
    ratio: "3/4",
  },
  /** Concept render, not the current building. Only ever shown with a caption saying so. */
  vision: {
    src: "/images/facility/vision-render.webp",
    alt: "Concept render of a future Nexora Square building",
    label: "Vision — concept render",
    ratio: "3/4",
  },
  ctaBackground: {
    src: "/images/facility/cta-bg.webp",
    alt: "",
    label: "Final CTA background",
    ratio: "16/9",
  },
  experienceBackground: {
    src: "/images/facility/experience-bg.webp",
    alt: "",
    label: "Experience section background",
    ratio: "16/9",
  },
} satisfies Record<string, ImageSlot>;

export const galleryCategories: { name: string; blurb: string; shots: ImageSlot[] }[] = [
  {
    name: "Workspace",
    blurb: "Open floors, hot desks and dedicated workstations.",
    shots: [
      { src: "/images/facility/open-floor.webp", alt: "Open workspace floor", label: "Open workspace — wide", ratio: "4/3" },
      { src: "/images/facility/dedicated-desks-window.webp", alt: "Dedicated workstations by the window", label: "Dedicated desk — detail", ratio: "1/1" },
    ],
  },
  {
    name: "Private Cabins",
    blurb: "Private offices built for focused teams.",
    shots: [
      { src: "/images/facility/team-cabin-door.webp", alt: "Private team cabin seen through its glass door", label: "Team cabin — interior", ratio: "4/3" },
      { src: "/images/facility/team-cabin-tall.webp", alt: "Glass-walled private cabin", label: "Executive cabin — interior", ratio: "3/4" },
    ],
  },
  {
    name: "Meeting Spaces",
    blurb: "Meeting pods and the conference room.",
    shots: [
      { src: "/images/facility/conference-room-glass.webp", alt: "Conference room behind its glass wall", label: "Conference room — wide", ratio: "16/9" },
      { src: "/images/facility/conference-room-detail.webp", alt: "Conference table with presentation screen", label: "Meeting pod — detail", ratio: "1/1" },
    ],
  },
  {
    name: "Community",
    blurb: "The people who make Nexora Square work.",
    shots: [
      { src: "/images/facility/community-4x3.webp", alt: "Members networking over coffee", label: "Networking session", ratio: "4/3" },
      { src: null, alt: "Members in the lounge", label: "Lounge — candid", ratio: "1/1" },
    ],
  },
  {
    name: "Amenities",
    blurb: "The details that make a working day easier.",
    shots: [
      { src: null, alt: "Pantry and coffee station", label: "Coffee station", ratio: "1/1" },
      { src: null, alt: "Lounge seating", label: "Lounge seating", ratio: "4/3" },
    ],
  },
  {
    name: "Events",
    blurb: "Workshops, meetups and knowledge sessions.",
    shots: [
      { src: "/images/facility/workshop.webp", alt: "A workshop session at Nexora Square", label: "Workshop — wide", ratio: "16/9" },
      { src: "/images/facility/community-square.webp", alt: "Members in conversation at a community meetup", label: "Founder meetup", ratio: "1/1" },
    ],
  },
];
