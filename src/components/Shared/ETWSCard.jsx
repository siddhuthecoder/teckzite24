import React, { useState } from "react";
import TabButton from "../button/TabButton";
import { motion } from "framer-motion";
import "./button.css";
import sid from "../../assets/webteam/sid.png";

const ETWSCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="relative mt-5 w-64 cursor-pointer"
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        src={sid}
        width="100%"
        alt="siddu"
        onMouseEnter={() => setIsHover(true)}
        className={`overflow-clip`}
      />
      <div className="absolute flex bottom-12 w-full text-left">
        <TabButton name="EVENT " />
        {/* <div className="relative min-h-[30px] text-center flex w-full">
          <button
            onClick={play}
            className={`absolute  btn-glow border-2 p-1 rounded-xl hover:bg-[#1f22e4] border-[#4c4ff4] left-8 ${isHover
              ? "visible  ease-in duration-200"
              : "hidden   "
              } `}
            style={{ width: "100px", height: "40px" }}
          >
            Button 1
          </button>
          <button
            onClick={play}
            className={`absolute  btn-glow mx-2 border-2 p-1 rounded-xl hover:bg-[#1f22e4] border-[#4c4ff4] left-8 ${isHover
              ? "visible  ease-in duration-200"
              : "hidden   "
              } `}
            style={{ width: "100px", height: "40px" }}
          >
            Button 2
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ETWSCard;
