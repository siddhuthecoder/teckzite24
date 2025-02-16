import Header from "../../components/Header/Header";
import Table from "./TableCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchRefs } from "../../store/refSlice";
import Animation from "../../components/Animation";
import { useState, useEffect } from "react";
import MenuButton from "../../components/button/MenuButton";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition);
    };
  }, []);

  const handleShare = () => {
    if (!userData) {
      toast.error("Login to refer");
      return;
    }

    if (navigator.share) {
      navigator
        .share({
          title: "Teckzite 2k25 Referral",
          text: "Register for Teckzite2k25 using this link",
          url: `${process.env.REACT_APP_FRONTEND_URL}/register?ref=${userData.tzkid}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share API is not supported in your browser.");
    }
  };

  return (
    <section className="relative w-full  overflow-x-hidden">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/referralsbg.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="w-full text-white"
      >
        <Header />

        <Animation title="Referals" />
        <div className="w-full max-w-[1200px] flex items-center justify-end">
          <div className="mx-2    ">
            <MenuButton name={"Refer Now "}  action={handleShare} />
          </div>
        </div>
        <div className="relative z-5 h-auto  w-full overflow-x-auto">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Referals;
