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
    <section id="facilities" className="bg-[#F4F4F5] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
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
                className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 items-start sm:items-center"
              >
                <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none opacity-20 sm:w-1/3">
                  {num}
                </div>
                <div className="flex flex-col sm:w-2/3 gap-2">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                    {title}
                  </h3>
                  <p className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
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
