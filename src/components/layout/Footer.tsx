import Link from "next/link";
import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="relative w-32 h-10 md:w-40 md:h-12 flex items-center mb-6">
            <Image 
              src="/images/logo-transparent-v2.webp" 
              alt="Nexora Square" 
              fill 
              sizes="(max-width: 768px) 128px, 160px"
              className="object-contain object-left"
            />
          </div>
          <p className="text-on-surface-variant font-body-md mb-8">
            Architectural Sanctuary for the high-performance professional. Your space, your focus, your growth.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:text-primary-fixed transition-colors"
              href="tel:+918881888444"
            >
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
            <a
              className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:text-primary-fixed transition-colors"
              href="https://www.instagram.com/nexorasquare?igsh=cXJtN2xyc2RvNmVk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <Link
              className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:text-primary-fixed transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary mb-2">Explore</h4>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Locations
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Workspace Plans
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Meeting Rooms
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Event Spaces
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary mb-2">Support</h4>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="/cookies">
            Cookies Policy
          </Link>
          <a className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="https://wa.me/918881888444" target="_blank" rel="noopener noreferrer">
            Support System
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary mb-2">Address</h4>
          <p className="text-on-surface-variant font-body-md">
            Nexora Square Business Tower<br />
            Near Railway Station Road<br />
            Perinthalmanna, Kerala 679322
          </p>
          <div className="mt-4">
            <div className="font-bold text-primary-fixed">Call Us</div>
            <div className="text-primary font-body-lg">+91 88818 88444</div>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop mt-20 pt-10 border-t border-white/5 text-center">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} Nexora Square. Architectural Sanctuary. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
