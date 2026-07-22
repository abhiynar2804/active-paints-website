// 'use client';

// import Image from 'next/image';
// import { ShieldCheck, Users, TrendingUp } from 'lucide-react';
// import { useScrollAnimation } from '../../hooks/about/useScrollAnimation';

// const features = [
//   {
//     icon: ShieldCheck,
//     title: 'Quality First',
//     description:
//       'We use premium raw materials and advanced technology to ensure every product delivers lasting performance.',
//   },
//   {
//     icon: Users,
//     title: 'Customer Focused',
//     description:
//       'Our customers are at the heart of everything we do. We listen, understand, and deliver.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Continuous Growth',
//     description:
//       'We constantly innovate and improve to meet the evolving needs of our industry.',
//   },
// ];

// export default function OurStory() {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

//   return (
//     <section ref={ref} className="bg-[#F8FAFC] py-20 lg:py-[80px]">
//       <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
//           {/* Left Column - Image */}
//           <div
//             className={`w-full lg:w-[45%] transition-all duration-700 ${
//               isVisible
//                 ? 'opacity-100 translate-x-0'
//                 : 'opacity-0 -translate-x-10'
//             }`}
//           >
//             <div className="relative lg:ml-[-40px]">
//               <Image
//                 src="/images/paint-cans-circle.jpg"
//                 alt="Paint cans arranged in a circle with brush and color swatches"
//                 width={700}
//                 height={525}
//                 className="w-full h-auto lg:rounded-r-xl lg:rounded-l-none rounded-xl shadow-[0_12px_40px_rgba(27,42,74,0.08)] object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Column - Content */}
//           <div className="w-full lg:w-[55%]">
//             {/* Section Subtitle */}
//             <div
//               className={`transition-all duration-500 ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-5'
//               }`}
//               style={{ transitionDelay: '100ms' }}
//             >
//               <span className="font-sans font-semibold text-[13px] uppercase tracking-[0.12em] text-[#D4A843]">
//                 Our Story
//               </span>
//               <div className="w-10 h-0.5 bg-[#D4A843] mt-2 mb-6" />
//             </div>

//             {/* Heading */}
//             <h2
//               className={`font-display font-semibold text-3xl lg:text-[42px] text-[#1B2A4A] leading-[1.2] mb-6 transition-all duration-[600ms] ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-6'
//               }`}
//               style={{ transitionDelay: '200ms' }}
//             >
//               Quality is in our DNA
//             </h2>

//             {/* Description */}
//             <p
//               className={`font-sans text-base text-[#64748B] leading-relaxed max-w-[520px] mb-8 transition-all duration-500 ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-5'
//               }`}
//               style={{ transitionDelay: '350ms' }}
//             >
//               We started with a vision to provide high-performance paints that
//               meet global standards and withstand Indian conditions. With a focus
//               on innovation, quality control, and customer satisfaction, we
//               continue to grow and expand our range of products.
//             </p>

//             {/* Feature List */}
//             <div className="flex flex-col gap-5">
//               {features.map((feature, index) => (
//                 <div
//                   key={feature.title}
//                   className={`flex items-start gap-4 transition-all duration-500 ${
//                     isVisible
//                       ? 'opacity-100 translate-y-0'
//                       : 'opacity-0 translate-y-5'
//                   }`}
//                   style={{ transitionDelay: `${450 + index * 120}ms` }}
//                 >
//                   {/* Icon Wrapper */}
//                   <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A]/[0.08] border border-[#1B2A4A]/[0.12] flex items-center justify-center">
//                     <feature.icon className="w-6 h-6 text-[#1B2A4A]" />
//                   </div>

//                   {/* Text */}
//                   <div>
//                     <h3 className="font-sans font-semibold text-base text-[#1E293B] mb-1">
//                       {feature.title}
//                     </h3>
//                     <p className="font-sans text-sm text-[#475569] leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { ShieldCheck, Users, TrendingUp } from "lucide-react";

// const values = [
//   {
//     icon: ShieldCheck,
//     title: "Quality First",
//     desc: "We use premium raw materials and advanced technology to ensure every product delivers lasting performance.",
//   },
//   {
//     icon: Users,
//     title: "Customer Focused",
//     desc: "Our customers are at the heart of everything we do. We listen, understand, and deliver.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Continuous Growth",
//     desc: "We constantly innovate and improve to meet the evolving needs of our industry.",
//   },
// ];

// export default function OurStory() {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left: Visual */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative rounded-2xl overflow-hidden shadow-2xl group"
//           >
//             <div className="aspect-[4/3] bg-slate-800 relative">
//               <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
//                 {["bg-yellow-400", "bg-blue-600", "bg-red-500", "bg-green-500"].map((color, i) => (
//                   <div
//                     key={i}
//                     className={`w-24 h-24 rounded-full ${color} shadow-lg border-4 border-white ${i === 1 ? "z-10" : ""}`}
//                   />
//                 ))}
//               </div>
//               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
//             </div>
//           </motion.div>

//           {/* Right: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <span className="h-[2px] w-8 bg-yellow-500" />
//               <span className="text-sm font-bold tracking-widest text-yellow-600 uppercase">
//                 Our Story
//               </span>
//             </div>
//             <h2 className="text-4xl font-bold text-slate-900 mb-6">Quality is in our DNA</h2>
//             <p className="text-slate-600 mb-10 leading-relaxed">
//               We started with a vision to provide high-performance paints that meet global standards
//               and withstand Indian conditions. With a focus on innovation, quality control, and
//               customer satisfaction, we continue to grow and expand our range of products.
//             </p>

//             <div className="space-y-8">
//               {values.map((item) => (
//                 <div key={item.title} className="flex gap-5">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
//                     <item.icon size={22} />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
//                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, TrendingUp } from "lucide-react";
import Paints from "../../../public/paint-cans-circle.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    desc: "We use premium raw materials and advanced technology to ensure every product delivers lasting performance.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    desc: "Our customers are at the heart of everything we do. We listen, understand, and deliver.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "We constantly innovate and improve to meet the evolving needs of our industry.",
  },
];

export default function OurStory() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Soft glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src= {Paints}
                alt="Active Paints our story"
                width={700}
                height={525}
                className="w-full h-auto object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-yellow-500" />
              <span className="text-sm font-bold tracking-widest text-yellow-600 uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Quality is in our DNA</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We started with a vision to provide high-performance paints that meet global standards
              and withstand Indian conditions. With a focus on innovation, quality control, and
              customer satisfaction, we continue to grow and expand our range of products.
            </p>
            <div className="space-y-8">
              {values.map((item) => (
                <div key={item.title} className="flex gap-5">
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
  );
}