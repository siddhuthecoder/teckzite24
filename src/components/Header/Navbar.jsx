import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import image from "../../assets/menu/image.svg";
import shadoweffect from "../../assets/menu/shadoweffect.svg";
import Ellipse131 from "../../assets/menu/Group 15.svg";
import Ellipse132 from "../../assets/menu/Group 54.svg";
import MenuButton from "../button/MenuButton";
import { GiCrossedSwords } from "react-icons/gi";
import {animate, motion, spring} from "framer-motion"
import { toast } from 'react-hot-toast';
import { userActions } from './../../store/userSlice';
import { useSelector, useDispatch } from "react-redux";

const Navbar = ({ setShowNav }) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);
  // const NavButton = ({ name, action, mobileDelay, desktopClasses }) => {
  //   const fadeInUp = {
  //     hidden: { opacity: 0, y: 50 }, // Initial state
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animated state
  //   };
  //   return (
  //     <div className={`animate-fadeInUp mobile-delay-${mobileDelay} ${desktopClasses}`}>
  //       <MenuButton name={name} action={action} />
  //     </div>
  //   );
  // };

  const NavButton = ({ name, action,desktopClasses,desktopDelay,mobileDelay }) => {
    const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: desktopDelay*0.1 } },
    };
    const fadeIn = {
      hidden: { opacity: 0, x: -50 }, 
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring", 
          stiffness: 100, 
          damping: 10, 
          duration: 0.5, 
          delay: mobileDelay * 0.1,
        },
      },
    };
    const dispatch = useDispatch();

    
    const isMobile = window.innerWidth <= 768; 
    const logout = () => {
      localStorage.clear();
      toast.success("User Logged out successfully");
      dispatch(userActions.removeUser());
    };
    return (
      <motion.div
        className={`${desktopClasses}`}
        initial="hidden"
        animate="visible"
        variants={isMobile ? fadeIn : fadeInUp}
        whileHover={{
          scale: 1.2,     
          transition:{
          type: "spring", 
          stiffness: 300, 
          damping: 5, 
  
          }
        }}
  
      >
        <MenuButton name={name} action={action} />
      </motion.div>
    );
  };
  
  return (
    <div
      style={{
        zIndex: "9999",
        width: "100%",
        position: "fixed",
        left: "0",
        top: "0",
        height: "100vh",
      }} 
      className="navbar_robo top-0 left-0 bg-[#1D252A] flex flex-col w-full justify-start items-center py-[40px] px-[20px] md:px-[100px] lg:px-[20px] relative overflow-y-auto md:overflow-hidden"
    >
      {/* Close Button */}
      <div
        className="w-full h-[100px] flex items-center justify-end fixed top-0 right-0"
        style={{
          zIndex: "99999",
        }}
      >
        <GiCrossedSwords 

          onClick={() => setShowNav(false)}
          className="cursor-pointer md:text-4xl mx-4 text-3xl text-white"
        />
      </div>

      {/* Main Content */}
      <div
        className="main md:relative flex flex-col justify-center items-center gap-[20px] translate-y-[50px]"
        style={{
          zIndex: "99999",
        }}
      >
        {/* Background Images */}
        <div className="backgrounds md:flex flex-col justify-center items-center gap-0 relative hidden">
          <img src={shadoweffect} className="h-[500px] w-full" alt="Shadow effect" />
          <img
            src={image}
            className="robo-img absolute top-[100px] h-[300px] w-[300px]"
            alt="Robot"
          />
        </div>

        {/* Decorative Circles */}
        <div
          className="circles relative hidden md:block md:translate-y-[-180px]"
          style={{ perspective: '1000px' }}
        >
          <div className="relative" style={{ transform: 'rotateX(75deg)' }}>
            <img
              src={Ellipse131}
              className="h-[350px] w-[500px] animate-spin"
              alt="Outer circle"
            />
          </div>
          <div
            className="absolute left-[10%] top-[50px]"
            style={{ transform: 'rotateX(75deg)' }}
          >
            <img
              src={Ellipse132}
              className="h-[250px] w-[400px] animate-spinReverse"
              alt="Inner circle"
            />
          </div>
        </div>

        {/* Left Buttons */}
        <div className="left-buttons pt-[30px] md:pt-0 md:absolute left-0 md:top-[30px] flex flex-col gap-[30px] font-bruno order-2 md:order-1">
          <NavButton
            name="Home"
            action={() =>{ setShowNav(false);;navigate("/")}}
            desktopDelay={5}
            mobileDelay={1}
            desktopClasses="md:ml-[20px] md:mt-[0px] lg:ml-[-30px] md:animate-slideTopDelay5" 
          />
          <NavButton
            name="Events"
            action={() => {setShowNav(false);navigate("/events")}}
            desktopDelay={4}
            mobileDelay={2}
            desktopClasses="md:ml-[-100px] lg:ml-[-150px] md:animate-slideTopDelay4"
          />
          <NavButton
            name="Workshops"
            action={() => {setShowNav(false);navigate("/workshops")}}
            desktopDelay={3}
            mobileDelay={3}
            desktopClasses="md:ml-[-140px] lg:ml-[-180px] md:animate-slideTopDelay3"
          />
          <NavButton
            name="Hackathon"
            action={() => {setShowNav(false);navigate("/hackathon")}}
            desktopDelay={2}
            mobileDelay={4}
            desktopClasses="md:ml-[-100px] lg:ml-[-150px] md:animate-slideTopDelay2"
          />
          <NavButton
            name="MegaExpo'25"
            action={() =>{ setShowNav(false);navigate("/expo")}}
            desktopDelay={1}
            mobileDelay={5}
            desktopClasses="md:ml-[20px] lg:ml-[-30px] md:animate-slideTopDelay1 whitespace-nowrap"
          />
        </div>

        {/* Center Button */}
        <div className="center-button md:absolute lg:top-[-20px] md:top-0 left-2/5 font-bruno order-1 md:order-2">
            
           {userData ?   <h1 className="bg-transparent font-semibold  text-xl" onClick={()=>{navigate('/profile')}}>
                            {userData.tzkid.toUpperCase()}
                          </h1> :
             <NavButton
            name="Login"
            action={() => {setShowNav(false);navigate("/register")}}
            desktopDelay={6}
            mobileDelay={6}
            desktopClasses="md:animate-slideTopDelay6"
          />
                        
          }
        </div>

        {/* Right Buttons */}
        <div className="right-buttons mb-[40px] md:absolute right-0 top-[30px] flex flex-col gap-[30px] font-bruno order-3">
          <NavButton
            name="About"
            action={() => {setShowNav(false);navigate("/about");}}
            desktopDelay={7}
            mobileDelay={7}
            desktopClasses="md:mr-[20px] lg:mr-[-30px] md:animate-slideTopDelay7"
          />
          <NavButton
            name="Robo wars"
            action={() => {setShowNav(false);navigate("/robowars")}}
            desktopDelay={8}
            mobileDelay={8}
            desktopClasses="md:mr-[-100px] lg:mr-[-150px] md:animate-slideTopDelay8"
          />
          <NavButton
            name="Referrals"
            action={() => {setShowNav(false);navigate("/referrals")}}
            desktopDelay={9}
            mobileDelay={9}
            desktopClasses="md:mr-[-140px] lg:mr-[-180px] md:animate-slideTopDelay9"
          />
          <NavButton
            name="Sponsors"
            action={() =>{ setShowNav(false);navigate("/sponsors")}}
            desktopDelay={10}
            mobileDelay={10}
            desktopClasses="md:mr-[-100px] lg:mr-[-150px] md:animate-slideTopDelay10"
          />
          <NavButton
            name="Team"
            action={() => {setShowNav(false);navigate("/Team")}}
            desktopDelay={11}
            mobileDelay={11}
            desktopClasses="md:mr-[20px]  lg:mr-[-30px] md:animate-slideTopDelay11"
          />
          <NavButton
            name="Events Schedule"
            action={() => {setShowNav(false);navigate("/EventsSchedule")}}
            desktopDelay={11}
            mobileDelay={11}
            desktopClasses="md:mr-[20px]  lg:mr-[-30px] md:animate-slideTopDelay11 md:hidden text-[13px] whitespace-nowrap"
          />
          <NavButton
            name="Updates"
            action={() => {setShowNav(false);navigate("/updates")}}
            desktopDelay={11}
            mobileDelay={11}
            desktopClasses="md:mr-[20px]  lg:mr-[-30px] md:animate-slideTopDelay11 md:hidden"
          />
          <NavButton
            name="Contact"
            action={() => {setShowNav(false);navigate("/contact")}}
            desktopDelay={11}
            mobileDelay={11}
            desktopClasses="md:mr-[20px] mb-[40px] lg:mr-[-30px] md:animate-slideTopDelay11 md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;


