"use client";

import "./Home.css";
import HomeSub from "../Sub-Components/home/home"
import image1 from "../../../../public/20260226_183810.png"
import image2 from "../../../../public/20260226_183935.png"
import image3 from "../../../../public/20260226_184118.png"
import image4 from "../../../../public/20260226_184250.png"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [image1, image2, image3, image4];

export default function Home() {
    return (
        <div className="home-container">
            <div className="swiper-wrapper-full">
                <Swiper
                    className="main-swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-image">
                                <img src={img.src} alt={`Slide ${index + 1}`} />
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
