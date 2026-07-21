"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const marqueeImages = [
  "/images/hero-slide-1.webp",
  "/images/soundproof-booth.webp",
  "/images/executive-suite.webp",
  "/images/hero-slide-2.webp",
  "/images/hero-slide-3.webp",
  "/images/conference-hall.webp",
  "/images/meditation-room.webp",
  "/images/podcast-studio.webp",
  "/images/hero-slide-1.webp",
  "/images/executive-suite.webp",
  "/images/hero-slide-2.webp",
  "/images/soundproof-booth.webp",
  "/images/conference-hall.webp"
];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const offset = (window.scrollY - (window.scrollY + top) + window.innerHeight) * 0.3;
        setScrollOffset(offset);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseRow1 = marqueeImages.slice(0, 7);
  const baseRow2 = marqueeImages.slice(7);
  
  const row1 = [...baseRow1, ...baseRow1, ...baseRow1];
  const row2 = [...baseRow2, ...baseRow2, ...baseRow2];

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 moves right */}
        <div 
          className="flex gap-3 whitespace-nowrap"
          style={{ 
            transform: `translateX(${scrollOffset - 200}px)`,
            willChange: 'transform'
          }}
        >
          {row1.map((src, i) => (
            <div key={`r1-${i}`} className="relative w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden">
              <Image src={src} alt="GIF" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
        
        {/* Row 2 moves left */}
        <div 
          className="flex gap-3 whitespace-nowrap"
          style={{ 
            transform: `translateX(${-(scrollOffset - 200)}px)`,
            willChange: 'transform'
          }}
        >
          {row2.map((src, i) => (
            <div key={`r2-${i}`} className="relative w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden">
              <Image src={src} alt="GIF" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
