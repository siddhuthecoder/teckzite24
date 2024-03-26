import React from "react";
import s1 from "../../assets/img/s1.svg";
import s2 from "../../assets/img/s2.svg";
import s3 from "../../assets/img/s3.svg";
import s4 from "../../assets/img/s4.svg";
import s5 from "../../assets/img/s5.svg";
import { useNavigate } from "react-router-dom";

const EWCard = ({ img, id, name, workshop }) => {
  const navigate = useNavigate();
  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };
  return (
    <>
      <div className="my-10 mx-2 flex items-center justify-center">
        <div
          className="w-[240px] h-[336px] flex justify-center mt-10 cursor-pointer  relative"
          onClick={() => {
            handleSound();
            navigate(`/${workshop ? "workshopdetails" : "eventdetails"}/${id}`);
          }}
        >
          <img
            src={s1}
            alt=""
            className="absolute left-[-20%] top-[-28%] scale-y-[1.12]"
          />
          <img
            src={s2}
            alt=""
            className="absolute right-[-20%] top-[-28%] scale-y-[1.12]  "
          />
          <img src={s3} alt="" className="absolute top-[26.75%] left-[-18%] " />
          <img
            src={s4}
            alt=""
            className="absolute top-[26.75%] right-[-22%] "
          />
          <img
            src={s5}
            alt=""
            className="absolute bottom-0 left-[-6px] scale-x-[1.3] scale-y-[1.3]"
          />
          <div
            className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute left-[6%] top-[40%]"
            style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
          ></div>
          <div
            className="w-[8px] h-[118px] bg-[#A301B1] border-[1px] border-[#F8A6FF] absolute right-[6%] top-[40%]"
            style={{ boxShadow: " 0px 0px 50px 3px rgba(163, 1, 177, 0.38)  " }}
          ></div>
          <div className="text-center font-bold absolute top-[-55px] max-w-[230px]">
            {name}
          </div>
          <div className="w-[180px] h-[230px] mx-auto">
            <img src={img} alt="" className="w-[180px] h-[230px] mx-auto" />
          </div>
          <div className="absolute bottom-[100px] z-20 py-2 w-[80%] flex justify-center  items-center flex-col">
            <button
              className="px-4 py-1 text-sm rounded bg-gradient text-white"
              onClick={() => {
                handleSound();
              }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EWCard;
