'use client';

import Image from 'next/image';
import { Phone, MessageCircle, ArrowRight, Star } from 'lucide-react';
import PaintImage from '../../../public/finalCTA.jpeg';

const highlights = [
  { icon: '🎨', text: '2000+ Colors' },
  { icon: '✅', text: 'ISI Certified' },
  { icon: '🚚', text: 'Fast Delivery' },
  { icon: '💼', text: 'B2B Support' },
];

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
      {/* Background Image with multi-stop overlay */}
      <div className="absolute inset-0">
        <Image
          src={PaintImage}
          alt="Colorful paint cans — Active Paints"
          fill
          className="object-cover opacity-30"
        />
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-10 right-[30%] w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-[15%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-7">
            <Star className="w-3 h-3 fill-amber-400" />
            Ready to Start Your Next Project?
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight">
            Let&apos;s Bring{' '}
            <span className="text-amber-400">Color</span> to
            <br />
            Your Ideas
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
            Contact Active Paints today for reliable paint solutions, professional color consultation,
            and expert support for every scale of project.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-9">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-center gap-2 bg-white/8 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <span>{h.icon}</span>
                {h.text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="tel:+911234567890"
              className="group inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-slate-500 text-sm flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span>
            Rated 4.8/5 by 500+ satisfied customers across Maharashtra
          </p>
        </div>
      </div>
    </section>
  );
}