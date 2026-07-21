import { HeroSection } from "@/sections/home/HeroSection";
import { MarqueeSection } from "@/sections/home/MarqueeSection";
import { AboutSection } from "@/sections/home/AboutSection";
import { ServicesSection } from "@/sections/home/ServicesSection";
import { ProjectsSection } from "@/sections/home/ProjectsSection";
import { LocationSection } from "@/sections/home/LocationSection";
import { FaqSection } from "@/sections/home/FaqSection";
import { CtaSection } from "@/sections/home/CtaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "premium coworking space",
  description: "3D Creator Portfolio",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <LocationSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}


