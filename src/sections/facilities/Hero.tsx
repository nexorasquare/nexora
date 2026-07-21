"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-background relative border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-fixed/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <Reveal>
          <div className="inline-block border border-primary-fixed/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm bg-black/20">
            <span className="text-primary-fixed uppercase tracking-[0.2em] text-sm font-medium">Amenities & Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary font-light mb-8 tracking-tight leading-[1.1]">
            Everything you need. <br/>
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed">Nothing you don't.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary/80 font-light leading-relaxed max-w-2xl mx-auto">
            From high-speed connectivity to artisanal coffee, we've carefully curated every detail of Nexora Square to provide a seamless, premium working environment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
