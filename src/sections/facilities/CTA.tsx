"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-padding">
      <Reveal>
        <div className="bg-primary-fixed rounded-[40px] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[400px]">grid_view</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display-lg text-display-lg text-on-primary-fixed mb-8 leading-tight">
              Elevate your baseline.
            </h2>
            <p className="text-on-primary-fixed-variant font-body-lg mb-12">
              Join the elite cohort of professionals at Nexora Square. Schedule a private walkthrough of our facilities today.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                Connect
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
