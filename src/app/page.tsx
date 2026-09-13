import { Hero } from "@/sections/home/Hero";
import { ValueStrip } from "@/sections/home/ValueStrip";
import { Intro } from "@/sections/home/Intro";
import { WorkspacesGrid } from "@/sections/home/WorkspacesGrid";
import { VirtualOffice } from "@/sections/home/VirtualOffice";
import { Community } from "@/sections/home/Community";
import { WhyNexora } from "@/sections/home/WhyNexora";
import { Amenities } from "@/sections/home/Amenities";
import { Experience } from "@/sections/home/Experience";
import { Audiences } from "@/sections/home/Audiences";
import { GalleryPreview } from "@/sections/home/GalleryPreview";
import { Location } from "@/sections/home/Location";
import { FinalCta } from "@/sections/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <Intro />
      <WorkspacesGrid />
      <VirtualOffice />
      <Community />
      <WhyNexora />
      <Amenities />
      <Experience />
      <Audiences />
      <GalleryPreview />
      <Location />
      <FinalCta />
    </>
  );
}
