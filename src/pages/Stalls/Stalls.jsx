import React from 'react'
import Stallscard from "../../assets/img/Stallscard.png"
import Stal from '../../assets/img/Stal.webp';
import Header from "../../components/Header/Header";
import { TbCoinRupee } from "react-icons/tb";
const Stalls = () => {
  const team=[
    {id:1, Name:"Games Stall",cost:"50"},
    {id:2,Name:"Games Stall",cost:"50"},
    {id:3,Name:"Games Stall",cost:"50"},
    {id:4,Name:"Games Stall",cost:"50"},
    {id:2,Name:"Games Stall",cost:"50"},
    {id:2,Name:"Games Stall",cost:"50"},
    {id:2,Name:"Games Stall",cost:"50"}
  
  ]
  return (
      <>
        <Header />
        <div className="w-full flex flex-row flex-wrap relative mt-[10px] lg:mt-[10px] p-[20px] lg:p-[50px]  lg:justify-evenly">
       {team.map((teamdel)=>{
        return(
          <div  className="flex w-full  lg:w-[40%] relative lg:pt-[40px] pt-[60px] md:mt-[60px]">
        <img src={Stallscard} className="absolute"></img>
        <div><img src={Stal} className="md:w-[250px] md:h-[250px] w-[130px] h-[130px] mt-[30px] md:mt-[60px] rounded-full pt-[10px] ml-[40px]"/></div>
        <div className="flex flex-col w-[40%] md:ml-[40px] ml-[10px] md:mt-[-20px]">
        <div className="font-bold pt-[50px] md:pt-[100px] text-sm md:text-xl w-full text-cyan-500">Name: Games stall</div>
        <div className="font-bold pt-[20px] text-sm md:text-xl max-h-[50px] overflow-hidden text-ellipsis whitespace-nowrap sm:max-h-[50px] sm:overflow-hidden sm:text-ellipsis sm:whitespace-nowrap md:max-h-none md:overflow-visible md:whitespace-normal">About: Joker Game" is a strategy-based game where deception, risk, and clever moves determine the winner. </div>
        <div className="font-bold pt-[20px] text-sm md:text-xl flex flex-row"><p className="md:pt-[4px] pr-[2px]"><TbCoinRupee className="size-[20px]" /></p> <p>50</p></div>
         
       
        </div>
       
      </div>
        )
       })}
      
    </div>
    </>
  );
};

export default Stalls
