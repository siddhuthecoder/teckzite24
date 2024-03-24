// import TeamCard from '../../components/Shared/TeamCard';
import Header from "../../components/Header/Header";
import WebCard from "../../components/Shared/WebCard";
import Banner from "../../components/banner/Banner";

import { CoreTeamData } from "../../constants";
const CoreTeam = () => {
  return (
    <>
      <Header />
      <Banner text="CORE TEAM" bg="core-heading" />
      <div className="text-center font-joti text-3xl my-7">Web Team</div>
      <div className="max-w-10xl h-[100vh]  mb-[10%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 gap-4   ">
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

export default CoreTeam;
