import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import "./button.css";
import "../../index.css";

const ETWSCard = ({ about, name, img }) => {
  const [isHover, setIsHover] = useState(false);
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative mt-10 w-[200px] mx-auto  cursor-pointer "
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onMouseEnter={() => setIsHover(true)}
    >
      <img
        src={img}
        width="100%"
        alt={name}
        className={`overflow-hidden [clip-path:polygon(38%_5%,_10%_5%,_0_13%,_0%_80%,_7%_87%,_7%_100%,_85%_100%,_100%_85%,_100%_30%,_95%_25%,_95%_0,_45%_0)]  min-w-[260px] h-[350px] `}
        style={{
          border: "4px solid transparent",
          borderImage:
            " linear-gradient(to bottom, blue, purple,blue,purple) 1",
        }}
      />
      <div
        className={`absolute top-0 opacity-70    [clip-path:polygon(38%_5%,_10%_5%,_0_13%,_0%_80%,_7%_87%,_7%_100%,_85%_100%,_100%_85%,_100%_30%,_95%_25%,_95%_0,_45%_0)] min-w-[260px] h-[350px] z-[2] bg-[black] duration-100 ${
          isHover ? "" : ""
        }`}
      ></div>
      <motion.div className="absolute bottom-[20px] w-full z-[3]">
        <div
          className={`${
            isHover ? "text-[22px]" : "text-[20px]"
          } text-[white] font-bold pl-[30px] w-full`}
        >
          {name}
        </div>
        <div
          className={`${
            isHover ? "block" : "hidden"
          } text-[white] font-bold duration-500 ps-[30px] w-full`}
        >
          {about.slice(0, 30)}
        </div>
        {size[0] > 1024 && (
          <div className={`${isHover ? "block" : "hidden"}`}>
            <button
              className="event-button ms-[30px] rounded-[4px] font-bold h-[30px] w-[70px] text-[white]"
              style={{
                background:
                  "linear-gradient(to right bottom,#f90cff,#e027ff,#c534ff,#a93eff,#8a44ff,#6560ff,#3c73ff,#0081ff,#009cff,#00b3ff,#00c6f5,#0cd7e8)",
              }}
            >
              Explore
            </button>
          </div>
        )}
        {size[0] <= 1024 && (
          <button
            className="event-button ms-[30px] rounded-[4px] font-bold h-[30px] w-[140px] text-[white]"
            style={{
              background:
                "linear-gradient(to right bottom,#f90cff,#e027ff,#c534ff,#a93eff,#8a44ff,#6560ff,#3c73ff,#0081ff,#009cff,#00b3ff,#00c6f5,#0cd7e8)",
            }}
          >
            Explore More
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default ETWSCard;
