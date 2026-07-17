import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-md text-headline-md font-extrabold text-primary mb-6">
            Nexora Square
          </div>
          <p className="text-on-surface-variant font-body-md mb-8">
            Architectural Sanctuary for the high-performance professional. Your space, your focus, your growth.
          </p>
          <div className="flex gap-4">
            <Link
              className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:text-primary-fixed transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">language</span>
            </Link>
            <Link
              className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:text-primary-fixed transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </Link>
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
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Privacy Policy
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Terms of Service
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Contact Us
          </Link>
          <Link className="text-on-surface-variant hover:text-primary-fixed transition-colors font-body-md" href="#">
            Careers
          </Link>
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
            <div className="text-primary font-body-lg">+91 9876 543 210</div>
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
