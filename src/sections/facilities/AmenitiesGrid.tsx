"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AmenitiesGrid() {
  const amenities = [
    {
      category: "Workspace Options",
      icon: "corporate_fare",
      items: ["Private cabins (1–6 people)", "Dedicated workstations", "Flexible (hot) desks", "4-seater team cabins", "Executive office suites", "Shared open workspace"],
    },
    {
      category: "Meeting & Collaboration",
      icon: "groups",
      items: ["Conference hall (8-10 people)", "Telebooths / Phone booths (soundproof)", "Interview room"],
    },
    {
      category: "Business Amenities",
      icon: "business_center",
      items: ["High-speed Wi-Fi", "Printing, scanning & photocopying", "Reception and front desk", "Business address & mail handling", "Courier/package receiving", "Lockers", "Storage cabinets"],
    },
    {
      category: "Comfort & Productivity",
      icon: "coffee",
      items: ["Pantry / Coffee station", "Café or snack area", "Lounge & networking area", "Air conditioning", "Drinking water", "Charging station"],
    },
    {
      category: "Technology",
      icon: "devices",
      items: ["Smart TVs/projectors", "Video conferencing equipment", "Digital booking system for meeting rooms", "Access control with RFID/card/QR", "CCTV security", "Power backup (UPS/Inverter/Generator)"],
    },
    {
      category: "Community & Networking",
      icon: "forum",
      items: ["Networking events", "Workshops and training sessions", "Startup mentoring sessions", "Investor meetups"],
    },
    {
      category: "Wellness",
      icon: "self_improvement",
      items: ["Quiet zone", "Prayer/Meditation room", "Wellness room", "Indoor plants", "Natural lighting"],
    },
    {
      category: "Additional Services",
      icon: "support_agent",
      items: ["Virtual office packages", "Company registration assistance", "GST and accounting support", "Legal consultation", "HR and recruitment assistance", "Digital marketing support"],
    },
    {
      category: "Premium Features",
      icon: "star",
      items: ["Podcast/Content creation studio", "Photography corner", "Library/Reading zone", "Gaming/Relaxation area"],
    },
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-padding">
      <Reveal>
        <div className="text-center mb-16">
          <div className="font-label-sm text-label-sm text-primary-fixed mb-4 uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary-fixed"></span>
            All Inclusive
            <span className="w-8 h-[1px] bg-primary-fixed"></span>
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-4">Everything You Need to Succeed</h2>
          <p className="font-body-md text-secondary max-w-2xl mx-auto">
            We've anticipated every requirement for modern professionals. From essential business infrastructure to wellness spaces, it's all here.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-primary-fixed/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((group, index) => (
            <Reveal delay={index * 50} key={index}>
              <div className="glass-panel p-8 rounded-[2rem] h-full flex flex-col border border-white/5 hover:border-primary-fixed/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(163,250,0,0.1)] hover:bg-gradient-to-b hover:from-white/10 hover:to-white/0 transition-all duration-500 group relative overflow-hidden">
                {/* Subtle top highlight on hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-fixed/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-fixed/20 group-hover:shadow-[0_0_20px_rgba(163,250,0,0.2)] transition-all duration-500">
                    <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-primary-fixed transition-colors duration-500">{group.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-xl text-white tracking-wide">{group.category}</h3>
                </div>
                <ul className="space-y-4 flex-1">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary text-sm group/item cursor-default">
                      <span className="material-symbols-outlined text-primary-fixed/50 text-lg mt-0.5 group-hover/item:text-primary-fixed group-hover/item:scale-110 transition-all duration-300">check_circle</span>
                      <span className="leading-relaxed font-body-md group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
