"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="py-section-padding">
      <div className="max-w-4xl mx-auto px-margin-mobile text-center">
        <Reveal>
          <div className="glass-panel p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-fixed/5 blur-[100px] rounded-full"></div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 relative z-10">
              Elevate Your Work Experience.
            </h2>
            <p className="font-body-lg text-secondary mb-10 max-w-xl mx-auto relative z-10">
              Join the elite community of entrepreneurs and professionals at Nexora Square. Limited spots available for the next quarter.
            </p>
            <div className="flex justify-center relative z-10">
              <Link href="/facilities" className="px-10 py-5 bg-primary-fixed text-on-primary-fixed font-bold rounded-2xl neon-button-glow hover:scale-105 transition-all inline-block">
                Explore Workspaces
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
