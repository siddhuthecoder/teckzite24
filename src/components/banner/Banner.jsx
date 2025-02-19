import React, { useState, useEffect } from "react";
import "./banner.css";

const Banner = ({ text }) => {
  const [scroll, setScroll] = useState(window.scrollY);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let backgroundSize;

  if (width > 1000) {
    backgroundSize = `${100 + (scroll * 0.3) / 2}%`;
  } else if (width <= 1000 && width > 700) {
    backgroundSize = `${250 + (scroll * 0.3) / 2}%`;
  } else if (width <= 700 && width > 500) {
    backgroundSize = `${215 + (scroll * 0.3 * 3) / 2}%`;
  } else if (width <= 500) {
    backgroundSize = `${330 + (scroll * 0.7 * 3) / 2}%`;
  }

  const maxOpacity = 0.36111;
  let opacity = 1 - (scroll * 1.4) / (window.innerHeight / 1);

  if (opacity < maxOpacity) {
    opacity = maxOpacity;
  }

  const opacity2 = 1 - (scroll * 4) / (window.innerHeight / 1);

  const DesktopBg = ({  }) => {
    return (
      <>
        <div
          className="all-banner pointer-events-none flex items-center justify-center z-[11]"
          style={{
            backgroundSize,
            backgroundPosition: "center center",
            maxHeight: "100vh",
            overflowY: "hidden",
            position: "fixed",
            top: "0px",
            left: "0px",
          }}
        ></div>
        <div
          className={` w-full min-h-[100vh] flex justify-center items-center pointer-events-none z-[1]`}
          style={{ position: "fixed", top: "0px", left: "0px", opacity }}
        >
          <div
            className={`text-[50px] md:text-[87px] ${
              scroll > 1000 ? "hidden" : ""
            }`}
            style={{ opacity: opacity2 }}
          >
            {text}
          </div>
        </div>
        <div className="w-full h-screen"></div>
        <div className="w-full h-screen"></div>
      </>
    );
  };

  return (
    <>
      <DesktopBg  />
    </>
  );
};

export default Banner;