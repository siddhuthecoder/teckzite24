
import React, { useState, useEffect } from "react";
import CarAnimation from "./CarAnimation";
import Header from "../../components/Header/Header";
import RobowarAnimation from "./RobowarAnimation";

const RobowarEvents = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Car Animation Section */}
        {/* <div className="relative h-[100vh]"> 
          <CarAnimation scrollPosition={scrollPosition} /> <CarAnimation />
        </div> */}
        <RobowarAnimation />

        {/* Events Section */}
        <div className="relative bg-gray-800 text-white py-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-5">Upcoming Robowar Events</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <div className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Battle Bots</h3>
              <p>Compete with your custom-built robots in an intense battle arena!</p>
            </div>
            <div className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Robo Soccer</h3>
              <p>Showcase your robotic soccer skills in this fun competition!</p>
            </div>
            <div className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Line Following Robots</h3>
              <p>Test your robot's precision in our line-following race!</p>
            </div>
            <div className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Battle Bots</h3>
              <p>Compete with your custom-built robots in an intense battle arena!</p>
            </div>
           
          </div>
        </div>
      </main>
    </>
  );
};

export default RobowarEvents;
