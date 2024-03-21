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

  return (
    <section className="absolute top-0 w-[99vw] m-auto overflow-x-hidden">
      <Header />
      <Banner text="referrals" bg="referral-heading" />
      <Table />
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
