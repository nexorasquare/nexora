"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const facilitiesData = [
  {
    num: "01",
    title: "Workspace Options",
    desc: "Private cabins, Dedicated workstations, Flexible hot desks, 4-seater team cabins, Executive office suites, Shared open workspace."
  },
  {
    num: "02",
    title: "Meeting & Collaboration",
    desc: "Conference hall (8–10 people), Telebooths / phone booths, Interview room."
  },
  {
    num: "03",
    title: "Business Amenities",
    desc: "High-speed Wi-Fi, Printing, scanning & photocopying, Reception and front desk, Business address & mail handling, Courier/package receiving, Lockers, Storage cabinets."
  },
  {
    num: "04",
    title: "Comfort & Productivity",
    desc: "Pantry / coffee station, Café or snack area, Lounge & networking area, Air conditioning, Drinking water, Charging station."
  },
  {
    num: "05",
    title: "Technology",
    desc: "Smart TVs / projectors, Video conferencing equipment, Digital booking system for meeting rooms, RFID / card / QR access control, CCTV security, Power backup."
  },
  {
    num: "06",
    title: "Community & Networking",
    desc: "Networking events, Workshops and training sessions, Startup mentoring sessions, Investor meetups."
  },
  {
    num: "07",
    title: "Wellness",
    desc: "Quiet zone, Prayer / meditation room, Wellness room, Indoor plants, Natural lighting."
  },
  {
    num: "08",
    title: "Additional Services",
    desc: "Virtual office packages, Company registration assistance, GST and accounting support, Legal consultation, HR and recruitment assistance, Digital marketing support."
  },
  {
    num: "09",
    title: "Premium Features",
    desc: "Podcast / content creation studio, Photography corner, Library / reading zone, Gaming / relaxation area."
  }
];

export function ServicesSection() {
  return (
    <section id="facilities" className="bg-[#F5F2EB] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(2.5rem,10vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
            Facilities
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full">
          {facilitiesData.map((facility, index) => {
            return (
              <FadeIn 
                key={index} 
                delay={index * 0.1}
                y={20}
                className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 items-start sm:items-center"
              >
                <div className="font-black text-[#99D508] text-[clamp(2.5rem,10vw,140px)] leading-none sm:w-1/3">
                  {facility.num}
                </div>
                <div className="flex flex-col sm:w-2/3 gap-2">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                    {facility.title}
                  </h3>
                  <p className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {facility.desc}
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
