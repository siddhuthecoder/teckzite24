import React, { useState } from 'react'
import hp1 from '../../assets/img/sponsors/hp1.jpg'
import hp2 from '../../assets/img/sponsors/hp2.jpg'
import hp3 from '../../assets/img/sponsors/hp3.jpg'


import ssit from '../../assets/img/sponsors/ssit.jpg'
import dd_prints from '../../assets/img/sponsors/dd_prints.png'
import meeNews from '../../assets/img/sponsors/mee news.png'
import beBest from '../../assets/img/sponsors/beBest.png'
import bridge from '../../assets/img/sponsors/bridge.jpg'
import siuk from '../../assets/img/sponsors/siuk.jpg'

const SponsorsCard2 = () => {

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
      name:"Sri vatsa electronics"
    },
   
  ]

  const PP = [
    {
      name:'DD Prime Prints',
      img:dd_prints
    }
  ]
  return (
   <>

      <div className="text-center font-joti text-[#f529a3,] text-3xl mt-[100px]">
        Digital and Media Partner
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
      {
        DMP.map((data) => (
          <div className="relative mt-5 w-64 cursor-pointer" >
          <img src="./box_sponsors_card.png" width="100%" />
          <img src={data.img} className="w-[140px] h-[91px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-7   text-white text-center w-[85%]">{data.name}</h2>
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
          <img src="./box_sponsors_card.png" width="100%" />
          <img src={data.img} className="w-[140px] h-[91px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-7   text-white text-center w-[85%]">{data.name}</h2>
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
          <img src="./box_sponsors_card.png" width="100%" />
          <img src={data.img} className="w-[140px] h-[91px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-7   text-white text-center w-[85%]">{data.name}</h2>
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
          <img src="./box_sponsors_card.png" width="100%" />
          <img src={data.img} className="w-[140px] h-[91px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-7   text-white text-center w-[85%]">{data.name}</h2>
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
          <img src="./box_sponsors_card.png" width="100%" />
          <img src={data.img} className="w-[140px] h-[91px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-7   text-white text-center w-[85%]">{data.name}</h2>
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
          <img src="./box_sponsors_card.png" width="100%" />
          <img src={data.img} className="w-[140px] h-[91px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
          <h2 className="absolute top-7   text-white text-center w-[85%]">{data.name}</h2>
        </div>
        ))
      }
      </div>
   </>
  )
}
export default SponsorsCard2