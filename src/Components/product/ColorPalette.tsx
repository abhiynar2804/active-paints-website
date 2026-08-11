// "use client";

// const colors = [
//   { name: "Pure White", hex: "#F5F5F0" },
//   { name: "Warm Beige", hex: "#E8DCC4" },
//   { name: "Soft Cream", hex: "#F0E6D2" },
//   { name: "Sage Green", hex: "#B8C4A8" },
//   { name: "Dusty Blue", hex: "#9BB5C4" },
//   { name: "Steel Gray", hex: "#8A9199" },
//   { name: "Charcoal", hex: "#4A4F55" },
//   { name: "Terracotta", hex: "#C4715A" },
//   { name: "Burnt Orange", hex: "#B85C3E" },
//   { name: "Warm Brown", hex: "#8B6F5E" },
//   { name: "Deep Espresso", hex: "#5C4A3D" },
//   { name: "Classic Black", hex: "#2D2D2D" },
// ];

// export default function ColorPalette() {
//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-6">
//           — Colors That Inspire
//         </p>
//         <div className="flex flex-wrap gap-3">
//           {colors.map((color, index) => (
//             <div
//               key={index}
//               className="group relative"
//               title={color.name}
//             >
//               <div
//                 className="w-14 h-14 rounded-lg shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200 border border-gray-200"
//                 style={{ backgroundColor: color.hex }}
//               />
//               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
//                 {color.name}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// const colors = [
//   { name: "Pure White", hex: "#F5F5F0" },
//   { name: "Warm Beige", hex: "#E8DCC4" },
//   { name: "Soft Cream", hex: "#F0E6D2" },
//   { name: "Sage Green", hex: "#B8C4A8" },
//   { name: "Mint Fresh", hex: "#A8D5BA" },
//   { name: "Dusty Blue", hex: "#9BB5C4" },
//   { name: "Sky Blue", hex: "#7EB8D4" },
//   { name: "Lavender", hex: "#B8A9D4" },
//   { name: "Blush Pink", hex: "#E8B4B8" },
//   { name: "Coral", hex: "#E88C7A" },
//   { name: "Terracotta", hex: "#C4715A" },
//   { name: "Burnt Orange", hex: "#B85C3E" },
//   { name: "Sunflower", hex: "#E8C84A" },
//   { name: "Mustard", hex: "#C4A030" },
//   { name: "Warm Brown", hex: "#8B6F5E" },
//   { name: "Steel Gray", hex: "#8A9199" },
//   { name: "Charcoal", hex: "#4A4F55" },
//   { name: "Deep Espresso", hex: "#5C4A3D" },
//   { name: "Forest Green", hex: "#4A7C59" },
//   { name: "Classic Black", hex: "#2D2D2D" },
// ];

// export default function ColorPalette() {
//   return (
//     <section className="bg-white py-12 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-1">
//               — Colors That Inspire
//             </p>
//             <h3 className="text-xl font-bold text-slate-800">Our Colour Palette</h3>
//           </div>
//           <span className="text-xs text-slate-400 font-medium hidden sm:block">
//             Scroll to explore →
//           </span>
//         </div>

//         {/* Scrollable row */}
//         <div className="overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e2e8f0 transparent' }}>
//           <div className="flex gap-3 w-max">
//             {colors.map((color, index) => (
//               <div key={index} className="group flex flex-col items-center gap-2 flex-shrink-0">

//                 {/* Swatch */}
//                 <div
//                   className="w-16 h-16 rounded-2xl shadow-md cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200 border border-black/[0.06]"
//                   style={{ backgroundColor: color.hex }}
//                 />

//                 {/* Hex chip */}
//                 <div className="text-center">
//                   <p className="text-[11px] font-semibold text-slate-700 whitespace-nowrap">{color.name}</p>
//                   {/* <p className="text-[10px] text-slate-400 font-mono">{color.hex}</p> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

const colorGroups = [
  {
    label: "Whites",
    colors: [
      { name: "Pure White", hex: "#F5F5F0" },
      { name: "Snow", hex: "#FFFAFA" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Soft Cream", hex: "#F0E6D2" },
      { name: "Warm Beige", hex: "#E8DCC4" },
      { name: "Linen", hex: "#FAF0E6" },
      { name: "Pearl", hex: "#EAE0C8" },
      { name: "Antique White", hex: "#FAEBD7" },
    ],
  },
  {
    label: "Greens",
    colors: [
      { name: "Mint", hex: "#A8D5BA" },
      { name: "Sage", hex: "#B8C4A8" },
      { name: "Pistachio", hex: "#93C572" },
      { name: "Fern", hex: "#71A65F" },
      { name: "Moss", hex: "#8A9A5B" },
      { name: "Forest", hex: "#4A7C59" },
      { name: "Emerald", hex: "#2E8B57" },
      { name: "Hunter", hex: "#355E3B" },
    ],
  },
  {
    label: "Blues",
    colors: [
      { name: "Powder", hex: "#B0D0E8" },
      { name: "Sky", hex: "#7EB8D4" },
      { name: "Dusty", hex: "#9BB5C4" },
      { name: "Cornflower", hex: "#6495ED" },
      { name: "Denim", hex: "#1560BD" },
      { name: "Cobalt", hex: "#0047AB" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Midnight", hex: "#191970" },
    ],
  },
  {
    label: "Pinks",
    colors: [
      { name: "Blush", hex: "#F4C2C2" },
      { name: "Rose", hex: "#E8879A" },
      { name: "Lavender", hex: "#B8A9D4" },
      { name: "Lilac", hex: "#C8A2C8" },
      { name: "Mauve", hex: "#9E6B8A" },
      { name: "Plum", hex: "#673147" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Wine", hex: "#722F37" },
    ],
  },
  {
    label: "Reds",
    colors: [
      { name: "Peach", hex: "#FFCBA4" },
      { name: "Coral", hex: "#E88C7A" },
      { name: "Salmon", hex: "#FA8072" },
      { name: "Terracotta", hex: "#C4715A" },
      { name: "Burnt Orange", hex: "#B85C3E" },
      { name: "Rust", hex: "#B7410E" },
      { name: "Crimson", hex: "#DC143C" },
      { name: "Fire Red", hex: "#CE2029" },
    ],
  },
  {
    label: "Yellows",
    colors: [
      { name: "Butter", hex: "#FFFAA0" },
      { name: "Sunflower", hex: "#E8C84A" },
      { name: "Mustard", hex: "#C4A030" },
      { name: "Gold", hex: "#D4A843" },
      { name: "Caramel", hex: "#C68642" },
      { name: "Warm Brown", hex: "#8B6F5E" },
      { name: "Espresso", hex: "#5C4A3D" },
      { name: "Chocolate", hex: "#3D1C02" },
    ],
  },
  {
    label: "Grays",
    colors: [
      { name: "Cloud", hex: "#E8ECF0" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Steel", hex: "#8A9199" },
      { name: "Slate", hex: "#708090" },
      { name: "Charcoal", hex: "#4A4F55" },
      { name: "Graphite", hex: "#3D3D3D" },
      { name: "Jet", hex: "#343434" },
      { name: "Black", hex: "#2D2D2D" },
    ],
  },
];

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

export default function ColorPalette() {
  const [hovered, setHovered] = useState<{ name: string; hex: string } | null>(
    null,
  );
  const [tapped, setTapped] = useState<{ name: string; hex: string } | null>(
    null,
  );
  const [activeGroup, setActiveGroup] = useState("All");

  const allGroups = ["All", ...colorGroups.map((g) => g.label)];
  const filtered =
    activeGroup === "All"
      ? colorGroups
      : colorGroups.filter((g) => g.label === activeGroup);

  const preview = hovered || tapped;

  return (
    <section
      id="colour-palette"
      className="bg-white py-12 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-yellow-500 uppercase mb-1">
              Colors That Inspire
            </p>
            <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
              Our Colour Palette
              <span className="ml-2 text-sm font-semibold text-slate-400">
                {colorGroups.reduce((a, g) => a + g.colors.length, 0)} shades
              </span>
            </h3>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {allGroups.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGroup(g)}
                className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  activeGroup === g
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Colour grid + preview panel */}
        <div className="flex gap-96 items-stretch">
          {/* Rows */}
          <div className="space-y-5 min-w-0">
            {filtered.map((group) => (
              <div key={group.label} className="flex items-center gap-4">
                {/* Group label */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 w-12 flex-shrink-0 text-right">
                  {group.label}
                </span>

                {/* Swatches — horizontal scroll */}
                <div
                  className="overflow-x-auto flex-1"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="flex gap-2 w-max">
                    {group.colors.map((color, i) => (
                      <div
                        key={i}
                        className="group relative flex-shrink-0 cursor-pointer"
                        onMouseEnter={() => setHovered(color)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() =>
                          setTapped(tapped?.hex === color.hex ? null : color)
                        }
                      >
                        {/* Swatch */}
                        <div
                          className="w-10 h-10 rounded-xl border border-black/[0.07] shadow-sm hover:scale-125 hover:rounded-lg hover:shadow-md transition-all duration-200 hover:z-10 relative"
                          style={{
                            backgroundColor: color.hex,
                            outline:
                              tapped?.hex === color.hex
                                ? "2px solid #1e293b"
                                : "none",
                            outlineOffset: "2px",
                          }}
                        />

                        {/* Tooltip — desktop only */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 bg-slate-900 text-white text-[10px] font-semibold px-2 py-1 rounded-lg whitespace-nowrap shadow-lg hidden lg:block">
                          {color.name}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview panel — desktop right side */}
          <div
            className="hidden lg:flex w-60 flex-shrink-0 rounded-2xl border border-black/[0.06] shadow-sm flex-col items-center justify-center gap-2 transition-all duration-300 overflow-hidden"
            style={{ backgroundColor: preview ? preview.hex : "#F8FAFC" }}
          >
            {preview ? (
              <>
                <div
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: preview.hex }}
                />
                <span
                  className={`text-[13px] font-bold text-center px-2 leading-tight ${isLight(preview.hex) ? "text-slate-700" : "text-white"}`}
                >
                  {preview.name}
                </span>
                <span
                  className={`text-[11px] font-mono ${isLight(preview.hex) ? "text-slate-400" : "text-white/70"}`}
                >
                  {preview.hex}
                </span>
              </>
            ) : (
              <span className="text-[11px] text-slate-400 font-medium text-center px-3 leading-relaxed">
                Hover a swatch to preview
              </span>
            )}
          </div>
        </div>

        {/* Mobile tap preview strip */}
        <div
          className="lg:hidden mt-5 h-14 rounded-2xl border border-black/[0.06] shadow-sm flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden"
          style={{ backgroundColor: tapped ? tapped.hex : "#F8FAFC" }}
        >
          {tapped ? (
            <>
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow flex-shrink-0"
                style={{ backgroundColor: tapped.hex }}
              />
              <span
                className={`text-sm font-bold ${isLight(tapped.hex) ? "text-slate-700" : "text-white"}`}
              >
                {tapped.name}
              </span>
              <span
                className={`text-xs font-mono ${isLight(tapped.hex) ? "text-slate-400" : "text-white/60"}`}
              >
                {tapped.hex}
              </span>
            </>
          ) : (
            <span className="text-xs text-slate-400 font-medium">
              Tap a swatch to see its name
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
