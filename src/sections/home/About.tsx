"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-fixed/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <Reveal>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-fixed/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="rounded-none overflow-hidden aspect-[4/5] relative border border-white/5">
              <img
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                alt="Premium Coworking Interior"
                src="/images/executive-suite.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-surface-container border border-white/10 p-8 rounded-none hidden md:block z-10 backdrop-blur-md shadow-2xl max-w-xs">
              <div className="text-primary-fixed text-sm uppercase tracking-widest mb-2 font-semibold">Strategic Hub</div>
              <div className="font-light text-primary text-xl leading-snug">The heart of Perinthalmanna's business district.</div>
            </div>
          </div>
        </Reveal>
        
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary-fixed"></div>
            <div className="text-primary-fixed text-sm uppercase tracking-[0.2em] font-semibold">
              Discover Nexora
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-8 font-light leading-[1.2] tracking-tight">
            Designed for the <br/>
            <span className="font-medium">Modern Professional.</span>
          </h2>
          
          <div className="space-y-6 text-secondary/80 font-light text-lg leading-relaxed mb-10">
            <p>
              Looking for a modern coworking space in Perinthalmanna? Our strategically located workspace provides entrepreneurs, startups, freelancers, remote teams, and businesses with a professional environment designed for productivity and growth.
            </p>
            <p>
              Located in the heart of the city, we offer excellent connectivity to major business areas, banks, and essential services. With flexible solutions including private cabins, dedicated desks, meeting spaces, and collaborative areas, we help businesses work efficiently while building valuable connections.
            </p>
          </div>
          
          <a href="/about" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-primary font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-out">
            Our Story
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
