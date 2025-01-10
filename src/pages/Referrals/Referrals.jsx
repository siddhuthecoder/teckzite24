import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Table from "./TableCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchRefs } from "../../store/refSlice";

const Referrals = () => {
  const dispatch = useDispatch();
  const refError = useSelector((state) => state.ref.error);
  const refStatus = useSelector((state) => state.ref.status);
  const userData = useSelector((state) => state.user.data);

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
          title: "Teckzite 2k24 referral",
          text: "Register for Teckzite2k24 using this link",
          url: `${process.env.REACT_APP_FRONTEND_URL}/register?ref=${userData.tzkid}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share API is not supported in your browser.");
    }
  };

  return (
    <section
      className="fixed top-2 w-full min-h-screen m-auto overflow-x-hidden bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/referralsbg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover", // Ensures the background image covers the container
        backgroundPosition: "center", // Centers the image
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Table />
        <div className="my-10 w-full flex items-center justify-center">
          <button
            className="px-10 py-2 bg-gradient rounded mb-[40px]"
            onClick={handleShare}
          >
            Refer Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
