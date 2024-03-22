import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import EventDetailsCard2 from "./pages/EventDetails/EventDetailsCard2";
import TeamCard from "./components/Shared/TeamCard";
import SwiperModule from "./components/swiper/Swiper";
import Contact from "./pages/contact/Contact";
import AudioBG from "./components/Audio";
import Referrals from "./pages/Referrals/Referrals";
import EDcard from "./pages/EventDetails/EDcard";
import EventDetailsCard3 from "./pages/EventDetails/EventDetailsCard3";
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
  Profile,
  // Referrals,
  // Speakers,
  // Sponsors,
  // Schedule,
  About,
  EventUpdates,
} from "./pages";

import { Preloader } from "./components";
import { useEffect, useState } from "react";
import Footer from "./components/Shared/Footer";
import BackgroundAnimation from "./components/Shared/BackgroundAnimation";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "./store/notificationSlice";
import { fetchEvents } from "./store/eventSlice";
import { fetchWorkshops } from "./store/workshopSlice";
import EWCard from "./components/Shared/EWCard";
import WorkshopDetails from "./pages/WorkshopDetails/WorkshopDetails";
import { fetchUser } from "./store/userSlice";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const eventError = useSelector((state) => state.event.error);
  const eventStatus = useSelector((state) => state.event.status);

  const workshopError = useSelector((state) => state.workshop.error);
  const workshopStatus = useSelector((state) => state.workshop.status);

  const notificationError = useSelector((state) => state.notification.error);
  const notificationStatus = useSelector((state) => state.notification.status);

  const userStatus = useSelector((state) => state.user.status);

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
    const token = localStorage.getItem("token");
    if (token) {
      if (userStatus === "idle") {
        dispatch(fetchUser(token));
      }
    }
  }, [dispatch, userStatus]);

  useEffect(() => {
    if (eventError) {
      toast.error(eventError);
    }
    if (workshopError) {
      toast.error(workshopError);
    }
    if (notificationError) {
      toast.error(notificationError);
    }
  }, [eventError, workshopError, notificationError]);

  useEffect(() => {
    //fetch events
    if (eventStatus === "idle") {
      dispatch(fetchEvents());
    }
    if (workshopStatus === "idle") {
      dispatch(fetchWorkshops());
    }
    if (notificationStatus === "idle") {
      dispatch(fetchNotifications());
    }
  }, [eventStatus, workshopStatus, notificationStatus, dispatch]);

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
              <Route path="/card" element={<EWCard />} />
              <Route path="/ed" element={<EDcard />} />
              <Route path="/eventdetails/:id" element={<EventDetailsCard3 />} />
              <Route path="/eventupdates" element={<EventUpdates />} />
              <Route
                path="/workshopdetails/:id"
                element={<WorkshopDetails />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
            {/* <div className="fixed audio- rounded-[50%] flex justify-center items-center bottom-[5%]  left-[3%] z-[2000]">
              <AudioBG />
            </div> */}
          </main>
        </>
      )}
    </>
  );
}

export default App;
