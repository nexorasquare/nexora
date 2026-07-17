"use client";

import React from "react";

export function Hero() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-padding mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-end">
        <div>
          <span className="font-label-sm text-label-sm text-primary-fixed uppercase mb-4 block tracking-[0.2em]">
            Sanctuary of Excellence
          </span>
          <h1 className="font-display-lg text-display-lg md:text-display-lg text-white mb-6 leading-none">
            The Future of Focused Craft.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-lg">
            Every square inch of Nexora Square is engineered for high-performance professionals. From silent retreats to high-velocity networking hubs.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="font-label-sm text-label-sm text-secondary/40 mb-2">COORD: 40.7128° N, 74.0060° W</p>
          <div className="h-[1px] w-full bg-white/10 mb-8"></div>
        </div>
      </div>
    </section>
  );
}
