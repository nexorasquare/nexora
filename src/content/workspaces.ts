import type { ImageSlot } from "./media";

export type Workspace = {
  slug: string;
  number: string;
  name: string;
  promise: string;
  description: string;
  idealFor: string[];
  image: ImageSlot;
};

export const workspaces: Workspace[] = [
  {
    slug: "flexible-hot-desks",
    number: "01",
    name: "Flexible Hot Desks",
    promise: "A productive workspace when you need it.",
    description:
      "Work productively with a workspace that fits your schedule. Come in when it suits you and pick up where you left off.",
    idealFor: ["Freelancers", "Remote professionals", "Consultants", "Independent professionals"],
    image: { src: "/images/facility/hot-desks.webp", alt: "Flexible hot desk area", label: "Hot desks — wide interior", ratio: "4/3" },
  },
  {
    slug: "dedicated-workstations",
    number: "02",
    name: "Dedicated Workstations",
    promise: "Your own professional workspace, ready every day.",
    description:
      "Ideal for professionals who need consistency, privacy and a dedicated setup that stays exactly as they left it.",
    idealFor: ["Professionals needing consistency", "Long-term members", "Solo operators"],
    image: { src: "/images/facility/dedicated-desks.webp", alt: "Dedicated workstation", label: "Dedicated desk — wide interior", ratio: "4/3" },
  },
  {
    slug: "private-team-cabins",
    number: "03",
    name: "Private Team Cabins",
    promise: "Private offices designed for focused teams.",
    description:
      "Private, professional spaces designed for teams that need to concentrate, collaborate and grow together.",
    idealFor: ["Startups", "IT teams", "Agencies", "Growing businesses"],
    image: { src: "/images/facility/team-cabin.webp", alt: "Private team cabin", label: "Team cabin — interior", ratio: "4/3" },
  },
  {
    slug: "private-meeting-pods",
    number: "04",
    name: "Private Meeting Pods",
    promise: "Focused spaces for conversations that matter.",
    description:
      "Quiet spaces for conversations, interviews and calls, away from the rhythm of the main floor.",
    idealFor: ["Client meetings", "Interviews", "Online meetings", "Team discussions"],
    image: { src: "/images/facility/meeting-pod.webp", alt: "Private meeting pod", label: "Meeting pod — interior", ratio: "4/3" },
  },
  {
    slug: "conference-room",
    number: "05",
    name: "Conference & Presentation Room",
    promise: "Meet. Present. Collaborate.",
    description:
      "A professional space for meetings, presentations and workshops, equipped for sessions that need to land well.",
    idealFor: ["Business meetings", "Presentations", "Training", "Workshops", "Corporate sessions"],
    image: { src: "/images/facility/conference-room.webp", alt: "Conference and presentation room", label: "Conference room — wide", ratio: "4/3" },
  },
  {
    slug: "podcast-content-space",
    number: "06",
    name: "Podcast & Content Space",
    promise: "Create. Record. Share.",
    description:
      "A dedicated content environment for recording, filming and publishing without booking an external studio.",
    idealFor: ["Podcasts", "Interviews", "Reels", "Video content", "Online sessions"],
    image: { src: null, alt: "Podcast and content creation space", label: "Podcast studio — interior", ratio: "4/3" },
  },
];
