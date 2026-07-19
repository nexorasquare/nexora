"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "100+", label: "Growing Community" },
  { value: "24/7", label: "Secure Access" },
  { value: "High-Speed", label: "Fiber Internet" },
  { value: "Unlimited", label: "Tea & Coffee" },
];

export function Stats() {
  return (
    <section className="bg-surface-container-lowest py-24 md:py-36 px-margin-mobile md:px-margin-desktop border-y border-white/5">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-y-16 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>

          {stats.map((stat, index) => (
            <div key={index} className="flex-1 w-full flex relative z-10">
              <Reveal delay={index * 150} className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center group cursor-default">
                  {/* Premium glowing number */}
                  <div className="font-display-lg text-6xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent group-hover:from-white group-hover:to-primary-fixed transition-all duration-1000 mb-8 transform group-hover:-translate-y-2">
                    {stat.value}
                  </div>
                  
                  {/* Animated label with growing line */}
                  <div className="flex flex-col items-center gap-4">
                    <span className="w-0 h-[1px] bg-primary-fixed group-hover:w-12 transition-all duration-700 ease-out"></span>
                    <div className="font-body-sm text-secondary uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold group-hover:text-white transition-colors duration-700">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
