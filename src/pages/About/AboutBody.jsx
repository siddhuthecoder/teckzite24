import React from "react";
import i1 from "../../assets/img/about/img01.webp";
import i2 from "../../assets/img/about/img02.webp";
import i3 from "../../assets/img/about/img03.webp";
import i4 from "../../assets/img/about/img04.webp";
import i5 from "../../assets/img/about/img05.webp";
import i6 from "../../assets/img/about/img06.webp";
import i7 from "../../assets/img/about/img07.webp";
import i8 from "../../assets/img/about/img08.webp";
import i9 from "../../assets/img/about/img09.webp";
import i10 from "../../assets/img/about/img10.webp";
import i11 from "../../assets/img/about/img11.webp";
import i12 from "../../assets/img/about/img12.webp";
import Humanhand from "../../assets/Animation/Humanhand.png";
import Robohand from "../../assets/Animation/Robohand.png";
import { useState, useEffect } from "react";
import Animation from "../../components/Animation";
const AboutBody = () => {
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
      <div
        className="w-full min-h-[100vh] relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/aboutbg.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* <div className="relative w-full h-screen">
              <div
                className="fixed top-0 left-0 w-full h-screen pointer-events-none bg-transparent"
                style={{ zIndex: 0 }}
              >
                <div className="w-screen h-screen relative bg-transparent">
                  <img
                    src={Humanhand}
                    alt="Human Hand"
                    style={{
                      position: "absolute",
                      top: -scrollPosition * 0.8,
                      left: -scrollPosition * 0.6,
                      transition: "top 0.1s, left 0.1s",
                    }}
                    className="w-[90%] h-[80%] bg-transparent"
                  />
                  <img
                    src={Robohand}
                    alt="Robo Hand"
                    style={{
                      position: "absolute",
                      bottom: -scrollPosition * 1,
                      right: -scrollPosition * 0.4,
                      transition: "bottom 0.1s, right 0.1s",
                    }}
                    className="w-[90%] h-[80%] bg-transparent"
                  />
                </div>
              </div>
            </div> */}
            <Animation title="About"/>
        {/* Main content */}
        <div className="relative ">
          <div className="text-center font-bold text-4xl my-7 text-white font-joti">
            ABOUT
          </div>
          <div
            className="w-[97%] max-w-[1200px] border-[#068feb] rounded-[5px] border-[2px] flex
            justify-center items-center mx-auto min-h-[400px] backdrop-blur-md relative bg-white bg-opacity-10"
          >
            <div className="mx-3 ">
              <p className="px-3 mt-3" style={{ textIndent: "30px" }}>
                Teckzite is a national-level technological extravaganza that
                ignites young minds with its unique vision for the future of
                technology. Organized by the SDCAC wing of RGUKT Nuzvid, it
                serves as South India's largest pageant. Our vision for Teckzite
                is to not only impart knowledge and deepen thinking but also to
                explore new horizons in technology.
              </p>
              <p className="px-3 mt-3" style={{ textIndent: "30px" }}>
                The event this time spans over 2 days and 3 nights, packed with a
                wide array of competitions, exhibitions, and entertainment
                activities. Participants engage in various technical competitions
                ranging from coding challenges, robotics competitions, circuit
                designing, to hackathons. These events provide students with the
                opportunity to apply their theoretical knowledge to real-world
                problems, fostering innovation and critical thinking.
              </p>
              <p className="px-3 mt-3" style={{ textIndent: "30px" }}>
                Moreover, Teckzite often hosts workshops and seminars conducted by
                industry experts and academics. These sessions cover a wide range
                of topics including the latest technological advancements, career
                guidance, entrepreneurship, and emerging trends in various fields.
                Beyond the competitive events and workshops, fun activities,
                gaming zones, cultural performances, and celebrity appearances add
                an element of entertainment and excitement to the festival,
                creating a vibrant and dynamic atmosphere.
              </p>
              <p className="px-3 mt-3 mb-3" style={{ textIndent: "30px" }}>
                Every time, the event comes with a new theme, aiming to inspire
                creativity and innovation among participants. The theme for this
                year's Teckzite is METAVERSE, a virtual reality space, where
                people can interact, play and work in a digital world. The theme
                is to impart knowledge on students to know more about Virtual
                Reality and Augmented Reality. The future of technology lies in
                the hands of metaverse "Metaverse," embodies innovation,
                creativity, and the exploration of new frontiers in technology.
                Participants are encouraged to envision and create their own
                interpretations of the metaverse, pushing the boundaries of
                virtual reality, social interaction, and digital experiences.
                Through workshops, competitions, and discussions, Teckzite aims to
                inspire and empower students to contribute to the ongoing
                evolution of the metaverse and shape the future of
                digital technology.
              </p>
            </div>
          </div>

          <div className="text-center font-bold text-4xl my-10 text-white font-joti">
            MEMORIES
          </div>
          <div className="w-full my-3 mb-[80px] ">
            <div className="memos w-[97%] max-w-[1200px] mx-auto">
              <img alt="tzkimg" className="bg-gray-400 memo-1" src={i1} />
              <img alt="tzkimg" className="bg-gray-400 memo-2" src={i2} />
              <img alt="tzkimg" className="bg-gray-400 memo-3" src={i3} />
              <img alt="tzkimg" className="bg-gray-400 memo-4" src={i4} />
              <img alt="tzkimg" className="bg-gray-400 memo-5" src={i5} />
              <img alt="tzkimg" className="bg-gray-400 memo-6" src={i6} />
              <img alt="tzkimg" className="bg-gray-400 memo-7" src={i7} />
              <img alt="tzkimg" className="bg-gray-400 memo-8" src={i8} />
              <img alt="tzkimg" className="bg-gray-400 memo-9" src={i9} />
              <img alt="tzkimg" className="bg-gray-400 memo-10" src={i10} />
              <img alt="tzkimg" className="bg-gray-400 memo-11" src={i11} />
              <img alt="tzkimg" className="bg-gray-400 memo-12" src={i12} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBody;

