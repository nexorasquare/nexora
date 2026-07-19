"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const workspaceTypes = [
  {
    title: "PRIVATE OFFICES",
    description: "Fully furnished, acoustically optimized private suites for focused teams.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "DEDICATED DESKS",
    description: "Your own permanent desk in a shared, vibrant premium environment.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "COWORKING",
    description: "Flexible hot-desking in our beautifully designed premium lounges.",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "MEETING ROOMS",
    description: "State-of-the-art boardrooms equipped with the latest AV technology.",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "COMMUNITY",
    description: "We provide your coworkers too! People who inspire you and cheer you on.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
];

export function WorkspaceTypes() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workspaceTypes.map((workspace, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                {/* Arched Image Container */}
                <div className="relative w-full aspect-[2/3] rounded-t-full rounded-b-3xl overflow-hidden mb-6 shadow-xl border-4 border-transparent group-hover:border-primary-fixed/20 transition-all duration-500">
                  <Image
                    src={workspace.image}
                    alt={workspace.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                    <p className="text-on-surface text-lg font-body-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {workspace.description}
                    </p>
                  </div>
                </div>
                
                {/* Title Below */}
                <h3 className="font-headline-md text-xl font-bold tracking-tight text-primary text-center group-hover:text-primary-fixed transition-colors">
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
