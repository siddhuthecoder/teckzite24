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
        <SideComonent text="SPONSERS" num="4" />
        <div className="w-full flex flex-col h-[90vh] items-center justify-start overflow-y-scroll  gap-5 mt-[4%] ">
            <div className="w-full flex items-center justify-center flex-wrap mt-5">
                <SponsorsCard2 />
            </div>
            <div className="w-full flex items-center justify-center flex-wrap">
                <SponsorsCard2 />
                <SponsorsCard2 />
                <SponsorsCard2 />
            </div>
            <div className="w-full flex items-center justify-center flex-wrap">
                <SponsorsCard2 />
                <SponsorsCard2 />
                <SponsorsCard2 />
            </div>
        </div>
        
    </motion.section>
  )
}

export default SponsersHome

