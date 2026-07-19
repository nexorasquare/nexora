"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-padding">
      <Reveal>
        <div className="bg-primary-fixed rounded-[30px] md:rounded-[40px] p-8 sm:p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] md:text-[400px]">grid_view</span>
          </div>
          <div className="relative z-10 max-w-2xl text-left">
            <h2 className="font-display-lg text-5xl sm:text-6xl md:text-7xl text-on-primary-fixed mb-6 md:mb-8 leading-tight tracking-tighter">
              Elevate your <br className="hidden md:block" /> baseline.
            </h2>
            <p className="text-on-primary-fixed-variant text-base sm:text-lg md:text-xl font-body-lg mb-10 md:mb-12 max-w-[280px] sm:max-w-md md:max-w-xl">
              Join the elite cohort of professionals at Nexora Square. Schedule a private walkthrough of our facilities today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
              <a 
                href="https://wa.me/918881888444" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl inline-block text-center"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
