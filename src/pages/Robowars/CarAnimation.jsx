import React from "react";

const CarAnimation = ({ scrollPosition }) => {
  // Calculate car movement based on scroll position relative to the viewport height
  const carMovement = Math.min((scrollPosition / window.innerHeight) * 100, 100); // Cap at 100%

  return (
    <div>
      {/* Animation Section */}
      <div
        className="relative h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/cup_bg.png')", // Path to your background image
        }}
      >
        {/* Car container */}
        <div
          className="absolute top-[50%] transform -translate-y-1/2 transition-all duration-700 ease-out"
          style={{
            left: `${carMovement}%`, // Horizontal movement controlled by scroll position
          }}
        >
          <div className="relative">
            {/* Aqua shadow under the car */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 opacity-70 blur-xl rounded-full lg:w-64 lg:h-16"></div>

            {/* Car Image */}
            <img
              src="/FinalCar.png" // Path to your car image
              alt="Car"
              className="w-40 filter drop-shadow-xl transition-transform duration-500 ease-out lg:w-80"
            />

            {/* Hover Ping Effect */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full border-2 border-cyan-400 opacity-20 lg:w-96 lg:h-96 lg:border-4"></div>
              <div className="absolute w-64 h-64 rounded-full border-2 border-cyan-300 opacity-10 lg:w-[500px] lg:h-[500px] lg:border-4"></div>
              <div className="absolute w-80 h-80 rounded-full border-2 border-cyan-200 opacity-5 lg:w-[600px] lg:h-[600px] lg:border-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="relative bg-white">
        <h2 className="text-center text-3xl font-bold py-10">Events Section</h2>
        {/* Add your Events component or content here */}
      </div>
    </div>
  );
};

export default CarAnimation;
