import { navigation } from "../../constants";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import Glasses from "../../assets/navbar/vr_glasses.png";
import { motion } from "framer-motion";
import BackgroundAnimation from "../Shared/BackgroundAnimation";

const Navbar = ({ setShowNav }) => {
  const pathname = window.location.pathname;
  return (
    <div
      className="w-full min-h-screen relative top-0 left-0 z-[1050] bg-black"
      style={{ position: "fixed" }}
    >
      {/* <VantaBackground /> */}
      <BackgroundAnimation />
      <div
        onClick={() => setShowNav(false)}
        className="absolute right-[2.4rem] z-30 top-[2.4rem] cursor-pointer"
      >
        <FaTimes size={32} />
      </div>
      <div className="absolute left-[2.4rem] z-30 top-[2.4rem] cursor-pointer">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setShowNav(false)}
        >
          <img src={logo} alt="logo" width={35} height={35} />
          <h1 className="text-2xl max-md:hidden font-semibold">
            Teckzite 2k24
          </h1>
        </Link>
      </div>
      <ul className="animate-fade  hidden lg:flex z-10 absolute  top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full max-w-[1200px] items-center justify-around">
        {navigation.map((nav, index) => {
          return (
            <motion.li
              initial={{
                y: (index + 2) % 2 == 0 ? "-100%" : "100%",
                opacity: 1,
              }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                type: "spring",
                stiffness: 400,
              }}
              key={nav.id}
              className={`odd:mt-[300px] nav_heading   ${
                pathname === nav.link && "active"
              }`}
            >
              <Link
                to={nav.link}
                onClick={() => setShowNav(false)}
                className="flex flex-col gap-0 items-center justify-center cursor-pointer h-[auto] relative"
              >
                <h1 className="text-[20px] pt-2 text-nowra top-[20px] font-koneMono h-2 absolute">
                  {nav.name}
                </h1>
                <img
                  src={Glasses}
                  alt="nav"
                  style={{ transitionDuration: "0.5s" }}
                  className="mt-0 h-[auto] lg:max-w-[120%]"
                />
              </Link>
            </motion.li>
          );
        })}
        <motion.li
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.07,
            type: "spring",
            stiffness: 200,
          }}
          className={`odd:mt-[300px] nav_heading ${
            pathname === "/register" && "active"
          }`}
        >
          <Link
            to="/register"
            onClick={() => setShowNav(false)}
            className="flex flex-col gap-0 items-center justify-center cursor-pointer h-[auto] relative"
          >
            <h1 className="text-[20px] pt-2 text-nowrap top-[20px] font-koneMono h-2 absolute">
              Register
            </h1>
            <img
              src={Glasses}
              alt="nav"
              className="mt-0 h-[auto] lg:max-w-[120%]"
            />
          </Link>
        </motion.li>
      </ul>
      <ul className="flex flex-col lg:hidden z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[75vh] w-full items-center scroll_in">
        {navigation.map((nav, index) => {
          return (
            <motion.li
              key={nav.id}
              className="hover:scale-110"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Link
                to={nav.link}
                className="flex items-center justify-center gap-3"
              >
                <img
                  src={Glasses}
                  alt="nav"
                  className="mt-3 h-[auto] min-w-[170px] max-lg:h-[90px] relative"
                />
                <h1 className="text-lg text-nowrap pb-6 font-koneMono h-2 absolute">
                  {nav.name}
                </h1>
              </Link>
            </motion.li>
          );
        })}
        <motion.li
          className="hover:scale-110"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 9 * 0.07,
            type: "spring",
            stiffness: 200,
          }}
        >
          <Link
            to="/register"
            className="flex items-center justify-center gap-3"
          >
            <img
              src={Glasses}
              alt="nav"
              className="mt-3 h-[auto] min-w-[170px] max-lg:h-[90px] relative"
            />
            <h1 className="text-lg text-nowrap pb-6 font-koneMono h-2 absolute">
              Register
            </h1>
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default Navbar;
