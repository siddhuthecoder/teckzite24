import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Cardteam from '../../assets/img/Cardteam.png';

const TeamTable = () => {
  const [teamData, setTeamData] = useState({ studentCore: [] });

  // Fetch data from API
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://tzm-1.onrender.com/api/coreteam"); // Replace with your API endpoint
        const data = await response.json();
        setTeamData({ studentCore: data });
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <>
      <Header />
      <div className="mb-10 mt-[110px]">
        <h2 className="text-[26px] mt-[10px] text-center">Student Core</h2>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-wrap justify-evenly items-center w-full mt-[15px]">
            {teamData.studentCore.map((member) => (
              <div
                key={member.id}
                className="flex flex-row justify-evenly items-center mt-[15px] relative flex-wrap"
              >
                <img
                  src={Cardteam}
                  alt="Row Tail"
                  className="object-cover w-[300px] md:w-[400px]"
                />
                <div className="inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 text-white font-semibold">
                  <img className="absolute w-[90px] h-[90px] text-center ml-[-600px] rounded-full mt-[-6px]"
                    src={member.image}/>
                  <div>
                    <p className="absolute  ml-[-200px] mt-[-50px] text-[25px]">{member.name}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default TeamTable;


