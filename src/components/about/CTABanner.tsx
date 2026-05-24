// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { useScrollAnimation } from '../../hooks/about/useScrollAnimation';

// export default function CTABanner() {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

//   return (
//     <section ref={ref} className="bg-[#0F172A] overflow-hidden relative">
//       <div className="max-w-[1280px] mx-auto">
//         <div className="flex flex-col lg:flex-row items-center">
          
//           {/* Left Column - Text */}
//           <div className="w-full lg:w-[55%] px-6 lg:px-16 py-16 lg:py-24 relative z-10">
//             <div
//               className={`w-10 h-[3px] bg-[#D4A843] mb-6 origin-left rounded-full transition-all duration-500 ${
//                 isVisible ? 'scale-x-100' : 'scale-x-0'
//               }`}
//               style={{ transitionDelay: '100ms' }}
//             />

//             <h2
//               className={`font-bold text-3xl lg:text-[40px] text-white leading-[1.2] max-w-[500px] mb-4 transition-all duration-700 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//               style={{ transitionDelay: '100ms', fontFamily: 'Inter, system-ui, sans-serif' }}
//             >
//               Let&apos;s Build Something Great Together
//             </h2>

//             <p
//               className={`text-[15px] text-white/70 max-w-[420px] leading-[1.7] mb-8 transition-all duration-600 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//               }`}
//               style={{ transitionDelay: '250ms', fontFamily: 'Inter, system-ui, sans-serif' }}
//             >
//               We&apos;re more than just paints — we&apos;re your partner in every project. Get in touch and experience the Active Paints difference.
//             </p>

//             <div
//               className={`flex flex-col sm:flex-row gap-4 transition-all duration-600 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//               }`}
//               style={{ transitionDelay: '400ms' }}
//             >
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D4A843] text-[#0F172A] font-bold text-sm uppercase tracking-[0.08em] rounded-lg transition-all duration-300 hover:bg-[#C49A3B] hover:shadow-lg"
//               >
//                 Get in Touch
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white/90 font-bold text-sm uppercase tracking-[0.08em] rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0F172A] hover:border-white group"
//               >
//                 View Our Products
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>

//           {/* Right Column - Image */}
//           <div
//             className={`w-full lg:w-[45%] relative transition-all duration-1000 ${
//               isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
//             }`}
//             style={{ transitionDelay: '200ms' }}
//           >
//             <div className="relative h-[300px] lg:h-[480px]">
//               {/* Gradient overlay for smooth blend */}
//               <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/30 to-transparent z-10 pointer-events-none" />
//               <Image
//                 src="/images/paint-roller-cta.jpg"
//                 alt="Yellow paint roller on dark surface"
//                 fill
//                 className="object-cover lg:rounded-l-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function CTABanner() {
//   return (
//     <section className="relative py-24 bg-slate-900 overflow-hidden">
//       {/* Background glow blobs */}
//       <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
//         <div className="absolute right-[-10%] top-[20%] w-64 h-64 bg-yellow-500 rounded-full blur-[100px]" />
//         <div className="absolute right-[10%] bottom-[10%] w-64 h-64 bg-blue-600 rounded-full blur-[100px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

//           {/* Text + Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//               Let&apos;s Build Something Great Together
//             </h2>
//             <p className="text-slate-300 text-lg mb-8 leading-relaxed">
//               We&apos;re more than just paints — we&apos;re your partner in every project. Get in
//               touch and experience the Active Paints difference.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="/contact"
//                 className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center gap-2"
//               >
//                 Get in Touch <ArrowRight size={20} />
//               </Link>
//               <Link
//                 href="/products"
//                 className="px-8 py-4 border border-slate-600 hover:border-white text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
//               >
//                 View Our Products <ArrowRight size={20} />
//               </Link>
//             </div>
//           </motion.div>

//           {/* Decorative paint roller visual */}
//           <motion.div
//             initial={{ opacity: 0, rotate: -10 }}
//             whileInView={{ opacity: 1, rotate: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative w-64 h-64 flex-shrink-0 hidden lg:block"
//           >
//             <div className="w-full h-32 bg-yellow-500 rounded-xl shadow-2xl relative top-1/2 -translate-y-1/2 flex items-center justify-center">
//               <div className="absolute -left-8 w-16 h-4 bg-slate-700 rounded" />
//               <div className="w-48 h-24 border-4 border-yellow-300/30 rounded-lg" />
//             </div>
//             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-60" />
//             <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Roller from "../../../public/paint-roller-cta.jpg";

export default function CTABanner() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute right-[-10%] top-[20%] w-64 h-64 bg-yellow-500 rounded-full blur-[100px]" />
        <div className="absolute right-[10%] bottom-[10%] w-64 h-64 bg-blue-600 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text + Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We&apos;re more than just paints — we&apos;re your partner in every project. Get in
              touch and experience the Active Paints difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 border border-slate-600 hover:border-white text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                View Our Products <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 flex-shrink-0 hidden lg:block"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src= {Roller}
                alt="Active Paints CTA"
                fill
                className="object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}