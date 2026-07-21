"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Workspaces() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <Reveal>
        <div className="text-center mb-20">
          <div className="font-label-sm text-label-sm text-primary-fixed mb-4 uppercase tracking-[0.2em]">
            Flexible Solutions
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Choose Your Perfect Workspace</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Private Cabin */}
        <Reveal delay={100}>
          <div className="group glass-panel rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Private Cabin"
                src="/images/executive-suite.webp"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary-fixed text-on-primary-fixed text-xs font-bold rounded-full">
                MOST EXCLUSIVE
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-headline-md text-2xl text-primary mb-2">Private Cabins</h3>
              <p className="font-body-md text-sm text-secondary mb-4 line-clamp-3">
                Executive-grade private offices for teams of 2 to 8. Complete with sound insulation and personalized access control.
              </p>
              <ul className="space-y-2 mb-6 text-on-surface-variant text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Dedicated storage lockers
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Company branding options
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Priority meeting room booking
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Dedicated Desk */}
        <Reveal delay={200}>
          <div className="group glass-panel rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Dedicated Desk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhK11DygiqQ9ZSCcRUIsXuBbacQlIzX1jKH_K9iXh24qu_izU1xhB-DZ_HmX7pOUYM07QwHoD3AwagVulJpkt5gt49gDrzlPWZDmDBRotZsRAIMk1Yglbul82H6KA7rMT-qKMHKBy4MiDJqDHippYv4vyXQB7Fijt3SpoouyjPdBsfVg7Di7LqAqyweV4MuVflD3bXPDxx47GWnFutmz21sRmVUeF6PoqWRtp0gpdIc-NPvDaXm1sVRw"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-headline-md text-2xl text-primary mb-2">Dedicated Desks</h3>
              <p className="font-body-md text-sm text-secondary mb-4 line-clamp-3">
                Your own permanent spot in our elite open-plan area. Perfect for freelancers and remote developers.
              </p>
              <ul className="space-y-2 mb-6 text-on-surface-variant text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Fixed ergonomic workstation
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> High-speed dedicated LAN
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Personal mail handling
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Hot Desk */}
        <Reveal delay={300}>
          <div className="group glass-panel rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Hot Desk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6jClTGImqRgO-om2gHOWbFoHcMKP7hEayh1y4RweEu-GWCYgR-K623e7xQN14cN9kGqi21FeU-tKcHRHlnh_rB3GvhrHsvq9zym4ut6gFCOVEyQP3Z9zN-yLgRDQDZ1FfeL32aC63SA86gfAeZzuR9nZcWZOUQdcAOSbtt-ZZF741-CC-GWj9JdycWB4R6Ob-oMYr6tQYSfPJ558yKa-rDm4Bj6vU2jZc67tB1y2p2lfxbLvHkknE3Q"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-headline-md text-2xl text-primary mb-2">Hot Desks</h3>
              <p className="font-body-md text-sm text-secondary mb-4 line-clamp-3">
                Maximum flexibility. Access our vibrant lounge areas and pick any available seat for the day.
              </p>
              <ul className="space-y-2 mb-6 text-on-surface-variant text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Access to all common areas
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Business hours access
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">done</span> Networking community events
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
