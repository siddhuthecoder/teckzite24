import { NavLink } from "react-router-dom";
import Style from "./Referrals.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TableCard from "./TableCard";
import { useState } from "react";
import Header from '../../components/Header/Header'
import Banner from '../../components/banner/Banner'
import Table from "./TableCard";

const Referrals = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <section className="absolute top-0 w-[99vw] m-auto overflow-x-hidden">
      <Header />
      <Banner text="referrals" bg="referral-heading" />
      <Table />
      <div className="w-[75%] bg-black pt-[30px] relative rounded-lg mt-[30px] m-auto h-[250px]">
        <div className="text-center relative">
          <div className="absolute w-[100px] h-[100px]">
            {/* <img src="./t-shirt.png" /> */}
          </div>
          <p className="text-[rgb(152,65,255)] font-semibold text-lg">
            Prizes for Winners
          </p>
          <div className="w-[75%] m-auto">
            <p className="text-white font-semibold text-lg">
              awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
