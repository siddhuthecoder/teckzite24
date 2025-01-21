import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Animation from "../../components/Animation";
import { useSelector } from "react-redux";
import EWCard from "../../components/Shared/EWCard";

const RobowarEvents = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const eventData = useSelector((state) => state.event.data);

  useEffect(() => {
    if (eventData) {
      // Filter events where dep is "ROBOTICS"
      const filtering = eventData.filter((data) => data.dep === "ROBOTICS");
      setFilteredEvents(filtering);
    }
  }, [eventData]);

  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };

  return (
    <main>
      <div
        className="w-full min-h-screen flex flex-col items-center relative overflow-hidden font-bruno"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('/eventdetailsbg.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <Header />

        {/* Animation */}
        <Animation title="RoboWars" />

        {/* Event Content */}
        <div className="relative w-full flex flex-col min-h-[85vh] pb-5 font-bruno">
          {/* Title */}
          <div className="text-center text-3xl mt-5 mb-10 text-white font-bruno">
            Robotics Events
          </div>

          {/* Cards Section */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {filteredEvents.length > 0 ? (
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {filteredEvents.map((event, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={handleSound}
                  >
                    <EWCard img={event.img} id={event._id} name={event.name} />
                  </div>
                ))}
              </div>
            ) : (
              // No RoboWars Found Message
              <div className="flex items-center justify-center w-full min-h-[400px]">
                <p className="text-zinc-300 text-lg font-bruno">
                  No RoboWars Found
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RobowarEvents;
