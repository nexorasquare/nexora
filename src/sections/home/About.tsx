"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section className="py-section-padding bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <Reveal>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-fixed/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative">
              {/* Using standard img to avoid next/image domain issues or optimization delays for these placeholders */}
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                alt="Architecture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMKbU0yvsH5q-J7VMOJ4-jMh9YVseehVOZnHzkqNeXETOvBdu8lyTYyEnZd56J2mKLRRLZ5QBc490eWHq2_qciVCVlmmS-1v_Tlh9xrmTTpog_YIXWmcFVmvkHCKbMLrBMo-PM2x3lXRFhpXO1cuD6sFAWq6YxrhiObqeWlsHapdp1JFU0BEpMSBMNE1KVfNK7ciODNjAulRLOLLh_GwKfediX-Vleu45MemU5kzBWsmofCebOlzT87w"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-2xl hidden md:block z-10">
              <div className="font-headline-md text-primary">Strategic Hub</div>
              <div className="font-body-md text-secondary">The heart of Perinthalmanna</div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="font-label-sm text-label-sm text-primary-fixed mb-4 uppercase tracking-[0.2em]">
            Architecture of Success
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
            Designed for the <span className="italic font-light">Focus Mindset.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-secondary mb-8 leading-relaxed">
            Nexora Square isn't just a workspace; it's a sanctuary for high-performance professionals. Strategically
            located in Perinthalmanna, we provide an environment that balances clinical precision with aesthetic comfort.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
              <div>
                <div className="font-headline-md text-body-lg font-bold text-primary">Premium Infrastructure</div>
                <div className="text-on-surface-variant font-body-md">
                  Soundproofed cabins and ergonomic seating designed by global leaders.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
              <div>
                <div className="font-headline-md text-body-lg font-bold text-primary">Prime Connectivity</div>
                <div className="text-on-surface-variant font-body-md">
                  Unmatched access to transportation hubs, financial centers, and luxury amenities.
                </div>
              </div>
            </div>
          </div>
          <button className="px-8 py-4 border border-outline text-primary font-bold rounded-xl hover:bg-primary hover:text-background transition-all duration-300">
            Learn More About Us
          </button>
        </Reveal>
      </div>
    </section>
  );
}
