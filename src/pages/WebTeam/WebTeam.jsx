// import Style from "./WebTeam.module.css";
import { WebTeamCard } from "../../constants";
import WebCard from "../../components/Shared/WebCard";
import Header from "../../components/Header/Header";
import WebBanner from "./WebBanner";
import SwipperModule from "../../components/swiper/Swiper";
import Banner from "../../components/banner/Banner";
import sri from '../../assets/img/sribabu.png'

const WebTeam = () => {
  return (
    <>
      <Header />
      <Banner text="WEB TEAM" bg="web-heading" />
      <div className="w-full my-[10%] min-h-[80vh]">
        <div className="text-center font-joti text-3xl">Web Team</div>
        <div className="w-full grid grid-cols-1 ">
          <WebCard name="sribabu" role="web" img={sri}  />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <WebCard name="sribabu" role="web" img="" />
          <WebCard name="sribabu" role="web" img="" />
          <WebCard name="sribabu" role="web" img="" />
        </div>
      </div>
    </>
  );
};

export default WebTeam;

//grid grid-cols-4 gap-x-20 max-sm:grid-cols-1 m-6 max-lg:grid-cols-2 max-lg:gap-6
