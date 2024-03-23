import React from 'react'
import {motion} from 'framer-motion'
import Header from '../../components/Header/Header'
import Swiper2 from '../../components/swiper/Swipper2'
import SideComonent from './SideComonent'

const SpeakersHome = () => {
  return (
    <motion.section className=" relative w-full min-h-[100vh] flex justify-center items-center z-[5]" style={{
        position: "sticky",
        top: "0px",
        left: "0px"
    }}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
    >
        <Header />
        <SideComonent  num="4" text="Speakers" />
        <div className="w-full hidden md:block">
            <Swiper2 />
        </div>
        <div className="w-full  md:hidden">
            <Swiper2 />
        </div>

        
    </motion.section>
  )
}

export default SpeakersHome
