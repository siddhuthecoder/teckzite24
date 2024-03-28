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
import yas from '../../assets/webteam/yash.png'

const WebTeam = () => {
  const WebTeamCard = [
    {
      id: 0,
      name: "Siddu",
      role: "Web developer",
      img: sid,
    },
    
    {
      id: 1,
      name: "Aswini Kodati",
      role: "UI/UX Designer",
      img: aswini,
    },
    {
      id: 2,
      name: "Yasvanth Hanumantu",
      role: "Web Developer",
      img: yas,
    },
    {
      id: 3,
      name: "Sribabu Mandraju",
      role: "Web Developer",
      img: sri,
    },
    {
      id: 4,
      name: "Hemanth",
      role: "Web Developer",
      img: "",
    },
  ];
  return (
    <>
      <Header />
      <Banner text="WEB TEAM" bg="web-heading" />
      <div className="w-full my-[10%] min-h-[80vh]">
        <div className="text-center font-joti text-3xl">Web Team</div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {
            WebTeamCard.map((data) => (
              <WebCard img={data.img} name={data.name} role={data.role} />
            ))
          }
        </div>
       
      </div>
    </>
  );
};

export default WebTeam;

//grid grid-cols-4 gap-x-20 max-sm:grid-cols-1 m-6 max-lg:grid-cols-2 max-lg:gap-6
