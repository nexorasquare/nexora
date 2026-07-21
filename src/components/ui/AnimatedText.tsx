"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function AnimatedChar({ char, index, totalLength, scrollYProgress }: { char: string, index: number, totalLength: number, scrollYProgress: MotionValue<number> }) {
  const start = index / totalLength;
  const end = start + 0.1;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  
  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{char}</span>
      <motion.span 
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, index) => (
        <AnimatedChar 
          key={index} 
          char={char} 
          index={index} 
          totalLength={characters.length} 
          scrollYProgress={scrollYProgress} 
        />
      ))}
    </p>
  );
}
