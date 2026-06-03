'use client';

import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';

export default function googlemap() {
  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              📍 Find Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Visit Our Office
            </h2>
            <p className="text-slate-500 mt-2 text-sm">Bhusawal, Maharashtra 425307, India</p>
          </div>
          <a
            href="https://maps.app.goo.gl/DpVoN9qgdkFQdt576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-all duration-200 self-start sm:self-auto"
          >
            <Navigation className="w-4 h-4" />
            Open in Google Maps
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Map container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-100">
          {/* Info Card overlaid on map */}
          <div className="hidden sm:block absolute top-5 right-5 z-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-900/10 p-4 max-w-[260px] border border-slate-100">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm leading-tight">Active Paints</h3>
                <p className="text-xs text-slate-500">Paint Manufacture Plant</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 my-3" />

            {/* Address */}
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Bhusawal, Maharashtra 425307, India
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-500 font-extrabold text-sm">4.8</span>
              <div className="flex text-amber-400 text-xs gap-px">
                {'★'.repeat(5)}
              </div>
              <span className="text-slate-400 text-xs">(25 reviews)</span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-3.5 h-3.5 text-green-500 shrink-0" />
              <span className="text-xs text-slate-600">Mon – Sat · 9AM – 6PM</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="text-xs text-slate-600 font-medium">+91 12345 67890</span>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://maps.app.goo.gl/DpVoN9qgdkFQdt576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors"
              >
                <Navigation className="w-3 h-3" />
                Directions
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-lg transition-colors"
              >
                <Phone className="w-3 h-3" />
                Call
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <iframe
            title="Active Paints Location — Bhusawal, Maharashtra"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.417149108075!2d75.81514349999999!3d21.0076643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9a5b7ae6adcfd%3A0xe9be12b79e0f39f2!2sGraphics%20Industries%20Paint%20Manufacturing!5e1!3m2!1sen!2sin!4v1779524634435!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:grayscale-0 transition-all duration-700 grayscale-[15%]"
          />
        </div>
      </div>
    </section>
  );
}