"use client";

import HeroSection from "../../components/product/HeroSection";
import FeaturesBar from "../../components/product/FeatureBar";
import ProductCategories from "../../components/product/ProduxtCategories";
import FeaturedProducts from "../../components/product/FeaturedProducts";
import WhyChooseUs from "../../components/product/WhyChooseUs";
import ColorPalette from "../../components/product/ColorPalette";
import IndustriesGrid from "../../components/product/IndustriesGrid";
import CatalogCTA from "../../components/product/CatalogCTA";
import FinalCTA from "../../components/product/FinalCTA";

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