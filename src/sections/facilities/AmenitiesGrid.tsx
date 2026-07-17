"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

const amenities = [
  {
    category: "Workspace Options",
    image: "/images/amenities/workspace_options.png",
    items: ["Private cabins (1–6 people)", "Dedicated workstations", "Flexible (hot) desks", "4-seater team cabins", "Executive office suites", "Shared open workspace"],
  },
  {
    category: "Meeting & Collaboration",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600",
    items: ["Conference hall (8-10 people)", "Telebooths & Phone booths", "Interview room"],
  },
  {
    category: "Business Amenities",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
    items: ["High-speed Wi-Fi", "Printing & photocopying", "Reception and front desk", "Mail handling", "Lockers & Storage cabinets"],
  },
  {
    category: "Comfort & Productivity",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=1600",
    items: ["Coffee station", "Café area", "Lounge & networking area", "Air conditioning", "Charging stations"],
  },
  {
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600",
    items: ["Smart TVs & projectors", "Video conferencing equipment", "Digital booking system", "RFID Access control", "CCTV security", "Power backup"],
  },
  {
    category: "Community & Networking",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
    items: ["Networking events", "Workshops and training", "Startup mentoring", "Investor meetups"],
  },
  {
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600",
    items: ["Quiet zone", "Prayer room", "Wellness room", "Indoor plants", "Natural lighting"],
  },
  {
    category: "Additional Services",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
    items: ["Virtual office packages", "Company registration", "GST & accounting support", "Legal consultation", "Digital marketing"],
  },
  {
    category: "Premium Features",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=1600",
    items: ["Podcast studio", "Photography corner", "Library zone", "Relaxation area"],
  },
];

export function AmenitiesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = amenities[activeIndex];

  return (
    <section className="py-24 md:py-36 bg-surface px-margin-mobile md:px-margin-desktop border-y border-white/5">
      <div className="max-w-container-max mx-auto">
        <Reveal>
          <div className="mb-16 md:mb-24">
            <h2 className="font-display-md text-4xl md:text-5xl lg:text-6xl text-primary font-light tracking-tighter">
              Everything You Need <br className="hidden md:block" />
              <span className="text-primary-fixed">to Succeed _</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-0 border-l border-white/10">
            {amenities.map((group, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-8 py-6 transition-all duration-500 border-l-2 relative -ml-[1px]
                    ${isActive 
                      ? "border-primary-fixed text-primary-fixed bg-primary-fixed/5" 
                      : "border-transparent text-secondary hover:text-primary hover:bg-white/5"
                    }
                  `}
                >
                  <span className={`font-display-sm text-xl md:text-2xl font-light tracking-wide ${isActive ? "" : ""}`}>
                    {group.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 flex flex-col overflow-hidden">
            {/* The Image */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[2/1] overflow-hidden rounded-3xl mb-12 bg-surface-container-lowest border border-white/10">
              <Image 
                key={activeTab.image} // Force re-render/animation on image change
                src={activeTab.image}
                alt={activeTab.category}
                fill
                className="object-cover animate-in fade-in zoom-in-105 duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Title and List */}
            <div 
              key={activeTab.category} 
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
            >
              <h3 className="font-display-md text-3xl md:text-4xl text-primary font-light mb-8">
                {activeTab.category}
              </h3>
              
              <div className="w-full h-[1px] bg-white/10 mb-8"></div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {activeTab.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-secondary">
                    <span className="w-2 h-2 rounded-full bg-primary-fixed/50 mr-4"></span>
                    <span className="font-body-sm text-sm md:text-base tracking-wide font-light">{item}</span>
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
