"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const faqData = [
  {
    question: "How Can I Book A Workspace At Nexora Square?",
    answer: "Booking a workspace is simple! You can click the 'Book Now' button on our website, reach out to us via WhatsApp, or give us a call directly. Our team will guide you through the available options and confirm your booking instantly.",
  },
  {
    question: "What Types Of Workspaces Are Available?",
    answer: "We offer a variety of premium solutions tailored to your needs, including Private Cabins for teams, Dedicated Desks for permanent setups, and Hot Desks for flexible, daily access to our lounge areas.",
  },
  {
    question: "How Many People Can Nexora Square Accommodate?",
    answer: "Our private executive cabins are designed to comfortably accommodate teams of 2 to 8 people. Additionally, our open-plan dedicated desks and hot desking areas can host a large number of independent professionals and freelancers simultaneously.",
  },
  {
    question: "What Makes Nexora Square Stand Out In Perinthalmanna?",
    answer: "Nexora Square is designed as an architectural sanctuary for high-performance professionals. We offer unmatched premium infrastructure, including soundproofed cabins, ergonomic seating, high-speed dedicated LAN, and biophilic design elements—all strategically located in the heart of Perinthalmanna.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              Find answers to common queries about our premium coworking spaces and amenities.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 100}>
                <div 
                  className="border-b border-outline-variant overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-6 text-left group transition-colors focus:outline-none"
                  >
                    <span className="font-headline-md text-lg md:text-xl text-primary group-hover:text-primary-fixed transition-colors pr-8">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-primary-fixed flex-shrink-0 transition-transform duration-300">
                      {isOpen ? "remove" : "add"}
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-on-surface-variant font-body-md leading-relaxed">
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
