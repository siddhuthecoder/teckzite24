import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Cardteam from "../../assets/img/Cardteam.png";

const TeamTable = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://tzm-1.onrender.com/api/coreteam");
        if (!response.ok) throw new Error("Failed to fetch team data");
        const data = await response.json();
        setTeamData(data.length > 0 ? data : []);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <>
      <Header />
      <div className="mb-10 relative ">
        <div
          className="fixed inset-0 top-0 bg-cover bg-center min-h-screen bg-no-repeat"
          style={{
            backgroundImage: "url('/workshopbg.webp')",
          }}
        ></div>
        <div className="absolute inset-0 h-screen bg-black bg-opacity-80"></div>
        <h2 className="text-[26px] mt-[10px] text-center">Student Core</h2>
        <div className="w-full overflow-x-auto">
          {loading ? (
            <p className="text-center text-gray-500 mt-10">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500 mt-10">Error: {error}</p>
          ) : teamData.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">No data available</p>
          ) : (
            <div className="flex flex-wrap  justify-evenly items-center w-full mt-[60px]">
              {teamData.map((member) => (
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
                    <img
                      className="absolute w-[75px] h-[75px] md:w-[100px] md:h-[100px] text-center ml-[-455px] md:ml-[-605px] rounded-md mt-[-6px]"
                      src={member.image}
                      alt={member.name}
                    />
                    <div>
                      <p className="absolute ml-[-170px] md:ml-[-230px] mt-[-40px] md:mt-[-40px] md:text-[17px] w-[150px] md:w-[220px]">
                        {member.name}
                      </p>
                      <p className="absolute ml-[-170px] md:ml-[-230px] mt-[5px] md:mt-[5px] md:text-[17px] md:w-[220px] w-[150px]">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="w-full h-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default TeamTable;
