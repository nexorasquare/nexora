"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const faqData = [
  {
    question: "What are your operating hours?",
    answer: "Our core team is available from 9 AM to 6 PM, Monday to Saturday. However, our Dedicated Desk and Private Cabin members have 24/7 access to the facility.",
  },
  {
    question: "How can I book a workspace at Nexora Square?",
    answer: "Booking a workspace is simple! You can click the 'Book Now' button on our website, reach out to us via WhatsApp, or give us a call directly. Our team will guide you through the available options and confirm your booking instantly.",
  },
  {
    question: "Do you offer flexible lease terms?",
    answer: "Yes, we offer daily, weekly, monthly, and yearly passes. We believe in providing solutions that scale with your business needs.",
  },
  {
    question: "Are meeting rooms included in the membership?",
    answer: "Meeting room credits are included in our Dedicated Desk and Private Cabin plans. Hot Desk members and non-members can book meeting rooms on an hourly basis.",
  },
  {
    question: "What makes Nexora Square stand out in Perinthalmanna?",
    answer: "Nexora Square is designed as a premium sanctuary for high-performance professionals. We offer unmatched infrastructure, including soundproofed cabins, ergonomic seating, high-speed dedicated internet, and a prime location easily accessible from major hubs like Angadippuram and KIMS Al-Shifa.",
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-primary font-light tracking-tight mb-4">
              Frequently Asked <span className="text-primary-fixed">Questions</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 100}>
                <div 
                  className={`border transition-all duration-300 ${isOpen ? 'border-primary-fixed/50 bg-black/40' : 'border-white/10 bg-transparent'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 md:px-8 text-left group transition-colors focus:outline-none"
                  >
                    <span className={`text-lg md:text-xl font-medium transition-colors pr-8 ${isOpen ? 'text-primary-fixed' : 'text-primary'}`}>
                      {faq.question}
                    </span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-fixed' : 'text-secondary'}`}>
                      expand_more
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out px-6 md:px-8 ${
                      isOpen ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-secondary/80 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
