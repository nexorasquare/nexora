"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] w-full flex flex-col justify-center bg-background overflow-hidden pt-24 pb-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 relative z-20 flex flex-col h-full justify-between">
        <Reveal className="w-full">
          {/* Top Label */}
          <div className="mb-4 md:mb-8">
            <span className="text-white text-xs md:text-sm uppercase tracking-[0.3em] font-light" style={{ fontFamily: "var(--font-playfair)" }}>
              SHARING SPACE.
            </span>
          </div>

          {/* Huge Typography */}
          <div className="flex flex-col w-full font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            {/* Line 1 */}
            <div className="text-[12vw] sm:text-[10vw] md:text-[140px] lg:text-[180px] xl:text-[220px] leading-[0.85] text-white tracking-[-0.02em] whitespace-nowrap">
              COWORKING
            </div>
            
            {/* Line 2 with side text */}
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
              <div className="text-[12vw] sm:text-[10vw] md:text-[140px] lg:text-[180px] xl:text-[220px] leading-[0.85] tracking-[-0.02em] whitespace-nowrap flex items-baseline">
                <span className="text-primary pr-4 md:pr-8">SPACE</span>
                <span className="text-white">&</span>
              </div>
              <div className="hidden md:flex flex-col justify-center text-primary text-xs md:text-sm uppercase tracking-[0.3em] font-medium leading-relaxed self-end mb-6 mr-12 lg:mr-24">
                <span>AMBITION.</span>
                <span>GROWTH.</span>
              </div>
            </div>
            
            {/* Mobile side text */}
            <div className="md:hidden flex space-x-4 text-primary text-xs uppercase tracking-[0.3em] font-medium mt-4 mb-2">
              <span>AMBITION.</span>
              <span>GROWTH.</span>
            </div>

            {/* Line 3 */}
            <div className="text-[12vw] sm:text-[10vw] md:text-[140px] lg:text-[180px] xl:text-[220px] leading-[0.85] text-white tracking-[-0.02em] whitespace-nowrap">
              COMMUNITY
            </div>
          </div>
        </Reveal>

        {/* Bottom Section */}
        <Reveal className="w-full mt-12 md:mt-24 lg:mt-32">
          <div className="w-full h-[1px] bg-primary/40 mb-8 md:mb-12"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-white/90 text-xs md:text-sm uppercase tracking-[0.15em] leading-relaxed max-w-lg font-light" style={{ fontFamily: "var(--font-playfair)" }}>
              PREMIUM COWORKING SPACE IN PERINTHALMANNA <br className="hidden md:block" />
              FOR STARTUPS, FREELANCERS AND BUSINESSES.
            </p>
            
            <a 
              href="#workspaces"
              className="group flex items-center gap-4 text-primary hover:text-white transition-colors duration-300"
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium">EXPLORE SPACES</span>
              <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform duration-300 font-light">
                arrow_forward
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
