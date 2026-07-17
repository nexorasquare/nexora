"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Connectivity() {
  const locations = [
    {
      category: "Hotels",
      icon: "hotel",
      items: [
        { name: "Hi-Ton Hotel", distance: "220 Mtr" },
        { name: "N Comfort Luxurious Apartment", distance: "1 Km" },
      ],
    },
    {
      category: "Banks",
      icon: "account_balance",
      items: [
        { name: "Federal Bank", distance: "1 Km" },
        { name: "HDFC Bank", distance: "1 Km" },
        { name: "SBI Bank", distance: "1.5 Km" },
      ],
    },
    {
      category: "Shopping Mall",
      icon: "local_mall",
      items: [
        { name: "Market City", distance: "0.05 Km" },
        { name: "Aysha Complex", distance: "0.5 Km" },
        { name: "Vavas Mall", distance: "1.2 Km" },
      ],
    },
    {
      category: "Hyper Market",
      icon: "shopping_cart",
      items: [
        { name: "Nesto", distance: "0.05 Km" },
        { name: "Bismi", distance: "1.00 Km" },
      ],
    },
    {
      category: "Hospitals",
      icon: "local_hospital",
      items: [
        { name: "KIMS Al-Shifa", distance: "1 Km" },
        { name: "Moulana", distance: "1.7 Km" },
        { name: "Ems Hospital", distance: "3 Km" },
        { name: "MES Medical College", distance: "5 Km" },
      ],
    },
    {
      category: "Restaurants",
      icon: "restaurant",
      items: [
        { name: "Mazali and Chillies", distance: "1 Km" },
        { name: "Just Loaf", distance: "1.2 Km" },
        { name: "Grin Table", distance: "1.3 Km" },
        { name: "Planet Cafe", distance: "2.5 Km" },
      ],
    },
    {
      category: "Transit",
      icon: "commute",
      items: [
        { name: "Angadippuram Railway Station", distance: "1 Km" },
        { name: "Calicut International Airport", distance: "40 Km" },
      ],
    },
  ];

  return (
    <section className="py-section-padding">
      <Reveal>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 max-w-2xl">
            <div className="font-label-sm text-label-sm text-primary-fixed mb-4 uppercase tracking-[0.2em]">
              Nearby Connectivity
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
              Everything you need, <span className="italic font-light">within reach.</span>
            </h2>
            <p className="font-body-md text-secondary">
              Located at the prime intersection of commerce and convenience in Perinthalmanna.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Map Column */}
          <div className="lg:col-span-5 h-[400px] lg:h-auto min-h-[400px] relative rounded-3xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 grayscale invert opacity-30 group-hover:opacity-40 transition-opacity duration-500">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                title="Perinthalmanna, Kerala"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1KYgdolw0uEBmVMx_VGcK8vqXN9hq_sbazaFuwjz5pTt4m1SVSy00lS86NXSDAd5urQ2-qZ_M13ln0eMXZnL7jz0T_KaSzxJCtQN4lhBKOZQC0ApwkXO9Imd-mNYV25elu5YhjcLB2TezGF7t9MyVBcis2R9BtDbcGTLnRi7_aj0jRr9i0Rap7PXe4aUUa3qVyWq189t5Q2TBtaQAoWMy-jhUkoEFuErnKziNyDNW4tmHnjohnniZAg')",
                }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none"></div>
            
            {/* Minimal Map Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
              <div className="glass-panel p-6 rounded-2xl border border-primary-fixed/20 bg-background/60 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center animate-pulse">
                    <span className="material-symbols-outlined text-primary-fixed">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-white text-lg">Nexora Square</h3>
                    <p className="text-secondary text-sm">Perinthalmanna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((group, index) => (
                <Reveal delay={index * 50} key={index}>
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary-fixed/30 hover:bg-white/5 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary-fixed bg-primary-fixed/10 p-2 rounded-lg text-sm">
                        {group.icon}
                      </span>
                      <h3 className="font-bold text-white tracking-wide">{group.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {group.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between items-end border-b border-white/5 pb-2 last:border-0 last:pb-0">
                          <span className="text-secondary text-sm font-medium">{item.name}</span>
                          <span className="text-primary-fixed text-xs whitespace-nowrap bg-primary-fixed/10 px-2 py-1 rounded-md">{item.distance}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
