"use client";

import styles from "../../Styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ShieldCheck, Droplet, Leaf, Users, Star } from "lucide-react";

/* ── Data ── */

const SLIDES = [
  {
    src: "/slide1.jpeg",
    title: "Trusted Paint Solutions for Homes & Projects",
    description:
      "Premium interior and exterior paints designed for long-lasting beauty and professional performance.",
    buttonText: "Get Free Consultation",
  },
  {
    src: "/slide2.png",
    title: "Advanced Waterproof Protection",
    description:
      "Protect walls from dampness, leakage, and stains with high-performance waterproof coating technology.",
    buttonText: "Explore Products",
  },
  {
    src: "/slide3.png",
    title: "Industrial-Grade Durability",
    description:
      "Engineered coatings that resist weather, fading, and daily wear for years of reliable protection.",
    buttonText: "View Solutions",
  },
  {
    src: "/slide4.png",
    title: "Color That Lasts Longer",
    description:
      "Rich shades, smooth finish, and superior coverage that keep spaces looking fresh for years.",
    buttonText: "Request Quote",
  },
];

const CARDS = [
  {
    src: "/product1.jpeg",
    title: "Interior Paints",
    desc: "Smooth finish paints for living rooms, bedrooms, offices, and premium interiors.",
  },
  {
    src: "/product2.jpeg",
    title: "Exterior Paints",
    desc: "Weather-resistant coatings that protect buildings from rain, heat, and UV exposure.",
  },
  {
    src: "/product3.jpeg",
    title: "Specialty Paints",
    desc: "Waterproof, protective, and industrial coating solutions for demanding applications.",
  },
];

const FEATURES = [
  "Low VOC & eco-friendly formulation",
  "Excellent weather and UV resistance",
  "Long-lasting color retention",
  "High coverage with smooth finish",
  "Fast drying and easy maintenance",
  "Technical guidance and customer support",
];

const TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    role: "Homeowner, Pune",
    quote:
      "The finish quality is excellent and the color still looks fresh after two monsoons. Very satisfied with Active Paints.",
  },
  {
    name: "Meera Desai",
    role: "Interior Designer, Mumbai",
    quote:
      "Easy application, smooth coverage, and consistent shades across batches. We now recommend Active Paints for residential projects.",
  },
  {
    name: "Vikram Patil",
    role: "Building Contractor, Nashik",
    quote:
      "Reliable waterproof coating and good technical support during our site work. The product performed exactly as promised.",
  },
];

const TRUST_POINTS = [
  "Premium Quality Products",
  "Weather & Waterproof Protection",
  "Low VOC & Eco-Friendly",
  "Trusted by Contractors & Homeowners",
];

const handleButtonClick = (text: string) => {
  switch (text) {
    case "Get Free Consultation":
    case "Request Quote":
      window.location.href = "/contact";
      break;

    case "Explore Products":
    case "View Solutions":
      window.location.href = "/products";
      break;

    default:
      break;
  }
};

/* ── Component ── */

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* ════ HERO / SWIPER ════ */}
      <div className={`w-full h-screen relative ${styles.swiperWrapper}`}>
        <Swiper
          className={styles.mainSwiper}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full overflow-hidden relative">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

                <div className={styles.slideContent}>
                  <h1 className={styles.slideTitle}>{slide.title}</h1>

                  <p className={styles.slideDescription}>{slide.description}</p>

                  <button
                    onClick={() => handleButtonClick(slide.buttonText)}
                    className={styles.slideButton}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Company Intro ── */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase mb-3">
            About Active Paints
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Reliable Paint Solutions Built for Indian Conditions
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Active Paints delivers high-quality interior, exterior, waterproof,
            and specialty coating solutions for homes, commercial spaces, and
            industrial projects. We focus on durability, color consistency, and
            long-term protection so every project looks better and lasts longer.
          </p>
        </div>
      </section>

      {/* ── Statistics ── */}
      <section className="bg-[#0f172a] py-14 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">15+</h3>
            <p className="text-gray-300 mt-2">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">1000+</h3>
            <p className="text-gray-300 mt-2">Satisfied Customers</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">100+</h3>
            <p className="text-gray-300 mt-2">Dealer Network</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">25+</h3>
            <p className="text-gray-300 mt-2">Paint Products</p>
          </div>
        </div>
      </section>

      {/* ════ SUB CONTAINER ════ */}
      <div className="w-full relative z-10 bg-[#f5f7fa]">
        {/* ── Products section ── */}
        <section id="productsSection" className={styles.homeScroll}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Paint & Coating Solutions
          </h2>

          <div className={styles.cards}>
            {CARDS.map(({ src, title, desc }) => (
              <div key={title} className={styles.card}>
                <div className="relative w-full h-56">
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <button>
            <Link href="/products">View All Products</Link>
          </button>
        </section>

        {/* ── Feature section ── */}
        <section className={styles.featureSection}>
          <div className={styles.featureLeft}>
            <Image
              src="/paint-cans-circle.jpg"
              alt="Feature"
              className={styles.featureImage}
              width={500}
              height={500}
            />
          </div>

          <div className={styles.featureRight}>
            <h2>Why Builders, Contractors & Homeowners Choose Active Paints</h2>
            <p>
              We deliver premium quality paints designed for durability, vibrant
              colors, and environmental sustainability. Our products are trusted
              by professionals and homeowners worldwide.
            </p>
            <ul className={styles.featureList}>
              {FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className={styles.featureBtn}>
              <Link href="/about">Learn More</Link>
            </button>
          </div>
        </section>

        {/* ── Testimonials & Trust ── */}
        <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase mb-3">
                Customer Trust
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Builders, contractors, designers, and homeowners choose Active
                Paints for dependable performance and long-lasting results.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-7 mb-6 italic">
                    “{item.quote}”
                  </p>

                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
                <ShieldCheck className="w-10 h-10 text-blue-700 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{TRUST_POINTS[0]}</p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
                <Droplet className="w-10 h-10 text-blue-700 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{TRUST_POINTS[1]}</p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
                <Leaf className="w-10 h-10 text-blue-700 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{TRUST_POINTS[2]}</p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
                <Users className="w-10 h-10 text-blue-700 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{TRUST_POINTS[3]}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 text-sm text-gray-500">
            ISO certified • GST registered • Quality tested products
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-blue-700 py-16 px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Expert Paint Advice?
            </h2>

            <p className="text-blue-100 text-lg mb-8">
              Talk to our team for product recommendations, shade guidance,
              waterproofing solutions, and project quotations.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
