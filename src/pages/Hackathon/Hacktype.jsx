import React from "react";
import { useNavigate } from "react-router-dom";

const Hacktype = () => {
  const navigate = useNavigate();

  return (
    <div className="md:px-[100px]">
      <div className="flex flex-col  py-[50px] px-[30px] rounded-lg mb-[30px]  backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg text-white ">
        <h2 className="text-3xl">About Hacakathon</h2>
      Teckzite'25 Hackathons, part of South India's largest techno-management
fest at RGUKT Nuzvid, bring together innovative minds to solve real-world
challenges through two exciting tracks: AI Hackathon and Robotic
Hackathon. Participants will experience expert mentorship, industry
exposure, and national-level competition. Top performers will earn
recognition, exciting prizes, and networking opportunities. Get ready for an
exhilarating coding experience, collaborate with tech enthusiasts, and push
your creative limits as you develop cutting-edge AI and robotic solutions at
Teckzite'25 Hackathons.
      </div>
    <div className="flex gap-[30px] mb-[100px] flex-wrap justify-center">
      <div
        className="h-[400px] w-[300px] flex justify-center items-center text-2xl font-extrabold
                   backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                   rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("/aithon")}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('aithon.jpg')",        
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2>AI Hackathon</h2>
      </div>

      <div
        className="h-[400px] w-[300px] flex justify-center items-center text-2xl 
                   backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                   rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("/robothon")}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('robotics.jpg')",       
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2>Robotics Hackathon</h2>
      </div>
    </div>
    <div className="flex flex-wrap gap-[30px] mb-[50px] justify-center">
      <img src="timeline.png" className="rounded-lg"/>
      <img src="prizepool.png" className="rounded-lg"/>
    </div>
    </div>
  );
};

export default Hacktype;
