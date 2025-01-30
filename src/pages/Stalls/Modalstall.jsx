
import React from 'react'
import Stallscard from "../../assets/img/Stallscard.png"
import Stal from "../../assets/img/Stal.webp";
import { ImCross } from "react-icons/im";
import Stalls from './Stalls';
const Modalstall = () => {
  return (
      
      <div className="flex items-center w-full h-screen justify-center bg-opacity-50 absolute">
        <button className="text-cyan-700 mt-[-470px] ml-[-300p]"><ImCross /></button>
        <div className="relative mt-[-20px]"><img src={Stallscard}></img></div>
        <div className="ml-[-600px] w-[250px] h-[250px]  rounded-full"><img src={Stal} className="rounded-full"></img></div>
        <div className="flex  flex-col">
          <div className="flex text-cyan-500 text-2xl mt-[-70px] ml-[20px]">GameName</div>
          <div className="flex text-cyan-500 text-2xl mt-[20px] ml-[10px]">About:</div>
          <div className="flex w-[300px] ml-[10px] mt-[10px]">joker Game is a Japanese spy anime and novel about an elite espionage agency using deception and strategy.
          It can also refer to a card game or a strategy-based game involving bluffing and risk-taking.
          </div>
        </div>
      
    </div>
    
  )
}

export default Modalstall 