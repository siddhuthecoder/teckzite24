import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/banner/Banner";
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
          title: "Teckzite referal",
          text: "Register for teckzite2k24 using this link",
          url: `${process.env.REACT_APP_FRONTEND_URL}/register?ref=${userData.tzkid}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share API is not supported in your browser.");
    }
  };

  return (
    <section className="absolute top-0 w-[99vw] m-auto overflow-x-hidden">
      <Header />
      <Banner text="referrals" bg="referral-heading" />
      <Table />
      <div className="my-10 w-full flex items-center justify-center">
        <button
          className="px-10 py-2 bg-gradient rounded"
          onClick={handleShare}
        >
          Refer Now
        </button>
      </div>
      <div className="w-[75%] bg-black pt-[30px] relative rounded-lg mt-[30px] m-auto h-[250px]">
        <div className="text-center relative">
          <div className="absolute w-[100px] h-[100px]"></div>
          <p className="text-[rgb(152,65,255)] font-semibold text-lg">
            Prizes for Winners
          </p>
          <div className="w-[75%] m-auto">
            <p className="text-white font-semibold text-lg">awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
