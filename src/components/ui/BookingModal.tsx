"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic sanitization
    const sanitizedName = name.replace(/[^\w\s\-']/g, '').trim().substring(0, 50);
    const sanitizedMobile = mobile.replace(/[^\d\+\s\-]/g, '').trim().substring(0, 15);

    if (!sanitizedName || !sanitizedMobile) return;

    const text = encodeURIComponent(`Hi Nexora Square, I'm interested in booking a workspace.\n\nName: ${sanitizedName}\nMobile: ${sanitizedMobile}`);
    const whatsappUrl = `https://wa.me/918881888444?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 h-[100dvh]">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-[#0C0C0C] border border-white/10 rounded-3xl p-8 md:p-10 w-full max-w-md shadow-2xl shadow-black/50 animate-in fade-in zoom-in duration-300 mx-auto my-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white hover:bg-white/10 transition-colors p-2 rounded-full flex items-center justify-center"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h2 className="text-2xl md:text-3xl font-display-md text-white mb-8 font-medium">
          Get Your Space Now <span className="text-[#99D508]">_</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-wider text-white/50 uppercase">
              Name
            </label>
            <input
              type="text"
              required
              maxLength={50}
              pattern="^[a-zA-Z\s\-']{2,50}$"
              title="Name should only contain letters, spaces, hyphens, and apostrophes."
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/10 focus:border-[#99D508] focus:ring-1 focus:ring-[#99D508] outline-none transition-all text-white placeholder:text-white/30 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-wider text-white/50 uppercase">
              Mobile Number
            </label>
            <input
              type="tel"
              required
              maxLength={15}
              pattern="^\+?[0-9\s\-]{10,15}$"
              title="Enter a valid mobile number (10 to 15 digits, optionally starting with +)"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/10 focus:border-[#99D508] focus:ring-1 focus:ring-[#99D508] outline-none transition-all text-white placeholder:text-white/30 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#99D508] text-[#0C0C0C] py-4 rounded-xl font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all mt-6"
          >
            Find Your Space
          </button>
        </form>
      </div>
    </div>
  );
}
