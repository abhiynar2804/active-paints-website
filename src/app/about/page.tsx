import type { Metadata } from "next";
import Hero from "@/components/about/Hero";
import OurStory from "@/components/about/OurStory";
import StatsBanner from "@/components/about/StatsBanner";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import ISOCertification from "@/components/about/ISOCertification";
import CTABanner from "@/components/about/CTABanner";

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