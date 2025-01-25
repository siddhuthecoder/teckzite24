import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Animation from "../../components/Animation";
import MenuButton from "../../components/button/MenuButton";
import Header from "../../components/Header/Header";
import RegistrationModal from "./RegistartionModal";
import HackathonProblem from "./HackProblem";
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
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/Hack.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       <Animation title="Hacakthon"/>
       

        <h2 className="text-[30px]">Problem Statements</h2>
        <HackathonProblem />
        <div className="w-11/12 max-w-4xl p-6 rounded-lg backdrop-blur-lg flex flex-col gap-[30px] bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          <ul class="list-disc ml-6 text-[white]">
            <li>
              <strong class="text-cyan-500">
                Round 1: Project Submission and Screening
              </strong>
              <ul class="list-circle ml-6 mt-2">
                <li>
                  Participants should submit a brief report (maximum of 15 pages
                  in .pdf format with provisions for search options).
                </li>
                <li>
                  The report should contain:
                  <ul class="list-decimal ml-6 mt-2">
                    <li>Methodology used</li>
                    <li>Components with specifications</li>
                  </ul>
                </li>
                <li>
                  The list of projects is provided in Annexure-I of this
                  notification. Each project is denoted with a Project Number
                  (i.e., Project-1, Project-2 respectively).
                </li>
                <li>
                  Under{" "}
                  <span class="font-semibold text-cyan-500">
                    Project No. 11
                  </span>{" "}
                  in Annexure-I, students are invited to submit their project
                  proposals, including:
                  <ul class="list-decimal ml-6 mt-2">
                    <li>Abstracts</li>
                    <li>Ideas and objectives</li>
                    <li>Methodology</li>
                    <li>Expected outcomes</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="mt-4">
              <strong class=" text-cyan-500">
                Round 2: Project Expo Presentation
              </strong>
              <ul class="list-circle ml-6 mt-2">
                <li>
                  Shortlisted participants will display their projects during
                  Teckzite'25, presenting their work to a diverse audience,
                  including peers, faculty, and industry professionals.
                </li>
                <li>
                  A jury panel will evaluate the projects during the expo based
                  on:
                  <ul class="list-decimal ml-6 mt-2">
                    <li>Creativity</li>
                    <li>Implementation</li>
                    <li>Real-world impact</li>
                  </ul>
                </li>
                <li>
                  The jury will select and announce the results for each project
                  from the list of projects enlisted in Annexure-I.
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-white pl-[30px]">
          <h3>Note :</h3>
            <ul>
            <li>The Government of India will fund the most innovative projects to
            support their advancement in product development.</li>
            <li>Team size should be Minimum 2 and Maximum 5 students are allowed</li>
            <li>To participate in the Project Expo, it is mandatory to register for Teckzite.</li>
            </ul>
      
            
          </p>
          <p className="px-[30px]">
            For more details{" "}
            <a
              href="https://docs.google.com/document/d/16waPX_korG0tVZ4Gkzlla_qAOgAT5n3bn6nDLy88N1U/edit?usp=sharing"
              className="text-cyan-500"
              target="blank"
            >
              Please go through this link
            </a>{" "}
          </p>
          <div className="w-full flex items-center justify-between mx-[40px]">
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

export default Hackathon;
