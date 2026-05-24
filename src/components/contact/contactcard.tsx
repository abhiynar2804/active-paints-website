'use client';

import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const contactMethods = [
  {
    id: 'whatsapp',
    emoji: '💬',
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat with us instantly on WhatsApp for quick support and product queries.',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/911234567890',
    btnClass: 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/25',
    bgIcon: 'bg-green-50',
    iconColor: 'text-green-500',
    borderAccent: 'border-t-green-500',
    detail: null,
    isExternal: true,
  },
  {
    id: 'email',
    emoji: '✉️',
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond as soon as possible.',
    action: 'Send Email',
    href: 'mailto:graphicsindus@gmail.com',
    btnClass: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25',
    bgIcon: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderAccent: 'border-t-blue-600',
    detail: 'graphicsindus@gmail.com',
    isExternal: false,
  },
  {
    id: 'phone',
    emoji: '📞',
    icon: Phone,
    title: 'Call Us',
    description: 'Call us directly for immediate assistance and expert support.',
    action: 'Call Now',
    href: 'tel:+911234567890',
    btnClass: 'bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-amber-500/25',
    bgIcon: 'bg-amber-50',
    iconColor: 'text-amber-500',
    borderAccent: 'border-t-amber-500',
    detail: '+91 12345 67890',
    subDetail: 'Mon – Sat · 9:00 AM – 6:00 PM',
    isExternal: false,
  },
  {
    id: 'address',
    emoji: '📍',
    icon: MapPin,
    title: 'Our Address',
    description: 'Visit our office or warehouse in Bhusawal for any direct inquiries.',
    action: 'Get Directions',
    href: 'https://maps.app.goo.gl/DpVoN9qgdkFQdt576',
    btnClass: 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/25',
    bgIcon: 'bg-rose-50',
    iconColor: 'text-rose-500',
    borderAccent: 'border-t-rose-500',
    detail: 'A-47 Kinhi MIDC, Bhusawal, Maharashtra, India — 425307',
    isExternal: true,
  },
];

export default function contactcard() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            📬 Multiple Ways to Reach Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Choose How to Connect
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-base">
            Pick the channel that suits you best — we&apos;re available across all platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactMethods.map((method, index) => (
            <div
              key={method.id}
              className={`group relative bg-white rounded-2xl border border-slate-100 border-t-4 ${method.borderAccent} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${method.bgIcon} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`w-6 h-6 ${method.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                {method.title}
              </h3>
              <p className="text-slate-500 text-sm mb-5 leading-relaxed flex-1">
                {method.description}
              </p>

              {/* CTA Button */}
              <a
                href={method.href}
                target={method.isExternal ? '_blank' : undefined}
                rel={method.isExternal ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${method.btnClass}`}
              >
                <method.icon className="w-4 h-4" />
                {method.action}
                {method.isExternal && <ExternalLink className="w-3 h-3 opacity-70" />}
              </a>

              {/* Additional Details */}
              {method.detail && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-700 font-semibold text-center">{method.detail}</p>
                  {method.subDetail && (
                    <p className="text-xs text-slate-400 text-center mt-1">{method.subDetail}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
