import React, { useState, useEffect } from "react";
import Humanhand from "../assets/Animation/Hhand.png"; // Update with correct path
import Robohand from "../assets/Animation/rhand.png"; // Update with correct path

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
            className="w-[50%] h-[50%]"
          />

          {/* Title with Parallax Effect */}
          <h1
            className="text-white text-[30px] lg:text-[57px] absolute z-10"
            style={{
              top: `calc(50% - ${scrollPosition * 0.5}px)`, // Moves text up on scroll
              left: "50%",
              transform: "translate(-50%, -50%)", // Center horizontally and vertically
              opacity: scrollPosition > 300 ? 0 : 1, // Fade out after scrolling
              transition: "top 0.1s, opacity 0.2s",
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
              top: -scrollPosition * 0.8,
              right: -scrollPosition * 0.6,
              transition: "top 0.1s, right 0.1s",
            }}
            className="w-[50%] h-[50%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Animation;
