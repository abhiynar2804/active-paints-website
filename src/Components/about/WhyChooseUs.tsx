// 'use client';

// import { Shield, FlaskConical, Palette, Headset, Leaf } from 'lucide-react';
// import { useScrollAnimation } from '../../hooks/about/useScrollAnimation';

// const features = [
//   {
//     icon: Shield,
//     title: 'Premium Quality',
//     description: 'Top-grade raw materials and strict quality control for long-lasting results.',
//     iconBg: 'rgba(37,99,235,0.08)',
//     iconColor: '#2563EB',
//   },
//   {
//     icon: FlaskConical,
//     title: 'Advanced Technology',
//     description: 'Modern machines and innovative formulas for superior performance.',
//     iconBg: 'rgba(16,185,129,0.08)',
//     iconColor: '#10B981',
//   },
//   {
//     icon: Palette,
//     title: 'Wide Range',
//     description: 'A complete range of industrial, decorative, and specialty paints.',
//     iconBg: 'rgba(245,158,11,0.08)',
//     iconColor: '#F59E0B',
//   },
//   {
//     icon: Headset,
//     title: 'Expert Support',
//     description: 'Our team is always ready to guide you with the right solutions.',
//     iconBg: 'rgba(139,92,246,0.08)',
//     iconColor: '#8B5CF6',
//   },
//   {
//     icon: Leaf,
//     title: 'Sustainable Approach',
//     description: 'Eco-friendly practices and products that care for the environment.',
//     iconBg: 'rgba(16,185,129,0.08)',
//     iconColor: '#059669',
//   },
// ];

// export default function WhyChooseUs() {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

//   return (
//     <section ref={ref} className="bg-white py-24 lg:py-[100px]">
//       <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
//         {/* Section Header */}
//         <div
//           className={`text-center mb-16 transition-all duration-[600ms] ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//           }`}
//         >
//           <span className="font-sans font-semibold text-[13px] uppercase tracking-[0.12em] text-[#D4A843]">
//             Why Choose Active Paints
//           </span>
//           <div className="w-10 h-0.5 bg-[#D4A843] mt-2 mb-6 mx-auto" />
//           <h2 className="font-display font-semibold text-3xl lg:text-[42px] text-[#1B2A4A] leading-[1.2]">
//             What Sets Us Apart
//           </h2>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={feature.title}
//                 className={`group bg-white border border-[#F1F5F9] rounded-xl p-8 text-center transition-all duration-[350ms] cursor-default hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(27,42,74,0.08)] hover:border-[#D4A843]/30 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 }`}
//                 style={{
//                   transitionDelay: `${100 + index * 100}ms`,
//                   transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//                 }}
//               >
//                 {/* Icon */}
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-[350ms] group-hover:scale-105"
//                   style={{ backgroundColor: feature.iconBg }}
//                 >
//                   <Icon className="w-6 h-6" style={{ color: feature.iconColor }} />
//                 </div>

//                 <h3 className="font-sans font-semibold text-base text-[#1E293B] mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="font-sans text-sm text-[#475569] leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { Shield, FlaskConical, Palette, Headset, Leaf } from 'lucide-react';
// import { useScrollAnimation } from '../../hooks/about/useScrollAnimation';

// const features = [
//   {
//     icon: Shield,
//     title: 'Premium Quality',
//     description: 'Top-grade raw materials and strict quality control for long-lasting results.',
//     accent: '#2563EB',
//     bg: 'bg-blue-50',
//     iconColor: 'text-blue-600',
//     border: 'hover:border-blue-200',
//     tag: '100% Tested',
//   },
//   {
//     icon: FlaskConical,
//     title: 'Advanced Technology',
//     description: 'Modern machines and innovative formulas for superior performance.',
//     accent: '#10B981',
//     bg: 'bg-emerald-50',
//     iconColor: 'text-emerald-600',
//     border: 'hover:border-emerald-200',
//     tag: 'R&D Driven',
//   },
//   {
//     icon: Palette,
//     title: 'Wide Range',
//     description: 'A complete range of industrial, decorative, and specialty paints.',
//     accent: '#F59E0B',
//     bg: 'bg-amber-50',
//     iconColor: 'text-amber-600',
//     border: 'hover:border-amber-200',
//     tag: '200+ Shades',
//   },
//   {
//     icon: Headset,
//     title: 'Expert Support',
//     description: 'Our team is always ready to guide you with the right solutions.',
//     accent: '#8B5CF6',
//     bg: 'bg-violet-50',
//     iconColor: 'text-violet-600',
//     border: 'hover:border-violet-200',
//     tag: '24/7 Help',
//   },
//   {
//     icon: Leaf,
//     title: 'Sustainable',
//     description: 'Eco-friendly practices and products that care for the environment.',
//     accent: '#059669',
//     bg: 'bg-green-50',
//     iconColor: 'text-green-700',
//     border: 'hover:border-green-200',
//     tag: 'Eco Friendly',
//   },
// ];

// export default function WhyChooseUs() {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

//   return (
//     <section ref={ref} className="bg-white py-24 lg:py-[100px]">
//       <div className="max-w-[1280px] mx-auto px-6 lg:px-20">

//         {/* Section Header */}
//         <div
//           className={`text-center mb-16 transition-all duration-[600ms] ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//           }`}
//         >
//           <span className="font-sans font-semibold text-[13px] uppercase tracking-[0.12em] text-[#D4A843]">
//             Why Choose Active Paints
//           </span>
//           <div className="w-10 h-0.5 bg-[#D4A843] mt-2 mb-6 mx-auto" />
//           <h2 className="font-display font-semibold text-3xl lg:text-[42px] text-[#1B2A4A] leading-[1.2]">
//             What Sets Us Apart
//           </h2>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={feature.title}
//                 className={`group relative bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-default hover:-translate-y-2 hover:shadow-xl ${feature.border} ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 }`}
//                 style={{
//                   transitionDelay: `${100 + index * 100}ms`,
//                   transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//                 }}
//               >
//                 {/* Coloured top bar */}
//                 <div
//                   className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ backgroundColor: feature.accent }}
//                 />

//                 {/* Tag */}
//                 <span
//                   className={`self-end text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${feature.bg} mb-4`}
//                   style={{ color: feature.accent }}
//                 >
//                   {feature.tag}
//                 </span>

//                 {/* Icon */}
//                 <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
//                   <Icon className={`w-6 h-6 ${feature.iconColor}`} />
//                 </div>

//                 <h3 className="font-semibold text-[15px] text-slate-800 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Shield, FlaskConical, Palette, Headset, Leaf } from "lucide-react";
import { useScrollAnimation } from '../../hooks/about/UseScrollAnimation';

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "Top-grade raw materials and strict quality control for long-lasting results.",
    tag: "100% Tested",
    bgIcon: "bg-blue-50",
    iconColor: "text-blue-600",
    borderAccent: "border-t-blue-600",
    btnClass: "bg-blue-600 text-white shadow-blue-500/25",
    stat: "10+ Years",
    statLabel: "of quality assurance",
  },
  {
    icon: FlaskConical,
    title: "Advanced Technology",
    description:
      "Modern machines and innovative formulas for superior performance.",
    tag: "R&D Driven",
    bgIcon: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderAccent: "border-t-emerald-500",
    btnClass: "bg-emerald-500 text-white shadow-emerald-500/25",
    stat: "50+ Labs",
    statLabel: "tested formulations",
  },
  {
    icon: Palette,
    title: "Wide Range",
    description:
      "A complete range of industrial, decorative, and specialty paints.",
    tag: "200+ Shades",
    bgIcon: "bg-amber-50",
    iconColor: "text-amber-600",
    borderAccent: "border-t-amber-500",
    btnClass: "bg-amber-500 text-slate-900 shadow-amber-500/25",
    stat: "200+",
    statLabel: "shades available",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description:
      "Our team is always ready to guide you with the right solutions.",
    tag: "24/7 Help",
    bgIcon: "bg-violet-50",
    iconColor: "text-violet-600",
    borderAccent: "border-t-violet-500",
    btnClass: "bg-violet-500 text-white shadow-violet-500/25",
    stat: "24/7",
    statLabel: "customer support",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description:
      "Eco-friendly practices and products that care for the environment.",
    tag: "Eco Friendly",
    bgIcon: "bg-green-50",
    iconColor: "text-green-700",
    borderAccent: "border-t-green-600",
    btnClass: "bg-green-600 text-white shadow-green-500/25",
    stat: "0%",
    statLabel: "harmful chemicals",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-[600ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            ✦ Why Choose Active Paints
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[42px] text-[#1B2A4A] leading-[1.2]">
            What Sets Us Apart
          </h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto text-[15px]">
            Everything we do is built around quality, trust, and your
            satisfaction.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative bg-white rounded-2xl border border-slate-100 border-t-4 ${feature.borderAccent} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${100 + index * 100}ms`,
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Tag pill */}
                <span
                  className={`self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${feature.bgIcon} ${feature.iconColor} mb-4`}
                >
                  {feature.tag}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 ${feature.bgIcon} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-slate-100 text-center">
                  <p className={`text-lg font-extrabold ${feature.iconColor}`}>
                    {feature.stat}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {feature.statLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
