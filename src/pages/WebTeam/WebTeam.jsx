// import Style from "./WebTeam.module.css";
import { WebTeamCard } from "../../constants";
import WebCard from "../../components/Shared/WebCard";
import Header from "../../components/Header/Header";

const WebTeam = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WebTeamCard.map((t) => (
            <div key={t.id} className="flex justify-center">
              <WebCard img={t.img} name={t.name} role={t.role} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebTeam;

//grid grid-cols-4 gap-x-20 max-sm:grid-cols-1 m-6 max-lg:grid-cols-2 max-lg:gap-6
