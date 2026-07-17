import { Hero } from "@/sections/facilities/Hero";
import { CategoryGrid } from "@/sections/facilities/CategoryGrid";
import { AmenitiesGrid } from "@/sections/facilities/AmenitiesGrid";
import { CTA } from "@/sections/facilities/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Workspaces & Facilities",
  description: "Explore our premium coworking facilities in Perinthalmanna. From private executive cabins to vibrant hot desks, find the perfect space for your team.",
};

export default function Facilities() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <AmenitiesGrid />
      <CTA />
    </>
  );
}
