import React from 'react'
import Webteamicon from "../../assets/img/Webteamicon.png"
const Team = () => {
  return (
    <div className="flex justify-center items-center h-full w-full bg-black gap-10 flex-col md:flex-row pt-[10px] md:pt-[50px]">
    <div className="flex bg-gray-500 w-[300px] h-[400px] justify-center items-center shadow-md transition-shadow duration-300 rounded-lg relative">
        <div className="flex bg-[#0A69A5] w-[280px] h-[380px] rounded-lg absolute hover:-translate-y-10 transition-transform duration-300 ease-in-out justify-center items-center">
            <div>
                <div className="text-2xl flex justify-center items-center font-bold">Web team</div>
                <img src={Webteamicon}></img>
                <div className="flex justify-center items-center pt-[20px]"><button className="bg-[#22EAEA] p-[10px] rounded-lg font-bold text-black">Explore</button></div>
            </div>

        </div>

    </div>
    <div className="flex bg-gray-500 w-[300px] h-[400px] justify-center items-center shadow-md transition-shadow duration-300 rounded-lg relative">
        <div className="flex bg-[#0A69A5] w-[280px] h-[380px] rounded-lg absolute hover:-translate-y-10 transition-transform duration-300 ease-in-out justify-center items-center">
            <div>
                <div className="text-2xl flex justify-center items-center font-bold">Core team</div>
                <img src={Webteamicon}></img>
                <div className="flex justify-center items-center pt-[20px]"><button className="bg-[#22EAEA] p-[10px] rounded-lg font-bold text-black">Explore</button></div>
            </div>

        </div>
    </div>

</div>
  )
}

export default Team