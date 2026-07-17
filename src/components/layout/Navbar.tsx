import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-secondary/40 backdrop-blur-xl border-b border-white/10 shadow-2xl z-50 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          Nexora Square
        </Link>
        <div className="hidden md:flex gap-gutter items-center space-x-12">
          <Link
            className="text-primary-fixed font-bold border-b-2 border-primary-fixed pb-1 font-body-md text-body-md transition-all duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-all duration-300 font-body-md text-body-md"
            href="/facilities"
          >
            Workspaces
          </Link>

          <Link
            className="text-on-surface-variant hover:text-primary transition-all duration-300 font-body-md text-body-md"
            href="/about"
          >
            About
          </Link>
          <button className="ml-4 px-6 py-2 md:px-8 md:py-3 bg-primary-fixed text-on-primary-fixed font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 neon-button-glow">
            Book Now
          </button>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
