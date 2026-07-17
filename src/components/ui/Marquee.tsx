import React from "react";

export function Marquee() {
  const text = "COWORKING SPACE";
  
  // We duplicate the items enough times so that the animation is seamless
  const items = Array(6).fill(null);

  return (
    <div className="relative w-full bg-primary text-on-primary overflow-hidden py-6 md:py-8 flex items-center border-y border-outline-variant/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((_, i) => (
          <div key={`first-${i}`} className="flex items-center mx-4 md:mx-8">
            <span className="text-4xl md:text-6xl font-display-lg font-black tracking-tighter">
              {text}
            </span>
            <span className="material-symbols-outlined text-3xl md:text-5xl text-primary-fixed ml-8 md:ml-16">
              stars
            </span>
          </div>
        ))}
      </div>
      
      {/* Duplicate for seamless infinite loop */}
      <div className="flex whitespace-nowrap animate-marquee absolute top-1/2 -translate-y-1/2">
        {items.map((_, i) => (
          <div key={`second-${i}`} className="flex items-center mx-4 md:mx-8">
            <span className="text-4xl md:text-6xl font-display-lg font-black tracking-tighter">
              {text}
            </span>
            <span className="material-symbols-outlined text-3xl md:text-5xl text-primary-fixed ml-8 md:ml-16">
              stars
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
