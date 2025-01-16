// import React, { useState } from 'react'
// import hp1 from '../../assets/img/sponsors/hp1.jpg'
// import hp2 from '../../assets/img/sponsors/hp2.jpg'
// import hp3 from '../../assets/img/sponsors/hp3.jpg'

// import Twosponcer from "../../assets/img/Twosponcer.png";
// import sponcercard from "../../assets/img/Sponcercard.png";
// import Animation from '../../components/Animation'
// import ssit from '../../assets/img/sponsors/ssit.jpg'
// import dd_prints from '../../assets/img/sponsors/dd_prints.png'
// import meeNews from '../../assets/img/sponsors/mee news.png'
// import beBest from '../../assets/img/sponsors/beBest.png'
// import bridge from '../../assets/img/sponsors/bridge.jpg'
// import siuk from '../../assets/img/sponsors/siuk.jpg'
// import svs from '../../assets/img/sponsors/svs.png'
// import una from '../../assets/img/sponsors/una.png'
// import sriv from '../../assets/img/sponsors/sriv.jpeg'
// import fc from '../../assets/img/sponsors/fc.jpeg'
// import kmk from '../../assets/img/sponsors/kmk.jpeg'
// import km from '../../assets/img/sponsors/km.jpeg'
// import des from '../../assets/img/sponsors/des.jpeg'


// const SponsorsCard2 = () => {

//   const edu = [
//     {
//       name:"UNACADEMY",
//       img:una
//     },
//   ]

//   const DMP = [
//     {
//       name:"MEE NEWS",
//       img:meeNews
//     },
//   ]

//   const CP = [
//     {
//       name:"ANUSAI BOUTIQUE",
//       img:hp1
//     }
//   ]

//   const OEP = [
//     {
//       name:"Bridge Consultancy ",
//       img:bridge
//     },
//     {
//       name:"Be Best ",
//       img:beBest
//     },
//     {
//       name:"SIUK",
//       img:siuk
//     }

//   ]

//   const ES = [
//     {
//       name:"SSIT",
//       img:ssit
//     }
//   ]

//   const TSP = [
//     {
//       name:"Sri vatsa electronics",
//       img:sriv,
//     },
   
//   ]

//   const PP = [
//     {
//       name:'DD Prime Prints',
//       img:svs
//     }
//   ]
//   const DES = [
//     {
//       name:'Design Verge',
//       img:des
//     }
//   ]
//   const food = [
//     {
//       name:"SWAMY'S FOOD COURT ",
//       img:fc
//     },
//     {
//       name:"KMK FOOD CATERINGS ",
//       img:kmk
//     },
//     {
//       name:"ANUSHA AND FINE CATERINGS",
//       img:km
//     }

//   ]
//   return (
//     <>
//       <div
//       className=" absolute top-0 w-full min-h-screen bg-cover bg-center "
//       style={{
//         backgroundImage: "url('/sponsers.bg.jpg')",
//         backgroundAttachment: "fixed",
//       }}

//     >
//       {/* Black Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//       <Animation title="Sponsors"/>

//       <div className="relative">
//  <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[100px]">
//  Academic partner
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         edu.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer" >
//           {/*<img src="./box_sponsors_card.png" width="100%" />*/}
//           <img src={sponcercard} width="100%"></img>
//           <img src={data.img} className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-14  text-white text-center w-[85%] text-md pl-4">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[100px]">
//         Digital and Media Partner
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         DMP.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer" >
//           <img src={sponcercard} width="100%"></img>
//           <img src={data.img} className="w-[140px] h-[80px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-14   text-white text-center w-[85%]">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[20px]">
//       Overseas education partner 
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         OEP.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer" >
//           <img src={sponcercard} className="w-[450px] h-[250px]"></img>
//           <img src={data.img} className="w-[140px] h-[87px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-16   text-white text-center w-[85%] text-sm pl-6">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[20px]">
//       Events Partner
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         ES.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer" >
//          <img src={sponcercard} width="100%"></img>
//           <img src={data.img} className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-14   text-white text-center w-[85%]">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[20px]">
//       Telecom service partner
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap mb-[80px]">
//       {
//         TSP.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer" >
//           <img src={sponcercard} className="h-[250px]"></img>
//           <img src={data.img} className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-16   text-white text-center w-[85%] text-sm pl-7">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>

//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[20px]">
//       Costume Partner
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         CP.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer" >
//           <img src={sponcercard} width="100%"className="h-[240px]"></img>
//           <img src={data.img} className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-16   text-white text-center w-[85%] text-sm pl-5">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[20px]">
//       Printing partner 
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         PP.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer mb-[70px]" >
//           <img src={sponcercard} width="100%"></img>
//           <img src={data.img} className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-14   text-white text-center w-[85%] pl-6">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[20px]">
//       Designing partner 
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         DES.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer mb-[70px]" >
//           <img src={sponcercard} width="100%"></img>
//           <img src={data.img} className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-14   text-white text-center w-[85%] pl-4">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//       <div className="text-center font-bruno text-[#1DCFDC,] text-3xl mt-[20px]">
//        Food Partner
//       </div>
//       <div className="w-full flex items-center justify-center flex-wrap">
//       {
//         food.map((data) => (
//           <div className="relative mt-5 w-64 cursor-pointer mb-[70px]" >
//           <img src={Twosponcer} width="100%" className="h-[340px]"></img>
//           <img src={data.img} className="w-[140px] h-[100px] absolute left-[30%] top-[45%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
//           <h2 className="absolute top-[90px]   text-white text-center w-[70%] text-sm pl-16">{data.name}</h2>
//         </div>
//         ))
//       }
//       </div>
//         </div>
//         </div>
//    </>
//   )
// }
// export default SponsorsCard2


import React from 'react';
import hp1 from '../../assets/img/sponsors/hp1.webp';
import hp2 from '../../assets/img/sponsors/hp2.webp';
import hp3 from '../../assets/img/sponsors/hp3.webp';

import Twosponcer from '../../assets/img/Twosponcer.webp';
import sponcercard from '../../assets/img/Sponcercard.webp';
import Animation from '../../components/Animation';
import ssit from '../../assets/img/sponsors/ssit.webp';
import dd_prints from '../../assets/img/sponsors/dd_prints.webp';
import meeNews from '../../assets/img/sponsors/mee news.webp';
import beBest from '../../assets/img/sponsors/beBest.webp';
import bridge from '../../assets/img/sponsors/bridge.webp';
import siuk from '../../assets/img/sponsors/siuk.webp';
import svs from '../../assets/img/sponsors/svs.webp';
import una from '../../assets/img/sponsors/una.webp';
import sriv from '../../assets/img/sponsors/sriv.webp';
import fc from '../../assets/img/sponsors/fc.webp';
import kmk from '../../assets/img/sponsors/kmk.webp';
import km from '../../assets/img/sponsors/km.webp';
import des from '../../assets/img/sponsors/des.webp';

const sponsorsData = [
  {
    heading: "Academic Partner",
    sponsors: [
      { name: "UNACADEMY", img: una },
    ],
  },
  {
    heading: "Digital and Media Partner",
    sponsors: [
      { name: "MEE NEWS", img: meeNews },
    ],
  },
  {
    heading: "Overseas Education Partner",
    sponsors: [
      { name: "Bridge Consultancy", img: bridge },
      { name: "Be Best", img: beBest },
      { name: "SIUK", img: siuk },
    ],
  },
  {
    heading: "Events Partner",
    sponsors: [
      { name: "SSIT", img: ssit },
    ],
  },
  {
    heading: "Telecom Service Partner",
    sponsors: [
      { name: "Sri Vatsa Electronics", img: sriv },
    ],
  },
  {
    heading: "Costume Partner",
    sponsors: [
      { name: "Anusai Boutique", img: hp1 },
    ],
  },
  {
    heading: "Printing Partner",
    sponsors: [
      { name: "DD Prime Prints", img: svs },
    ],
  },
  {
    heading: "Designing Partner",
    sponsors: [
      { name: "Design Verge", img: des },
    ],
  },
  {
    heading: "Food Partner",
    sponsors: [
      { name: "Swamy's Food Court", img: fc },
      { name: "KMK Food Caterings", img: kmk },
      { name: "Anusha and Fine Caterings", img: km },
    ],
  },
];

const SponsorsCard2 = () => {
  return (
    <div
      className="absolute top-0 w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/sponsers.bg.webp')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Animation title="Sponsors" />

      <div className="relative">
        {sponsorsData.map((section, index) => (
          <div key={index} className='pb-[70px]'>
            <div className="text-center font-bruno text-[white] text-2xl md:text-3xl">
              {section.heading}
            </div>
            <div className="w-full flex items-center justify-center flex-wrap">
              {section.sponsors.map((sponsor, i) => (
                <div className="relative mt-5 w-64 cursor-pointer" key={i}>
                  <img src={sponcercard} width="100%"></img>
                  <img
                    src={sponsor.img}
                    className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]"
                  />
                  <h2 className="absolute top-14 text-white text-center w-[85%] text-md pl-4">
                    {sponsor.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsCard2;
