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
    <div className="fixed top-0 left-0 w-full h-full bg-black z-50 overflow-hidden">
      <BackgroundAnimation />
      <div className="absolute top-[2.4%] left-[2.4%] z-60 cursor-pointer">
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
      <div className="absolute top-[2.4%] right-[2.4%] z-60 cursor-pointer">
        <FaTimes size={32} onClick={() => setShowNav(false)} />
      </div>
      <ul className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-lg:h-[90vh] max-lg:mt-[10vh] max-lg:mb-[20px] max-lg:py-[20px] scroll_in text-white flex flex-col items-center lg:flex-row">
        {navigation.map((nav, index) => (
          <motion.li
            key={nav.id}
            initial={{
              y: (index + 2) % 2 === 0 ? "-100%" : "100%",
              opacity: 0,
            }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className={`lg:odd:mt-[150px] nav_heading ${
              pathname === nav.link && "active"
            }`}
          >
            <Link
              to={nav.link}
              onClick={() => setShowNav(false)}
              className="flex flex-col gap-0 items-center justify-around cursor-pointer relative"
            >
              <h1 className="text-[20px] pt-1 text-nowra top-[20px] font-koneMono h-2 absolute">
                {nav.name}
              </h1>
              <img
                src={Glasses}
                alt="nav"
                className="mt-0 h-auto max-w-[160px] lg:max-w-[100%]"
                style={{ transitionDuration: "0.5s" }}
              />
            </Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: navigation.length * 0.07 }}
          className={`lg:odd:mt-[150px] nav_heading ${
            pathname === "/register" && "active"
          }`}
        >
          <Link
            to="/register"
            onClick={() => setShowNav(false)}
            className="flex flex-col gap-0 items-center justify-center cursor-pointer relative"
          >
            <h1 className="text-[20px] pt-1 text-nowrap top-[20px] font-koneMono h-2 absolute">
              Login
            </h1>
            <img
              src={Glasses}
              alt="nav"
              className="mt-0 h-auto max-w-[160px] lg:max-w-[100%]"
            />
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default Navbar;
