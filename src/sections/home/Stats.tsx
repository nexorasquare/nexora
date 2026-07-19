"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 100, suffix: "+", stringVal: null, label: "Professionals & Founders" },
  { value: 24, suffix: "/7", stringVal: null, label: "Secure Access" },
  { value: 1, suffix: " Gbps", stringVal: null, label: "Dedicated Fiber" },
  { value: null, suffix: "", stringVal: "Unlimited", label: "Coffee Bar" },
];

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-background py-24 md:py-40 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* Animated Horizontal Timeline Divider */}
        <div className="relative w-full mb-16 md:mb-24">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 h-[1px] bg-white/20"
          ></motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {stats.map((stat, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex-1 group cursor-default w-full"
              >
                {/* Subtle Radial Glow on Hover */}
                <div 
                  className={`absolute -inset-10 bg-primary-fixed/5 blur-3xl rounded-full transition-opacity duration-1000 -z-10 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                ></div>

                {/* Vertical marker line connecting to timeline */}
                <div className="hidden md:block absolute -top-[6rem] left-0 w-[1px] h-12 bg-white/10 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>
                <div className="hidden md:block absolute -top-[6rem] left-0 w-[1px] h-12 bg-primary-fixed origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100 ease-out z-10"></div>

                <div className="flex flex-col">
                  {/* Large Typography Value */}
                  <div className={`font-display-lg text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter mb-4 transition-colors duration-700 ${isActive ? 'text-primary-fixed' : 'text-primary'}`}>
                    {stat.stringVal ? (
                      stat.stringVal
                    ) : (
                      <span className="flex items-baseline">
                        {inView ? (
                          <CountUp end={stat.value!} duration={3} delay={index * 0.2} useEasing />
                        ) : "0"}
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  
                  {/* Label */}
                  <div className={`font-body-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-700 ${isActive ? 'text-white' : 'text-secondary'}`}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
