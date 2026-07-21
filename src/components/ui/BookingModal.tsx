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
    const text = encodeURIComponent(`Hi Nexora Square, I'm interested in booking a workspace.\n\nName: ${name}\nMobile: ${mobile}`);
    const whatsappUrl = `https://wa.me/918881888444?text=${text}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 h-[100dvh]">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-[#131412] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 md:p-10 w-full max-w-md shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-300 mx-auto my-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white hover:bg-white/10 transition-colors p-2 rounded-full"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h2 className="text-2xl md:text-3xl font-display-md text-white mb-8 font-medium">
          Get Your Space Now <span className="text-primary-fixed animate-pulse">_</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-wider text-white/50 uppercase">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/5 focus:border-primary-fixed/50 focus:ring-1 focus:ring-primary-fixed/50 outline-none transition-all text-white placeholder:text-white/30 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-wider text-white/50 uppercase">
              Mobile Number
            </label>
            <input
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/5 focus:border-primary-fixed/50 focus:ring-1 focus:ring-primary-fixed/50 outline-none transition-all text-white placeholder:text-white/30 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-fixed text-on-primary-fixed py-4 rounded-xl font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all mt-6 neon-button-glow"
          >
            Find Your Space
          </button>
        </form>
      </div>
    </div>
  );
}
