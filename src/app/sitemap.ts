import { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/workspaces", priority: 0.9 },
  { path: "/plans", priority: 0.9 },
  { path: "/virtual-office", priority: 0.9 },
  { path: "/private-office", priority: 0.9 },
  { path: "/meeting-room", priority: 0.9 },
  { path: "/community", priority: 0.8 },
  { path: "/amenities", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/gallery", priority: 0.6 },
  { path: "/contact", priority: 0.9 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
