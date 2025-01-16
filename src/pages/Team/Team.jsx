import React from "react";
import { useNavigate } from "react-router-dom";
import webteam from "../../assets/img/webteam.jpg";
import coreteam from "../../assets/img/coreteam.jpg";
import tabbutton from "../../assets/events/tabbutton.png";
import MenuButton from "../../components/button/MenuButton";
import Header from "../../components/Header/Header";
import Teamone from "./Team.css";
const Team = () => {
  const navigate = useNavigate();
  const handleWebTeamClick = () => {
    navigate("/Teamweb");
  };

  const handleCoreTeamClick = () => {
    navigate("/Teamcore");
  };
  return (
    <>
      <Header />
      <div className=" flex justify-center items-center w-full  gap-10 flex-col md:flex-row pt-[10px] md:pt-[50px] z-10 h-screen" 
       style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.jpg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  }}>
          <div className="flex card w-[280px] h-[400px] rounded-[20px]  justify-center items-center relative">
            <img
              src={webteam}
              alt="webteam"
              className="w-[200%] h-[97%] absolute titleone rounded-lg pr-[15px] overflow-hidden ml-[-15px] "
            ></img>
            <div className=" absolute text-white text-sm pb-3 font-bold  cursor-pointer"onClick={handleWebTeamClick}>
              WEBTEAM
            </div>
            <MenuButton text="Core Team" action={() => handleWebTeamClick()} />

            {/* <div className="absolute bottom-20 right-30 cursor-pointer"onClick={handleWebTeamClick}><img src={tabbutton.png} alt="button" className="w-10 h-10"/></div> */}
          </div>
          <div className="flex card w-[280px] h-[400px] rounded-[20px]  justify-center items-center relative">
            <img
              src={coreteam}
              alt="webteam"
              className="w-[100%] h-[97%] absolute titleone rounded-[20px] overflow-hidden pl-[16px] mr-[-13px]"
            ></img>
            <div className=" absolute text-white text-sm pb-3 font-bold  cursor-pointer"onClick={handleWebTeamClick}>
              CORETEAM
            </div>
            <MenuButton text="Core Team" action={() => handleWebTeamClick()} />

            {/* <div className="absolute bottom-20 right-30 cursor-pointer"onClick={handleWebTeamClick}><img src={tabbutton.png} alt="button" className="w-10 h-10"/></div> */}
          </div>
        </div>
          
    </>
  );
};

export default Team;
