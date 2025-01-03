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
        width: "100%",
        heightL: "100vh",
        position: "absolute",
        left: "0",
        top: "0",
      }}
      className="md:h-screen min-h-screen navbar_robo top-0 left-0 bg-[#1D252A] flex flex-col w-full justify-center items-center md:overflow-x-hidden overflow-y-auto py-[40px] px-[20px] md:px-[100px] lg:px-[20px] relative"
    >
      {/* Close Button */}
      <div
        className="w-full h-[100px] flex items-center justify-end fixed top-0 right-0"
        style={{
          zIndex: "99999",
        }}
      >
        <IoMdClose
          onClick={() => {
            setShowNav(false);
          }}
          className="cursor-pointer md:text-4xl mx-4 text-2xl text-white"
        />
      </div>

      {/* Main Content */}
      <div
        className="main md:relative flex flex-col justify-center items-center gap-[20px]"
        style={{
          zIndex: "99999",
        }}
      >
        {/* Background Images */}
        <div className="backgrounds md:flex flex-col justify-center items-center gap-0 relative hidden">
          <img src={shadoweffect} className="h-[500px] w-full" />
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
            className="h-[32px] w-[450px] absolute left-[10%] top-[25%]"
          />
        </div>

        {/* Left Buttons */}
        <div className="left-buttons pt-[30px] md:pt-0 md:absolute left-0 md:top-[30px] flex flex-col gap-[30px] font-bruno">
          <div className="md:ml-[20px] mt-[170px] md:mt-[0px] lg:ml-[-30px] animate-slideTopDelay5">
            <MenuButton
              name="Home"
              action={() => navigate("/")}
            />
          </div>
          <div className="md:ml-[-100px] lg:ml-[-150px] animate-slideTopDelay4">
            <MenuButton
              name="Events"
              action={() => navigate("/events")}
            />
          </div>
          <div className="md:ml-[-140px] lg:ml-[-180px] animate-slideTopDelay3">
            <MenuButton
              name="Workshops"
              action={() => navigate("/workshops")}
            />
          </div>
          <div className="md:ml-[-100px] lg:ml-[-150px] animate-slideTopDelay2">
            <MenuButton
              name="Web Team"
              action={() => navigate("/web-team")}
            />
          </div>
          <div className="md:ml-[20px] lg:ml-[-30px] animate-slideTopDelay1">
            <MenuButton
              name="Updates"
              action={() => navigate("/updates")}
            />
          </div>
        </div>

        {/* Center Button */}
        <div className="center-button md:absolute lg:top-[-20px] md:top-0 left-2/5 animate-slideTopDelay6 font-bruno">
          <div>
            <MenuButton
              name="Login"
              action={() => navigate("/login")}
            />
          </div>
        </div>

        {/* Right Buttons */}
        <div className=" right-buttons mb-[40px] md:absolute right-0 top-[30px] flex flex-col gap-[30px] font-bruno">
          <div className="md:mr-[20px] lg:mr-[-30px] animate-slideTopDelay7">
            <MenuButton
              name="About"
              action={() => navigate("/about")}
            />
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px] animate-slideTopDelay8">
            <MenuButton
              name="Core Team"
              action={() => navigate("/core-team")}
            />
          </div>
          <div className="md:mr-[-140px] lg:mr-[-180px] animate-slideTopDelay9">
            <MenuButton
              name="Referrals"
              action={() => navigate("/referrals")}
            />
          </div>
          <div className="md:mr-[-100px] lg:mr-[-150px] animate-slideTopDelay10">
            <MenuButton
              name="Sponsors"
              action={() => navigate("/sponsors")}
            />
          </div>
          <div className="md:mr-[20px] mb-[40px] lg:mr-[-30px] animate-slideTopDelay11">
            <MenuButton
              name="Contact"
              action={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
