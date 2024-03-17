// import TeamCard from '../../components/Shared/TeamCard';
import Header from "../../components/Header/Header";
import WebCard from "../../components/Shared/WebCard";
import CoreteamBanner from "./coreteamBanner";

import { CoreTeamData } from "../../constants";
const CoreTeam = () => {
  return (
    <>
      <Header />
      <CoreteamBanner />
      <div className="max-w-10xl h-[100vh]  mb-[10%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   ">
          {CoreTeamData.map((t) => (
            <div key={t.id} className="flex justify-center my-5">
              <WebCard img={t.img} name={t.name} role={t.role} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
// jhbsdj
export default CoreTeam;
