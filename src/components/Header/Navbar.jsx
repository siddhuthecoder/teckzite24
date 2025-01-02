import React from "react";
import MenuButton from "../button/MenuButton";
import teckzite from "../../assets/menu/Teckzite.svg";
import image from "../../assets/menu/image.svg";
import shadoweffect from "../../assets/menu/shadoweffect.svg";
import Ellipse131 from "../../assets/menu/Ellipse131.svg";
import Ellipse132 from "../../assets/menu/Ellipse132.svg";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowNav }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        zIndex: "9999",
        backgroundColor: "black",
        width:"100%",
        heightL:"100vh"
      }}
      className="md:h-screen min-h-screen navbar_robo  top-0 left-0 bg-black flex flex-col w-full justify-center items-center md:overflow-x-hidden overflow-y-auto py-[40px] px-[20px] md:px-[100px] lg:px-[20px] relative"
    >
      {/* Close Button */}
      <div
        className="w-full  h-[100px] flex items-center justify-between fixed top-0 left-0 bg-black"
        style={{
          zIndex: "99999",
        }}
      >
        <div className="text-white mx-4 font-bold text-4xl">TZ</div>
        <IoMdClose
          onClick={() => {
            setShowNav(false);
          }}
          className="cursor-pointer md:text-4xl mx-4 text-2xl text-white"
        />
      </div>
      {/* Main Content */}
      <div className="main md:relative flex flex-col justify-center items-center gap-[20px]">
        {/* Background Images */}
        <div className="backgrounds md:flex flex-col justify-center items-center gap-0 relative hidden">
          <img src={shadoweffect} className="h-[500px] w-full" />
          <img src={teckzite} className="absolute top-[60px] h-[30px]" />
          <img
            src={image}
            className="robo-img absolute top-[100px] h-[250px] w-[250px]"
          />
        </div>

        {/* Decorative Circles */}
        <div className="circles relative mt-[-50px] hidden md:block">
          <img src={Ellipse131} className="h-[63px] w-[555px]" />
          <img
            src={Ellipse132}
            className="h-[32px] w-[450px] absolute  left-[10%] top-[25%]"
          />
        </div>

        {/* Left Buttons */}
        <div className="left-buttons pt-[30px] md:pt-0 md:absolute left-0 md:top-[30px] flex flex-col gap-[30px] font-[kenia]">
          <div className="md:ml-[20px]  lg:ml-[-30px] animate-slideTopDelay5">
            <MenuButton name="Home" />
          </div>
          <div className="md:ml-[-100px] lg:ml-[-150px] animate-slideTopDelay4">
            <MenuButton name="Events" />
          </div>
          <div className="md:ml-[-140px] lg:ml-[-180px] animate-slideTopDelay3">
            <MenuButton name="Workshops" />
          </div>
          <div className="md:ml-[-100px] lg:ml-[-150px] animate-slideTopDelay2">
            <MenuButton name="Web Team" />
          </div>
          <div className="md:ml-[20px] lg:ml-[-30px] animate-slideTopDelay1">
            <MenuButton name="Updates" />
          </div>
        </div>

        {/* Center Button */}
        <div className="center-button md:absolute lg:top-[-20px] md:top-0 left-2/5 animate-slideTopDelay6">
          <div>
            <MenuButton name="Login" />
          </div>
        </div>

        {/* Right Buttons */}
        <div className="right-buttons mb-[40px] md:absolute right-0 top-[30px] flex flex-col gap-[30px]">
          <div className="md:mr-[20px] lg:mr-[-30px] animate-slideTopDelay7">
            <MenuButton name="About" />
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px] animate-slideTopDelay8">
            <MenuButton name="Core Team" />
          </div>
          <div className="md:mr-[-140px] lg:mr-[-180px] animate-slideTopDelay9">
            <MenuButton name="Referrals" />
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px] animate-slideTopDelay10">
            <MenuButton name="Sponsors" />
          </div>
          <div className="md:mr-[20px] mb-[40px] lg:mr-[-30px] animate-slideTopDelay11">
            <MenuButton name="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
