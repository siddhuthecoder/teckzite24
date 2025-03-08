import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HackathonProblem from "./HackProblem";
import ai from "../../assets/Hackathon/ailog.jpg";
import amotion from "../../assets/Hackathon/amotionaiblack.jpg";
import MenuButton from "../../components/button/MenuButton";
// import RegistrationModal from "./RegistartionModal";
import RobothonModal from "./RobothonModal";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
const RobothonDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector((state) => state.user.data);

  const handleRegisterClick = () => {
    // if (!userData || Object.keys(userData).length === 0) {
    //   toast.error("Please login to register for the Robothon");
    // } else {
    //   setIsModalOpen(true);
    // }
    toast.error("Registrations for this hackathon are closed");
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
          {/* <div className="partners mt-[120px] flex gap-[100px]">
            <img src={amotion} alt="Amotion AI" />
            <img src={ai} className="h-[200px]" alt="AI Logo" />
          </div>
          <HackathonProblem /> */}
          <h1 className="md:text-7xl text-cyan-500">ROBOTHON</h1>

          <div className="w-11/12 max-w-4xl p-6 rounded-lg backdrop-blur-lg flex flex-col gap-[30px] bg-white/10 border border-white/20 shadow-lg text-white mb-8">
            <ul className="list-disc ml-6 text-white">
              <li>
                <strong className="text-cyan-500">Round 1:</strong>
                <ul className="list-circle ml-6 mt-2">
                  <li>
                    Welcome to ROBO-THON, the premier Hackathon of Teckzite'25!
                    After successful registration, teams are invited to
                    participate in Round 1, which will be quiz on basics of
                    Robotics and IoT etc.
                  </li>
                  <li>
                    Next Steps: Shortlisted teams will proceed to Round 2, where
                    they will develop and present their solutions. Don't miss
                    this opportunity to showcase your skills and innovation!
                  </li>
                  <li>
                    Team Size: 3-5 members per team (The team should consist of
                    atmost one E4 member and two E3 members only)
                  </li>
                </ul>
              </li>
              <li className="mt-4">
                <strong className="text-cyan-500">Round 2:</strong>
                <ul className="list-circle ml-6 mt-2">
                  <li>Date: 09/03/2025 | Time: 2:00 PM</li>
                  <li>
                    <span className="text-cyan-500">Starting Date:</span>{" "}
                    09/03/2025 | Time: 2:00PM
                  </li>
                  <li>
                    <span className="text-cyan-500">Ending Date:</span>{" "}
                    10/03/2025 | Time: 2:00PM
                  </li>
                  <li>
                    <span className="text-cyan-500">Location:</span> RGUKT
                    Nuzvid (Offline Event)
                  </li>
                  <li>
                    In Round 2, teams will undergo solving problem statements
                    with the provided Robotic Kits to design their prototypes.
                    Team will Present developed prototype and solution to the
                    esteemed judges.
                  </li>
                  <li>Innovate, Automate, Dominate.</li>
                  <li>We look forward to seeing you at RGUKT Nuzvid!</li>
                </ul>
              </li>
            </ul>
            <h3>FOR QUERIES:</h3>
            <h2>Srinivas B - +91 90630 46555 | n200328@rguktn.ac.in</h2>
            <div className="w-full flex items-center justify-between mx-[40px]">
              <div onClick={handleRegisterClick}>
                <MenuButton title="Register" name="Register" />
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <RobothonModal
            onClose={() => setIsModalOpen(false)}
            userData={userData}
          />
        )}
      </div>
    </div>
  );
};

export default RobothonDetails;
