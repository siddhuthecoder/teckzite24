import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './swipper.css'


import { Autoplay } from 'swiper/modules';

const SwipperModule = () => {
  return (
    <>
      <Swiper style={{ width: "1000px", paddingTop: "100px", paddingBottom: "100px" }}
        spaceBetween={100}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide  >
          <div style={{ border: "1px solid purple" }} className="w-[97%] mx-auto  max-w-[200px] h-[200px] backdrop-blur-lg"></div>
        </SwiperSlide>
        <SwiperSlide >
          <div style={{ border: "1px solid purple" }} className="w-[97%] mx-auto max-w-[200px] h-[200px] backdrop-blur-lg"></div>
        </SwiperSlide>
        <SwiperSlide >
          <div style={{ border: "1px solid purple" }} className="w-[97%] mx-auto max-w-[200px] h-[200px] backdrop-blur-lg"></div>
        </SwiperSlide>
        <SwiperSlide >
          <div style={{ border: "1px solid purple" }} className="w-[97%] mx-auto max-w-[200px] h-[200px] backdrop-blur-lg"></div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
export default SwipperModule
