import React, { useEffect, useState } from "react";

const Eventsbg = ({ isEventOpen }) => {
  const [cupPosition, setCupPosition] = useState("-translate-y-full");
  const [animationComplete, setAnimationComplete] = useState(false);
  const [bgOpacity, setBgOpacity] = useState("bg-opacity-5");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCupPosition("translate-y-0");
      setAnimationComplete(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      setBgOpacity(scrollPercentage > 10 ? "bg-opacity-80" : "bg-opacity-5");
    };


    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/overlaybg-cup.jpg')",
        }}
      >
        <div
          className={`absolute inset-0 bg-black ${bgOpacity}`}
          style={{
            transition: "opacity 0.8s ease-in-out", 
          }}
        ></div>
      </div>

      <div className="relative h-screen">
        <img
          src="/cup.webp" 
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
