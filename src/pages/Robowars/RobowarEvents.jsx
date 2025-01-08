import React, { useState, useEffect } from "react";
// import Footer from "./Footer";
import CarAnimation from "./CarAnimation";
import Header from "../../components/Header/Header";

const Events = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxCarTravel = screenHeight / 2; // Maximum scroll position for car travel
  const showEvents = scrollPosition > maxCarTravel; // Show events after the car finishes

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Car animation component */}
        <CarAnimation scrollPosition={scrollPosition} screenHeight={screenHeight} />

        {/* Events Section */}
        {showEvents && (
          <div className="relative bg-gray-800 text-white py-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-5">Upcoming Events</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              <div className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Game Night</h3>
                <p>Join us for an exciting game night!</p>
              </div>
              <div className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Quiz Competition</h3>
                <p>Test your knowledge in our quiz competition!</p>
              </div>
              <div className="bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Hackathon</h3>
                <p>Compete in our annual hackathon event!</p>
              </div>
            </div>
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Events;
