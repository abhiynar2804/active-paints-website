"use client";

import { Phone, FileText } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s Build Something Durable Together
            </h2>
            <p className="text-gray-400">
              Have a project in mind? Our experts are ready to help you find the perfect coating solution.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Contact Our Expert
            </a>
            <a
              href="/contact?quote=true"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}