import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import Navbar from "./Navbar";
import { useState } from "react";
import navlogo from "../../assets/navbar/navlogo.png";
import { useSelector } from "react-redux";

const Header = () => {
  // const pathName = window.location.pathname;
  const [showNav, setShowNav] = useState(false);
  const userData = useSelector((state) => state.user.data);

  return (
    <div className="header_container">
      <header className="w-full relative h-full">
        <div
          className="absolute top-[35%] -translate-y-1/2 left-0 px-4 flex items-center gap-4 "
          style={{ verticalAlign: true }}
        >
          <div
            className="cursor-pointer"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <GiHamburgerMenu size={22} />
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={navlogo} alt="logo" className="w-[300px] h-[100px]" />
          </Link>
        </div>
        <div
          className="absolute top-[35%] -translate-y-1/2 px-4 font-semibold font-koneMono text-xl cursor-pointer inline-block right-0"
          style={{ verticalAlign: "middle" }}
        >
          {userData ? (
            <Link to="/profile">
              <h1 className="max-md:hidden bg-transparent">
                {userData.tzkid.toUpperCase()}
              </h1>
              <IoMdPerson className="md:hidden" size={22} />
            </Link>
          ) : (
            <Link to="/register">
              <h1 className="max-md:hidden bg-transparent">Login</h1>
              <IoMdPerson className="md:hidden" size={22} />
            </Link>
          )}
        </div>
      </header>
      {showNav && <Navbar setShowNav={setShowNav} />}
    </div>
  );
};

export default Header;
