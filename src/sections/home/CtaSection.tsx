"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";
import { LiveProjectButton } from "@/components/ui/LiveProjectButton";

export function CtaSection() {
  return (
    <section className="bg-[#99D508] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 relative z-20 overflow-hidden flex items-center justify-center rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center gap-8 sm:gap-10">
        
        <FadeIn delay={0} y={30}>
          <h2 className="text-[#0C0C0C] font-black uppercase tracking-tight text-[clamp(2rem,8vw,6.5rem)] leading-none">
            Your Next Workspace<br />Starts Here
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2} y={30}>
          <p className="text-[#0C0C0C] opacity-80 font-medium text-[clamp(1.1rem,2vw,1.5rem)] max-w-2xl mx-auto leading-relaxed">
            Book a tour today and experience the Nexora Square difference.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} y={30} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <a 
            href="tel:+918881888444"
            className="group relative inline-flex h-[50px] sm:h-[60px] items-center justify-center overflow-hidden rounded-full bg-[#0C0C0C] px-8 sm:px-12 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(12,12,12,0.3)] cursor-pointer"
          >
            <span className="relative z-10 text-sm sm:text-base uppercase tracking-widest">Connect</span>
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
