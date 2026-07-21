"use client";
import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        
        <FadeIn delay={0} y={20} className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-[rgba(215,226,234,0.1)] pb-12">
          
          {/* Brand & Subtext */}
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start max-w-md">
            <h2 className="text-[#D7E2EA] font-black uppercase text-3xl md:text-4xl tracking-tight">Nexora Square</h2>
            <p className="text-[#D7E2EA] opacity-60 font-light text-sm md:text-base leading-relaxed">
              Premium coworking space in Perinthalmanna for startups, freelancers, and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-sm">
            <Link href="#home" className="hover:text-[#99D508] transition-colors duration-200">Home</Link>
            <Link href="#about" className="hover:text-[#99D508] transition-colors duration-200">About</Link>
            <Link href="#workspaces" className="hover:text-[#99D508] transition-colors duration-200">Workspaces</Link>
            <Link href="#facilities" className="hover:text-[#99D508] transition-colors duration-200">Facilities</Link>
            <Link href="#contact" className="hover:text-[#99D508] transition-colors duration-200">Contact</Link>
          </nav>
          
        </FadeIn>

        <FadeIn delay={0.2} y={10} className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#D7E2EA] opacity-40 text-xs md:text-sm font-light">
          <p>&copy; {currentYear} Nexora Square. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#99D508] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#99D508] transition-colors">Terms of Service</Link>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
}
