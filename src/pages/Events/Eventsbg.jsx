import React, { useEffect, useState } from "react";

const Eventsbg = () => {
  const [cupPosition, setCupPosition] = useState("-translate-y-full");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCupPosition("translate-y-0");
      setAnimationComplete(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Fixed Overlay Background with Black Shade */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/overlaybg-cup.jpg')", // Overlay background image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black shade */}
      </div>

      {/* Animated Cup */}
      <div className="relative h-screen ">
        <img
          src="/cup.webp" // Path to the cup image
          alt="Cup"
          className={`absolute left-1/2 transform -translate-x-1/2 transition-transform duration-1000 ease-in-out ${
            animationComplete ? "" : cupPosition
          }`}
          style={{
            top: "27%",
            height: "80%",
          }}
        />
      </div>
    </div>
  );
};

export default Eventsbg;
