"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        <Reveal>
          <div className="glass-panel p-8 rounded-2xl text-center h-full">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">groups</span>
            <div className="font-display-lg text-headline-md text-primary mb-1">100+</div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Active Members</div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-panel p-8 rounded-2xl text-center h-full">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">verified_user</span>
            <div className="font-display-lg text-headline-md text-primary mb-1">24/7</div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Secure Access</div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="glass-panel p-8 rounded-2xl text-center h-full">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">bolt</span>
            <div className="font-display-lg text-headline-md text-primary mb-1">1 Gbps</div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Fiber Internet</div>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="glass-panel p-8 rounded-2xl text-center h-full">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">coffee</span>
            <div className="font-display-lg text-headline-md text-primary mb-1">Free</div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Artisan Coffee</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
