import React from "react";
import Workbutton from "./Workbutton";
import {FaInstagram} from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Workshop from "../../assets/img/Workshop.webp";
const EWCsrd1 = ({ img, id, name, workshop }) => {
  const navigate = useNavigate();
  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };
  return (
    <>
      <div className="my-10 mx-2 flex items-center justify-center">
      <div className="flex justify-center bg-[black] items-center - ">

<div className=" relative image-container">
    <img 
        src={Workshop} 
        className="relative h-[450px] w-[300px]" 
        alt="card" 
    /> 
    <div className="absolute top-[30px] top-[20px] left-[45px] h-[225px] w-[200px] border border-2 overflow-hidden">
    <img
              src={img}
              className="relative h-[220px] w-[300px]"
              alt="card"
            />
    </div>
    

    <div className="absolute top-[270px] left-[0px] flex flex-col gap-[6px] ">
        <div className="flex flex-col gap-[10px] ml-[40px]"> 
      <div className="text-[17px] text-[white] font-bold text-[white]  titlename">{name}</div>
      <div className="text-[15px] text-[white] text-center  ml-[-140px] ">4.00</div>
      </div>
      <div className=" ml-[140px] mb-[4px]">
        <Workbutton name="Workbutton"/>
        </div>
    </div>
</div>
</div>
        
      </div>
    </>
  );
};

export default EWCsrd1;
