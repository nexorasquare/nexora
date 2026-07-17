import { Hero } from "@/sections/home/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { WorkspaceTypes } from "@/sections/home/WorkspaceTypes";
import { Features } from "@/sections/home/Features";
import { About } from "@/sections/home/About";
import { Stats } from "@/sections/home/Stats";
import { Workspaces } from "@/sections/home/Workspaces";
import { Connectivity } from "@/sections/home/Connectivity";
import { CTA } from "@/sections/home/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Coworking Space in Perinthalmanna",
  description: "Experience the best coworking space in Perinthalmanna at Nexora Square. We offer private cabins, dedicated desks, and hot desks for startups and professionals.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkspaceTypes />
      <Stats />
      <Workspaces />
      <Connectivity />
      <CTA />
    </>
  );
}
