// 'use client';

// import { Users, Package, MapPin, Calendar } from 'lucide-react';
// import { useScrollAnimation, useCountUp } from '../../hooks/about/useScrollAnimation';

// const stats = [
//   { icon: Users, value: 500, suffix: '+', label: 'Happy Customers' },
//   { icon: Package, value: 50, suffix: '+', label: 'Products' },
//   { icon: MapPin, value: 10, suffix: '+', label: 'Cities Served' },
//   { icon: Calendar, value: 5, suffix: '+', label: 'Years of Experience' },
// ];

// function StatItem({
//   icon: Icon,
//   value,
//   suffix,
//   label,
//   isVisible,
//   delay,
// }: {
//   icon: React.ElementType;
//   value: number;
//   suffix: string;
//   label: string;
//   isVisible: boolean;
//   delay: number;
// }) {
//   const count = useCountUp(value, isVisible);

//   return (
//     <div
//       className={`flex flex-col items-center text-center transition-all duration-[600ms] ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <div className="w-16 h-16 rounded-full bg-[#D4A843]/[0.12] flex items-center justify-center mb-4">
//         <Icon className="w-8 h-8 text-[#D4A843]" />
//       </div>
//       <span className="font-display font-bold text-4xl lg:text-5xl text-white mb-2">
//         {count}
//         {suffix}
//       </span>
//       <span className="font-sans font-medium text-sm text-[#CBD5E1]">
//         {label}
//       </span>
//     </div>
//   );
// }

// export default function StatsBanner() {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

//   return (
//     <section ref={ref} className="bg-[#1B2A4A] py-20 lg:py-[80px]">
//       <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
//           {stats.map((stat, index) => (
//             <div key={stat.label} className="relative flex justify-center">
//               <StatItem
//                 icon={stat.icon}
//                 value={stat.value}
//                 suffix={stat.suffix}
//                 label={stat.label}
//                 isVisible={isVisible}
//                 delay={index * 150}
//               />
//               {/* Vertical divider - hidden on mobile and last item */}
//               {index < stats.length - 1 && (
//                 <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Users, Factory, MapPin, Calendar } from "lucide-react";

const stats = [
  { icon: Users, val: "500+", label: "Happy Customers" },
  { icon: Factory, val: "50+", label: "Products" },
  { icon: MapPin, val: "10+", label: "Cities Served" },
  { icon: Calendar, val: "5+", label: "Years of Experience" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function StatsBanner() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center justify-center px-4"
            >
              <stat.icon className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">{stat.val}</h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}