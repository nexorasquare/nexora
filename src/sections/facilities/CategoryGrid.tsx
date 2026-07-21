"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CategoryGrid() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Workspace & Private Suites */}
      <Reveal>
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-primary-fixed"></div>
                <div className="text-primary-fixed text-xs uppercase tracking-[0.2em] font-semibold">
                  01
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl text-primary font-light">Workspaces</h2>
            </div>
            <div className="hidden md:block flex-grow h-[1px] bg-white/5 ml-8 mb-3"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-surface-container-lowest border border-white/5 p-10 md:p-12 group transition-colors duration-500 hover:border-primary-fixed/40">
              <div className="flex justify-between items-start mb-16">
                <span className="material-symbols-outlined text-4xl text-primary-fixed opacity-80 group-hover:opacity-100 transition-opacity">corporate_fare</span>
              </div>
              <h3 className="text-2xl md:text-3xl text-primary font-light mb-6">Executive Suites</h3>
              <p className="text-secondary/80 mb-10 leading-relaxed font-light text-lg">
                Private, acoustic-grade glass enclosures with bespoke ergonomic seating and climate control for leaders who demand zero distractions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-secondary/60 uppercase tracking-wider">
                  Acoustic Rated
                </span>
                <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-secondary/60 uppercase tracking-wider">
                  Ergonomic
                </span>
              </div>
            </div>
            
            <div className="relative overflow-hidden h-[400px] md:h-auto min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url('/images/executive-suite.webp')",
                }}
              ></div>
              <div className="absolute bottom-10 left-10 z-20">
                <p className="text-xs text-primary-fixed mb-2 uppercase tracking-[0.2em]">ENVIRONMENT</p>
                <h4 className="text-2xl md:text-3xl text-white font-light">Private Cabins</h4>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Meeting & Collaboration */}
      <Reveal>
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-primary-fixed"></div>
                <div className="text-primary-fixed text-xs uppercase tracking-[0.2em] font-semibold">
                  02
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl text-primary font-light">Meeting & Collaboration</h2>
            </div>
            <div className="hidden md:block flex-grow h-[1px] bg-white/5 ml-8 mb-3"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest border border-white/5 overflow-hidden flex flex-col group hover:border-primary-fixed/40 transition-colors duration-500">
              <div className="h-56 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/conference-hall.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-3xl text-primary-fixed absolute bottom-6 left-8">groups</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl text-primary font-light mb-4">Conference Hall</h3>
                <p className="text-secondary/70 text-sm leading-relaxed font-light">
                  Smart presentation systems with 4K projection and spatial audio for impactful storytelling.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-white/5 overflow-hidden flex flex-col group hover:border-primary-fixed/40 transition-colors duration-500">
              <div className="h-56 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/soundproof-booth.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-3xl text-primary-fixed absolute bottom-6 left-8">settings_voice</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl text-primary font-light mb-4">Soundproof Booths</h3>
                <p className="text-secondary/70 text-sm leading-relaxed font-light">
                  Engineered silence for high-stakes calls and deep-focus sessions. Zero bleed-through.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-white/5 overflow-hidden flex flex-col group hover:border-primary-fixed/40 transition-colors duration-500">
              <div className="h-56 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/podcast-studio.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-3xl text-primary-fixed absolute bottom-6 left-8">podcasts</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl text-primary font-light mb-4">Podcast Studio</h3>
                <p className="text-secondary/70 text-sm leading-relaxed font-light">
                  Professional-grade Shure microphones and pre-configured mixing boards for creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Wellness & Community */}
      <Reveal>
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-primary-fixed"></div>
                <div className="text-primary-fixed text-xs uppercase tracking-[0.2em] font-semibold">
                  03
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl text-primary font-light">Wellness & Community</h2>
            </div>
            <div className="hidden md:block flex-grow h-[1px] bg-white/5 ml-8 mb-3"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 relative h-[350px] md:h-[400px] overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/images/meditation-room.webp')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed">self_improvement</span>
                <span className="text-xs text-white tracking-[0.2em] uppercase">MINDFULNESS</span>
              </div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl md:text-3xl text-white font-light mb-4">Meditation Rooms</h3>
                <p className="text-secondary/80 max-w-sm text-sm font-light leading-relaxed">
                  Designated silent zones with controlled luminosity for decompression and mental resets.
                </p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest border border-white/5 p-10 flex flex-col justify-center text-center group hover:border-primary-fixed/40 transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-primary-fixed/80 group-hover:text-primary-fixed mx-auto mb-8 transition-colors">mosque</span>
              <h4 className="text-xl md:text-2xl text-primary font-light mb-4">Prayer Rooms</h4>
              <p className="text-secondary/70 text-sm font-light leading-relaxed">Quiet, respectful spaces dedicated to spiritual practice and daily reflection.</p>
            </div>
            
            <div className="bg-surface-container-lowest border border-white/5 p-10 flex flex-col justify-center text-center group hover:border-primary-fixed/40 transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-primary-fixed/80 group-hover:text-primary-fixed mx-auto mb-8 transition-colors">event_note</span>
              <h4 className="text-xl md:text-2xl text-primary font-light mb-4">Networking</h4>
              <p className="text-secondary/70 text-sm font-light leading-relaxed">Curated events for our residents to connect, collaborate, and scale together.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
