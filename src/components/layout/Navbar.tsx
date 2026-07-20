"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BookingModal } from "@/components/ui/BookingModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Workspaces", href: "/facilities" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background border-b border-white/10 shadow-2xl z-50 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto relative z-50">
        <Link href="/" onClick={closeMenu} className="relative w-32 h-10 md:w-40 md:h-12 flex items-center">
          <Image 
            src="/images/logo-transparent-v2.png" 
            alt="Nexora Square" 
            fill 
            sizes="(max-width: 768px) 128px, 160px"
            className="object-contain object-left"
            priority
          />
        </Link>
        <div className="hidden md:flex gap-gutter items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                className={`transition-all duration-300 font-body-md text-body-md ${
                  isActive
                    ? "text-primary-fixed font-bold border-b-2 border-primary-fixed pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="ml-4 px-6 py-2 md:px-8 md:py-3 bg-primary-fixed text-on-primary-fixed font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 neon-button-glow"
          >
            Book Now
          </button>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-primary">
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 pt-24 pb-10 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-start space-y-8 overflow-y-auto transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              onClick={closeMenu}
              className={`text-3xl font-bold tracking-wider transition-colors ${
                isActive ? "text-primary-fixed" : "text-primary hover:text-primary-fixed"
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
        <button 
          onClick={() => {
            closeMenu();
            setIsBookingOpen(true);
          }}
          className="mt-8 px-10 py-4 bg-primary-fixed text-on-primary-fixed font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 neon-button-glow text-xl"
        >
          Book Now
        </button>
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </nav>
  );
}
