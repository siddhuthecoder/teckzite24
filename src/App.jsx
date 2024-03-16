import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import EventDetailsCard2 from "./pages/EventDetails/EventDetailsCard2";
import TeamCard from "./components/Shared/TeamCard";
import SwiperModule from "./components/swiper/Swiper";
import Contact from "./pages/Contact/Contact";
import AudioBG from "./components/Audio";
import {
  CoreTeam,
  Events,
  Home,
  Register,
  WebTeam,
  Workshops,
  // EventUpdates,
  // WorkshopsDetails,
  // EventDetails,
  // Profile,
  Referrals,
  // Speakers,
  // Sponsors,
  // Schedule,
  About,
} from "./pages";

import { Preloader } from "./components";
import { useEffect, useState } from "react";
import Footer from "./components/Shared/Footer";
import BackgroundAnimation from "./components/Shared/BackgroundAnimation";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSound = () => {
      const audio = new Audio("./click.wav");
      audio.play();
    };
    document.body.addEventListener("click", handleSound);
    return () => {
      document.body.removeEventListener("click", handleSound);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "red",
        }}
        outerStyle={{
          border: "3px solid red",
        }}
      /> */}
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Toaster />
          <main className="">
            <BackgroundAnimation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/coreteam" element={<CoreTeam />} />
              <Route path="/webteam" element={<WebTeam />} />
              <Route path="/register" element={<Register />} />
              <Route path="/team" element={<TeamCard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/swiper" element={<SwiperModule />} />
              <Route path="/referrals" element={<Referrals />} />
              <Route path="/audio" element={<AudioBG />} />
              <Route path="/eventdetails" element={<EventDetailsCard2 />} />
            </Routes>
            <Footer />
            <div className="fixed audio- rounded-[50%] flex justify-center items-center bottom-0 w-[50px] h-[50px] left-0 z-[2000]">
              <AudioBG className="text-[30px] " />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
