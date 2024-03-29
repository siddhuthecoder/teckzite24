import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SpeakersCard from '../Shared/SPcard';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swiper3 = ({slidesPerView}) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  w-[95%] max-w-[1000px] mx-auto"
        initialSlide={2}

      >
         <SwiperSlide>
              {({isActive}) => (
                <>
                  <div className={`${isActive?"scale-[1]":"scale-[0.7]"} duration-150`}>
                      <SpeakersCard  />
                  </div>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({isActive}) => (
                <>
                  <div className={`${isActive?"scale-[1]":"scale-[0.7]"} duration-150`}>
                      <SpeakersCard  />
                  </div>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({isActive}) => (
                <>
                  <div className={`${isActive?"scale-[1]":"scale-[0.7]"} duration-150`}>
                      <SpeakersCard  />
                  </div>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({isActive}) => (
                <>
                  <div className={`${isActive?"scale-[1]":"scale-[0.7]"} duration-150`}>
                      <SpeakersCard  />
                  </div>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({isActive}) => (
                <>
                  <div className={`${isActive?"scale-[1]":"scale-[0.7]"} duration-150`}>
                      <SpeakersCard  />
                  </div>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({isActive}) => (
                <>
                  <div className={`${isActive?"scale-[1]":"scale-[0.7]"} duration-150`}>
                      <SpeakersCard  />
                  </div>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({isActive}) => (
                <>
                  <div className={`${isActive?"scale-[1]":"scale-[0.7]"} duration-150`}>
                      <SpeakersCard  />
                  </div>
                </>
              )}
            </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Swiper3