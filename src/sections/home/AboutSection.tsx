"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ContactButton } from "@/components/ui/ContactButton";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
        <div className="w-full text-center">
          <h2 className="font-black uppercase leading-none tracking-tight text-[clamp(2rem,6vw,100px)] text-white flex flex-col items-center">
            <FadeIn delay={0.1} y={40}><span className="block hover:text-[#99D508] transition-colors duration-500 cursor-default">ABOUT</span></FadeIn>
            <FadeIn delay={0.3} y={40}><span className="block text-[#99D508] hover:text-white transition-colors duration-500 cursor-default">NEXORA</span></FadeIn>
            <FadeIn delay={0.5} y={40}><span className="block hover:text-[#99D508] transition-colors duration-500 cursor-default">SQUARE</span></FadeIn>
          </h2>
        </div>

        <div className="flex flex-col items-center mt-10 sm:mt-14 md:mt-16 w-full gap-16 sm:gap-20 md:gap-24">
          <AnimatedText 
            text="Nexora Square is a premium coworking space in Perinthalmanna designed for startups, freelancers, remote teams, and businesses. With flexible workspaces, modern amenities, business support, and a strong community environment, it creates a productive space where ideas can grow."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />

          <FadeIn delay={0.4} y={30}>
            <ContactButton label="Chat on WhatsApp" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
