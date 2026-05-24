"use client";

const colors = [
  { name: "Pure White", hex: "#F5F5F0" },
  { name: "Warm Beige", hex: "#E8DCC4" },
  { name: "Soft Cream", hex: "#F0E6D2" },
  { name: "Sage Green", hex: "#B8C4A8" },
  { name: "Dusty Blue", hex: "#9BB5C4" },
  { name: "Steel Gray", hex: "#8A9199" },
  { name: "Charcoal", hex: "#4A4F55" },
  { name: "Terracotta", hex: "#C4715A" },
  { name: "Burnt Orange", hex: "#B85C3E" },
  { name: "Warm Brown", hex: "#8B6F5E" },
  { name: "Deep Espresso", hex: "#5C4A3D" },
  { name: "Classic Black", hex: "#2D2D2D" },
];

export default function ColorPalette() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-6">
          — Colors That Inspire
        </p>
        <div className="flex flex-wrap gap-3">
          {colors.map((color, index) => (
            <div
              key={index}
              className="group relative"
              title={color.name}
            >
              <div
                className="w-14 h-14 rounded-lg shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200 border border-gray-200"
                style={{ backgroundColor: color.hex }}
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                {color.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}