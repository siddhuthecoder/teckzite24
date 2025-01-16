import React from "react";
import { useNavigate } from "react-router-dom";
import webteam from "../../assets/img/webteam.webp";
import coreteam from "../../assets/img/coreteam.webp";
import tabbutton from "../../assets/events/tabbutton.webp";
import MenuButton from "../../components/button/MenuButton";
import Header from "../../components/Header/Header";
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
      <div className="flex justify-center items-center w-full  gap-10 flex-col md:flex-row pt-[10px] md:pt-[50px] z-10 h-screen" 
       style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}>
        <div className="flex bg-gray-500 w-[300px] h-[400px] justify-center items-center shadow-md transition-shadow duration-300 rounded-lg relative">
          <div className="flex  w-[280px] h-[380px] rounded-lg  hover:-translate-y-10 transition-transform duration-300 ease-in-out justify-center items-center relative">
            <img
              src={webteam}
              alt="webteam"
              className="w-[90%] h-[96%] absolute"
            ></img>
            <div className="absolute text-white text-sm pb-3 font-bold z-10 cursor-pointer"onClick={handleWebTeamClick}>
              WEBTEAM
            </div>
            <MenuButton text="Core Team" action={() => handleWebTeamClick()} />

            {/* <div className="absolute bottom-20 right-30 cursor-pointer"onClick={handleWebTeamClick}><img src={tabbutton.png} alt="button" className="w-10 h-10"/></div> */}
          </div>
        </div>
        <div className="flex bg-gray-500 w-[300px] h-[400px] justify-center items-center shadow-md transition-shadow duration-300 rounded-lg relative">
          <div className="flex  w-[280px] h-[380px] rounded-lg  hover:-translate-y-10 transition-transform duration-300 ease-in-out justify-center items-center relative">
            <img
              src={coreteam}
              alt="webteam"
              className="w-[90%] h-[96%] absolute"
            ></img>
            <div className="absolute text-white text-sm pb-3 font-bold z-10 cursor-pointer"onClick={handleCoreTeamClick}>
              CORETEAM
            </div>
            <MenuButton text="Core Team" action={() => handleCoreTeamClick()} />
            {/* <div className="absolute bottom-20 right-30 cursor-pointer"onClick={handleCoreTeamClick}><img src={tabbutton.png} alt="button" className="w-10 h-10" /></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
