"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 40, suffix: "+", stringVal: null, label: "Premium Facilities", desc: "For seamless business ops" },
  { value: 10, suffix: "k+", stringVal: null, label: "Sq. Ft. Workspace", desc: "Spacious & ergonomic design" },
  { value: 24, suffix: "/7", stringVal: null, label: "Access Control", desc: "Work on your own schedule" },
  { value: 100, suffix: "%", stringVal: null, label: "Power Backup", desc: "Uninterrupted productivity" },
];

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-background py-20 px-6 md:px-12 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex flex-col md:px-8 first:pl-0 last:pr-0 cursor-default"
              >
                <div className={`text-4xl md:text-5xl font-light mb-2 transition-colors duration-500 ${isActive ? 'text-white' : 'text-primary-fixed'}`}>
                  {stat.stringVal ? (
                    stat.stringVal
                  ) : (
                    <span className="flex items-baseline">
                      {inView ? (
                        <CountUp end={stat.value!} duration={2.5} delay={index * 0.1} useEasing />
                      ) : "0"}
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                <div className="text-primary font-medium text-lg mb-1 tracking-wide">
                  {stat.label}
                </div>
                
                <div className="text-secondary/60 text-sm font-light">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
