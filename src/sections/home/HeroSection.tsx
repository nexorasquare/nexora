"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Magnet } from "@/components/ui/Magnet";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-[#0C0C0C]">
      
      {/* 1. Cinematic Photo Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-slide-1.webp" 
          alt="Premium Coworking Space" 
          fill 
          priority
          className="object-cover object-center"
        />
        {/* Deep Moody Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[rgba(12,12,12,0.8)] to-[rgba(12,12,12,0.4)] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C] opacity-90"></div>
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,12,12,0.6)_100%)]"></div>
      </div>

      {/* 4. Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute top-[15%] left-0 right-0 h-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute bottom-[15%] left-0 right-0 h-[1px] bg-white opacity-[0.05]"></div>
      </div>

      {/* 2. Asymmetric / Dynamic Typography (Bottom-Left bias) */}
      <div className="relative z-20 flex-1 flex flex-col justify-end px-6 sm:px-[10%] pb-[15vh]">
        <div className="max-w-4xl">
          


          {/* Main Headline (Left Aligned, No Stroke) */}
          <h1 className="font-black uppercase tracking-tighter leading-[0.85] text-[clamp(2.5rem,8vw,9rem)] flex flex-col drop-shadow-2xl">
            <FadeIn delay={0.4} y={40} className="overflow-hidden">
              <span className="block text-white pr-4">Premium</span>
            </FadeIn>
            <FadeIn delay={0.5} y={40} className="overflow-hidden">
              <span className="block text-[#99D508] pr-4">Coworking</span>
            </FadeIn>
            <FadeIn delay={0.6} y={40} className="overflow-hidden">
              <span className="block text-white opacity-90 pr-4">Space.</span>
            </FadeIn>
          </h1>

          {/* Bottom Bar: Description & Badge */}
          <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-[rgba(255,255,255,0.1)] pt-8">
            <FadeIn delay={0.7} y={20} className="max-w-[400px]">
              <p className="text-white opacity-60 font-light text-[clamp(0.875rem,1vw,1rem)] leading-relaxed tracking-wide">
                Designed for startups, freelancers, and remote teams in Perinthalmanna. Experience unparalleled productivity in a community-driven environment.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} y={20}>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.3em] font-medium">
                A New Era of Workspace
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

    </section>
  );
}
