// import Style from "./WebTeam.module.css";
import { WebTeamCard } from "../../constants";
import WebCard from "../../components/Shared/WebCard";
import Header from "../../components/Header/Header";
import WebBanner from "./WebBanner";
import SwipperModule from "../../components/swiper/Swiper";
import Banner from "../../components/banner/Banner";
import sri from '../../assets/webteam/sribabu.png'
import sid from '../../assets/webteam/sid.png'
import aswini from '../../assets/webteam/aswini.jpg'
import yas from '../../assets/webteam/yaswanth.jpg'

const WebTeam = () => {
  return (
    <>
      <Header />
      <Banner text="WEB TEAM" bg="web-heading" />
      <div className="w-full my-[10%] min-h-[80vh]">
        <div className="text-center font-joti text-3xl">Web Team</div>
        <div className="w-full grid grid-cols-1 ">
          <WebCard name="Siddardha" role="Full stack (lead)" img={sid}  />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto">
          <WebCard name="Yaswanth" role="Full stack" img={sri} />
          <WebCard name="sribabu" role="Full stack" img={yas} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto">
          <WebCard name="Hemanth" role="Full stack" img="" />
          <WebCard name="sribabu" role="Full stack" img="" />
        </div>
      </div>
    </>
  );
};

export default WebTeam;

//grid grid-cols-4 gap-x-20 max-sm:grid-cols-1 m-6 max-lg:grid-cols-2 max-lg:gap-6
