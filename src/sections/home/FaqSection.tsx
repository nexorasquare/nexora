"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "How can I book a workspace at Nexora Square?",
    answer: "You can book a workspace directly through our website by clicking the 'Book Now' button in the navigation bar, or by connecting with us on WhatsApp for immediate assistance.",
  },
  {
    question: "What types of workspaces are available in Perinthalmanna?",
    answer: "We offer a variety of options including private cabins, dedicated desks, meeting spaces, executive suites, conference halls, and podcast studios to suit different professional needs.",
  },
  {
    question: "How many people can Nexora Square accommodate?",
    answer: "Nexora Square is designed to accommodate over 100 professionals and founders across our various premium workspaces.",
  },
  {
    question: "What makes Nexora Square stand out?",
    answer: "We offer an architectural sanctuary for high-performance professionals. Our space features 24/7 secure access, 1 Gbps dedicated fiber internet, unlimited coffee, and curated networking events.",
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surface-container-lowest py-24 sm:py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn>
          <h2 className="font-headline-md text-headline-md sm:text-display-sm text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="border-b border-white/10">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
                  >
                    <h3 className={`font-body-lg text-lg sm:text-xl pr-8 transition-colors duration-300 ${isOpen ? 'text-primary-fixed' : 'text-primary group-hover:text-primary-fixed'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-primary-fixed' : 'text-secondary group-hover:text-primary-fixed'}`}>
                      {isOpen ? (
                        <Minus size={24} strokeWidth={1.5} />
                      ) : (
                        <Plus size={24} strokeWidth={1.5} />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 font-body-md text-on-surface-variant pr-8 sm:pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
