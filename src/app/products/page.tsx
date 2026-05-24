"use client";

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  FlaskConical, 
  Palette, 
  Headphones, 
  Leaf, 
  Factory, 
  MapPin, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// --- Components ---

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-[2px] w-8 bg-yellow-500"></span>
    <span className="text-sm font-bold tracking-widest text-yellow-600 uppercase">{text}</span>
  </div>
);

const differentiators = [
  {
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Top-grade raw materials and strict quality control for long-lasting results.",
  },
  {
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Advanced Technology",
    desc: "Modern machines and innovative formulas for superior performance.",
  },
  {
    color: "text-amber-500",
    bg: "bg-amber-50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Wide Range",
    desc: "A complete range of industrial, decorative, and specialty paints.",
  },
  {
    color: "text-sky-500",
    bg: "bg-sky-50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Expert Support",
    desc: "Our team is always ready to guide you with the right solutions.",
  },
  {
    color: "text-green-500",
    bg: "bg-green-50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sustainable Approach",
    desc: "Eco-friendly practices and products that care for the environment.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Head>
        <title>About Us | Active Paints</title>
        <meta name="description" content="Building a stronger, more colorful tomorrow with quality paints." />
      </Head>

      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm font-semibold text-slate-500 mb-4 tracking-wide uppercase">
                Home &gt; About Us
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                About <span className="text-blue-700">Active Paints</span>
              </h1>
              <div className="w-20 h-1.5 bg-yellow-500 mb-8 rounded-full"></div>
              <p className="text-xl text-slate-600 mb-6 font-medium">
                Building a stronger, more colorful tomorrow with quality paints and honest service.
              </p>
              <p className="text-slate-500 leading-relaxed max-w-lg">
                Active Paints is an emerging name in the paint industry, committed to delivering high-quality paint solutions for industrial, commercial, and residential needs. Our mission is simple — superior quality, reliable service, and long-lasting relationships.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Abstract representation of the factory/paint cans */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="w-32 h-40 bg-blue-600 rounded-t-full relative overflow-hidden shadow-lg transform translate-y-8">
                        <div className="absolute top-0 left-0 w-full h-8 bg-blue-700"></div>
                        <div className="absolute bottom-0 w-full h-20 bg-blue-500/30 skew-y-6"></div>
                    </div>
                    <div className="w-32 h-40 bg-yellow-500 rounded-t-full relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 left-0 w-full h-8 bg-yellow-600"></div>
                        <div className="absolute bottom-0 w-full h-20 bg-yellow-400/30 -skew-y-6"></div>
                    </div>
                    <div className="w-32 h-40 bg-green-600 rounded-t-full relative overflow-hidden shadow-lg transform translate-y-4">
                         <div className="absolute top-0 left-0 w-full h-8 bg-green-700"></div>
                    </div>
                    <div className="w-32 h-40 bg-red-600 rounded-t-full relative overflow-hidden shadow-lg transform translate-y-12">
                         <div className="absolute top-0 left-0 w-full h-8 bg-red-700"></div>
                    </div>
                 </div>
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Our Story Section --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-[4/3] bg-slate-800 relative">
                 {/* Abstract Paint Swatches */}
                 <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
                    <div className="w-24 h-24 rounded-full bg-yellow-400 shadow-lg border-4 border-white"></div>
                    <div className="w-24 h-24 rounded-full bg-blue-600 shadow-lg border-4 border-white z-10"></div>
                    <div className="w-24 h-24 rounded-full bg-red-500 shadow-lg border-4 border-white"></div>
                    <div className="w-24 h-24 rounded-full bg-green-500 shadow-lg border-4 border-white"></div>
                 </div>
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel text="Our Story" />
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Quality is in our DNA</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We started with a vision to provide high-performance paints that meet global standards and withstand Indian conditions. With a focus on innovation, quality control, and customer satisfaction, we continue to grow and expand our range of products.
              </p>

              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, title: "Quality First", desc: "We use premium raw materials and advanced technology to ensure every product delivers lasting performance." },
                  { icon: Users, title: "Customer Focused", desc: "Our customers are at the heart of everything we do. We listen, understand, and deliver." },
                  { icon: TrendingUp, title: "Continuous Growth", desc: "We constantly innovate and improve to meet the evolving needs of our industry." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50"
          >
            {[
              { icon: Users, val: "500+", label: "Happy Customers" },
              { icon: Factory, val: "50+", label: "Products" },
              { icon: MapPin, val: "10+", label: "Cities Served" },
              { icon: Calendar, val: "5+", label: "Years of Experience" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center justify-center px-4">
                <stat.icon className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-4xl lg:text-5xl font-bold mb-2">{stat.val}</h3>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold tracking-widest text-xs uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-0.5 bg-amber-400" />
            WHY CHOOSE ACTIVE PAINTS
            <span className="inline-block w-6 h-0.5 bg-amber-400" />
          </p>
          <h2 className="text-4xl font-extrabold">What Sets Us Apart</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center gap-3"
            >
              <div className={`w-12 h-12 rounded-full ${d.bg} ${d.color} flex items-center justify-center`}>
                {d.icon}
              </div>
              <h3 className="font-bold text-gray-900">{d.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Background Abstract Paint Roller Effect */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute right-[-10%] top-[20%] w-64 h-64 bg-yellow-500 rounded-full blur-[100px]"></div>
            <div className="absolute right-[10%] bottom-[10%] w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We're more than just paints — we're your partner in every project. Get in touch and experience the Active Paints difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center gap-2">
                  Get in Touch <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 border border-slate-600 hover:border-white text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                  View Our Products <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 flex-shrink-0 hidden lg:block"
            >
               {/* Abstract Paint Roller Visual */}
               <div className="w-full h-32 bg-yellow-500 rounded-xl shadow-2xl relative top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="absolute -left-8 w-16 h-4 bg-slate-700 rounded"></div>
                  <div className="w-48 h-24 border-4 border-yellow-300/30 rounded-lg"></div>
               </div>
               {/* Splatter */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
               <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}