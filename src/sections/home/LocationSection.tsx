"use client";
import React, { useState, useMemo } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import dynamic from "next/dynamic";

// Dynamically import Leaflet Map with no SSR
const MapComponent = dynamic(() => import('@/components/ui/LeafletMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#111111] flex items-center justify-center animate-pulse rounded-[30px] md:rounded-[40px] border border-[rgba(215,226,234,0.1)] text-[#D7E2EA] opacity-50 text-sm tracking-widest uppercase">Loading Map...</div>
});

type LocationPoint = {
  id: string;
  category: string;
  name: string;
  dist: string;
  lat: number;
  lng: number;
};

const CENTER = { lat: 10.9864, lng: 76.2236 }; // Nexora Square

const LOCATIONS: LocationPoint[] = [
  { id: "t1", category: "Transport", name: "Angadippuram Railway Station", dist: "1 km", lat: 10.9881, lng: 76.2232 },
  { id: "t2", category: "Transport", name: "Calicut International Airport", dist: "40 km", lat: 11.0752, lng: 76.1239 },
  { id: "s1", category: "Stay", name: "Hi-Ton Hotel", dist: "220 m", lat: 10.9854, lng: 76.2241 },
  { id: "s2", category: "Stay", name: "N Comfort Luxurious Apartment", dist: "1 km", lat: 10.9804, lng: 76.2196 },
  { id: "b1", category: "Banking", name: "Federal Bank", dist: "1 km", lat: 10.9844, lng: 76.2226 },
  { id: "b2", category: "Banking", name: "HDFC Bank", dist: "1 km", lat: 10.9834, lng: 76.2216 },
  { id: "b3", category: "Banking", name: "SBI Bank", dist: "1.5 km", lat: 10.9794, lng: 76.2186 },
  { id: "sh1", category: "Shopping & Malls", name: "Market City", dist: "0.05 km", lat: 10.9866, lng: 76.2238 },
  { id: "sh2", category: "Shopping & Malls", name: "Aysha Complex", dist: "0.5 km", lat: 10.9874, lng: 76.2256 },
  { id: "sh3", category: "Shopping & Malls", name: "Nesto Hypermarket", dist: "0.05 km", lat: 10.9862, lng: 76.2237 },
  { id: "sh4", category: "Shopping & Malls", name: "Bismi Hypermarket", dist: "1.00 km", lat: 10.9824, lng: 76.2276 },
  { id: "sh5", category: "Shopping & Malls", name: "Vavas Mall", dist: "1.2 km", lat: 10.9814, lng: 76.2286 },
  { id: "h1", category: "Hospitals", name: "KIMS Al Shifa Hospital", dist: "1 km", lat: 10.9799, lng: 76.2231 },
  { id: "h2", category: "Hospitals", name: "Moulana Hospital", dist: "1.7 km", lat: 10.9764, lng: 76.2206 },
  { id: "h3", category: "Hospitals", name: "EMS Hospital", dist: "3 km", lat: 10.9684, lng: 76.2136 },
  { id: "h4", category: "Hospitals", name: "MES Medical College", dist: "5 km", lat: 10.9484, lng: 76.1986 },
  { id: "f1", category: "Food & Cafe", name: "Mazali", dist: "1 km", lat: 10.9829, lng: 76.2246 },
  { id: "f2", category: "Food & Cafe", name: "Chillies Restaurant", dist: "1 km", lat: 10.9839, lng: 76.2251 },
  { id: "f3", category: "Food & Cafe", name: "Just Loaf", dist: "1.2 km", lat: 10.9819, lng: 76.2266 },
  { id: "f4", category: "Food & Cafe", name: "Grin Table", dist: "1.3 km", lat: 10.9809, lng: 76.2276 },
  { id: "f5", category: "Food & Cafe", name: "Planet Cafe", dist: "2.5 km", lat: 10.9734, lng: 76.2336 },
];

// Group locations by category
const groupedLocations = LOCATIONS.reduce((acc, loc) => {
  if (!acc[loc.category]) acc[loc.category] = [];
  acc[loc.category].push(loc);
  return acc;
}, {} as Record<string, LocationPoint[]>);

export function LocationSection() {
  const [activeLocation, setActiveLocation] = useState<LocationPoint | null>(null);

  const handleCardClick = (loc: LocationPoint) => {
    setActiveLocation(loc);
  };

  return (
    <section id="location" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-10 pb-20 md:py-32 relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-12 md:gap-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
          <FadeIn delay={0} y={30} className="md:w-[60%]">
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight">
              Connected to<br />
              Everything.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={30} className="md:w-[40%] pt-2">
            <p className="text-[#D7E2EA] opacity-80 font-light text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed">
              Strategically located in Perinthalmanna with quick access to transportation, hotels, hospitals, shopping destinations, banks, restaurants and business essentials.
            </p>
          </FadeIn>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 h-auto xl:h-[800px]">
          
          {/* Map Container (Left side - 60%) */}
          <FadeIn delay={0.3} x={-40} y={0} className="w-full xl:w-[60%] h-[500px] xl:h-full rounded-[30px] md:rounded-[40px] overflow-hidden border border-[rgba(215,226,234,0.1)] relative">
            <MapComponent 
              locations={LOCATIONS} 
              activeLocation={activeLocation} 
              setActiveLocation={setActiveLocation}
              center={CENTER}
            />
          </FadeIn>

          {/* Directory (Right side - 40%) */}
          <FadeIn delay={0.4} x={40} y={0} className="w-full xl:w-[40%] h-[600px] xl:h-full overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-6 pb-20 xl:pb-0">
            {Object.entries(groupedLocations).map(([category, items], i) => (
              <div key={i} className="flex flex-col gap-4">
                <h3 className="text-[#99D508] font-bold uppercase tracking-widest text-sm sticky top-0 bg-[#0C0C0C]/90 backdrop-blur-md py-2 z-10 border-b border-[rgba(153,213,8,0.2)]">
                  {category}
                </h3>
                <div className="flex flex-col gap-3">
                  {items.map((item, j) => {
                    const isActive = activeLocation?.id === item.id;
                    return (
                      <div 
                        key={j} 
                        onClick={() => handleCardClick(item)}
                        className={`group cursor-pointer flex flex-col gap-2 p-4 rounded-2xl border transition-all duration-300 ${isActive ? 'bg-[rgba(153,213,8,0.1)] border-[#99D508]' : 'bg-[rgba(215,226,234,0.03)] border-[rgba(215,226,234,0.1)] hover:bg-[rgba(215,226,234,0.08)] hover:border-[rgba(215,226,234,0.3)]'} backdrop-blur-sm shadow-lg`}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <span className={`font-medium text-sm md:text-base transition-colors ${isActive ? 'text-[#99D508]' : 'text-[#D7E2EA] group-hover:text-white'}`}>
                            {item.name}
                          </span>
                          <span className="font-light text-xs md:text-sm whitespace-nowrap text-white/50 bg-white/5 px-2 py-1 rounded-full">
                            {item.dist}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-[#99D508] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                          <span>→ View on Map</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* Bottom Bar Stats */}
        <FadeIn delay={0.6} y={20} className="w-full flex flex-wrap justify-between items-center gap-4 bg-[rgba(215,226,234,0.03)] border border-[rgba(215,226,234,0.1)] rounded-full px-6 py-4 backdrop-blur-sm mt-[-20px]">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <span className="text-[#D7E2EA] text-sm font-medium"><strong className="text-[#99D508]">1 km</strong> Railway</span>
            <span className="text-[#D7E2EA] text-sm font-medium"><strong className="text-[#99D508]">40 km</strong> Airport</span>
            <span className="text-[#D7E2EA] text-sm font-medium"><strong className="text-[#99D508]">5+</strong> Hospitals</span>
            <span className="text-[#D7E2EA] text-sm font-medium"><strong className="text-[#99D508]">5+</strong> Hotels</span>
            <span className="text-[#D7E2EA] text-sm font-medium"><strong className="text-[#99D508]">5+</strong> Restaurants</span>
          </div>
          <span className="text-white text-sm font-bold uppercase tracking-widest hidden md:block">Premium Business Hub</span>
        </FadeIn>

      </div>
    </section>
  );
}
