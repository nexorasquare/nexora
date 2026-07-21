"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden text-background">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <Reveal>
          <div className="inline-block border border-background/20 rounded-full px-6 py-2 mb-8">
            <span className="text-background uppercase tracking-[0.2em] text-sm font-medium">Join The Community</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-8 leading-[1.1] tracking-tight">
            Ready to elevate your <br/>
            <span className="font-semibold">workspace experience?</span>
          </h2>
          <p className="text-background/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Book a personalized tour of Nexora Square and discover how our premium facilities can inspire your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="https://wa.me/918881888444" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-background text-primary font-semibold tracking-wide hover:bg-black hover:text-white transition-all duration-300">
              Book a Tour Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
