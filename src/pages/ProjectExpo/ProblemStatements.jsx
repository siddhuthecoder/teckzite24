
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import MenuButton from "../../components/button/MenuButton";

import "./ProblemStatements.css";

const ProblemStatements = () => {
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    const targetPath = `/problemstatement/${id}`;
    navigate(targetPath);
  };

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
        className="mySwiper w-11/12 max-w-4xl"
      >
        <SwiperSlide className="w-11/12 max-w-4xl p-6 rounded-lg gap-[20px] h-[600px] md:h-[320px]
 backdrop-blur-lg flex flex-col bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          <h2 className="text-cyan-500 text-[30px]">Project 1</h2>
          <h2 className="text-[20px] px-2">
            Autonomous Navigation of Drone through a narrow path
          </h2>
          <p className="text-[16px] px-[20px] md:px-[40px]">
            Design and implementation of an autonomous drone capable of
            navigating efficiently through a provided narrow path, ensuring
            collision-free movement using advanced sensing and control
            techniques.
          </p>
          <div onClick={() => handleNavigation(1)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          <h2 className="text-cyan-500 text-[30px]">Project 2</h2>
          <h2 className="text-[20px] px-2">
            Autonomous Legged Robot for Climbing Stairs
          </h2>
          <p className="text-[16px] px-[20px] md:px-[40px]">
            This project focuses on designing and developing an autonomous
            legged robot capable of climbing up to 20 steps under remote
            control. The robot will combine manual operation through a remote
            control and automated movement for precise step climbing.
          </p>
          <div onClick={() => handleNavigation(2)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Project 3 </h2>
          <h2 className="text-[20px] px-2">
            {" "}
           Movement of Mobile robot in foggy environments without
            collision{" "}
          </h2>
          <p className="text-[16px]  px-[20px] md:px-[40px]">
            Design a mobile robot that could navigate safely through foggy
            environments, ensuring collision-free movement using advanced
            sensing and control techniques. This is a simulation of real-world
            low-visibility conditions to evaluate the robot’s ability to
            navigate through such harsh conditions.
          </p>
          <div
            onClick={() => {
              handleNavigation(3);
            }}
            className="mt-10"
          >
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Project 4 </h2>
          <h2 className="text-[20px] px-2">
            {" "}
            Crop surveillance using Mobile Robot{" "}
          </h2>
          <p className="text-[16px]  px-[20px] md:px-[40px]">
            Design and realize a mobile robot to perform crop surveillance in
            agricultural fields. The robot must autonomously navigate in a crop
            field to gather data, and identify key parameters such as plant
            health, pest information, soil conditions, and crop maturity.
          </p>
          <div onClick={() => handleNavigation(4)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Project 5 </h2>
          <h2 className="text-[20px] px-2">
            {" "}
            Wildlife-friendly Animal Avoidance System{" "}
          </h2>
          <p className="text-[16 px-[20px] md:px-[40px]">
            Design and implementation of a system equipped to prevent domestic
            animals (specifically monkeys) from entering designated areas
            (agricultural land, residential areas, schools, etc.).
          </p>
          <div onClick={() => handleNavigation(5)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Project 6 </h2>
          <h2 className="text-[20px] px-2">
            {" "}
            Identification of Crop and Crop Health using drone.{" "}
          </h2>
          <p className="text-[16px] px-[20px] md:px-[40px]">
            Design and execution of an autonomous drone capable of providing
            real-time insights to farmers, helping them optimize resources and
            improve crop yields.
          </p>
          <div onClick={() => handleNavigation(6)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Project 7 </h2>
          <h2 className="text-[20px] px-2">
            {" "}
            Innovative power generation Techniques{" "}
          </h2>
          <p className="text-[16px] px-[20px] md:px-[60px]">
            This project focuses on exploring and developing new methods for
            generating power using innovative and sustainable technologies.
            Students will research, design, and prototype systems that utilize
            unconventional energy sources like piezoelectric materials,
            thermoelectric devices, or wind and solar hybrid systems.
          </p>
          <div onClick={() => handleNavigation(7)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Project 8 </h2>
          <h2 className="text-[20px] px-2"> AI security Surveillance </h2>
          <p className="text-[16 px-[20px] md:px-[40px]">
            This project focuses on creating an AI-powered video surveillance
            system capable of detecting gestures and abnormal behaviors for
            enhanced domestic security.
          </p>
          <div onClick={() => handleNavigation(8)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Project 9 </h2>
          <h2 className="text-[20px] px-2">
            {" "}
            Identification of contents made by Deepfake Technology{" "}
          </h2>
          <p className="text-[16px] px-[20px] md:px-[40px]">
            Design and execution of an algorithm that can identify content
            generated or manipulated using deepfake technology. Deepfake
            technology uses AI and other machine learning algorithms to create
            hyper-realistic content that is perceived as real.
          </p>
          <div onClick={() => handleNavigation(9)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-11/12 max-w-4xl md:p-6 rounded-lg gap-[20px] md:h-[320px] h-[600px] backdrop-blur-lg flex flex-col  bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          {" "}
          <h2 className="text-cyan-500 text-[30px]">Student Innovation
          </h2>
       
          <h2 className="text-[20px] px-2">
            {" "}
            (Exclusive to RGUKT Students)
{" "}
          </h2>
          <p className="text-[16px] px-[20px] md:px-[40px]">
          This problem statement is open to all RGUKT students, regardless of domain or branch. Under this category, teams can submit projects showcasing innovative ideas and solutions across any field of interest. It serves as a platform for students to demonstrate their creativity, technical skills, and out-of-the-box thinking.

          </p>
          <div onClick={() => handleNavigation(10)} className="mt-10">
            <MenuButton name="Know More" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProblemStatements;
