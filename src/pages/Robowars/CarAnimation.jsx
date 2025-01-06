import React, { useState } from "react";

const CarAnimation = ({ scrollPosition }) => {
  const [clicked, setClicked] = useState(false); // Track if the car is clicked
  const carMovement = scrollPosition * 1; // Adjust this value for responsiveness
  const maxMovement = Math.min(carMovement, 100); // Cap the car movement to 100%

  const handleCarClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // Reset the animation after 500ms
  };

  return (
    <div
      className="relative min-h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/cup_bg.png')", // Path to your background image
      }}
    >
      {/* Car container */}
      <div
        className={`absolute top-1/4 transform -translate-y-1/2 transition-all duration-700 ease-out`}
        style={{
          left: `${maxMovement}%`, // Smooth horizontal movement with easing
        }}
      >
        <div className="relative">
          {/* Aqua shadow under the car */}
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-r from-cyan-500 to-blue-400 opacity-70 blur-xl rounded-full"></div>

          {/* Car Image */}
          <img
            src="/FinalCar.png" // Path to your car image
            alt="Car"
            onClick={handleCarClick}
            className={`w-80 filter drop-shadow-xl hover:scale-110 transition-transform duration-500 ease-out ${
              clicked ? "scale-105" : ""
            }`}
            style={{
              transform: clicked ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.5s ease-in-out",
            }}
          />

          {/* Hover Ping Effect */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center hover:animate-ping">
            <div className="absolute w-96 h-96 rounded-full border-4 border-cyan-400 opacity-20"></div>
            <div className="absolute w-[500px] h-[500px] rounded-full border-4 border-cyan-300 opacity-10"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border-4 border-cyan-200 opacity-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAnimation;
