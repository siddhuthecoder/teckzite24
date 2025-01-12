import React from 'react';
import Header from '../../components/Header/Header';
import Teamcard from "../../assets/img/Teamcard.png";
import Robo from "../../assets/img/Robo.png";
import sribabu from "../../assets/webteam/sribabu.png";
const Teamweb = () => {
  const team = [
    {  name: "Sribabu Mandraju", position: "Web Manager" },
    { name: "Dharaneewar Reddy", position: "Web Developer" },
    { name: "Sireesha Sibbala", position: "Web Developer" },
    { name: "Bindusree", position: "Web Developer" },
    { name: "Nakshaktra", position: "UI/UX Designer" }
  ];

  return (
    <>
    
      <Header />
      
      <div className="flex flex-wrap justify-center items-center gap-4 mt-[100px] mb-[100px]">
        {team.map((member, index) => (
          <div key={index} className="relative">
            <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
            <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
            <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
            <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Teamweb;
