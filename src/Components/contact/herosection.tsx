'use client';

import Image from 'next/image';
import { MessageCircle, Phone } from 'lucide-react';
import PaintImage from '../../../public/finalCTA.jpeg';

export default function herosection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-amber-50/40 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-7 animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5">
              <span className="block w-8 h-0.5 bg-amber-500 rounded-full" />
              <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Let&apos;s Discuss
                <br />
                <span className="text-amber-500">Your Project</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              We&apos;re here to help with product inquiries, dealership discussions, pricing, and project requirements.{' '}
              <span className="text-slate-700 font-medium">Our team responds within 24 hours.</span>
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 shadow-md shadow-green-500/25 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3 rounded-xl border border-slate-200 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                Call Us Now
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-1">
              <div className="flex -space-x-2">
                {['bg-amber-400', 'bg-blue-400', 'bg-green-400', 'bg-rose-400'].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {['A', 'B', 'C', 'D'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-500 font-bold text-sm">★★★★★</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Trusted by 500+ clients across Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-up delay-200">
            {/* Main image */}
            <div className="relative h-72 sm:h-96 lg:h-[26rem] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15">
              <Image
                src={PaintImage}
                alt="Colorful paint cans and brushes — Active Paints"
                fill
                className="object-cover"
                priority
              />
              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating stat card - top left */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 px-4 py-3 flex items-center gap-3 animate-float border border-slate-100">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Colors Available</p>
                <p className="text-lg font-extrabold text-slate-900 leading-tight">2000+</p>
              </div>
            </div>

            {/* Floating stat card - bottom right */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 px-4 py-3 flex items-center gap-3 border border-slate-100" style={{ animationDelay: '1.5s' }}>
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Response Time</p>
                <p className="text-lg font-extrabold text-slate-900 leading-tight">&lt; 24 hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}