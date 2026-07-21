"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* A grid that responds to the cursor with a #99D508 glow */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #99D508 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Mouse follower glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-[#99D508]/20"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />
    </div>
  );
}
