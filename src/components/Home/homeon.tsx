// "use client";

// import styles from "../../styles/home.module.css";

// import image1 from "../../../public/Picsart_26-05-15_13-31-19-148.jpg.jpeg";
// import image2 from "../../../public/file_000000007a387207896df7d97a35352c.png";
// import image3 from "../../../public/20260226_184118.png";
// import image4 from "../../../public/20260226_184250.png";
// import featureImage from "../../../public/20260226_183810.png";

// import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// /* ── Data ── */

// const SLIDES = [
//   {
//     src: image1,
//     title: "Colours That Feel Like Home",
//     description: "Eco-friendly hues that bring warmth and light to every space.",
//     buttonText: "Start Your Transformation",
//   },
//   {
//     src: image2,
//     title: "Block Water. Keep Walls Beautiful.",
//     description: "Advanced JSW iBlok tech protects against dampness and stains.",
//     buttonText: "Protect Now",
//   },
//   {
//     src: image3,
//     title: "Premium Quality Paint",
//     description: "Experience excellence in every brushstroke.",
//     buttonText: "Discover More",
//   },
//   {
//     src: image4,
//     title: "Transform Your Space",
//     description: "Create beautiful memories in your home.",
//     buttonText: "Get Started",
//   },
// ];

// const CARDS = [
//   { icon: "icon", title: "Interior Paints",  desc: "Paint for interior wall" },
//   { icon: "icon", title: "Exterior Paints",  desc: "Paint for exterior wall" },
//   { icon: "icon", title: "Specialty Paints", desc: "Paint for specialty applications" },
// ];

// const FEATURES = [
//   "100% eco-friendly & non-toxic",
//   "Weather-resistant finish",
//   "Long-lasting color retention",
//   "Expert customer support",
// ];

// /* ── Component ── */

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full bg-white">

//       {/* ════ HERO / SWIPER ════ */}
//       <div className={`w-full h-screen relative ${styles.swiperWrapper}`}>
//         <Swiper
//           className={styles.mainSwiper}
//           modules={[Navigation, Pagination, A11y, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//         >
//           {SLIDES.map((slide, i) => (
//             <SwiperSlide key={i}>
//               <div className="w-full h-full overflow-hidden relative">
//                 <img
//                   src={slide.src.src}
//                   alt={`Slide ${i + 1}`}
//                   className="w-full h-full object-cover block"
//                 />
//                 <div className={styles.slideContent}>
//                   <h1 className={styles.slideTitle}>{slide.title}</h1>
//                   <p className={styles.slideDescription}>{slide.description}</p>
//                   <button className={styles.slideButton}>{slide.buttonText}</button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ════ SUB CONTAINER ════ */}
//       <div className="w-full relative z-10 bg-[#f5f7fa]">

//         {/* ── Products section ── */}
//         <section className={styles.homeScroll}>
//           <h2>Our Paints &amp; Products</h2>

//           <div className={styles.cards}>
//             {CARDS.map(({ icon, title, desc }) => (
//               <div key={title} className={styles.card}>
//                 <img src={icon} alt="" />
//                 <h4>{title}</h4>
//                 <p>{desc}</p>
//               </div>
//             ))}
//           </div>

//           <button>View All Products</button>
//         </section>

//         {/* ── Feature section ── */}
//         <section className={styles.featureSection}>
//           <div className={styles.featureLeft}>
//             <img
//               src={featureImage.src}
//               alt="Feature"
//               className={styles.featureImage}
//             />
//           </div>

//           <div className={styles.featureRight}>
//             <h2>Why Choose Our Paints?</h2>
//             <p>
//               We deliver premium quality paints designed for durability, vibrant
//               colors, and environmental sustainability. Our products are trusted by
//               professionals and homeowners worldwide.
//             </p>
//             <ul className={styles.featureList}>
//               {FEATURES.map((f) => (
//                 <li key={f}>{f}</li>
//               ))}
//             </ul>
//             <button className={styles.featureBtn}>Learn More</button>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }

"use client";

import styles from "../../styles/home.module.css";
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
    src: "/Picsart_26-05-15_13-31-19-148.jpg.jpeg",
    title: "Colours That Feel Like Home",
    description: "Eco-friendly hues that bring warmth and light to every space.",
    buttonText: "Start Your Transformation",
  },
  {
    src: "/file_000000007a387207896df7d97a35352c.png",
    title: "Block Water. Keep Walls Beautiful.",
    description: "Advanced JSW iBlok tech protects against dampness and stains.",
    buttonText: "Protect Now",
  },
  {
    src: "/20260226_184118.png",
    title: "Premium Quality Paint",
    description: "Experience excellence in every brushstroke.",
    buttonText: "Discover More",
  },
  {
    src: "/20260226_184250.png",
    title: "Transform Your Space",
    description: "Create beautiful memories in your home.",
    buttonText: "Get Started",
  },
];

const CARDS = [
  { src: "/1.jpg.jpeg",  title: "Interior Paints",  desc: "Paint for interior wall" },
  { src: "/2.jpg.jpeg",  title: "Exterior Paints",  desc: "Paint for exterior wall" },
  { src: "/3.jpg.jpeg",  title: "Specialty Paints", desc: "Paint for specialty applications" },
];

const FEATURES = [
  "100% eco-friendly & non-toxic",
  "Weather-resistant finish",
  "Long-lasting color retention",
  "Expert customer support",
];

/* ── Component ── */

export default function HomeOn() {
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
                  <button className={styles.slideButton}>{slide.buttonText}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ════ SUB CONTAINER ════ */}
      <div className="w-full relative z-10 bg-[#f5f7fa]">

        {/* ── Products section ── */}
        <section className={styles.homeScroll}>
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