import React from 'react'
import Header from '../../components/Header/Header'
import Teamcard from "../../assets/img/Teamcard.png";
import Robo from "../../assets/img/Robo.png";
const Teamweb = () => {
  return (
   <>
   <Header />
   <div className="m-[4px] mt-[100px] md:m-[100px] flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mb-[50px]">
       <div><img src={Teamcard} className="w-[330px] h-[400px] relative"></img>
       <img src={Robo}className="absolute w-[200px] h-[210px] top-[180px] ml-[70px]"></img>
       <p className="absolute bottom-[266px] md:bottom-[550px] lg:bottom-[170px] ml-[100px]">Sribabu Mandraju</p>
       <p className="absolute bottom-[246px] md:bottom-[530px] lg:bottom-[146px] ml-[130px] font-bold">Manager</p>
       </div>
       <div><img src={Teamcard} className="w-[330px] h-[400px] relative"></img>
       <img src={Robo}className="absolute w-[200px] h-[210px] top-[600px]  lg:top-[180px] ml-[70px]"></img>
       <p className="absolute bottom-[-150px] md:bottom-[135px] lg:bottom-[170px] ml-[100px]">Sribabu Mandraju</p>
       <p className="absolute bottom-[-170px] md:bottom-[115px] lg:bottom-[146px] ml-[130px] font-bold">Manager</p>
       </div>
       <div><img src={Teamcard} className="w-[330px] h-[400px] relative"></img>
       <img src={Robo}className="absolute w-[200px] h-[210px] top-[1015px] lg:top-[180px] ml-[70px]"></img>
       <p className="absolute bottom-[-565px] md:bottom-[-280px] lg:bottom-[170px] ml-[100px]">Sribabu Mandraju</p>
       <p className="absolute bottom-[-585px] md:bottom-[-300px] lg:bottom-[146px] ml-[130px] font-bold">Manager</p>
       </div>
       <div><img src={Teamcard} className="w-[330px] h-[400px] relative"></img>
       <img src={Robo}className="absolute w-[200px] h-[210px] top-[1430px] lg:top-[600px] ml-[70px]"></img>
       <p className="absolute bottom-[-980px] md:bottom-[-695px] lg:bottom-[-248px] ml-[100px]">Sribabu Mandraju</p>
       <p className="absolute bottom-[-1000px] md:bottom-[-715px] lg:bottom-[-270px] ml-[130px] font-bold">Manager</p>
       </div>
       <div><img src={Teamcard} className="w-[330px] h-[400px] relative"></img>
       <img src={Robo}className="absolute w-[200px] h-[210px] top-[1850px] lg:top-[600px] ml-[70px]"></img>
       <p className="absolute bottom-[-1395px] md:bottom-[-1110px] lg:bottom-[-248px] ml-[100px]">Sribabu Mandraju</p>
       <p className="absolute bottom-[-1420px]  md:bottom-[-1130px] lg:bottom-[-270px] ml-[130px] font-bold">Manager</p>
       </div>
       <div><img src={Teamcard} className="w-[330px] h-[400px] relative"></img>
       <img src={Robo}className="absolute w-[200px] h-[210px] top-[2260px] lg:top-[600px] ml-[70px]"></img>
       <p className="absolute bottom-[-1815px]  md:bottom-[-1530px] lg:bottom-[-248px] ml-[100px]">Sribabu Mandraju</p>
       <p className="absolute bottom-[-1835px] md:bottom-[-1550px] lg:bottom-[-270px] ml-[130px] font-bold">Manager</p>
       </div>
       
     </div>
   </>
  )
}

export default Teamweb