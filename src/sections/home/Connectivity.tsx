"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const slides = [
  {
    category: "Transport",
    icon: "commute",
    items: [
      { name: "Angadippuram Railway Station", time: "1 Km" },
      { name: "Calicut International Airport", time: "40 Km" },
    ],
  },
  {
    category: "Hotels & Stays",
    icon: "hotel",
    items: [
      { name: "Hi-Ton Hotel", time: "220 Mtr" },
      { name: "N Comfort Luxurious Apartment", time: "1 Km" },
    ],
  },
  {
    category: "Banks",
    icon: "account_balance",
    items: [
      { name: "Federal Bank", time: "1 Km" },
      { name: "HDFC Bank", time: "1 Km" },
      { name: "SBI Bank", time: "1.5 Km" },
    ],
  },
  {
    category: "Shopping",
    icon: "local_mall",
    items: [
      { name: "Market City", time: "0.05 Km" },
      { name: "Nesto", time: "0.05 Km" },
      { name: "Aysha Complex", time: "0.5 Km" },
      { name: "Bismi", time: "1.00 Km" },
      { name: "Vavas Mall", time: "1.2 Km" },
    ],
  },
  {
    category: "Dining",
    icon: "restaurant",
    items: [
      { name: "Mazali and Chillies", time: "1 Km" },
      { name: "Just Loaf", time: "1.2 Km" },
      { name: "Grin Table", time: "1.3 Km" },
      { name: "Planet Cafe", time: "2.5 Km" },
    ],
  },
  {
    category: "Healthcare",
    icon: "local_hospital",
    items: [
      { name: "KIMS Al-Shifa", time: "1 Km" },
      { name: "Moulana", time: "1.7 Km" },
      { name: "Ems Hospital", time: "3 Km" },
      { name: "MES Medical College", time: "5 Km" },
    ],
  },
];

export function Connectivity() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-24 md:py-32 bg-background border-y border-white/5 relative">
      <div className="absolute top-1/2 left-0 w-full h-1/3 bg-primary-fixed/5 rounded-[100%] blur-[120px] -z-10 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary-fixed"></div>
                <div className="text-primary-fixed text-sm uppercase tracking-[0.2em] font-semibold">
                  Prime Location
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl text-primary font-light tracking-tight leading-[1.2]">
                Stay Connected to <br/>
                <span className="font-medium">Everything That Matters.</span>
              </h2>
            </div>
            
            {/* Desktop Carousel Controls */}
            <div className="hidden md:flex items-center gap-6">
              <span className="text-secondary/70 uppercase tracking-[0.2em] text-xs font-semibold">
                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-primary hover:bg-white hover:text-black hover:border-white transition-all duration-300 ease-out"
                >
                  <span className="material-symbols-outlined font-light">west</span>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-primary hover:bg-white hover:text-black hover:border-white transition-all duration-300 ease-out"
                >
                  <span className="material-symbols-outlined font-light">east</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Map Side */}
          <div className="lg:col-span-6 relative h-[450px] lg:h-[600px] w-full border border-white/10 overflow-hidden group">
            <Reveal className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.807758789502!2d76.2238466!3d10.9754593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cc30a21cf8c3%3A0xc391b10a1200155b!2sPerinthalmanna%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 pointer-events-none transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                style={{ filter: "grayscale(100%) invert(100%) contrast(1.2) brightness(0.9)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="relative flex justify-center items-center">
                  <div className="absolute w-16 h-16 bg-primary-fixed rounded-full animate-ping opacity-20"></div>
                  <div className="w-4 h-4 bg-primary-fixed rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)] relative z-10 border-2 border-background"></div>
                </div>
                <div className="mt-4 bg-background/90 backdrop-blur-md px-5 py-2 border border-white/20 text-primary-fixed text-[10px] font-bold tracking-[0.2em] uppercase">
                  Nexora Square
                </div>
              </div>
            </Reveal>
          </div>

          {/* List Side */}
          <div className="lg:col-span-6 flex flex-col justify-center overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <div className="flex items-center justify-between border-b border-white/20 pb-8 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-3xl text-primary-fixed font-light">
                        {slide.icon}
                      </span>
                      <h3 className="text-2xl md:text-3xl text-primary font-light">
                        {slide.category}
                      </h3>
                    </div>
                    
                    <div className="flex md:hidden items-center gap-3">
                      <button 
                        onClick={prevSlide}
                        className="w-10 h-10 border border-white/20 flex items-center justify-center text-primary active:bg-white active:text-black transition-colors duration-300 flex-shrink-0"
                      >
                        <span className="material-symbols-outlined text-sm font-light">west</span>
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="w-10 h-10 border border-white/20 flex items-center justify-center text-primary active:bg-white active:text-black transition-colors duration-300 flex-shrink-0"
                      >
                        <span className="material-symbols-outlined text-sm font-light">east</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    {slide.items.map((item, i) => (
                      <div key={i} className="group flex items-center justify-between py-5 md:py-6 border-b border-white/5 hover:border-primary-fixed/40 transition-colors duration-500 cursor-default">
                        <span className="text-xl md:text-2xl font-light text-secondary group-hover:text-primary transition-colors duration-500">
                          {item.name}
                        </span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary-fixed uppercase text-right pl-4 whitespace-nowrap">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
