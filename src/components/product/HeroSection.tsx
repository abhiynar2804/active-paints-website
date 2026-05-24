"use client";

import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
                — Our Products
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Paints.
                <br />
                Built to{" "}
                <span className="text-yellow-500">Last.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                High-performance coatings designed for durability, protection, and exceptional finishes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Download Catalog
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products-hero.jpg"
                alt="Active Paints product lineup with color swatches and paint cans"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}