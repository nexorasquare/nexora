"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AmbientBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      
      if (blob1Ref.current) {
        const x = Math.sin(time) * 20;
        const y = Math.cos(time * 0.8) * 20;
        blob1Ref.current.style.transform = `translate(${x}vw, ${y}vh) scale(${1 + Math.sin(time * 0.5) * 0.1})`;
      }
      
      if (blob2Ref.current) {
        const x = Math.cos(time * 0.9) * 25;
        const y = Math.sin(time * 1.1) * 25;
        blob2Ref.current.style.transform = `translate(${x}vw, ${y}vh) scale(${1 + Math.cos(time * 0.6) * 0.1})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#060B0F] z-0">
      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(6,11,15,0)_0%,rgba(6,11,15,0.8)_80%,#060B0F_100%)] pointer-events-none"></div>
      
      {/* Moving Ambient Blobs */}
      <div 
        ref={blob1Ref}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#99D508] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.15]"
      ></div>
      <div 
        ref={blob2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#10171F] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.8]"
      ></div>
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-[rgba(153,213,8,0.08)] rounded-full mix-blend-screen filter blur-[80px] animate-pulse" style={{ animationDuration: '8s' }}></div>

      {/* High-Tech Grid Substructure (Subtle) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }}
      ></div>
    </div>
  );
}
