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
      <div className="w-full h-[100vh] flex justify-center items-center">
        <SwipperModule data={WebTeamCard} />
      </div>
    </>
  );
};

export default WebTeam;

//grid grid-cols-4 gap-x-20 max-sm:grid-cols-1 m-6 max-lg:grid-cols-2 max-lg:gap-6
