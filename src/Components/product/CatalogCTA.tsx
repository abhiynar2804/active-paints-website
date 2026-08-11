"use client";

import { Download } from "lucide-react";
import Image from "next/image";

export default function CatalogCTA() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Need detailed specifications and product information?
            </h2>
            <p className="text-gray-400 text-lg">
              Download our product catalog for complete technical details, application guides, and more.
            </p>
            {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              <Download className="w-5 h-5" />
              Download Catalog
            </button> */}
            <a
              href="/catalog.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              <Download className="w-5 h-5" />
              Download Catalog
            </a>
          </div>

          {/* Right Catalog Preview */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/catalog.jpeg"
                alt="Active Paints Product Catalog"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg">ACTIVE PAINTS</p>
                <p className="text-white/80 text-sm">Product Catalog 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}