"use client";
import React from "react";
import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function LiveProjectButton({ label = "Explore Space", onClick, className = "" }: LiveProjectButtonProps) {
  return (
    <motion.button
      whileHover={{ backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors ${className}`}
    >
      {label}
    </motion.button>
  );
}
