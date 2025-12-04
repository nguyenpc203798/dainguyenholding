"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import React from "react";
import Image from "next/image";

const SliderData = [
  {
    id: 1,
    image: "/images/slider/slider1.jpg",
    alt: "Đại nguyên holding slider 1",
    titletop: "Tiên phong đầu tư",
    titlebottom: "Nâng tầm giá trị đất Việt",
  },
  {
    id: 2,
    image: "/images/slider/slider2.jpg",
    alt: "Đại nguyên holding slider 2",
    titletop: "Kiến tạo dự án chất lượng",
    titlebottom: "Phát triển bền vững",
  },
  {
    id: 3,
    image: "/images/slider/slider3.jpg",
    alt: "Đại nguyên holding slider 3",
    titletop: "Giữ tiến độ",
    titlebottom: "Vượt kỳ vọng trong từng công trình",
  },
  {
    id: 4,
    image: "/images/slider/slider4.jpg",
    alt: "Đại nguyên holding slider 4",
    titletop: "Đầu tư thông minh",
    titlebottom: "lợi nhuận bền vững cho tương lai",
  },
];

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="slider-area">
      <Swiper
        modules={[EffectFade, Autoplay, Thumbs]}
        effect="fade"
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        thumbs={{ swiper: thumbsSwiper }}
        speed={600}
        className="top-slide-main"
      >
        {SliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="top-slide-main-item container">
              <div className="header-text">
                <span className="category">
                  Đại Nguyên <em>Holding</em>
                </span>
                <h2>{item.titletop}</h2>
                <h2>{item.titlebottom}</h2>
              </div>
            </div>
            <Image src={item.image} alt={item.alt} fill sizes="1920px" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={SliderData.length}
        watchSlidesProgress
        className="thumbs-swiper"
      >
        {SliderData.map((item, index) => (
          <SwiperSlide key={item.id} style={{ width: "auto" }}>
            <Image src={item.image} alt={item.alt} fill sizes="200px" />
            <p className="thumb-content">Slide {index + 1}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
