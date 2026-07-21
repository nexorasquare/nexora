"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Workspaces() {
  const workspaces = [
    {
      title: "Executive Suites",
      desc: "Premium, fully furnished executive suites with soundproofing, ergonomic seating, and priority access to all amenities.",
      img: "/images/executive-suite.webp",
      features: ["Premium Furniture", "Priority Booking", "Private Access"],
      exclusive: true
    },
    {
      title: "Private Cabins",
      desc: "Secure, enclosed spaces ideal for focused work and confidential meetings. Perfect for small teams and independent professionals.",
      img: "/images/hero-slide-3.webp",
      features: ["Sound Insulated", "Whiteboard", "Storage Lockers"]
    },
    {
      title: "Team Cabins",
      desc: "Spacious 4-seater and larger cabins designed to foster collaboration while maintaining your team's privacy.",
      img: "/images/conference-hall.webp",
      features: ["High-speed LAN", "Custom Layouts", "24/7 Access"]
    },
    {
      title: "Dedicated Desks",
      desc: "Your own permanent desk in our beautifully designed open-plan workspace. Leave your monitors and gear securely.",
      img: "/images/hero-slide-2.webp",
      features: ["Ergonomic Chair", "Lockable Pedestal", "Mail Handling"]
    },
    {
      title: "Hot Desks",
      desc: "Maximum flexibility for freelancers and digital nomads. Pick any available seat in our vibrant lounge or open areas.",
      img: "/images/amenities/workspace_options.webp",
      features: ["Flexible Seating", "Networking Events", "Cafe Access"]
    },
    {
      title: "Shared Workspace",
      desc: "A collaborative environment where you can connect with other founders and creators in a premium setting.",
      img: "/images/hero-slide-1.webp",
      features: ["Community Vibe", "Pantry Access", "Phone Booths"]
    }
  ];

  return (
    <section id="workspaces" className="py-24 md:py-32 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary-fixed"></div>
                <div className="text-primary-fixed text-sm uppercase tracking-[0.2em] font-semibold">
                  Workspace Solutions
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl text-primary font-light tracking-tight leading-[1.2]">
                Choose Your <br/>
                <span className="font-medium">Perfect Environment.</span>
              </h2>
            </div>
            <a href="/facilities" className="hidden md:inline-flex items-center gap-2 text-primary-fixed hover:text-white transition-colors border-b border-primary-fixed/30 hover:border-white pb-1 font-medium tracking-wide">
              View All Facilities <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workspaces.map((workspace, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="group relative bg-black/40 border border-white/10 overflow-hidden flex flex-col h-full hover:border-primary-fixed/50 transition-colors duration-500">
                <div className="h-56 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[0.2] group-hover:grayscale-0"
                    alt={workspace.title}
                    src={workspace.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  {workspace.exclusive && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-fixed text-black text-[10px] uppercase tracking-widest font-bold">
                      Premium
                    </div>
                  )}
                  <h3 className="absolute bottom-4 left-6 text-2xl text-primary font-medium">{workspace.title}</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-secondary/80 font-light text-sm leading-relaxed mb-6 flex-1">
                    {workspace.desc}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {workspace.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-primary/90 font-light border-b border-white/5 pb-2">
                        <span className="material-symbols-outlined text-primary-fixed text-[16px]">done</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 border border-white/20 text-primary font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 tracking-wide text-sm">
                    Inquire Now
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="/facilities" className="inline-flex items-center gap-2 text-primary-fixed hover:text-white transition-colors border-b border-primary-fixed/30 hover:border-white pb-1 font-medium tracking-wide">
            View All Facilities <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
