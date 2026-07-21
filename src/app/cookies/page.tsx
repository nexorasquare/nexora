"use client";
import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CookiesPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary-fixed/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <h1 className="font-display-md text-4xl sm:text-5xl text-primary mb-8 font-light">
            Cookies <span className="font-bold">Policy</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-primary max-w-none font-body-md text-lg">
            <p className="mb-6">
              Nexora Square uses cookies to improve your experience on our website. This policy explains what cookies are and how we use them.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">1. What Are Cookies?</h2>
            <p className="mb-6">
              Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you interact with it.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">2. How We Use Cookies</h2>
            <p className="mb-6">
              We use essential cookies to enable core functionality such as security, network management, and accessibility. We may also use analytics cookies to help us improve our website by collecting and reporting information on how you use it.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">3. Managing Cookies</h2>
            <p className="mb-6">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
