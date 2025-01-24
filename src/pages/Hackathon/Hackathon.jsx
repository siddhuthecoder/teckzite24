import React from 'react'
import Header from '../../components/Header/Header'
import Animation from '../../components/Animation'
const Hackathon = () => {
  return (
    <div className='relative'>
    <Header/>
   {/* Outer wrapper with the background applied */}
   <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/workshopbg.webp')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <Animation title="Hackathon"/>
    <div className="w-full h-[100vh]">    </div>
    </div>
  )
}

export default Hackathon