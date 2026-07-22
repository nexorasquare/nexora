"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const facilities = [
  "01 - Private Cabins: Private spaces for individuals and small teams.",
  "02 - Dedicated Workstations: Fixed desks with a professional working setup.",
  "03 - Flexible (Hot) Desks: Shared seating for flexible work schedules.",
  "04 - 4-Seater Team Cabins: Compact cabins for small collaborative teams.",
  "05 - Executive Office Suites: Premium private spaces for leadership and teams.",
  "06 - Shared Open Workspace: A collaborative and active work environment.",
  "07 - Conference Hall (8-10 People): Ideal for presentations, meetings, and client sessions.",
  "08 - Telebooths / Phone Booths: Soundproof spaces for focused calls.",
  "09 - Interview Room: A private room for interviews and assessments.",
  "10 - High-Speed Wi-Fi: Fast and reliable internet throughout the space.",
  "11 - Printing, Scanning & Photocopying: Essential business support services.",
  "12 - Reception and Front Desk: Professional front desk assistance.",
  "13 - Business Address & Mail Handling: Virtual office and postal support.",
  "14 - Courier / Package Receiving: Safe parcel handling and receiving.",
  "15 - Lockers: Secure storage for members.",
  "16 - Storage Cabinets: Extra storage for workspace essentials.",
  "17 - Pantry / Coffee Station: Refreshments and break-time convenience.",
  "18 - Café or Snack Area: A casual area for food and drinks.",
  "19 - Lounge & Networking Area: Comfortable space to relax and connect.",
  "20 - Air Conditioning: A cool and comfortable work environment.",
  "21 - Drinking Water: Easy access to fresh drinking water.",
  "22 - Charging Station: Convenient power access for devices.",
  "23 - Smart TVs / Projectors: Presentation-ready technology.",
  "24 - Video Conferencing Equipment: Tools for remote meetings and collaboration.",
  "25 - Digital Booking System: Simple room and resource reservations.",
  "26 - Access Control with RFID / Card / QR: Secure and modern entry management.",
  "27 - CCTV Security: 24/7 monitored safety.",
  "28 - Power Backup (UPS / Inverter / Generator): Reliable work continuity.",
  "29 - Networking Events: Opportunities to connect with others.",
  "30 - Workshops and Training Sessions: Skill-building and growth-focused events.",
  "31 - Startup Mentoring Sessions: Support for new businesses and founders.",
  "32 - Investor Meetups: Connections with business and funding networks.",
  "33 - Quiet Zone: A calm area for deep focus.",
  "34 - Prayer / Meditation Room: A peaceful room for reflection.",
  "35 - Wellness Room: A space for relaxation and wellbeing.",
  "36 - Indoor Plants: Natural greenery for a refreshing atmosphere.",
  "37 - Natural Lighting: Bright and welcoming interiors.",
  "38 - Virtual Office Packages: Flexible business presence solutions.",
  "39 - Company Registration Assistance: Support for new business setup.",
  "40 - GST and Accounting Support: Practical business assistance.",
  "41 - Legal Consultation: Access to professional legal guidance.",
  "42 - HR and Recruitment Assistance: Hiring and people support.",
  "43 - Digital Marketing Support: Growth-focused marketing assistance.",
  "44 - Podcast / Content Creation Studio: A dedicated media creation space.",
  "45 - Photography Corner: Useful for branding and content.",
  "46 - Library / Reading Zone: A quiet area for reading and research.",
  "47 - Gaming / Relaxation Area: A casual space for breaks and refreshment."
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-[#F5F1E8] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 overflow-hidden">
      
      {/* Premium Luxury Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft warm glow from top-left */}
        <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,transparent_70%)] blur-[120px] opacity-70 mix-blend-overlay"></div>
        {/* Soft warm glow from bottom-right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-[100px] opacity-60 mix-blend-overlay"></div>
        {/* Extremely subtle architectural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        {/* Very soft vertical gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.02)]"></div>
        {/* Subtle noise/paper texture effect using a CSS trick since we might not have a noise image handy */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-[#111111] font-black uppercase text-[clamp(3rem,12vw,160px)] mb-20 sm:mb-24 md:mb-32 leading-none tracking-wider">
            Facilities
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full">
          {facilities.map((facility, index) => {
            const splitIndex = facility.indexOf(":");
            const fullTitle = facility.substring(0, splitIndex);
            const num = fullTitle.split(" - ")[0];
            const title = fullTitle.split(" - ")[1];
            const desc = facility.substring(splitIndex + 2);

            return (
              <FadeIn 
                key={index} 
                delay={0.1} // keeping short delay for visual flow as they scroll
                y={20}
                className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 py-10 sm:py-12 md:py-16 border-b border-[rgba(0,0,0,0.08)] last:border-b-0 items-start sm:items-center"
              >
                <div className="font-black text-[#99D508] text-[clamp(3rem,10vw,140px)] leading-none sm:w-1/3 tracking-tighter drop-shadow-sm">
                  {num}
                </div>
                <div className="flex flex-col sm:w-2/3 gap-4">
                  <h3 className="font-medium uppercase text-[#202020] text-[clamp(1rem,2.2vw,2.1rem)] leading-tight tracking-wider">
                    {title}
                  </h3>
                  <p className="font-light text-[#666666] leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] tracking-wide">
                    {desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
