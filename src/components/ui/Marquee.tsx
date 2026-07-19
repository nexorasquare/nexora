import React from "react";

export function Marquee() {
  const text = "Premium Coworking Space in Perinthalmanna";
  
  // We duplicate the items enough times so that the animation is seamless
  const items = Array(6).fill(null);

  return (
    <div className="relative w-full bg-primary text-black overflow-hidden py-3 md:py-4 flex items-center border-y border-outline-variant/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((_, i) => (
          <div key={`first-${i}`} className="flex items-center mx-4 md:mx-8">
            <span className="text-xl md:text-2xl font-display-md font-bold tracking-tight uppercase">
              {text}
            </span>
            <span className="material-symbols-outlined text-xl md:text-2xl text-primary-fixed ml-8 md:ml-12">
              stars
            </span>
          </div>
        ))}
      </div>
      
      {/* Duplicate for seamless infinite loop */}
      <div className="flex whitespace-nowrap animate-marquee absolute top-1/2 -translate-y-1/2">
        {items.map((_, i) => (
          <div key={`second-${i}`} className="flex items-center mx-4 md:mx-8">
            <span className="text-xl md:text-2xl font-display-md font-bold tracking-tight uppercase">
              {text}
            </span>
            <span className="material-symbols-outlined text-xl md:text-2xl text-primary-fixed ml-8 md:ml-12">
              stars
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
