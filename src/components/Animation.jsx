import React, { useState, useEffect } from "react";
import Humanhand from "../assets/Animation/Hhand.png"; 
import Robohand from "../assets/Animation/rhand.png"; 

const Animation = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen ">
      <div
        className="fixed top-0 left-0 w-full h-screen pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div className="w-screen h-screen relative">
          {/* Human Hand Image */}
          <img
            src={Humanhand}
            alt="Human Hand"
            style={{
              position: "absolute",
              bottom: -scrollPosition * 0.8,
              left: -scrollPosition * 0.6,
              transition: "bottom 0.1s, left 0.1s",
            }}
            className="w-[40%] h-[40%] md:h-[50%]"
          />

          {/* Title with Parallax Effect */}
          <div
            className="text-white text-[30px] lg:text-[57px] absolute z-10"
            style={{
              top: `calc(50% - ${scrollPosition * 0.5}px)`, 
              left: "50%",
              transform: "translate(-50%, -50%)", 
              opacity: scrollPosition > 300 ? 0 : 1, 
              transition: "top 0.1s, opacity 0.2s",
            }}
          >
          <div className="relative">
  <h1 className="absolute text-[40px] md:text-[60px] translate-x-[-50%] translate-y-[-50%] text-white stroke-[2px] stroke-[#05a8f3]">
    {props.title}
  </h1>
  <h1 className="absolute text-[40px] md:text-[60px] translate-x-[-50%] translate-y-[-50%] text-[#05a8f3] stroke-[2px] stroke-[#05a8f3] animate-waves">
    {props.title}
  </h1>
</div>

          </div>

          {/* Robo Hand Image */}
          <img
            src={Robohand}
            alt="Robo Hand"
            style={{
              position: "absolute",
              top: -scrollPosition * 0.8,
              right: -scrollPosition * 0.6,
              transition: "top 0.1s, right 0.1s",
            }}
            className="w-[40%] h-[40%] md:h-[50%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Animation;