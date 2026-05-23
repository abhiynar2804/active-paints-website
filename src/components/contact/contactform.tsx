'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Clock, Star, Shield, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import PaintImage from '../../../public/file_000000007a387207896df7d97a35352c.png';

const features = [
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'We typically respond within 24 hours on all business days.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Star,
    title: 'Expert Support',
    description: 'Get professional advice and color consultation for your project.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    icon: Shield,
    title: 'Quality Products',
    description: 'Premium paints and coatings backed by manufacturer warranty.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
];

const projectTypes = [
  'Residential Painting',
  'Commercial Project',
  'Industrial Coating',
  'Dealership Inquiry',
  'Bulk Order',
  'Other',
];

export default function contactform() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-slate-800 placeholder:text-slate-400 text-sm input-focus-glow';

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            ✍️ Send a Message
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: Form — takes 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-lg shadow-slate-900/5 border border-slate-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 max-w-xs mb-6">
                  Thank you! Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', projectType: '', message: '' }); }}
                  className="text-sm font-semibold text-amber-600 hover:text-amber-700 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Your Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Patil"
                        required
                        className={inputBase}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className={inputBase}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        className={inputBase}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Project Type *</label>
                      <select
                        required
                        className={`${inputBase} appearance-none cursor-pointer`}
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="" disabled>Select requirement…</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 bottom-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Your Message</label>
                    <textarea
                      placeholder="Tell us about your project, quantity needed, preferred colors, or any specific requirements…"
                      rows={5}
                      className={`${inputBase} resize-none`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 text-sm tracking-wide"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request a Callback
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    🔒 Your information is safe and will never be shared.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Right: Info + Image — takes 2 cols */}
          <div className="lg:col-span-2 space-y-7">

            {/* We're Ready to Help */}
            <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-900/5 border border-slate-100">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                We&apos;re Ready to Help
              </h2>
              <div className="section-divider" />
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className={`w-11 h-11 ${feature.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-0.5">{feature.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative h-56 rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10">
              <Image
                src={PaintImage}
                alt="Paint roller with yellow paint — Active Paints"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm">Premium Quality Paints</p>
                <p className="text-white/70 text-xs mt-0.5">2000+ colors · ISI certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}