"use client";

import "./Home.css";
import HomeSub from "../Sub-Components/home/home"
import image1 from "../../../../public/Picsart_26-05-15_13-31-19-148.jpg.jpeg"
import image2 from "../../../../public/file_000000007a387207896df7d97a35352c.png"
import image3 from "../../../../public/20260226_184118.png"
import image4 from "../../../../public/20260226_184250.png"

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
    {
        src: image1,
        title: "Colours That Feel Like Home",
        description: "Eco-friendly hues that bring warmth and light to every space.",
        buttonText: "Start Your Transformation"
    },
    {
        src: image2,
        title: "Block Water. Keep Walls Beautiful.",
        description: "Advanced JSW iBlok tech protects against dampness and stains.",
        buttonText: "Protect Now"
    },
    {
        src: image3,
        title: "Premium Quality Paint",
        description: "Experience excellence in every brushstroke.",
        buttonText: "Discover More"
    },
    {
        src: image4,
        title: "Transform Your Space",
        description: "Create beautiful memories in your home.",
        buttonText: "Get Started"
    }
];

export default function Home() {
    return (
        <div className="home-container">
            <div className="swiper-wrapper-full">
                <Swiper
                    className="main-swiper"
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {images.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-image">
                                <img src={slide.src.src} alt={`Slide ${index + 1}`} />
                                <div className="slide-content">
                                    <h1 className="slide-title">{slide.title}</h1>
                                    <p className="slide-description">{slide.description}</p>
                                    <button className="slide-button">{slide.buttonText}</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="home-subContainer">
                 <HomeSub />
            </div>
        </div>
    );
}
