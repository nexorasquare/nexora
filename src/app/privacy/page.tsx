"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary-fixed/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <h1 className="font-display-md text-4xl sm:text-5xl text-primary mb-8 font-light">
            Privacy <span className="font-bold">Policy</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-primary max-w-none font-body-md text-lg">
            <p className="mb-6">
              At Nexora Square, we are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us when you book a workspace, sign up for our newsletter, or contact our support system. This may include your name, email address, phone number, and professional details.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and improve our coworking services, process your transactions, send you technical notices, and respond to your comments and questions.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">3. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us via our WhatsApp support line or call us at +91 88818 88444.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
