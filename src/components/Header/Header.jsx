import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdExit, IoMdPerson } from "react-icons/io";
import Navbar from "./Navbar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RiCoinsLine } from "react-icons/ri";
const Header = () => {
    const navigate =useNavigate()
  // const pathName = window.location.pathname;
  const [showNav, setShowNav] = useState(false);
  const userData = useSelector((state) => state.user.data);
  // console.log(userData)

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
    <div className="header_container relative">
      <header className="w-full relative h-full ">
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
            <GiHamburgerMenu className="text-2xl lg:text-4xl mb-2" />
            <button className=' justify-center items-center p-2 mx-auto hidden md:flex '>
                   {userData ? (
                     <div className="flex  items-center gap-[8px] relative after:content-['|'] after:absolute   after:right-[70px] ">
                       <span className="bg-gradient-to-b from-[#D7AC5D] via-[#D7AC5D] to-[#4F3025] bg-clip-text text-transparent">
                         {userData.tzkid.toUpperCase()}
                       </span>
                       <span className="text-[20px] ml-[20px]  ">
                         <RiCoinsLine className="text-[20px] text-[#D7AC5D] " />
           
                       </span>
                       <span className="bg-gradient-to-b from-[#D7AC5D] via-[#D7AC5D] to-[#4F3025] bg-clip-text text-transparent">
                         {userData?.credits}
                       </span>
                     </div>
                   ) : (
                     ""
                   )}
                 </button>
          </div>
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2"
          onClick={() => {
            handleSound();
          }}
        >
          <Link to="/">
            <img src={"/tz25_web.webp"} alt="logo"  className=" w-[150px]  md:w-[300px] lg:w-[200px] xl:w-[300px] translate-x-[-5px] translate-y-[-4px] inline-block z-0" />
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
            <div className="lg:flex ">
             {userData && (
              <Link to="/profile">
                
                <IoMdExit className="md:hidden" size={22} />
              </Link>
            )}
              <h1 className="max-lg:hidden bg-transparent">Logout</h1>
              <IoMdExit className="hidden sm:block lg:hidden" size={22} />
            </div>
            </div>
          ) : (
            <Link to="/register">
              <h1 className="max-lg:hidden bg-transparent font-bruno">Login/Register</h1>
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
