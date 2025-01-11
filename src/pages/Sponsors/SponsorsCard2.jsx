import React, { useState } from 'react'
import hp1 from '../../assets/img/sponsors/hp1.jpg'
import hp2 from '../../assets/img/sponsors/hp2.jpg'
import hp3 from '../../assets/img/sponsors/hp3.jpg'

import sponcercard from "../../assets/img/Sponcercard.png";
import ssit from '../../assets/img/sponsors/ssit.jpg'
import dd_prints from '../../assets/img/sponsors/dd_prints.png'
import meeNews from '../../assets/img/sponsors/mee news.png'
import beBest from '../../assets/img/sponsors/beBest.png'
import bridge from '../../assets/img/sponsors/bridge.jpg'
import siuk from '../../assets/img/sponsors/siuk.jpg'
import svs from '../../assets/img/sponsors/svs.png'
import una from '../../assets/img/sponsors/una.png'
import sriv from '../../assets/img/sponsors/sriv.jpeg'
import fc from '../../assets/img/sponsors/fc.jpeg'
import kmk from '../../assets/img/sponsors/kmk.jpeg'
import km from '../../assets/img/sponsors/km.jpeg'
import des from '../../assets/img/sponsors/des.jpeg'


const SponsorsCard2 = () => {

  const edu = [
    {
      name:"UNACADEMY",
      img:una
    },
  ]

  const DMP = [
    {
      name:"MEE NEWS",
      img:meeNews
    },
  ]

  const CP = [
    {
      name:"ANUSAI BOUTIQUE",
      img:hp1
    }
  ]

  const OEP = [
    {
      name:"Bridge Consultancy ",
      img:bridge
    },
    {
      name:"Be Best ",
      img:beBest
    },
    {
      name:"SIUK",
      img:siuk
    }

  ]

  const ES = [
    {
      name:"SSIT",
      img:ssit
    }
  ]

  const TSP = [
    {
      name:"Sri vatsa electronics",
      img:sriv,
    },
   
  ]

  const PP = [
    {
      name:'DD Prime Prints',
      img:svs
    }
  ]
  const DES = [
    {
      name:'Design Verge',
      img:des
    }
  ]
  const food = [
    {
      name:"SWAMY'S FOOD COURT ",
      img:fc
    },
    {
      name:"KMK FOOD CATERINGS ",
      img:kmk
    },
    {
      name:"ANUSHA AND FINE CATERINGS",
      img:km
    }

  ]
  return (
    <>
      <div
      className=" absolute top-0 w-full min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: "url('/sponsers.bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
 <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[100px]">
 Academic partner
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        edu.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer" >
          {/*<img src="./box_sponsors_card.png" width="100%" />*/}
          <img src={sponcercard} width="100%"></img>
          <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-14  text-white text-center w-[85%] text-md pl-4">{data.name}</h2>
        </div>
        ))
      }
      </div>
      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[100px]">
        Digital and Media Partner
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        DMP.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer" >
          <img src={sponcercard} width="100%"></img>
          <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-14   text-white text-center w-[85%]">{data.name}</h2>
        </div>
        ))
      }
      </div>
      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[20px]">
      Overseas education partner 
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        OEP.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer" >
          <img src={sponcercard} className="w-[450px] h-[250px]"></img>
          <img src={data.img} className="w-[140px] h-[87px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-16   text-white text-center w-[85%] text-sm pl-6">{data.name}</h2>
        </div>
        ))
      }
      </div>
      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[20px]">
      Events Partner
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        ES.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer" >
         <img src={sponcercard} width="100%"></img>
          <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-14   text-white text-center w-[85%]">{data.name}</h2>
        </div>
        ))
      }
      </div>
      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[20px]">
      Telecom service partner
      </div>
      <div className="w-full flex items-center justify-center flex-wrap mb-[80px]">
      {
        TSP.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer" >
          <img src={sponcercard} className="h-[250px]"></img>
          <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-16   text-white text-center w-[85%] text-sm pl-7">{data.name}</h2>
        </div>
        ))
      }
      </div>

      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[20px]">
      Costume Partner
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        CP.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer" >
          <img src={sponcercard} width="100%"className="h-[240px]"></img>
          <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-16   text-white text-center w-[85%] text-sm pl-5">{data.name}</h2>
        </div>
        ))
      }
      </div>
      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[20px]">
      Printing partner 
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        PP.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer mb-[70px]" >
          <img src={sponcercard} width="100%"></img>
          <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-14   text-white text-center w-[85%] pl-6">{data.name}</h2>
        </div>
        ))
      }
      </div>
      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[20px]">
      Designing partner 
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        DES.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer mb-[70px]" >
          <img src={sponcercard} width="100%"></img>
          <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-14   text-white text-center w-[85%] pl-4">{data.name}</h2>
        </div>
        ))
      }
      </div>
      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[20px]">
       Food Partner
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        food.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer mb-[70px]" >
          <img src={sponcercard} width="100%" className="h-[250px]"></img>
          <img src={data.img} className="w-[140px] h-[90px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-16   text-white text-center w-[70%] text-sm pl-14">{data.name}</h2>
        </div>
        ))
      }
        </div>
        </div>
   </>
  )
}
export default SponsorsCard2