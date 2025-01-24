import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Teamcard from "../../assets/img/Teamcard.webp";

const Teamweb = () => {
  const [team, setTeam] = useState([]);

  // Fetch team data from the API
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("https://tzm-1.onrender.com/api/teams"); 
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="flex flex-wrap justify-center items-center gap-4 py-[100px]">
        {team.map((member) => (
          <div key={member._id} className="relative">
            <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
            <img
              src={member.image}
              className="absolute w-52 h-52 top-16 left-16 object-cover rounded-full"
              alt={member.name}
            />
            <p className="absolute ml-[70px] bottom-6 text-white">
              {member.name}
            </p>
            <p className="absolute bottom-1 ml-[70px] font-bold text-[black]">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamweb;
