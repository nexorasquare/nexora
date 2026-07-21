"use client";
import React from "react";
import { motion } from "framer-motion";

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function ContactButton({ label = "Chat on WhatsApp", onClick, className = "" }: ContactButtonProps) {
  return (
    <motion.a
      href="https://wa.me/918881888444"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`inline-flex relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base outline outline-2 outline-white outline-offset-[-3px] cursor-pointer ${className}`}
      style={{
        background: "linear-gradient(123deg, #091202 7%, #4B7804 37%, #99D508 72%, #C2FF33 100%)",
        boxShadow: "0px 4px 10px rgba(153, 213, 8, 0.3), 2px 2px 10px rgba(153, 213, 8, 0.6) inset"
      }}
    >
      {label}
    </motion.a>
  );
}
