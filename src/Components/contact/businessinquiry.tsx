'use client';

import { Handshake, Store, Boxes, Link2, Mail, ArrowRight } from 'lucide-react';

const inquiryTypes = [
  {
    icon: Store,
    title: 'Dealership Opportunities',
    description: 'Join our growing network of authorized paint dealers across India.',
    color: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/20',
  },
  {
    icon: Boxes,
    title: 'Bulk Orders',
    description: 'Special pricing and priority fulfillment for large quantity requirements.',
    color: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    icon: Link2,
    title: 'Partnerships',
    description: 'Let\'s build long-term business relationships and grow together.',
    color: 'bg-green-500/10',
    iconColor: 'text-green-400',
    border: 'border-green-500/20',
  },
];

export default function BusinessInquiry() {
  return (
    <section className="py-16 lg:py-20 relative bg-slate-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Main Info */}
          <div className="space-y-7">
            {/* Icon badge */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 animate-pulse-ring">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                🤝 B2B & Trade
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Business &amp; Dealer
                <br />
                <span className="text-amber-400">Inquiries</span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
              <p className="text-slate-400 leading-relaxed max-w-lg text-[15px]">
                Interested in dealership opportunities, bulk orders, or partnerships?
                We are always open to exploring new business relationships with trusted partners.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: '100+', label: 'Active Dealers' },
                { val: '5+', label: 'Years in Business' },
                { val: '1000+', label: 'Happy Clients' },
              ].map((s) => (
                <div key={s.label} className="text-center bg-white/5 rounded-2xl py-4 px-2 border border-white/10">
                  <p className="text-2xl font-extrabold text-amber-400">{s.val}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="mailto:graphicsindus@gmail.com?subject=Business Inquiry"
              className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Send Inquiry via Email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Right: Inquiry Type Cards */}
          <div className="grid gap-4">
            {inquiryTypes.map((item, index) => (
              <div
                key={index}
                className={`flex gap-5 items-start bg-white/5 hover:bg-white/8 border ${item.border} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 cursor-default`}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}