import type { Metadata } from "next";
import Home from "../Components/Home/Home";

export const metadata: Metadata = {
  title: "Active Paints | Premium Interior, Exterior & Waterproof Paints",
  description:
    "Active Paints offers premium interior paints, exterior paints, waterproof coatings, and industrial paint solutions for homes, commercial buildings, and projects across India.",
};

export default function HomeSection() {
  return (
    <main>
      <Home />
    </main>
  );
}