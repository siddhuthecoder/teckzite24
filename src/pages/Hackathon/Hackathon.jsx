import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Animation from "../../components/Animation";
import MenuButton from "../../components/button/MenuButton";
import Header from "../../components/Header/Header";
import RegistrationModal from "./RegistartionModal";
import HackathonProblem from "./HackProblem";
import Hacktype from "./Hacktype";
const Hackathon= () => {
  const userData = useSelector((state) => state.user.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        className="w-full flex-col p-4 mb-3 md:mt-0 min-h-screen flex justify-center items-center gap-[20px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('contact_bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       <Animation title="Hacakthon"/>
       

        {/* <h2 className="text-[30px]">Problem Statements</h2>
        <HackathonProblem /> */}
        <Hacktype/>
      
      </div>
    </>
  );
};

export default Hackathon;
