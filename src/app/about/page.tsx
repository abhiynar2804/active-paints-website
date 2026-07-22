import type { Metadata } from "next";
import Hero from "@/Components/about/Hero";
import OurStory from "@/Components/about/OurStory";
import StatsBanner from "@/Components/about/StatsBanner";
import WhyChooseUs from "@/Components/about/WhyChooseUs";
import ISOCertification from "@/Components/about/ISOCertification";
import CTABanner from "@/Components/about/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Active Paints",
  description:
    "Building a stronger, more colorful tomorrow with quality paints and honest service.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Hero />
      <OurStory />
      <StatsBanner />
      <ISOCertification />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}