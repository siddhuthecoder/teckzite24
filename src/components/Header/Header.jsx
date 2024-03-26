import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdExit, IoMdPerson } from "react-icons/io";
import Navbar from "./Navbar";
import { useState } from "react";
import navlogo from "../../assets/navbar/navlogo.png";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // const pathName = window.location.pathname;
  const [showNav, setShowNav] = useState(false);
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
      <header className="w-full relative h-full">
        <div
          className="absolute top-[35%] -translate-y-1/2 left-0 px-4 flex items-center gap-4 "
          style={{ verticalAlign: true }}
        >
          <div
            className="cursor-pointer flex items-center justify-center gap-3"
            onClick={() =>{
              handleSound()
              setShowNav((prev) => !prev)

            }}
          >
            <GiHamburgerMenu size={22} />
            {userData && (
              <Link to="/profile">
                <h1 className="max-md:hidden bg-transparent font-semibold font-koneMono text-xl">
                  {userData.tzkid.toUpperCase()}
                </h1>
                <IoMdPerson className="md:hidden" size={22} />
              </Link>
              
            )}
            
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2" onClick={() => {
          handleSound()
        }}>
          <Link to="/">
            <img src={navlogo} alt="logo" className="w-[300px] h-[100px]" />
          </Link>
        </div>
        <div
          className="absolute top-[35%] -translate-y-1/2 px-4 font-semibold font-koneMono text-xl cursor-pointer inline-block right-0"
          style={{ verticalAlign: "middle" }}
          onClick={() => {
            handleSound()
          }}
        >
          {userData ? (
            <div onClick={() => {
              logout()
            }}>
              <h1 className="max-md:hidden bg-transparent">Logout</h1>
              <IoMdExit className="md:hidden" size={22} />
            </div>
          ) : (
            <Link to="/register">
              <h1 className="max-md:hidden bg-transparent">Login/Register</h1>
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
