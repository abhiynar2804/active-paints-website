"use client";

import { Shield, Clock, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Superior Protection",
    description: "Advanced formulations for maximum durability",
  },
  {
    icon: Clock,
    title: "Long Lasting Finish",
    description: "Colors that stay vibrant for years",
  },
  {
    icon: Leaf,
    title: "Low VOC & Eco Friendly",
    description: "Environmentally conscious solutions",
  },
  {
    icon: Award,
    title: "Trusted by Professionals",
    description: "Preferred by industry experts",
  },
];

export default function FeaturesBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}