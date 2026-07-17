"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Content() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-padding mt-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-fixed/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <Reveal>
        <div className="text-center mb-16">
          <div className="font-label-sm text-label-sm text-primary-fixed mb-4 uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary-fixed"></span>
            About Us
            <span className="w-8 h-[1px] bg-primary-fixed"></span>
          </div>
          <h1 className="font-headline-lg text-4xl md:text-6xl text-primary mb-6 leading-tight max-w-4xl mx-auto">
            Premium Coworking Space in Perinthalmanna
          </h1>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto">
            For Startups, Freelancers & Businesses
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Reveal delay={100}>
          <div className="glass-panel p-10 rounded-[2rem] h-full hover:-translate-y-2 hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-primary-fixed/30 hover:shadow-[0_0_40px_rgba(163,250,0,0.1)]">
            <div className="w-16 h-16 rounded-2xl bg-primary-fixed/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-fixed/20 transition-all duration-500">
              <span className="material-symbols-outlined text-3xl text-primary-fixed">rocket_launch</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Designed for Growth</h3>
            <p className="text-secondary leading-relaxed font-body-md text-sm">
              Looking for a modern coworking space in Perinthalmanna? Our strategically located workspace provides entrepreneurs, startups, freelancers, remote teams, and businesses with a professional environment designed for productivity and growth.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="glass-panel p-10 rounded-[2rem] h-full hover:-translate-y-2 hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-primary-fixed/30 hover:shadow-[0_0_40px_rgba(163,250,0,0.1)]">
            <div className="w-16 h-16 rounded-2xl bg-primary-fixed/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-fixed/20 transition-all duration-500">
              <span className="material-symbols-outlined text-3xl text-primary-fixed">hub</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Prime Connectivity</h3>
            <p className="text-secondary leading-relaxed font-body-md text-sm">
              Located in the heart of Perinthalmanna, our coworking space offers excellent connectivity to major business areas, educational institutions, banks, restaurants, and essential services. We help businesses work efficiently while building valuable connections.
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="glass-panel p-10 rounded-[2rem] h-full hover:-translate-y-2 hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-primary-fixed/30 hover:shadow-[0_0_40px_rgba(163,250,0,0.1)]">
            <div className="w-16 h-16 rounded-2xl bg-primary-fixed/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-fixed/20 transition-all duration-500">
              <span className="material-symbols-outlined text-3xl text-primary-fixed">architecture</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Flexible Solutions</h3>
            <p className="text-secondary leading-relaxed font-body-md text-sm">
              Whether you are a startup looking for an inspiring office, a freelancer seeking a productive workspace, or an established business needing a flexible office solution, we provide the perfect combination of convenience, community, and modern workplace facilities.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
