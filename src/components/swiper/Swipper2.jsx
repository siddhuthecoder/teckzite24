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
import SpeakersCard from '../Shared/SPcard';


const Swipper2= ({ slidePerview }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full flex items-center justify-center h-[100vh] overflow-hidden">
      <div className={`w-full  flex items-center justify-between  `}>
        
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
            <SwiperSlide>
              <SpeakersCard />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakersCard />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakersCard />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakersCard />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakersCard />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakersCard />
            </SwiperSlide>
            <SwiperSlide>
              <SpeakersCard />
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipper2
