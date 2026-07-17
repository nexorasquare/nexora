import { Content } from "@/sections/about/Content";
import { FAQ } from "@/sections/about/FAQ";
import { CTA } from "@/sections/facilities/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nexora Square",
  description: "Learn more about Nexora Square, the leading premium coworking space provider in Perinthalmanna, Kerala.",
};

export default function About() {
  return (
    <>
      <Content />
      <FAQ />
      <CTA />
    </>
  );
}
