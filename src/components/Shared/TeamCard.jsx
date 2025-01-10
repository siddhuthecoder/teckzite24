import React, { useState } from "react";
import Header from "../Header/Header";

const TeamCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Header />
      <div
        className="h-[500px] my-2 mx-1 w-[240px]"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex h-[400px] relative w-[240px]">
          <div
            className={`absolute ${
              isHover
                ? "h-[370px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_20%,_65%_0)]"
                : "h-[250px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_25%,_70%_0)]"
            } duration-[500ms] translate-y-16 bottom-0 opacity-90 z-[-2] -right-3 w-[150px] -skew-x-3 bg-blue-500`}
          ></div>
          <div
            className={`absolute ${
              isHover
                ? "h-[450px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_15%,_65%_0)]"
                : "h-[360px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_15%,_65%_0)]"
            } duration-[450ms]  translate-y-16 bottom-0 opacity-60 z-[-3] right-5 w-[150px] -skew-x-3 bg-blue-500`}
          ></div>
          <div
            className={`absolute ${
              isHover
                ? "h-[420px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_15%,_60%_0)]"
                : "h-[320px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_15%,_65%_0)]"
            } duration-[400ms] translate-y-16 bottom-0 opacity-50 z-[-4] right-14 w-[150px] -skew-x-3 bg-blue-500`}
          ></div>
          <div
            className={`absolute ${
              isHover
                ? "h-[250px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_25%,_75%_0)]"
                : "h-[200px] [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_15%,_65%_0)]"
            } duration-[200ms] translate-y-16 bottom-0 z-[-5] opacity-85 right-36 w-[100px]  -skew-x-3 bg-blue-500`}
          ></div>
          <img
            src="./sid2.png"
            className="absolute w-[100%] h-[50%] left-[5%] -bottom-7 z-[-1]"
          />
        </div>
        <div className="relative w-[240px] mt-[6px] h-[80px]">
          <div className="absolute bottom-0 -left-1 w-[20px] z-[-2] opacity-80 bg-slate-100 h-[60px] -skew-x-[17deg]"></div>
          <div className="absolute bottom-0 -left-7 w-[20px] z-[-2] bg-slate-500 h-[60px] -skew-x-[17deg]"></div>
          <div className="absolute bottom-6 left-3 w-[160px] bg-white z-[-1] h-[50px] -skew-x-[25deg]"></div>
          <div className="absolute bottom-0 left-6 w-[240px] bg-red-500 z-[0] h-[60px] text-center items-center -skew-x-[23deg]">
            <h3 className="w-[90%] font-bold m-auto mt-3 text-2xl skew-x-[23deg]">
              Name
            </h3>
          </div>
          <div className="absolute -bottom-4 left-8 w-[195px] bg-slate-500 z-[1] h-[30px] -skew-x-[25deg]">
            <p className="font-semibold w-[90%] m-auto skew-x-[25deg]">Role</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;

//h-[250px] -skew-x-3 [clip-path:polygon(0_0,_0_100%,_100%_100%,_100%_25%,_75%_0)]
