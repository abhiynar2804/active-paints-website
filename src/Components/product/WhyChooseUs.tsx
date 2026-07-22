// "use client";

// import { Shield, FlaskConical, BadgeCheck, Headphones } from "lucide-react";

// const reasons = [
//   {
//     icon: Shield,
//     title: "Premium Quality",
//     description:
//       "We use high-grade raw materials and advanced technology for the best results. Every batch is tested to meet international standards.",
//   },
//   {
//     icon: FlaskConical,
//     title: "Advanced Technology",
//     description:
//       "Modern manufacturing with strict quality control at every step. Our R&D team continuously innovates for superior performance.",
//   },
//   {
//     icon: BadgeCheck,
//     title: "Trusted Performance",
//     description:
//       "Tested to perform in extreme conditions and deliver long-lasting protection. Proven results across thousands of projects.",
//   },
//   {
//     icon: Headphones,
//     title: "Expert Support",
//     description:
//       "Our technical experts help you choose the right solution for your needs. From selection to application, we guide you through.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-white py-16 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Left Heading */}
//           <div className="lg:col-span-1">
//             <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-2">
//               — Why Choose Active Paints
//             </p>
//             <h2 className="text-3xl font-bold text-gray-900 leading-tight">
//               Performance You Can Rely On
//             </h2>
//           </div>

//           {/* Right Cards */}
//           <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {reasons.map((reason, index) => (
//               <div key={index} className="space-y-4">
//                 <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
//                   <reason.icon className="w-6 h-6 text-gray-700" />
//                 </div>
//                 <h3 className="font-semibold text-gray-900">{reason.title}</h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Shield, FlaskConical, BadgeCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "We use high-grade raw materials and advanced technology for the best results. Every batch is tested to meet international standards.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
    topBar: "bg-blue-500",
    tag: "ISO Certified",
    tagColor: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: FlaskConical,
    title: "Advanced Technology",
    description:
      "Modern manufacturing with strict quality control at every step. Our R&D team continuously innovates for superior performance.",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "border-emerald-100",
    topBar: "bg-emerald-500",
    tag: "R&D Driven",
    tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Performance",
    description:
      "Tested to perform in extreme conditions and deliver long-lasting protection. Proven results across thousands of projects.",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
    topBar: "bg-amber-500",
    tag: "1000+ Projects",
    tagColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Our technical experts help you choose the right solution for your needs. From selection to application, we guide you through.",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "border-violet-100",
    topBar: "bg-violet-500",
    tag: "24/7 Help",
    tagColor: "text-violet-600 bg-violet-50 border-violet-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left Heading */}
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-2">
              — Why Choose Active Paints
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Performance You Can Rely On
            </h2>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-100 border-t-4 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-4"
                style={{ borderTopColor: undefined }}
              >
                {/* Coloured top border via pseudo element workaround */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${reason.topBar}`} />

                {/* Tag */}
                {/* <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${reason.tagColor}`}>
                  {reason.tag}
                </span> */}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${reason.bg} border ${reason.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-6 h-6 ${reason.iconColor}`} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}