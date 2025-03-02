import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HackathonProblem from "./HackProblem";
import ai from "../../assets/Hackathon/ailog.jpg";
import amotion from "../../assets/Hackathon/amotionaiblack.jpg";
import MenuButton from "../../components/button/MenuButton";
import RegistrationModal from "./RegistartionModal";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import sponcercard from "../../assets/img/Sponcercard.webp";

const AithonDetails = () => {
  const userData = useSelector((state) => state.user.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sponsorsData = [
    {
      sponsors: [
        {
          image: amotion,

          name: "Amotion AI",
        },
        {
          image: ai,
          name: "AISPIRE",
        },
      ],
      heading: "AI PARTNERS",
    },
  ];
  const downloadFile = () => {
    const fileUrl = `https://docs.google.com/presentation/d/12owf2vRydE6X8qrNnv9LHBChEo7YV5np/export?format=pptx`; // Export as PPTX
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.target = "_blank"; // Opens in a new tab (optional)
    anchor.rel = "noopener noreferrer";
    anchor.click();
  };
  
  const handleRegisterClick = () => {
    if (!userData || Object.keys(userData).length === 0) {
      toast.error("Please login to register for the AI Hackathon");
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <div>
      <Header />
      <div
        className="w-full flex-col p-4 mb-3 md:mt-0 flex justify-center items-center gap-[20px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('contact_bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full justify-center items-center flex-col gap-[20px] mt-[100px]">
        <h1 className="md:text-7xl text-cyan-500">AI HACKATHON</h1>

          <div className="relative">
            {sponsorsData.map((section, index) => (
              <div key={index} className="pb-[70px]">
                <div className="text-center font-bruno text-[white] text-2xl md:text-3xl">
                  {section.heading}
                </div>
                <div className="w-full flex items-center justify-center flex-wrap">
                  {section.sponsors.map((sponsor, i) => (
                    <div className="relative mt-5 w-64 cursor-pointer" key={i}>
                      <img src={sponcercard} width="100%" alt="Sponsor Card" />
                      <img
                        src={sponsor.image}
                        className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]"
                        alt={sponsor.name}
                      />
                      <h2 className="absolute top-14 text-white text-center w-[85%] text-md pl-4">
                        {sponsor.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <HackathonProblem />
          <div className="w-11/12 max-w-4xl p-6 rounded-lg backdrop-blur-lg flex flex-col gap-[30px] bg-white/10 border border-white/20 shadow-lg text-white mb-8">
          <div className="relative flex gap-5 text-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 rounded-lg">
        
        <button onClick={downloadFile} className="text-cyan-500">
          Click Here to Download the PPT format
        </button>
      </div>
            <strong className="text-cyan-500">Round-1:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-3">
              <li className="flex items-start gap-5">
                Welcome to AI-HACKATHON, the premier Hackathon of Teckzite'25!
                After successful registration, teams are invited to participate
                in Round 1, where innovation meets expertise. In Round 1, teams
                are required to submit an abstract that outlines their proposed
                solution to the given problem statement Themes. The abstract
                should provide a clear and concise overview.
              </li>
              <li className="flex items-start gap-5">
                <p>
                  <strong>Next Steps:</strong> Shortlisted teams will proceed to
                  Round 2, where they will develop and present their solutions
                  based on the specified problem statements provided by the
                  hosting company. Don't miss this opportunity to showcase your
                  AI skills and innovation!
                </p>
              </li>
              <li>
                Submit your abstract now and take the first step towards
                AI-HACKATHON glory!
              </li>
              <li>
                <strong>Team Size:</strong> 3-5 members per team.
              </li>
            </ul>
            <li className="mt-4">
              <strong className="text-cyan-500">Round 2:</strong>
              <ul className="list-disc ml-6 mt-2 space-y-3">
                <li>
                  Team made it to the next level! After a evaluation of
                  abstracts are shortlisted to Round 2 of AI-HACKATHON.
                </li>
                <li>
                  <strong className="text-cyan-500">Starting Date:</strong>{" "}
                  09/03/2025 | <strong className="text-cyan-500">Time:</strong>{" "}
                  2:00 PM
                </li>
                <li>
                  <strong className="text-cyan-500">Ending Date:</strong>{" "}
                  10/03/2025 | <strong className="text-cyan-500">Time:</strong>{" "}
                  2:00 PM
                </li>
                <li>
                  <strong className="text-cyan-500">Location:</strong> RGUKT
                  Nuzvid (Offline Event)
                </li>
                <li>
                  In Round 2, teams will undergo a series of evaluations,
                  including Technical Evaluation, Prototype Development, Final
                  Presentation (i.e. Present your developed prototype and
                  solution to the esteemed judges.)
                </li>
                <li>
                  Be prepared to think, innovate, and code your way to the top!
                </li>
                <li>We look forward to seeing you at RGUKT Nuzvid!</li>
              </ul>
            </li>
            <h3 className="text-2xl">For Queries</h3>
            <h4>K V Abhinash kumar - +91 63030 81215 | n200202@rguktn.ac.in</h4>
            <h4> Ritvik Bagati - +91 94916 05635 | n200411@rguktn.ac.in</h4>

            <div className="w-full flex items-center justify-between mx-[40px]">
              <div onClick={handleRegisterClick}>
                <MenuButton title="Register" name="Register" />
              </div>
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
    </div>
  );
};

export default AithonDetails;
