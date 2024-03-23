import React, { useState, useEffect } from "react";
import AboutHome from "./AboutHome";
import SocialIcons from "./SocialIcons";
import Home1 from "./home1";
import SpeakersHome from "./SpeakersHome";
import SponsersHome from "./SponsersHome";
import StatusHome from "./StatusHome";

const ScrollHome = () => {
  const [scroll, setScroll] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let isScroll = false;
      if (!isScroll) {
        isScroll = true;
        if (window.scrollY > 0) {
          setCount((prevCount) => Math.min(prevCount + 1, 5));
        } else {
          setCount((prevCount) => Math.max(prevCount - 1, 1));
        }
        console.log(count);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [count]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scroll <= 500 && <Home1 />}
      {scroll > 500 && scroll <= 1000 && <AboutHome />}
      {scroll > 1000 && scroll <= 1500 && <StatusHome />}
      {scroll > 1500 && scroll <= 2000 && <SpeakersHome />}
      {scroll > 2000 && scroll <= 2500 && <SocialIcons />}
      {scroll > 2500 && scroll <= 3000 && <SponsersHome />}
      <div className="w-full h-[2800px]"></div>
    </>
  );
};

export default ScrollHome;
