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
  title: "Nexora Square | Premium Coworking Space in Perinthalmanna",
  description: "Premium Coworking Spaces crafted for Startups, Businesses, Freelancers & Remote Teams in Perinthalmanna. Experience executive suites, hot desks, and more.",
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


