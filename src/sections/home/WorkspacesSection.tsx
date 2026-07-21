"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { LiveProjectButton } from "@/components/ui/LiveProjectButton";

const workspaces = [
  {
    num: "01",
    label: "WORKSPACE",
    title: "Private Cabins",
    img1: "/images/executive-suite.webp",
    img2: "/images/conference-hall.webp",
    img3: "/images/hero-slide-2.webp"
  },
  {
    num: "02",
    label: "WORKSPACE",
    title: "Dedicated Desks",
    img1: "/images/dedicated-desks.webp",
    img2: "/images/hot-desks.webp",
    img3: "/images/shared-workspace.webp"
  },
  {
    num: "03",
    label: "WORKSPACE",
    title: "Flexible Spaces",
    img1: "/images/hot-desks.webp",
    img2: "/images/networking-area.webp",
    img3: "/images/lounge-area.webp"
  }
];

export function WorkspacesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="workspaces" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 pb-[20vh]">
      <div className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Workspaces
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto relative h-[300vh]">
        {workspaces.map((ws, index) => {
          // Adjust scroll calculations based on total height
          const start = index * 0.33;
          const end = start + 0.33;
          const scale = useTransform(scrollYProgress, [start, end], [1, 1 - (workspaces.length - 1 - index) * 0.03]);
          
          return (
            <motion.div
              key={index}
              style={{ scale, top: `calc(10vh + ${index * 28}px)` }}
              className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-8 shadow-2xl overflow-hidden"
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-6">
                  <span className="font-black text-[#D7E2EA] text-[clamp(3rem,8vw,100px)] leading-none">{ws.num}</span>
                  <div className="flex flex-col">
                    <span className="text-[#99D508] font-medium uppercase tracking-widest text-xs md:text-sm">{ws.label}</span>
                    <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.5rem,4vw,3rem)] leading-tight">{ws.title}</h3>
                  </div>
                </div>
                <LiveProjectButton label="Book Tour" />
              </div>

              {/* Bottom Row Images */}
              <div className="flex flex-col md:flex-row gap-4 h-full min-h-[400px]">
                <div className="flex flex-col w-full md:w-[40%] gap-4">
                  <div className="relative w-full h-[clamp(130px,16vw,230px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
                    <Image src={ws.img1} alt={ws.title} fill className="object-cover" />
                  </div>
                  <div className="relative w-full flex-1 min-h-[clamp(160px,22vw,340px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
                    <Image src={ws.img2} alt={ws.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="relative w-full md:w-[60%] min-h-[300px] md:min-h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
                  <Image src={ws.img3} alt={ws.title} fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
