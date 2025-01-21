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
      <div
        className="w-full flex-col p-4 mb-3 md:mt-0 min-h-screen flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="glow">
          <span className="text-[40px] font-bruno lg:text-[60px] translate-x-[-50%] translate-y-[-90%] md:translate-y-[-50%] text-white stroke-[2px] stroke-[#05a8f3]">
            Welcome to Project Expo
          </span>
        </div>
        <div className="w-11/12 max-w-4xl p-6 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="mb-6">
            The Project Expo is an opportunity for participants to showcase
            their innovative projects and ideas to a wider audience. This event
            fosters creativity, collaboration, and learning among students and
            professionals alike.
          </p>
          <h2 className="text-2xl font-bold mb-4">Rules and Regulations</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              All participants must register before the deadline.
            </li>
            <li className="mb-2">
              Projects should adhere to the specified guidelines.
            </li>
            <li className="mb-2">
              Use of any prohibited materials or content will lead to
              disqualification.
            </li>
            <li className="mb-2">
              Participants must be present during the event to present their
              projects.
            </li>
          </ul>
          <div className="w-full flex items-center justify-between">
            <div onClick={handleRegisterClick}>
              <MenuButton title="Register" name="Register" />
            </div>
          </div>
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
