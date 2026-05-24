// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useScrollAnimation } from '../../hooks/about/useScrollAnimation';

// export default function Hero() {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

//   return (
//     <section
//       ref={ref}
//       className="relative bg-white overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
//       }}
//     >
//       {/* Subtle warm gradient overlay like image */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: 'radial-gradient(ellipse at 20% 80%, rgba(212,168,67,0.08) 0%, transparent 50%)',
//         }}
//       />

//       <div className="pt-6">
//         <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
//           <div className="flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px] py-8 lg:py-0">
            
//             {/* Left Column - Text */}
//             <div className="w-full lg:w-[50%] flex flex-col justify-center relative z-10">
              
//               {/* Breadcrumb */}
//               <div
//                 className={`flex items-center gap-2 mb-6 transition-all duration-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                 }`}
//                 style={{ transitionDelay: '100ms' }}
//               >
//                 <Link
//                   href="/"
//                   className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B] hover:text-[#1B2A4A] transition-colors"
//                 >
//                   HOME
//                 </Link>
//                 <span className="text-[#CBD5E1] text-xs">&gt;</span>
//                 <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
//                   ABOUT US
//                 </span>
//               </div>

//               {/* Heading */}
//               <h1 className="leading-[1.05] mb-2">
//                 <span
//                   className={`block text-[#1E293B] font-bold text-5xl md:text-6xl lg:text-[72px] transition-all duration-700 ${
//                     isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                   }`}
//                   style={{ transitionDelay: '200ms', fontFamily: 'Inter, system-ui, sans-serif' }}
//                 >
//                   About
//                 </span>
//                 <span
//                   className={`block text-[#2563EB] font-bold text-4xl md:text-5xl lg:text-[56px] transition-all duration-700 ${
//                     isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                   }`}
//                   style={{ transitionDelay: '350ms', fontFamily: 'Inter, system-ui, sans-serif' }}
//                 >
//                   Active Paints
//                 </span>
//               </h1>

//               {/* Gold Divider */}
//               <div
//                 className={`w-12 h-[3px] bg-[#D4A843] mt-5 mb-5 origin-left rounded-full transition-all duration-500 ${
//                   isVisible ? 'scale-x-100' : 'scale-x-0'
//                 }`}
//                 style={{ transitionDelay: '500ms' }}
//               />

//               {/* Subtitle */}
//               <p
//                 className={`text-lg text-[#475569] max-w-[420px] leading-[1.6] mb-4 font-medium transition-all duration-600 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//                 }`}
//                 style={{ transitionDelay: '550ms', fontFamily: 'Inter, system-ui, sans-serif' }}
//               >
//                 Building a stronger, more colorful tomorrow with quality paints and honest service.
//               </p>

//               {/* Description */}
//               <p
//                 className={`text-[15px] text-[#64748B] max-w-[480px] leading-[1.7] transition-all duration-600 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//                 }`}
//                 style={{ transitionDelay: '650ms', fontFamily: 'Inter, system-ui, sans-serif' }}
//               >
//                 Active Paints is an emerging name in the paint industry, committed to delivering high-quality paint solutions for industrial, commercial, and residential needs. Our mission is simple — superior quality, reliable service, and long-lasting relationships.
//               </p>
//             </div>

//             {/* Right Column - Image */}
//             <div
//               className={`w-full lg:w-[55%] mt-10 lg:mt-0 relative transition-all duration-1000 ${
//                 isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
//               }`}
//               style={{ transitionDelay: '300ms' }}
//             >
//               <div className="relative w-full lg:ml-8">
//                 {/* Soft shadow behind image */}
//                 <div className="absolute -inset-4 bg-gradient-to-br from-[#D4A843]/10 to-transparent rounded-2xl blur-2xl" />
                
//                 <div className="relative rounded-xl overflow-hidden shadow-[0_25px_80px_rgba(27,42,74,0.15)]">
//                   <Image
//                     src="/images/hero-factory.jpg"
//                     alt="Active Paints factory with colorful paint cans"
//                     width={700}
//                     height={500}
//                     className="w-full h-auto object-cover"
//                     priority
//                   />
//                   {/* Subtle overlay to match image warmth */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left: Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="text-sm font-semibold text-slate-500 mb-4 tracking-wide uppercase">
//               Home &gt; About Us
//             </div>
//             <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
//               About <span className="text-blue-700">Active Paints</span>
//             </h1>
//             <div className="w-20 h-1.5 bg-yellow-500 mb-8 rounded-full" />
//             <p className="text-xl text-slate-600 mb-6 font-medium">
//               Building a stronger, more colorful tomorrow with quality paints and honest service.
//             </p>
//             <p className="text-slate-500 leading-relaxed max-w-lg">
//               Active Paints is an emerging name in the paint industry, committed to delivering
//               high-quality paint solutions for industrial, commercial, and residential needs. Our
//               mission is simple — superior quality, reliable service, and long-lasting relationships.
//             </p>
//           </motion.div>

//           {/* Right: Visual */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
//               <div className="grid grid-cols-2 gap-4 p-8">
//                 {[
//                   { bg: "bg-blue-600", lid: "bg-blue-700", extra: "translate-y-8" },
//                   { bg: "bg-yellow-500", lid: "bg-yellow-600", extra: "" },
//                   { bg: "bg-green-600", lid: "bg-green-700", extra: "translate-y-4" },
//                   { bg: "bg-red-600", lid: "bg-red-700", extra: "translate-y-12" },
//                 ].map((can, i) => (
//                   <div
//                     key={i}
//                     className={`w-32 h-40 ${can.bg} rounded-t-full relative overflow-hidden shadow-lg transform ${can.extra}`}
//                   >
//                     <div className={`absolute top-0 left-0 w-full h-8 ${can.lid}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Paints from "../../../public/hero-factory.jpg";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
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
            <div className="w-20 h-1.5 bg-yellow-500 mb-8 rounded-full" />
            <p className="text-xl text-slate-600 mb-6 font-medium">
              Building a stronger, more colorful tomorrow with quality paints and honest service.
            </p>
            <p className="text-slate-500 leading-relaxed max-w-lg">
              Active Paints is an emerging name in the paint industry, committed to delivering
              high-quality paint solutions for industrial, commercial, and residential needs. Our
              mission is simple — superior quality, reliable service, and long-lasting relationships.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Soft glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(27,42,74,0.15)]">
              <Image
                src={Paints}
                alt="Active Paints factory with colorful paint cans"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}