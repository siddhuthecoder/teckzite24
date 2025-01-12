import React from 'react'
import Header from '../../components/Header/Header';
import Teamcard from "../../assets/img/Teamcard.png";
import Robo from "../../assets/img/Robo.png";
const Teamcore = () => {
  const pre = [
    {  name: "Sribabu Mandraju", position: "President" },
  ];
  const vicepre=[
    {name: "Sribababu", position:"Vicepresident"},
    {name: "Sribababu", position:"Vicepresident"},
    {name: "Sribababu", position:"Vicepresident"}
  ]
  const coremem=[
    {name:"Sribabu Mandraju",position:"Coremember"},
    {name:"Sribabu Mandraju",position:"Coremember"},
    {name:"Sribabu Mandraju",position:"Coremember"},
    {name:"Sribabu Mandraju",position:"Coremember"},
    {name:"Sribabu Mandraju",position:"Coremember"},
    {name:"Sribabu Mandraju",position:"Coremember"}
  ]
  return (
   <div   style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.jpg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}>
   <Header />
   <div className="flex flex-wrap justify-center items-center gap-4 py-[100px] flex-col">
        {pre.map((member, index) => (
          <div key={index} className="relative">
            <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
            <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
            <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
            <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
          </div>
        ))}
        <div className="flex justify-center items-center flex-wrap">
        {vicepre.map((member,index) =>(
          <div key={index} className="relative">
            <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
            <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
            <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
            <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
          </div>

        ))}
        </div>
         <div className="flex justify-center items-center flex-wrap">
         {coremem.map((member,index) =>(
          <div key={index} className="relative">
            <img src={Teamcard} className="w-80 h-96" alt="Team Card" />
            <img src={Robo} className="absolute w-52 h-52 top-16 left-16" alt="Robo" />
            <p className="absolute  ml-[70px] bottom-6">{member.name}</p>
            <p className="absolute bottom-1  ml-[70px] font-bold text-[black]">{member.position}</p>
          </div>
         ))}
         </div>


      </div>
   </div>
  )
}

export default Teamcore