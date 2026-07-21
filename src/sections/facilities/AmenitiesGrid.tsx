"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

const amenities = [
  {
    category: "Workspace Options",
    image: "/images/amenities/workspace_options.webp",
    items: ["Private cabins (1–6 people)", "Dedicated workstations", "Flexible (hot) desks", "4-seater team cabins", "Executive office suites", "Shared open workspace"],
  },
  {
    category: "Meeting & Collaboration",
    image: "/images/conference-hall.webp",
    items: ["Conference hall (8-10 people)", "Telebooths & Phone booths", "Interview room"],
  },
  {
    category: "Business Amenities",
    image: "/images/hero-slide-2.webp",
    items: ["High-speed Wi-Fi", "Printing & photocopying", "Reception and front desk", "Mail handling", "Lockers & Storage cabinets"],
  },
  {
    category: "Comfort & Productivity",
    image: "/images/hero-slide-1.webp",
    items: ["Coffee station", "Café area", "Lounge & networking area", "Air conditioning", "Charging stations"],
  },
  {
    category: "Technology",
    image: "/images/soundproof-booth.webp",
    items: ["Smart TVs & projectors", "Video conferencing equipment", "Digital booking system", "RFID Access control", "CCTV security", "Power backup"],
  },
  {
    category: "Community & Networking",
    image: "/images/hero-slide-3.webp",
    items: ["Networking events", "Workshops and training", "Startup mentoring", "Investor meetups"],
  },
  {
    category: "Wellness",
    image: "/images/meditation-room.webp",
    items: ["Quiet zone", "Prayer room", "Wellness room", "Indoor plants", "Natural lighting"],
  },
  {
    category: "Premium Features",
    image: "/images/podcast-studio.webp",
    items: ["Virtual office packages", "Legal & HR Support", "Digital marketing", "Podcast studio", "Photography corner"],
  },
];

export function AmenitiesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = amenities[activeIndex];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary-fixed/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary-fixed"></div>
                <div className="text-primary-fixed text-sm uppercase tracking-[0.2em] font-semibold">
                  Comprehensive Facilities
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-light tracking-tight leading-[1.1]">
                Everything You Need <br/>
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed">to Succeed.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-0 border-l border-white/5">
            {amenities.map((group, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-8 py-6 transition-all duration-500 border-l-[3px] relative -ml-[2px]
                    ${isActive 
                      ? "border-primary-fixed text-primary bg-gradient-to-r from-primary-fixed/10 to-transparent" 
                      : "border-transparent text-secondary/60 hover:text-primary hover:bg-white/5"
                    }
                  `}
                >
                  <span className={`text-xl md:text-2xl font-light tracking-wide ${isActive ? "text-primary-fixed" : ""}`}>
                    {group.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-7 flex flex-col overflow-hidden">
            {/* The Image */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-none mb-12 bg-black border border-white/10">
              <Image 
                key={activeTab.image} 
                src={activeTab.image}
                alt={activeTab.category}
                fill
                className="object-cover animate-in fade-in zoom-in-105 duration-1000 ease-out grayscale-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Title and List */}
            <div 
              key={activeTab.category} 
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
            >
              <h3 className="text-3xl md:text-4xl text-primary font-light mb-8">
                {activeTab.category}
              </h3>
              
              <div className="w-full h-[1px] bg-white/10 mb-8"></div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {activeTab.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-secondary/90">
                    <span className="material-symbols-outlined text-primary-fixed text-lg mr-3 mt-0.5">check_circle</span>
                    <span className="text-base tracking-wide font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
