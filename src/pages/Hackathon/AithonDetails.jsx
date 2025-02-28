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

const AithonDetails = () => {
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
    <div>
      <Header />
      <div
        className="w-full flex-col p-4 mb-3 md:mt-0 flex justify-center items-center gap-[20px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/Hack.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full justify-center items-center flex-col gap-[20px]">
          <div className="partners mt-[120px] flex md:gap-[100px] flex-col md:flex-row gap-[20px]">
            <img src={amotion} alt="Amotion AI" className="rounded-md" />
            <img src={ai} className="h-[200px] rounded-md" alt="AI Logo" />
          </div>
          <HackathonProblem />
          <div className="w-11/12 max-w-4xl p-6 rounded-lg backdrop-blur-lg flex flex-col gap-[30px] bg-white/10 border border-white/20 shadow-lg text-white mb-8">
         <strong className="text-cyan-500">Round-1:</strong>
          <ul className="list-disc ml-6 mt-2 space-y-3">
                  <li className="flex items-start gap-5">
                    
                  
                      Welcome to AI-THON, the premier AI Hackathon of Teckzite'25! After
                      successful registration, teams must submit an abstract
                      outlining their proposed solution for the given problem
                      statement themes. The abstract should provide a clear and concise overview.
                    
                  </li>
                  <li className="flex items-start gap-5">
                  
                    <p>
                      <strong>Next Steps:</strong> Shortlisted teams will proceed to
                      Round 2, where they will develop and present their solutions
                      based on the problem statements provided by the hosting company.
                    </p>
                  </li>
                  <li>Submit your abstract now and take the first step towards AI-THON glory!</li>
                  <li><strong>Team Size:</strong> 3-5 members per team.</li>
                </ul>
              <li className="mt-4">
                <strong className="text-cyan-500">Round 2:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-3">
                  <li>The top performers in Round-1 will be shortlisted for Round 2 of AI-THON.</li>
                  <li>
                    <strong className="text-cyan-500">Starting Date:</strong> 09/03/2025 | <strong className="text-cyan-500">Time:</strong> 2:00 PM
                  </li>
                  <li>
                    <strong className="text-cyan-500">Ending Date:</strong> 10/03/2025 | <strong className="text-cyan-500">Time:</strong> 2:00 PM
                  </li>
                  <li>
                    <strong className="text-cyan-500">Location:</strong> RGUKT Nuzvid (Offline Event)
                  </li>
                  <li>
                    In Round 2, teams will undergo evaluations including Technical Evaluation,
                    Prototype Development, and the Final Presentation, where they will present
                    their developed prototype to esteemed judges.
                  </li>
                  <li>Be prepared to think, innovate, and code your way to the top!</li>
                  <li>We look forward to seeing you at RGUKT Nuzvid!</li>
                </ul>
              </li>
           
           
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
