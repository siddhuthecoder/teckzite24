import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WebCard from '../../components/Shared/WebCard';
import left from '../../../public/before.webp';
import right from '../../../public/before.webp'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwipperModule = ({ data, width, slidePerview }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full flex items-center justify-center h-[100vh] overflow-hidden">
      <div className={`w-[100%] ${width} flex items-center  md:flex-row`}>
        <div className="after   md:scale-[2]">
          <img src={left} alt="" className="" style={{ transform: "scale(1)", transform: "translateX(25px)" }} />
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
                <div className={`flex scale-[0.7]  duration-1000 justify-center ${isActive ? "scale-[0.7] md:scale-[1] " : "scale-[0.4] scalemd:scale-[0.6]"}`}>
                  <WebCard img={t.img} name={t.name} role={t.role} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="after   me-[-4%] md:me-[0%] md:scale-[2]">
          <img src={right} alt="" className="h-[] w-[full]" style={{ transform: "scale(1)", transform: "translateX(-25px)" }} />
        </div>
      </div>
    </div>
  );
};

export default SwipperModule;
