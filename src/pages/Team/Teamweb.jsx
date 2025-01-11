import React from 'react'
import Header from '../../components/Header/Header'
import Teamcard from "../../assets/img/Teamcard.png";
import Robo from "../../assets/img/Robo.png";
const Teamweb = () => {
  return (
   <>
   <Header />
   <div className="m-[4px] mt-[100px] md:m-[100px] flex flex-col md:flex-row ">
       <div><img src={Teamcard} className="w-[330px] h-[400px] relative"></img>
       <img src={Robo}className="absolute w-[200px] h-[210px] top-[180px] ml-[70px]"></img>
       <p className="absolute bottom-[266px] md:bottom-[170px] ml-[100px]">Sribabu Mandraju</p>
       <p className="absolute bottom-[246px] md:bottom-[146px] ml-[130px] font-bold">Manager</p>
       </div>
     </div>
   </>
  )
}

export default Teamweb