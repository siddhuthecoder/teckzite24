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

      setBgOpacity(scrollPercentage > 10 ? "bg-opacity-70" : "bg-opacity-5");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div
        className="fixed top-2 left-0 w-full h-screen bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/overlaybg-cup.jpg')",
        }}
      >
        <div
          className={`absolute inset-0 bg-black bg-opacity-5 ${bgOpacity}`}
          style={{
            transition: "opacity 0.8s ease-in-out",
          }}
        ></div>
      </div>

      {/* Cup Animation */}
      <div className="relative h-screen">
        <img
          src="/cup.webp"
          alt="Cup"
          className={`absolute left-1/2 md:scale-100 scale-[1.75] md:top-1/4 top-[45%] transform -translate-x-1/2 transition-transform duration-1000 ease-in-out ${
            animationComplete ? "" : cupPosition
          }`}
        />
      </div>

      {/* Responsive Classes */}
      <style jsx>{`
        img {
          width: 100%; /* Default width for smaller devices */
          height: auto;
        }
        @media (min-width: 640px) {
          img {
            width: 70%; /* Adjusted width for small screens */
          }
        }
        @media (min-width: 768px) {
          img {
            width: 85%; /* Adjusted width for tablets */
          }
        }
        @media (min-width: 1024px) {
          img {
            width: 37%; /* Adjusted width for laptops and larger screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Eventsbg;

