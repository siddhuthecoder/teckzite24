import React from "react";
import { useNavigate } from "react-router-dom";
import webteam from "../../assets/img/webteam.webp";
import coreteam from "../../assets/img/coreteam.webp";
import MenuButton from "../../components/button/MenuButton";
import Header from "../../components/Header/Header";
import "./Team.css";

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
      <div
        className="flex justify-center items-center w-full gap-10 flex-col md:flex-row pt-[10px] md:pt-[50px] z-10 md:h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Web Team Card */}
        <div
          className="flex card w-[280px] h-[400px] rounded-[20px] justify-center items-center relative cursor-pointer mt-[100px] md:mt-0"
          onClick={handleWebTeamClick}
        >
          <img
            src={webteam}
            alt="webteam"
            className="w-[200%] h-[97%] absolute titleone rounded-lg pr-[15px] overflow-hidden ml-[-15px]"
          />
          <div className="absolute text-white text-sm pb-3 font-bold z-20">
            WEBTEAM
          </div>
          <MenuButton text="Web Team" action={handleWebTeamClick} />
        </div>

        {/* Core Team Card */}
        <div
          className="flex card w-[280px] h-[400px] rounded-[20px] justify-center items-center relative cursor-pointer mb-[50px] md:mt-0"
          onClick={handleCoreTeamClick}
        >
          <img
            src={coreteam}
            alt="coreteam"
            className="w-[100%] h-[97%] absolute titleone rounded-[20px] overflow-hidden pl-[16px] mr-[-13px]"
          />
          <div className="absolute text-white text-sm pb-3 font-bold z-20">
            CORETEAM
          </div>
          <MenuButton text="Core Team" action={handleCoreTeamClick} />
        </div>
      </div>
    </>
  );
};

export default Team;
