import { NavLink } from "react-router-dom";
import Style from "./Referrals.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TableCard from "./TableCard";
import { useState } from "react";
import Header from '../../components/Header/Header'
import ReferralsBanner from "./ReferralsBanner";

const Referrals = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <section className="absolute top-0 w-[99vw] m-auto overflow-x-hidden">
      <Header />
      <ReferralsBanner />
      <div className="w-[90%] max-w-[1000px] min-w-[360px] mx-auto overflow-x-auto">
        <div className="w-[100%] mt-[20px] m-auto">
          <div className="w-full text-center justify-between min-w-[700px] px-[3%] items-center py-[15px] flex gradient-bg [clip-path:polygon(50%_0%,_97%_0,_100%_50%,_97%_100%,_3%_100%,_0_50%,_3%_0)]">
            <h5 className="text-black w-[10%] min-w-[100px] font-bold text-1xl">RANK</h5>
            <h5 className="text-black w-[35%] min-w-[200px] font-bold text-1xl">NAME</h5>
            <h5 className="text-black w-[35%] min-w-[200px] font-bold text-1xl">EMAIL</h5>
            <h5 className="text-black w-[20%] min-w-[150px] font-bold text-1xl">
              REFERRALS
            </h5>
          </div>
          <TableCard
            rank={"1"}
            name={"user1"}
            email={"example@gmail.com"}
            referrals={"6"}
          />
          <TableCard
            rank={"1"}
            name={"user1"}
            email={"example@gmail.com"}
            referrals={"6"}
          />
          <TableCard
            rank={"1"}
            name={"user1"}
            email={"example@gmail.com"}
            referrals={"6"}
          />
          <TableCard
            rank={"1"}
            name={"user1"}
            email={"example@gmail.com"}
            referrals={"6"}
          />
          <TableCard
            rank={"1"}
            name={"user1"}
            email={"example@gmail.com"}
            referrals={"6"}
          />
          <TableCard
            rank={"1"}
            name={"user1"}
            email={"example@gmail.com"}
            referrals={"6"}
          />
          <TableCard
            rank={"1"}
            name={"user1"}
            email={"example@gmail.com"}
            referrals={"6"}
          />
        </div>
      </div>
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
