import React from "react";
import { useNavigate } from "react-router-dom";

const Hacktype = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-[30px] mb-[100px]">
      <div
        className="h-[400px] w-[300px] flex justify-center items-center text-2xl 
                   backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                   rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("/aithon")}
      >
        <h2>AI Hackathon (AI-THON)</h2>
      </div>

      <div
        className="h-[400px] w-[300px] flex justify-center items-center text-2xl 
                   backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                   rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("/robothon")}
      >
        <h2>Robotics Hackathon</h2>
      </div>
    </div>
  );
};

export default Hacktype;
