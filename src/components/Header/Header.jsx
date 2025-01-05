import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdExit, IoMdPerson } from "react-icons/io";
import Navbar from "./Navbar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  // const pathName = window.location.pathname;
  const [showNav, setShowNav] = useState(false);
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  // const navigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    toast.success("User Logged out successfully");
    dispatch(userActions.removeUser());
  };

  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };

  return (
    <div className="header_container">
      <header className="w-full  relative h-full">
        <div
          className="absolute  lg:left-[5%] top-[35%] -translate-y-1/2 left-0 px-4 flex justify-between items-center gap-4 "
          style={{ verticalAlign: true }}
        >
          <div
            className="cursor-pointer  flex items-center justify-center gap-3"
            onClick={() => {
              handleSound();
              setShowNav((prev) => !prev);
            }}
          >
            <GiHamburgerMenu className="text-2xl lg:text-4xl" />
           
          </div>
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2"
          onClick={() => {
            handleSound();
          }}
        >
          <Link to="/">
            <img src={"/logo.png"} alt="logo" className=" w-[160px] scale-[0.7] sm:scale-[1] md:w-[300px] lg:w-[200px] xl:w-[300px] h-[100px] mr-[20px]" />
          </Link>
        </div>
        <div
          className="absolute top-[35%] lg:right-[5%] -translate-y-1/2 px-4 font-semibold  text-xl cursor-pointer inline-block right-0"
          style={{ verticalAlign: "middle" }}
          onClick={() => {
            handleSound();
          }}
        >
          {userData ? (
            <div
              onClick={() => {
                logout();
              }}
            >
            <div className="lg:flex lg:gap-[30px]">
             {userData && (
              <Link to="/profile">
                <h1 className="max-lg:hidden bg-transparent font-semibold  text-xl">
                  {userData.tzkid.toUpperCase()}
                </h1>
                <IoMdPerson className="md:hidden" size={22} />
              </Link>
            )}
              <h1 className="max-lg:hidden bg-transparent">Logout</h1>
              <IoMdExit className="hidden" size={22} />
            </div>
            </div>
          ) : (
            <Link to="/register">
              <h1 className="max-lg:hidden bg-transparent">Login/Register</h1>
              <IoMdPerson className="lg:hidden" size={22} />
            </Link>
          )}
        </div>
      </header>
      {showNav && <Navbar setShowNav={setShowNav} />}
    </div>
  );
};

export default Header;
