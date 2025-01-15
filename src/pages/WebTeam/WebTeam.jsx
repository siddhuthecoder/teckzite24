// import Style from "./WebTeam.module.css";
import WebCard from "../../components/Shared/WebCard";
import Header from "../../components/Header/Header";
import Banner from "../../components/banner/Banner";
import sri from "../../assets/webteam/sribabu.png";
import sid from "../../assets/webteam/sidd.png";
import aswini from "../../assets/webteam/ash.png";
import yash from "../../assets/webteam/yash.png";
import hemu from "../../assets/webteam/hemu.png";
import Animation from "../../components/Animation";
const WebTeam = () => {
  const WebTeamCard = [
    {
      id: 0,
      name: "Siddu from  Srikakulam",
      role: "Web Manager",
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
      role: "Fullstack Developer",
      img: yash,
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
      img: hemu,
    },
  ];
  return (
    <>
      <Header />
      <Banner text="WEB TEAM" bg="web-heading" />
      <div className="w-full my-[10%] min-h-[80vh]">
        <Animation/>
        <div className="text-center font-bruno text-3xl">Web Team</div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {WebTeamCard.map((data) => (
            <WebCard img={data.img} name={data.name} role={data.role} />
          ))}
        </div>
      </div>
    </>
  );
};
export default WebTeam;
