import React from 'react';
import Header from '../../components/Header/Header';
import Teamcard from "../../assets/img/Teamcard.webp";
import Robo from "../../assets/img/Robo.webp";
import sribabu from "../../assets/webteam/sribabu.png";

const Teamweb = () => {
  const team = [
    {  name: "Sribabu Mandraju", position: "Web Manager" },
    { name: "Dharaneeswar Reddy", position: "Web Developer" },
    { name: "Sireesha Sibbala", position: "Web Developer" },
    { name: "Bindusree", position: "Web Developer" },
    { name: "Nakshaktra", position: "UI/UX Designer" }
  ];

  return (
    <div  style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.webp')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}>
    
      <Header />
      
      <div className="flex flex-wrap justify-center items-center gap-4 py-[100px]" >
        {team.map((member, index) => (
          <div key={index} className="relative">
            <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
            <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
            <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
            <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamweb;
