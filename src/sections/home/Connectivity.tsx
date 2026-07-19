"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const slides = [
  {
    category: "Hotels",
    icon: "hotel",
    items: [
      { name: "Hi-Ton Hotel", time: "3 min walk" },
      { name: "N Comfort Apartment", time: "5 min walk" },
    ],
  },
  {
    category: "Banks",
    icon: "account_balance",
    items: [
      { name: "Federal Bank", time: "4 min drive" },
      { name: "HDFC Bank", time: "4 min drive" },
      { name: "SBI Bank", time: "5 min drive" },
    ],
  },
  {
    category: "Shopping",
    icon: "local_mall",
    items: [
      { name: "Market City", time: "1 min walk" },
      { name: "Aysha Complex", time: "2 min walk" },
      { name: "Vavas Mall", time: "3 min walk" },
    ],
  },
  {
    category: "Hypermarkets & Dining",
    icon: "restaurant",
    items: [
      { name: "Nesto Hypermarket", time: "1 min walk" },
      { name: "Bismi", time: "3 min drive" },
      { name: "Mazali and Chillies", time: "4 min drive" },
      { name: "Just Loaf", time: "5 min drive" },
    ],
  },
  {
    category: "Healthcare",
    icon: "local_hospital",
    items: [
      { name: "KIMS Al-Shifa", time: "4 min drive" },
      { name: "Moulana", time: "5 min drive" },
      { name: "Ems Hospital", time: "8 min drive" },
      { name: "MES Medical College", time: "12 min drive" },
    ],
  },
  {
    category: "Connectivity",
    icon: "commute",
    items: [
      { name: "Bus Stand", time: "5 min walk" },
      { name: "Angadippuram Station", time: "4 min drive" },
      { name: "Calicut Airport", time: "50 min drive" },
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
    <section className="py-24 md:py-36 bg-surface px-margin-mobile md:px-margin-desktop border-b border-white/5">
      <div className="max-w-container-max mx-auto">
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display-md text-4xl md:text-5xl lg:text-6xl text-primary font-light tracking-tighter">
              Prime Location <span className="text-primary-fixed">_</span>
            </h2>
            
            {/* Desktop Carousel Controls */}
            <div className="hidden md:flex items-center gap-6">
              <span className="font-body-sm text-secondary uppercase tracking-[0.2em] text-xs font-bold">
                {currentIndex + 1} / {slides.length}
              </span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary hover:border-primary-fixed hover:text-primary-fixed transition-colors duration-300"
                >
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary hover:border-primary-fixed hover:text-primary-fixed transition-colors duration-300"
                >
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Map Side (Fixed) */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-[650px] w-full bg-surface-container-lowest overflow-hidden group">
            <Reveal className="w-full h-full">
              {/* Map Iframe with Dark Mode CSS Filter */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.807758789502!2d76.2238466!3d10.9754593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cc30a21cf8c3%3A0xc391b10a1200155b!2sPerinthalmanna%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 pointer-events-none transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: "grayscale(100%) invert(92%) contrast(1.1) brightness(0.9)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Glowing Marker Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="relative flex justify-center items-center">
                  <div className="absolute w-12 h-12 bg-primary-fixed rounded-full animate-ping opacity-20"></div>
                  <div className="w-3 h-3 bg-primary-fixed rounded-full shadow-[0_0_20px_rgba(163,250,0,0.8)] relative z-10 border border-surface-container-lowest"></div>
                </div>
                <div className="mt-4 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-primary-fixed text-[10px] font-bold tracking-[0.2em] uppercase">
                  Nexora Square
                </div>
              </div>
            </Reveal>
          </div>

          {/* List Carousel Side */}
          <div className="lg:col-span-5 flex flex-col justify-center overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-3xl text-secondary">
                        {slide.icon}
                      </span>
                      <h3 className="font-display-md text-3xl text-primary font-light">
                        {slide.category}
                      </h3>
                    </div>
                    
                    {/* Mobile Carousel Controls */}
                    <div className="flex md:hidden items-center gap-3">
                      <span className="font-body-sm text-secondary uppercase tracking-[0.2em] text-[10px] font-bold">
                        {currentIndex + 1} / {slides.length}
                      </span>
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={prevSlide}
                          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary active:border-primary-fixed active:text-primary-fixed transition-colors duration-300"
                        >
                          <span className="material-symbols-outlined text-sm">west</span>
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary active:border-primary-fixed active:text-primary-fixed transition-colors duration-300"
                        >
                          <span className="material-symbols-outlined text-sm">east</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    {slide.items.map((item, i) => (
                      <div key={i} className="group flex items-center justify-between py-6 md:py-8 border-b border-white/10 hover:border-primary-fixed/30 transition-colors duration-500 cursor-default">
                        <span className="font-display-sm text-xl md:text-2xl font-light text-primary group-hover:text-primary-fixed transition-colors duration-500">
                          {item.name}
                        </span>
                        <span className="font-body-sm text-[10px] md:text-xs font-bold tracking-[0.2em] text-secondary uppercase text-right pl-4">
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
