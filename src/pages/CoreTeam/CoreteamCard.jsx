import React from "react";
import sp1 from "../../assets/img/speakers/sp1.svg";
import sp2 from "../../assets/img/speakers/sp2.svg";
import sp3 from "../../assets/img/speakers/sp3.svg";
import sp4 from "../../assets/img/speakers/sp4.svg";
import sp5 from "../../assets/img/speakers/sp5.svg";
import sp6 from "../../assets/img/speakers/sp6.svg";
import sp7 from "../../assets/img/speakers/sp7.svg";
import sp8 from "../../assets/img/speakers/sp8.svg";
import sp9 from "../../assets/img/speakers/sp9.svg";
import sp10 from "../../assets/img/speakers/sp10.svg";
import sp11 from "../../assets/img/speakers/sp11.svg";
const CoreteamCard = ({ img, role, name }) => {
  return (
    <div className="m-[30px] flex items-center justify-center">
      <div className="flex  w-[216px] justify-center items-center h-[336px] m-[40px]  relative">
        <div className="w-[170px] h-[300px] relative">
          <img src={img} alt="" />
          <div
            className="absolute  bottom-0 rounded-[10px] w-[100%] mx-auto h-[100px] backdrop-blur-lg flex flex-col  z-[1] "
            style={{}}
          >
            <div className="text-center font-bold font-ROG">{name}</div>
            <div className="text-center text-[20px] font-ROG">{role}</div>
          </div>
        </div>
        <img src={sp1} alt="" className="absolute pointer-events-none" />
        <img
          src={sp2}
          alt=""
          className="absolute pointer-events-none bottom-[-15px] right-[-20px]"
        />
        <img
          src={sp7}
          alt=""
          className="absolute pointer-events-none bottom-[-15px] left-[-10px] "
        />
        <img
          src={sp3}
          alt=""
          className="absolute pointer-events-none left-[-10px] bottom-[10%]"
        />
        <img
          src={sp5}
          alt=""
          className="absolute pointer-events-none left-[-8px]  bottom-[50%] "
        />
        <img
          src={sp4}
          alt=""
          className="absolute pointer-events-none left-[-10px] bottom-[40%]"
        />
        <img
          src={sp2}
          alt=""
          className="absolute pointer-events-none top-[-15px] left-[-20px] scale-y-[-1]"
        />
        <img
          src={sp6}
          alt=""
          className="absolute pointer-events-none top-[-8px] right-[-4px]"
        />
        <img
          src={sp8}
          alt=""
          className="absolute pointer-events-none right-[-20px] top-[30%]"
        />
        <img
          src={sp8}
          alt=""
          className="absolute pointer-events-none right-[-2px] top-[17.5%] scale-x-[-1]"
        />
        <img
          src={sp9}
          alt=""
          className="absolute pointer-events-none right-[-20px] top-[25%]"
        />
        <img
          src={sp10}
          alt=""
          className="absolute pointer-events-none right-[-9px] top-[-4px] scale-y-[1.1]"
        />
        <img
          src={sp11}
          alt=""
          className="absolute pointer-events-none right-[-4px] bottom-[43px]"
        />
        <img
          src={sp11}
          alt=""
          className="absolute pointer-events-none right-[-4px] bottom-[27px]"
        />
        <img
          src={sp11}
          alt=""
          className="absolute pointer-events-none right-[-4px] bottom-[13px]"
        />
      </div>
    </div>
  );
};

export default CoreteamCard;
