import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import "./button.css";
import sid from "../../assets/webteam/sid.png";

const ETWSCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="relative mt-5 w-64  cursor-pointer mx-auto"
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
        <div className="relative min-h-[30px] text-center flex w-full">
          <Button text="Event" link={""} />
        </div>
      </div>
    </div>
  );
};

export default ETWSCard;
