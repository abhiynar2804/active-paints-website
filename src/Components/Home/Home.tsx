"use client";

import styles from "../../Styles/Home.module.css";
import Link from "next/link";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/* ── Data ── */

const SLIDES = [
  {
    src: "/slide1.jpeg",
    title: "Colours That Feel Like Home",
    description: "Eco-friendly hues that bring warmth and light to every space.",
    buttonText: "Start Your Transformation",
  },
  {
    src: "/slide2.png",
    title: "Block Water. Keep Walls Beautiful.",
    description: "Advanced JSW iBlok tech protects against dampness and stains.",
    buttonText: "Protect Now",
  },
  {
    src: "/slide3.png",
    title: "Premium Quality Paint",
    description: "Experience excellence in every brushstroke.",
    buttonText: "Discover More",
  },
  {
    src: "/slide4.png",
    title: "Transform Your Space",
    description: "Create beautiful memories in your home.",
    buttonText: "Get Started",
  },
];

const CARDS = [
  { src: "/product1.jpeg",  title: "Interior Paints",  desc: "Paint for interior wall" },
  { src: "/product2.jpeg",  title: "Exterior Paints",  desc: "Paint for exterior wall" },
  { src: "/product3.jpeg",  title: "Specialty Paints", desc: "Paint for specialty applications" },
];

const FEATURES = [
  "100% eco-friendly & non-toxic",
  "Weather-resistant finish",
  "Long-lasting color retention",
  "Expert customer support",
];

const handleButtonClick = (text: string) => {
  switch (text) {
    case "Get Started":
      document.getElementById("productsSection")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;
    case "Start Your Transformation":
      window.location.href = "/contact";
      break;
    case "Protect Now":
      window.location.href = "/products";
      break;
    case "Discover More":
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
                <img
                  src={slide.src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover block"
                />
                <div className={styles.slideContent}>
                  <h1 className={styles.slideTitle}>{slide.title}</h1>
                  <p className={styles.slideDescription}>{slide.description}</p>
                  <button onClick={() => handleButtonClick(slide.buttonText)}
 className={styles.slideButton}>{slide.buttonText}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ════ SUB CONTAINER ════ */}
      <div className="w-full relative z-10 bg-[#f5f7fa]">

        {/* ── Products section ── */}
        <section id="productsSection" className={styles.homeScroll}>
          <h2>Our Paints &amp; Products</h2>

          <div className={styles.cards}>
            {CARDS.map(({ src, title, desc }) => (
              <div key={title} className={styles.card}>
                <img src={src} alt={title} />
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
            <img
              src="/paint-cans-circle.jpg"
              alt="Feature"
              className={styles.featureImage}
            />
          </div>

          <div className={styles.featureRight}>
            <h2>Why Choose Our Paints?</h2>
            <p>
              We deliver premium quality paints designed for durability, vibrant
              colors, and environmental sustainability. Our products are trusted by
              professionals and homeowners worldwide.
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

      </div>
    </div>
  );
}