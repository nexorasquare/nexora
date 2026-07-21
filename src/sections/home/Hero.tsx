"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/hero-slide-1.webp",
    "/images/hero-slide-2.webp",
    "/images/hero-slide-3.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide}')`,
              transform: `translateY(${scrollY * 0.4}px) scale(1.05)`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-20 text-center max-w-4xl px-margin-mobile md:px-0">
        <Reveal>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
            Where Ideas <span className="text-primary-fixed">Work Better.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-2xl mx-auto">
            Premium Coworking Spaces crafted for Startups, Businesses, Freelancers & Remote Teams in Perinthalmanna.
          </p>
          <div className="flex justify-center">
            <a
              className="px-8 py-4 bg-primary-fixed text-on-primary-fixed font-bold rounded-xl flex items-center justify-center gap-2 neon-button-glow hover:scale-105 transition-all duration-300"
              href="https://wa.me/918881888444"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </div>
    </header>
  );
}
