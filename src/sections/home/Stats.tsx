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
        <div className="flex flex-col md:flex-row w-full justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 w-full flex">
              <Reveal delay={index * 100} className="w-full h-full flex flex-col justify-center">
                <div className="py-10 md:py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left h-full group">
                  <div className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-light text-primary group-hover:text-primary-fixed transition-colors duration-700 mb-4 md:mb-6 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="font-body-sm text-secondary uppercase tracking-[0.25em] text-[10px] md:text-xs font-medium">
                    {stat.label}
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
