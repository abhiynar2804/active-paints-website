"use client";

import { Home, Building2, Factory, Landmark } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    icon: Home,
    title: "Residential",
    description: "Beautiful spaces, protected inside and out.",
    image: "/slide1.jpeg",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Reliable coatings for offices and complexes.",
    image: "/slide2.png",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "High-performance solutions for industrial structures.",
    image: "/slide3.png",
  },
  {
    icon: Landmark,
    title: "Infrastructure",
    description: "Durable protection for critical infrastructure.",
    image: "/slide4.png",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-6">
          — Industries We Serve
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                  <industry.icon className="w-5 h-5 text-gray-800" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{industry.title}</h3>
                <p className="text-sm text-gray-500">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}