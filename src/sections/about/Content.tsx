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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Editorial Content */}
        <div className="pr-0 lg:pr-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary-fixed"></div>
              <div className="text-primary-fixed text-sm uppercase tracking-[0.2em] font-semibold">
                Our Story
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-light mb-8 tracking-tight leading-[1.1]">
              Redefining the <br/>
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed">Workspace Experience.</span>
            </h1>
            <div className="space-y-6 text-secondary/80 font-light text-lg leading-relaxed mb-12">
              <p>
                Looking for a premium coworking space in Perinthalmanna? Nexora Square provides entrepreneurs, startups, freelancers, remote teams, and businesses with a professional environment designed for productivity and growth.
              </p>
              <p>
                Strategically located near major transit and business hubs, we are easily accessible from Angadippuram Railway Station, KIMS Al-Shifa Hospital, Moulana Hospital, and key educational institutions. Our central location makes us the ideal choice for professionals traveling from Malappuram, Manjeri, Pattambi, or Shoranur.
              </p>
              <p>
                Whether you need an inspiring private cabin, a dedicated desk, or a flexible shared workspace, Nexora Square provides the perfect combination of convenience, community, and modern workplace facilities.
              </p>
            </div>
          </Reveal>

          {/* Elegant Highlight Rows */}
          <div className="flex flex-col w-full border-t border-white/5">
            {highlights.slice(0, 3).map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-primary-fixed/40 transition-colors duration-500 cursor-default">
                  <span className="text-3xl md:text-4xl font-light text-primary group-hover:text-primary-fixed transition-colors duration-500 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] text-secondary/60 uppercase text-right">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side: Premium Images */}
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary-fixed/5 blur-3xl rounded-full"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img src="/images/executive-suite.webp" alt="Executive Workspace" className="w-full h-64 md:h-80 object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 mt-12" />
              <img src="/images/hero-slide-2.webp" alt="Modern Shared Office" className="w-full h-64 md:h-80 object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-8 border border-white/10 z-20 text-center shadow-2xl">
              <div className="text-4xl text-primary-fixed font-light mb-1">2026</div>
              <div className="text-xs uppercase tracking-widest text-primary/60">Established</div>
            </div>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}
