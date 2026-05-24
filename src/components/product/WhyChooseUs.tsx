"use client";

import { Shield, FlaskConical, BadgeCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "We use high-grade raw materials and advanced technology for the best results. Every batch is tested to meet international standards.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Technology",
    description:
      "Modern manufacturing with strict quality control at every step. Our R&D team continuously innovates for superior performance.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Performance",
    description:
      "Tested to perform in extreme conditions and deliver long-lasting protection. Proven results across thousands of projects.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Our technical experts help you choose the right solution for your needs. From selection to application, we guide you through.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Heading */}
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-2">
              — Why Choose Active Paints
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Performance You Can Rely On
            </h2>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}