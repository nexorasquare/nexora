"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const workspaceTypes = [
  {
    title: "PRIVATE OFFICES",
    description: "Fully furnished, acoustically optimized private suites for focused teams.",
    image: "/images/executive-suite.webp",
  },
  {
    title: "DEDICATED DESKS",
    description: "Your own permanent desk in a shared, vibrant premium environment.",
    image: "/images/hero-slide-2.webp",
  },
  {
    title: "COWORKING",
    description: "Flexible hot-desking in our beautifully designed premium lounges.",
    image: "/images/hero-slide-1.webp",
  },
  {
    title: "MEETING ROOMS",
    description: "State-of-the-art boardrooms equipped with the latest AV technology.",
    image: "/images/conference-hall.webp",
  },
  {
    title: "COMMUNITY",
    description: "We provide your coworkers too! People who inspire you and cheer you on.",
    image: "/images/hero-slide-3.webp",
  },
];

export function WorkspaceTypes() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-primary-fixed"></div>
                <div className="text-primary-fixed text-xs uppercase tracking-[0.2em] font-semibold">
                  Membership Plans
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl text-primary font-light tracking-tight">Flexible Workspaces</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workspaceTypes.map((workspace, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                {/* Arched Image Container */}
                <div className="relative w-full aspect-[2/3] rounded-t-full rounded-b-3xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary-fixed/40 transition-colors duration-500 bg-surface-container-lowest">
                  <Image
                    src={workspace.image}
                    alt={workspace.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                    <p className="text-primary/90 text-sm md:text-base font-light transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                      {workspace.description}
                    </p>
                  </div>
                </div>
                
                {/* Title Below */}
                <h3 className="text-lg font-medium tracking-tight text-primary text-center group-hover:text-primary-fixed transition-colors">
                  {workspace.title}
                </h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
