
import React from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MenuButton from "../../components/button/MenuButton";
import "./Hack.css";

const HackathonProblem = (props) => {
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    const targetPath = `/hackathonproblem/${id}`;
    navigate(targetPath);
  };
  const data = [
    {
        theme:"Theme-1",
        title:"Building AI Agents",
        description:"This theme focuses on developing innovative AI agents to solve real-world challenges. Participants will create solutions such as an AI Receptionist for event management, a Virtual Health Assistant for medical queries and bookings, and a Dynamic Pricing Optimizer for real-time price adjustments. Join us to build cutting-edge AI agents that transform industries!"
    },

    {
        theme:"Theme-2",
        title:"AI/ML Startup Idea (Market Access Readlines)",
        description:"Unleash your entrepreneurial spirit and bring your boldest AI/ML startup ideas to life! This is your chance to transform innovative concepts into impactful solutions and be part of the startup revolution. Let your creativity shine, take the leap, and show the world how your vision can shape the future of technology!"
    },
    
]
  return (
    <>
    
<Swiper
        pagination={{
          type: "fraction",
        }}
        slidesPerView={1}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-11/12 max-w-4xl "
      >
        {data.map((item,index)=>(
             <SwiperSlide className="w-11/12 max-w-4xl p-6 rounded-lg gap-[20px] h-[600px] md:h-[320px]
             backdrop-blur-lg flex flex-col bg-white/10 border border-white/20 shadow-lg text-white mb-8">
                      <h2 className="text-cyan-500 text-[30px]">{item.theme}</h2>
                      <h2 className="text-[20px] px-2">
                        {item.title}
                      </h2>
                      <p className="text-[16px] px-[20px] md:px-[40px]">
                       {item.description}
                      </p>
                      {/* <div onClick={() => handleNavigation(1)} className="mt-10">
                        <MenuButton name="Know More" />
                      </div> */}
                    </SwiperSlide>
        ))}
     
      </Swiper>
    </>
  );
};

export default HackathonProblem;
