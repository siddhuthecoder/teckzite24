import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import EventDetailsCard2 from "./pages/EventDetails/EventDetailsCard2";
import TeamCard from "./components/Shared/TeamCard";
import SwiperModule from "./components/swiper/Swiper";
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
  // Referrals,
  // Speakers,
  // Sponsors,
  // Schedule,
  // About,
} from "./pages";

import { Preloader } from "./components";
import { useEffect, useState } from "react";
import Footer from "./components/Shared/Footer";
import BackgroundAnimation from "./components/Shared/BackgroundAnimation";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "./store/eventSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const eventData = useSelector((state) => state.event.data);
  const eventError = useSelector((state) => state.event.error);
  const eventStatus = useSelector((state) => state.event.status);

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

  useEffect(() => {
    if (eventError) {
      toast.error(eventError);
    }
  }, [eventError]);

  useEffect(() => {
    //fetch events
    if (eventStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eventStatus, dispatch]);

  useEffect(() => {
    console.log(eventStatus, eventError, eventData);
  }, [eventStatus, eventError, eventData]);

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
          <main className="animate-show">
            <BackgroundAnimation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/coreteam" element={<CoreTeam />} />
              <Route path="/webteam" element={<WebTeam />} />
              <Route path="/register" element={<Register />} />
              <Route path="/team" element={<TeamCard />} />
              <Route path="/swiper" element={<SwiperModule />} />
              <Route path="/eventdetails" element={<EventDetailsCard2 />} />
            </Routes>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
