"use client";

import { Home, TreePine, Droplets, Paintbrush, Factory, ArrowRight } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    icon: Home,
    title: "Interior Paints",
    description: "Elegant finishes that transform your interiors.",
    image: "/images/category-interior.jpg",
    href: "/products/interior",
  },
  {
    icon: TreePine,
    title: "Exterior Paints",
    description: "Weather protection that lasts long and looks beautiful.",
    image: "/images/category-exterior.jpg",
    href: "/products/exterior",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "Complete range of waterproof solutions for all surfaces.",
    image: "/images/category-waterproofing.jpg",
    href: "/products/waterproofing",
  },
  {
    icon: Paintbrush,
    title: "Primers",
    description: "The perfect base for superior adhesion & durability.",
    image: "/images/category-primers.jpg",
    href: "/products/primers",
  },
  {
    icon: Factory,
    title: "Industrial Coatings",
    description: "High-performance coatings for industrial environments.",
    image: "/images/category-industrial.jpg",
    href: "/products/industrial",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase mb-2">
              — Product Categories
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          </div>
          <a
            href="/products/categories"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-gray-800" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 group-hover:text-yellow-600 transition-colors">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}