import React, { useState } from 'react'

const SponsorsCard2 = () => {
  return (
    <div className="relative mt-5 w-64 cursor-pointer" >
    <img src="./box_sponsors_card.png" width="100%" />
    <img src="./About.jpg" className="w-[140px] h-[91px] absolute left-[20%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]" />
    <h2 className="absolute top-7 underline decoration-red-600 text-white text-center w-[85%]">CO SOPENSER</h2>
    </div>
  )
}

export default SponsorsCard2