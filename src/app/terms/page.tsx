"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary-fixed/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <h1 className="font-display-md text-4xl sm:text-5xl text-primary mb-8 font-light">
            Terms of <span className="font-bold">Service</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-primary max-w-none font-body-md text-lg">
            <p className="mb-6">
              Welcome to Nexora Square. By accessing or using our coworking spaces and services, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">1. Use of Services</h2>
            <p className="mb-6">
              Our workspaces are provided for professional use. Members must conduct themselves in a respectful manner and adhere to our community guidelines while on the premises.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">2. Bookings and Payments</h2>
            <p className="mb-6">
              All bookings are subject to availability. Payments must be made in advance as per the selected plan. We reserve the right to cancel bookings if payment is not received.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">3. Facility Rules</h2>
            <p className="mb-6">
              Members are responsible for their guests and personal belongings. Nexora Square is not liable for any lost or stolen items. Ensure you keep the workspaces clean and respect the shared amenities.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
