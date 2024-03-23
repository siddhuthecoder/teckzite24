import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from "../../components/Header/Header";
import SideComonent from './SideComonent';
import s1 from '../../assets/img/speakers/speakersHome/s1.svg'
import './scroll.css'
import SponsorsCard2 from '../Sponsors/SponsorsCard2';
const SponsersHome = () => {
  return (
    <motion.section className=" relative w-full min-h-[100vh]   flex-col flex  justify-between z-[5]" style={{
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
        <SideComonent text="SPONSERS" num="3" />
        <div className="w-full h-screen flex items-center relative">
            <div className="card-sec w-[90%]  md:w-[70%] h-[700px] flex  items-center mx-auto  relative overflow-x-hidden">
                <div className="w-[90%] mx-[40px]  flex items-center flex-row-reverse  mt-[20px] justify-around gap-3 min-w-[400px] overflow-scroll">
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                    <div className="w-[100px] min-w-[200px] h-[250px] ms-[30px] ">
                        <SponsorsCard2 />
                    </div>
                </div>
                <img src={s1} alt="" className="absolute bottom-[25%] right-[196px] z-[-1]  scale-y-[2.2] " style={{width:"200px"}} />
                <img src={s1} alt="" className="absolute bottom-[25%] right-[0px] z-[2]  scale-[-1] scale-y-[2.2]" style={{width:"200px"}} />
            </div>
        </div>
        
    </motion.section>
  )
}

export default SponsersHome
