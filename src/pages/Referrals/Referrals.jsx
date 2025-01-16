import Header from "../../components/Header/Header";
import Table from "./TableCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchRefs } from "../../store/refSlice";
import Animation from "../../components/Animation";
import { useState,useEffect } from "react";
const Referals = () => {
  const dispatch = useDispatch();
  const refError = useSelector((state) => state.ref.error);
  const refStatus = useSelector((state) => state.ref.status);
  const userData = useSelector((state) => state.user.data);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (refError) {
      toast.error(refError);
    }
  }, [refError]);

  useEffect(() => {
    if (refStatus === "idle") {
      dispatch(fetchRefs());
    }
  }, [refStatus, dispatch]);

  const handleShare = () => {
    if (!userData) {
      toast.error("Login to refer");
      return;
    }

    if (navigator.share) {
      navigator
        .share({
          title: "Teckzite 2k25 referral",
          text: "Register for Teckzite2k25 using this link",
          url: `${process.env.REACT_APP_FRONTEND_URL}/register?ref=${userData.tzkid}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share API is not supported in your browser.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition)

    };
  }, []);

  
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/referralsbg.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="w-full text-white"
    >
      <section className="relative w-full  overflow-x-hidden">
      <Animation title="Referals" />
        {/* Overlay */}
        {/* Main Content */}
        <div className="relative z-5">
          <Header />
          <Table />
        </div>
      </section>
    </div>
  );
};

export default Referals;

 

  