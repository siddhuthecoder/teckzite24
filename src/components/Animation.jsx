import React, { useState, useEffect } from "react";
import Humanhand from "../assets/Animation/Humanhand.png"; // Update with correct path
import Robohand from "../assets/Animation/Robohand.png"; // Update with correct path

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
    <div className="relative w-full h-screen">
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
              top: -scrollPosition * 0.8,
              left: -scrollPosition * 0.6,
              transition: "top 0.1s, left 0.1s",
            }}
            className="w-[90%] h-[80%]"
          />

          {/* Title */}
          <h1
            className="text-white text-[40px] absolute top-1/2 left-[50%] z-10 translate-x-[-120px]"
            style={{
              transition: "opacity 0.2s",
              opacity: scrollPosition > 200 ? 0 : 1,
            }}
          >
            {props.title}
          </h1>

          {/* Robo Hand Image */}
          <img
            src={Robohand}
            alt="Robo Hand"
            style={{
              position: "absolute",
              bottom: -scrollPosition * 1,
              right: -scrollPosition * 0.4,
              transition: "bottom 0.1s, right 0.1s",
            }}
            className="w-[90%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Animation;
