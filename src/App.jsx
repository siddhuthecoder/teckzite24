import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import TeamCard from "./components/Shared/TeamCard";
import SwiperModule from "./components/swiper/Swiper";
// import Contact from "./pages/contact/Contact";
import AudioBG from "./components/Audio";
import Referrals from "./pages/Referrals/Referrals";
import EventDetailsCard3 from "./pages/EventDetails/EventDetailsCard3";
import SpeakersCard from "./components/Shared/SPcard";
import CertificatesUser from "./pages/CertificatesUser/CertificatesUser";
import EWschedule from "./pages/Schedule/EWschedule";
import RobowarEvents from "./pages/Robowars/RobowarEvents"
import Team from "./pages/Team/Team"
import Teamcore from "./pages/Team/Teamcore";
import Teamweb from "./pages/Team/Teamweb";

import {
  CoreTeam,
  Events,
  // Home,
  Register,
  Workshops,
  // EventUpdates,
  // WorkshopsDetails,
  // EventDetails,
  Profile,
  // Referrals,
  // Speakers,
  Sponsors,
  Schedule,
  About,
  // EventUpdates,
  ScrollHome,
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
import WorkshopDetails from "./pages/WorkshopDetails/WorkshopDetails";
import { fetchUser } from "./store/userSlice";
import  PageNotFound  from "./components/PageNotFound";

import ComingSoon from "./components/ComingSoon";
import Home from "./pages/home1/home";
import ParticlesComponent from "./components/home_banneer/Particle";
import CertificatesWorkshop from "./pages/CertificatesWorkshop/CertificatesWorkshop";

import ProjectExpo from "./pages/ProjectExpo/ProjectExpo";
import Contact from "./pages/Register/Contact";

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
    // document.body.addEventListener("click", handleSound);
    return () => {
      // document.body.removeEventListener("click", handleSound);
    };
  }, []);

  const ctrlShiftKey = (e, keycode) => {
    return e.ctrlKey && e.shiftKey && e.keyCode === keycode.charCodeAt(0);
  };

  // useEffect(() => {
  //   const preventRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleKeyDown = (e) => {
  //     if (
  //       e.keyCode === 123 ||
  //       ctrlShiftKey(e, "I") ||
  //       ctrlShiftKey(e, "J") ||
  //       ctrlShiftKey(e, "C") ||
  //       (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   window.document.addEventListener("contextmenu", preventRightClick);
  //   window.document.addEventListener("keydown", handleKeyDown);
  // }, []);

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
        <Preloader setLoading={setLoading} loading={loading} />
      ) : (
        <>
          <Toaster />
          <main className="animate-show">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/coreteam" element={<ComingSoon />} />
              {/* <Route path="/coreteam" element={<ComingSoon />} /> */}
              {/* <Route path="/webteam" element={<WebTeam />} /> */}
              <Route path="/register" element={<Register />} />
              <Route path="/team" element={<ComingSoon />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/contact" element={<ComingSoon />} />
              <Route path="/swiper" element={<SwiperModule />} />
              <Route path="/referrals" element={<Referrals />} />
              <Route path="/audio" element={<AudioBG />} />
              <Route path="/card" element={<SpeakersCard />} />
              <Route path="/schedule" element={<ComingSoon />} />
              <Route path="/card2" element={<EWschedule />} />
              <Route path="/eventdetails/:id" element={<EventDetailsCard3 />} />
              {/* <Route path="/eventupdates" element={<ComingSoon />} /> */}
              <Route path="/eventupdates" element={<ComingSoon />} />
              <Route path="/EventsSchedule" element={<ComingSoon />} />
              <Route path="/updates" element={<ComingSoon />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/Teamcore" element={<Teamcore />} />
              <Route path="/Teamweb" element={<Teamweb />} />
              <Route
                path="/workshopdetails/:id"
                element={<WorkshopDetails />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/certficates/users" element={<CertificatesUser />} />
              <Route path="/certficates/workshops" element={<CertificatesWorkshop />} />
              <Route path="/stalls" element={<ComingSoon />} />
              {/* <Route path="/robowars" element={<ComingSoon />} /> */}

                
              <Route path="/robowars" element={<RobowarEvents></RobowarEvents>}/>  
              <Route path="/expo" element={<ProjectExpo/>}/>    
              <Route path="*" element={<PageNotFound />} />


            
            </Routes>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;