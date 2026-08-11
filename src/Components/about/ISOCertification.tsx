// 'use client';

// import { Award, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
// import { useScrollAnimation } from '../../hooks/about/useScrollAnimation';

// const highlights = [
//   { icon: ShieldCheck, text: 'Quality Management Systems' },
//   { icon: CheckCircle2, text: 'Consistent Product Quality' },
//   { icon: FileCheck, text: 'Continuous Improvement' },
// ];

// export default function ISOCertification() {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

//   return (
//     <section ref={ref} className="bg-[#F8FAFC] py-20 lg:py-24">
//       <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
//         <div
//           className={`relative bg-white border border-[#F1F5F9] rounded-2xl p-10 lg:p-14 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//         >
//           {/* Decorative background elements */}
//           <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4A843]/[0.03] -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
//           <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#1B2A4A]/[0.02] translate-y-1/3 -translate-x-1/4" aria-hidden="true" />

//           <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
//             {/* Left — Badge */}
//             <div
//               className={`flex-shrink-0 transition-all duration-[600ms] ${
//                 isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//               }`}
//               style={{ transitionDelay: '150ms' }}
//             >
//               <div className="relative w-44 h-44 lg:w-52 lg:h-52 rounded-full border-[3px] border-[#D4A843]/40 flex flex-col items-center justify-center bg-gradient-to-br from-[#D4A843]/[0.06] to-transparent">
//                 <div className="absolute inset-3 rounded-full border border-[#D4A843]/20" />
//                 <Award className="w-10 h-10 text-[#D4A843] mb-2" />
//                 <span className="font-display font-bold text-2xl lg:text-3xl text-[#1B2A4A]">ISO</span>
//                 <span className="font-display font-bold text-lg lg:text-xl text-[#D4A843]">9001:2015</span>
//                 <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#475569] mt-1">Certified</span>
//               </div>
//             </div>

//             {/* Right — Content */}
//             <div className="flex-1 text-center lg:text-left">
//               <span
//                 className={`inline-block font-sans font-semibold text-[13px] uppercase tracking-[0.12em] text-[#D4A843] mb-3 transition-all duration-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                 }`}
//                 style={{ transitionDelay: '250ms' }}
//               >
//                 Committed to Excellence
//               </span>

//               <h2
//                 className={`font-display font-semibold text-2xl lg:text-4xl text-[#1B2A4A] leading-tight mb-4 transition-all duration-[600ms] ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//                 }`}
//                 style={{ transitionDelay: '350ms' }}
//               >
//                 ISO 9001:2015 Certified Quality Standards
//               </h2>

//               <p
//                 className={`font-sans text-base text-[#64748B] leading-relaxed max-w-[540px] mb-8 transition-all duration-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                 }`}
//                 style={{ transitionDelay: '450ms' }}
//               >
//                 Our ISO 9001:2015 certification reflects our unwavering
//                 commitment to quality management systems. Every batch of paint
//                 undergoes rigorous testing and quality checks to meet
//                 international standards — giving you products you can trust.
//               </p>

//               {/* Highlights */}
//               <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
//                 {highlights.map((item, index) => {
//                   const Icon = item.icon;
//                   return (
//                     <div
//                       key={item.text}
//                       className={`flex items-center gap-3 transition-all duration-500 ${
//                         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                       }`}
//                       style={{ transitionDelay: `${550 + index * 100}ms` }}
//                     >
//                       <div className="w-10 h-10 rounded-full bg-[#D4A843]/10 flex items-center justify-center flex-shrink-0">
//                         <Icon className="w-5 h-5 text-[#D4A843]" />
//                       </div>
//                       <span className="font-sans font-medium text-sm text-[#475569] whitespace-nowrap">
//                         {item.text}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Award, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import { useScrollAnimation } from '../../hooks/about/UseScrollAnimation';

const highlights = [
  {
    icon: ShieldCheck,
    text: "Quality Management Systems",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: CheckCircle2,
    text: "Consistent Product Quality",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: FileCheck,
    text: "Continuous Improvement",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function ISOCertification() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div
          className={`relative bg-white border border-slate-100 rounded-2xl p-10 lg:p-14 shadow-sm transition-all duration-700 overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-blue-500" />

          <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left — Badge */}
            <div
              className={`flex-shrink-0 transition-all duration-[600ms] ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="relative w-44 h-44 lg:w-52 lg:h-52 rounded-full bg-amber-50 border-2 border-amber-200 flex flex-col items-center justify-center">
                <div className="absolute inset-3 rounded-full border border-dashed border-amber-300" />
                <Award className="w-10 h-10 text-amber-500 mb-1" />
                <span className="font-bold text-2xl lg:text-3xl text-slate-800 leading-none">
                  ISO
                </span>
                <span className="font-bold text-lg text-amber-500 leading-tight">
                  9001:2015
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-1">
                  Certified
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex-1 text-center lg:text-left">
              <span
                className={`inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600 mb-3 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                Committed to Excellence
              </span>

              <h2
                className={`font-bold text-2xl lg:text-4xl text-slate-900 leading-tight mb-4 transition-all duration-[600ms] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                ISO 9001:2015 Certified{" "}
                <span className="text-blue-600">Quality Standards</span>
              </h2>

              <p
                className={`text-[15px] text-slate-500 leading-relaxed max-w-[540px] mb-8 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                Our ISO 9001:2015 certification reflects our unwavering
                commitment to quality management systems. Every batch of paint
                undergoes rigorous testing and quality checks to meet
                international standards — giving you products you can trust.
              </p>

              {/* Highlights */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${550 + index * 100}ms` }}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <span className="text-[13px] font-medium text-slate-600 whitespace-nowrap">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
