import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import RegistrationModal from "./ProjectExpoModal";
import MenuButton from "../../components/button/MenuButton";
import Header from "../../components/Header/Header";
  const ProjectExpo = () => {
  const userData = useSelector((state) => state.user.data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    if (!userData || Object.keys(userData).length === 0) {
      toast.error("Please login to register for the project expo");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full flex-col h-screen flex justify-center items-center">
        <div className="glow">
          <span className="text-[40px] font-bruno lg:text-[60px] translate-x-[-50%] translate-y-[-90%] md:translate-y-[-50%] text-white stroke-[2px] stroke-[#05a8f3]">
            Welcome to Project Expo
          </span>
        </div>
        <div onClick={handleRegisterClick}>
          <MenuButton title="Register" name="Register" />
        </div>
        {isModalOpen && (
          <RegistrationModal
            onClose={() => setIsModalOpen(false)}
            userData={userData}
          />
        )}
      </div>
    </>
  );
};

export default ProjectExpo;
