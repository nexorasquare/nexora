"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  { value: "100+", label: "Growing Community" },
  { value: "24/7", label: "Secure Access" },
  { value: "Prime", label: "Business Location" },
  { value: "Flexible", label: "Workspace Solutions" },
  { value: "Business", label: "Networking" },
  { value: "Modern", label: "Premium Interiors" },
];

export function Content() {
  return (
    <section className="py-12 md:py-36 bg-surface-container-lowest border-y border-white/5 overflow-hidden mt-20 md:mt-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Premium Image */}
        <div className="lg:col-span-5 relative group h-[250px] md:min-h-[500px] lg:min-h-[800px] rounded-3xl overflow-hidden">
          <Reveal className="w-full h-full absolute inset-0">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-primary-fixed/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 hidden md:block"></div>
            
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 z-10">
              {/* Pseudo-Parallax using scale and pan on hover */}
              <img
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 group-hover:translate-y-2 grayscale-[30%] group-hover:grayscale-0"
                alt="Nexora Square Premium Workspace"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-16">
          <Reveal>
            <div className="font-body-sm text-[10px] md:text-xs text-secondary mb-6 uppercase tracking-[0.3em] font-bold">
              ABOUT NEXORA SQUARE
            </div>
            
            <h2 className="font-display-lg text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-primary font-light mb-6 md:mb-8 tracking-tighter leading-tight">
              More Than Just <br />
              <span className="text-primary-fixed italic pr-4">A Workspace.</span>
            </h2>
            
            <p className="font-body-lg text-base md:text-xl text-secondary mb-8 md:mb-16 leading-relaxed max-w-2xl font-light">
              Nexora Square is a premium coworking destination in the heart of Perinthalmanna, thoughtfully designed for entrepreneurs, startups, freelancers, remote teams, and growing businesses. Every workspace combines contemporary design, advanced technology, and a vibrant professional community to help ideas thrive.
            </p>
          </Reveal>

          {/* Elegant Highlight Rows */}
          <div className="flex flex-col w-full border-t border-white/10 mt-8">
            {highlights.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="group flex flex-col md:flex-row items-start md:items-center md:justify-between gap-1 md:gap-4 py-6 md:py-8 border-b border-white/10 hover:border-primary-fixed/40 transition-colors duration-500 cursor-default">
                  <span className="font-display-md text-3xl md:text-4xl lg:text-5xl font-light text-primary group-hover:text-primary-fixed transition-colors duration-500 tracking-tight">
                    {item.value}
                  </span>
                  <span className="font-body-sm text-[10px] md:text-xs font-bold tracking-[0.25em] text-secondary uppercase text-left md:text-right">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
