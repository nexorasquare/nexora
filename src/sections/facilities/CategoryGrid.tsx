"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CategoryGrid() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-padding">
      {/* Workspace & Private Suites */}
      <Reveal>
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-headline-lg text-headline-lg text-white">Workspaces</h2>
            <div className="flex-grow h-[1px] bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="glass-card p-10 rounded-2xl group">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">corporate_fare</span>
                <span className="font-label-sm text-label-sm text-secondary/50">01</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-4">Executive Suites</h3>
              <p className="text-secondary mb-8 leading-relaxed">
                Private, acoustic-grade glass enclosures with bespoke ergonomic seating and climate control for leaders who demand zero distractions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-label-sm text-secondary uppercase tracking-wider">
                  Acoustic Rated
                </span>
                <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-label-sm text-secondary uppercase tracking-wider">
                  Ergonomic
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: "url('/images/executive-suite.webp')",
                }}
              ></div>
              <div className="absolute bottom-8 left-8 z-20">
                <p className="font-label-sm text-label-sm text-primary-fixed mb-2">ENVIRONMENT</p>
                <h4 className="font-headline-md text-headline-md text-white">Private Cabins</h4>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Meeting & Collaboration */}
      <Reveal>
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-headline-lg text-headline-lg text-white text-right w-full">Meeting & Collaboration</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: "url('/images/conference-hall.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-3xl text-primary-fixed absolute bottom-4 left-6">groups</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline-md text-headline-md text-white mb-2 text-2xl">Conference Hall</h3>
                <p className="text-secondary/80 text-sm leading-relaxed">
                  Smart presentation systems with 4K projection and spatial audio for impactful storytelling.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl border-primary-fixed/20 overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: "url('/images/soundproof-booth.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <span
                  className="material-symbols-outlined text-3xl text-primary-fixed absolute bottom-4 left-6"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  settings_voice
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline-md text-headline-md text-white mb-2 text-2xl">Soundproof Booths</h3>
                <p className="text-secondary/80 text-sm leading-relaxed">
                  Engineered silence for high-stakes calls and deep-focus sessions. Zero bleed-through.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: "url('/images/podcast-studio.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-3xl text-primary-fixed absolute bottom-4 left-6">podcasts</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline-md text-headline-md text-white mb-2 text-2xl">Podcast Studio</h3>
                <p className="text-secondary/80 text-sm leading-relaxed">
                  Professional-grade Shure microphones and pre-configured mixing boards for creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Technology & Productivity */}
      <Reveal>
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-4 glass-card p-12 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-primary-fixed mb-4 block">PRODUCTIVITY</span>
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">Always On.</h2>
              <p className="text-secondary mb-8">
                Technology isn't a feature; it's our foundation. Experience seamless connectivity across all levels.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary-fixed">speed</span>
                <span className="font-body-md">Gigabit Fiber Mesh</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary-fixed">sensors</span>
                <span className="font-body-md">RFID Secure Access</span>
              </li>
              <li className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary-fixed">coffee</span>
                <span className="font-body-md">Artisan Coffee Bar</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCErWU8dD6Xg2APhbLPGjtTs8hGHc6DNXkOQOz7HmysI7oJZEETrMcTwsODutCVNieZFbsIjswTE9aiOcbL8BVSpMvf7pHMomq-hhFsQMtd4f1E6EbpUfNlJ_eNonrLoECJTrsuwik7dkxgbv0-5DziAbku0WBFfH7xCQpj6yMZst0r2UJjacWkWP88uH3PvJiK9z_h2f3d5Zdy99P9TSHPHzmS0TjygGt_0mQd5fsnVgLoojUfpJpBeA')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-headline-md text-2xl">The Cafe</h4>
                <p className="text-xs font-label-sm text-secondary uppercase">Unlimited Productivity</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu3kILOnBNszLr1FKQAUxH-FANv_c3BG3cVP4-g_IXp4olxn9SHj1ZK7HxGskNa7dvtoxZulRRA2jNTs78Q4zoIna1MRA6GHVuXotR2Hntq4cANS1_juiYwsizT_WYXGvdlXVHo0Ml19wvIyHhBznvqNU3Lpnpo-Umoh462yWUfat6fKpEuth6siS3n5aScm6ugDWP4TppCuixsYQxoyyp-dk5zQsfSKmgOnJM3tVfYMnNzhMiXBAnZQ')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-headline-md text-2xl">Photography Corner</h4>
                <p className="text-xs font-label-sm text-secondary uppercase">Premium Feature</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Wellness & Community */}
      <Reveal>
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-headline-lg text-headline-lg text-white">Wellness & Community</h2>
            <div className="flex-grow h-[1px] bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/meditation-room.webp')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all"></div>
              <div className="absolute top-8 left-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed">self_improvement</span>
                <span className="font-label-sm text-label-sm text-white tracking-widest">MINDFULNESS</span>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="font-headline-md text-white mb-2">Meditation Rooms</h3>
                <p className="text-secondary max-w-xs text-sm">
                  Designated silent zones with controlled luminosity for decompression and mental resets.
                </p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary-fixed mx-auto mb-6">mosque</span>
              <h4 className="font-headline-md text-2xl text-white mb-2">Prayer Rooms</h4>
              <p className="text-secondary text-sm">Quiet, respectful spaces dedicated to spiritual practice and daily reflection.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary-fixed mx-auto mb-6">event_note</span>
              <h4 className="font-headline-md text-2xl text-white mb-2">Networking</h4>
              <p className="text-secondary text-sm">Curated events for our residents to connect, collaborate, and scale together.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
