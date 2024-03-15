import React, { useLayoutEffect, useState } from "react";
import TabButton from "../button/TabButton";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./button.css";
import '../../index.css'
import sid from "../../assets/webteam/sid.png";
import img from '../../assets/img/sri.jpg'
import Eve from '../../assets/img/event.jpg'
import Button from '../../components/Button'


const ETWSCard = () => {
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
  console.log(isHover)
  return (
    <div
      className="relative mt-5 w-[200px] m-auto cursor-pointer"
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onMouseEnter={() => setIsHover(true)}
    >
      <img
        src={Eve}
        width="100%"
        alt="siddu"
        className={` overflow-hidden [clip-path:polygon(38%_5%,_10%_5%,_0_13%,_0%_80%,_7%_87%,_7%_100%,_85%_100%,_100%_85%,_100%_30%,_95%_25%,_95%_0,_45%_0)] w-[200px] h-[300px] `}
        style={{
          border: "4px solid transparent",
          borderImage: " linear-gradient(to bottom, blue, purple,blue,purple) 1"
        }}
      />
      <div className="absolute top-0 opacity-70  [clip-path:polygon(38%_5%,_10%_5%,_0_13%,_0%_80%,_7%_87%,_7%_100%,_85%_100%,_100%_85%,_100%_30%,_95%_25%,_95%_0,_45%_0)] w-[200px] h-[300px]"></div>
      <motion.div className="absolute bottom-[20px] w-full">
        <div className={`${isHover ? "text-[30px]" : "text-[20px]"} text-[white] font-bold duration-500 text-center hover:text-[30px] w-full`}>Event</div>
        <div className={`${isHover ? "block" : "hidden"} text-[white] font-bold duration-500 text-center w-full`}>Event discription</div>
        {
          size[0] >1024 && (
            <div className={`${isHover ? "black" : "hidden"}`}>
              <button className="event-button ms-[30%] rounded-[4px] font-bold h-[30px] w-[70px] text-[white]" style={{
                background: "linear-gradient(to right bottom,#f90cff,#e027ff,#c534ff,#a93eff,#8a44ff,#6560ff,#3c73ff,#0081ff,#009cff,#00b3ff,#00c6f5,#0cd7e8)"
              }}>View</button>
            </div>
          )
        }
        {size[0] <= 1024 && (
          <button className="event-button ms-[30%] rounded-[4px] font-bold h-[30px] w-[70px] text-[white]" style={{
            background: "linear-gradient(to right bottom,#f90cff,#e027ff,#c534ff,#a93eff,#8a44ff,#6560ff,#3c73ff,#0081ff,#009cff,#00b3ff,#00c6f5,#0cd7e8)"
          }}>View</button>
        )}

      </motion.div>
    </div>
  );
};

export default ETWSCard;