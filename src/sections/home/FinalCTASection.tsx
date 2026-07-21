"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";
import { LiveProjectButton } from "@/components/ui/LiveProjectButton";

export function FinalCTASection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 relative z-40 overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      <FadeIn delay={0} y={40} className="w-full text-center flex flex-col items-center max-w-4xl mx-auto">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,8vw,100px)] mb-6">
          Your Next Workspace Starts Here.
        </h2>
        <p className="text-[#D7E2EA] font-medium text-[clamp(1rem,2vw,1.4rem)] leading-relaxed max-w-2xl mb-12">
          Book a tour today and experience the Nexora Square difference.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto justify-center">
          <ContactButton label="Book a Tour" className="w-full sm:w-auto" />
          <LiveProjectButton label="Explore Facilities" className="w-full sm:w-auto" />
        </div>
      </FadeIn>
    </section>
  );
}
