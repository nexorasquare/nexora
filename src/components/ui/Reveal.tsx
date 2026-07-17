"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "active" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
