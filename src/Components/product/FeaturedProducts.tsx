"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const products = [
  {
    name: "AP Super Acrylic",
    tagline: "Premium acrylic emulsion for interior walls",
    image: "/1.jpg.jpeg",
    features: ["High Coverage", "Washable", "Anti Fungal"],
    color: "bg-blue-900",
    slug: "ap-super-acrylic",
  },
  {
    name: "AP Exterior Emulsion",
    tagline: "Weather resistant emulsion for exterior walls",
    image: "/2.jpg.jpeg",
    features: ["Weather Proof", "UV Resistant", "Long Lasting"],
    color: "bg-green-800",
    slug: "ap-exterior-emulsion",
  },
  {
    name: "AP PU Ultima",
    tagline: "Luxury polyurethane finish for wood & metal",
    image: "/3.jpg.jpeg",
    features: ["High Gloss", "Scratch Resistant", "Smooth Finish"],
    color: "bg-amber-800",
    slug: "ap-pu-ultima",
  },
  {
    name: "AP Epoxy Coating",
    tagline: "High build epoxy coating for floors & metal",
    image: "/4.jpg.jpeg",
    features: ["Chemical Resistant", "High Durability", "Excellent Adhesion"],
    color: "bg-gray-800",
    slug: "ap-epoxy-coating",
  },
  {
    name: "AP Water Shield",
    tagline: "Advanced waterproof coating for terraces & exterior",
    image: "/1.jpg.jpeg",
    features: ["100% Waterproof", "Crack Bridging", "Heat Reflective"],
    color: "bg-blue-800",
    slug: "ap-water-shield",
  },
  {
    name: "AP Primer Seal",
    tagline: "Premium primer for strong adhesion",
    image: "/4.jpg.jpeg",
    features: ["Strong Adhesion", "Quick Drying", "Better Coverage"],
    color: "bg-purple-900",
    slug: "ap-primer-seal",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-2">
              — Featured Products
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Our Best Sellers</h2>
          </div>
          <a
            href="#products/all"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image / Color Block */}
              <div className={`relative aspect-square ${product.color} flex items-center justify-center`}>
                <div className="text-center text-white p-8">
                  <div className="w-200 h-90 mx-auto mb-4 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-4">{product.tagline}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#products/${product.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-yellow-600 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}