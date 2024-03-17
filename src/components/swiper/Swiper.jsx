import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WebCard from '../../components/Shared/WebCard';
import left from '../../assets/img/after.webp'
import right from '../../assets/img/before.webp'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwipperModule = ({ data, width, slidePerview }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full flex items-center justify-center h-[100vh] overflow-hidden">
      <div className={`w-full  flex items-center justify-between  `}>
        <div className="after hidden md:block md:translate-x-[50%]" >
          <img src={left} alt="" className="" />
        </div>
        <Swiper
          spaceBetween={4}
          slidesPerView={slidePerview}
          centeredSlides={true}
          Pagination={{
            clickable: true,
          }}
          loop={true}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper relative"
          ref={swiperRef}
          initialSlide={2}
        >
          {data.map((t) => (
            <SwiperSlide key={t.id}>
              {({ isActive }) => (
                <div className={`flex   duration-1000 justify-center ${isActive ? " scale-[1] md:scale-[1m] " : "scale-[0.4] md:scale-[0.6]"}`}>
                  <WebCard img={t.img} name={t.name} role={t.role} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="after me-[-4%] hidden md:block  md:translate-x-[-50%] ">
          <img src={right} alt="" className="h-[]" />
        </div>
      </div>
    </div>
  );
};

export default SwipperModule;
