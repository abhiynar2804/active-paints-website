"use client";

import HeroSection from "@/Components/product/HeroSection";
import FeaturesBar from "@/Components/product/FeatureBar";
import ProductCategories from "@/Components/product/ProduxtCategories";
import FeaturedProducts from "@/Components/product/FeaturedProducts";
import WhyChooseUs from "@/Components/product/WhyChooseUs";
import ColorPalette from "@/Components/product/ColorPalette";
import IndustriesGrid from "@/Components/product/IndustriesGrid";
import CatalogCTA from "@/Components/product/CatalogCTA";
import FinalCTA from "@/Components/product/FinalCTA";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesBar />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <ColorPalette />
      <IndustriesGrid />
      <CatalogCTA />
      <FinalCTA />
    </main>
  );
}