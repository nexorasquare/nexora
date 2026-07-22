"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Magnet } from "@/components/ui/Magnet";
import { BookingModal } from "@/components/ui/BookingModal";

export function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-[#0C0C0C]">
      
      {/* 1. Cinematic Photo Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-slide-1.webp" 
          alt="Premium Coworking Space" 
          fill 
          priority
          className="object-cover object-center"
        />
        {/* Deep Moody Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[rgba(12,12,12,0.8)] to-[rgba(12,12,12,0.4)] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C] opacity-90"></div>
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,12,12,0.6)_100%)]"></div>
      </div>

      {/* 4. Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute top-[15%] left-0 right-0 h-[1px] bg-white opacity-[0.05]"></div>
        <div className="absolute bottom-[15%] left-0 right-0 h-[1px] bg-white opacity-[0.05]"></div>
      </div>

      {/* 3. Architectural Top Header */}
      <div className="absolute top-0 left-0 w-full z-50 px-6 sm:px-10 py-6">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-6 flex justify-between items-center">
          <FadeIn delay={0} y={-20}>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative w-36 h-10 md:w-48 md:h-14 block cursor-pointer"
            >
              <Image 
                src="/images/logo-transparent-v2.webp" 
                alt="Nexora Square Logo" 
                fill 
                className="object-contain object-left"
              />
            </a>
          </FadeIn>
          
          <FadeIn delay={0.1} y={-20} className="hidden md:block">
            <nav className="flex items-center gap-10">
              {['Home', 'About', 'Workspaces', 'Facilities', 'Contact'].map((item, i) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    if (item === 'Contact') {
                      e.preventDefault();
                      setIsBookingOpen(true);
                    }
                  }}
                  className="text-white opacity-60 hover:opacity-100 hover:text-[#99D508] font-medium uppercase tracking-[0.2em] text-xs transition-all duration-300 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </nav>
          </FadeIn>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden absolute right-6 top-6 text-white opacity-90 p-2 z-[100]"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0C0C0C] z-[100] flex flex-col justify-center items-center transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white opacity-80 hover:opacity-100 p-2"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <nav className="flex flex-col items-center gap-8">
          {['Home', 'About', 'Workspaces', 'Facilities', 'Contact'].map((item, i) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (item === 'Contact') {
                  e.preventDefault();
                  setIsBookingOpen(true);
                }
              }}
              className="text-white hover:text-[#99D508] font-medium uppercase tracking-[0.3em] text-sm transition-all duration-300 block"
              style={{ transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: `${i * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      )}

      {/* 2. Asymmetric / Dynamic Typography (Bottom-Left bias) */}
      <div className="relative z-20 flex-1 flex flex-col justify-end px-6 sm:px-[10%] pb-[15vh]">
        <div className="max-w-4xl">
          


          {/* Main Headline (Left Aligned, No Stroke) */}
          <h1 className="font-black uppercase tracking-tighter leading-[0.85] text-[clamp(2.5rem,8vw,9rem)] flex flex-col drop-shadow-2xl">
            <FadeIn delay={0.4} y={40} className="overflow-hidden">
              <span className="block text-white pr-4">Premium</span>
            </FadeIn>
            <FadeIn delay={0.5} y={40} className="overflow-hidden">
              <span className="block text-[#99D508] pr-4">Coworking</span>
            </FadeIn>
            <FadeIn delay={0.6} y={40} className="overflow-hidden">
              <span className="block text-white opacity-90 pr-4">Space.</span>
            </FadeIn>
          </h1>

          {/* Bottom Bar: Description & Badge */}
          <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-[rgba(255,255,255,0.1)] pt-8">
            <FadeIn delay={0.7} y={20} className="max-w-[400px]">
              <p className="text-white opacity-60 font-light text-[clamp(0.875rem,1vw,1rem)] leading-relaxed tracking-wide">
                Designed for startups, freelancers, and remote teams in Perinthalmanna. Experience unparalleled productivity in a community-driven environment.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} y={20} className="w-full md:w-auto">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsBookingOpen(true);
                }}
                className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-6 py-4 md:py-3 rounded-sm border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#99D508] hover:text-[#0C0C0C] hover:border-[#99D508] transition-all duration-300 cursor-pointer"
              >
                Book a Visit
              </button>
            </FadeIn>
          </div>

        </div>
      </div>

    </section>
  );
}
