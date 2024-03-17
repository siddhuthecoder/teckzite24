// import Style from "./WebTeam.module.css";
import { WebTeamCard } from "../../constants";
import WebCard from "../../components/Shared/WebCard";
import Header from "../../components/Header/Header";
import WebBanner from "./WebBanner";
import SwipperModule from "../../components/swiper/Swiper";

const WebTeam = () => {
  return (
    <>
      <Header />
      <WebBanner />
      <div className="w-full lg:hidden">
        <SwipperModule data={WebTeamCard} width={"max-w-[1000px]"} slidePerview={1} />
      </div>
      <div className="w-full hidden lg:block">
        <SwipperModule data={WebTeamCard} width={""} slidePerview={2} />
      </div>
    </>
  );
};

export default WebTeam;

//grid grid-cols-4 gap-x-20 max-sm:grid-cols-1 m-6 max-lg:grid-cols-2 max-lg:gap-6
