import React from 'react'
import '../../css/home.css'
import '../../css/about.css'
import { motion } from 'framer-motion'
import Header from '../../components/Header/Header'
import SideComonent from './SideComonent'
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import rect from '../../assets/img/speakers/rect.svg'





const SocialIcons = () => {
    const icons = [
        { icon: (<FaInstagram />), name: "Instagram" },
        { icon: (<IoLogoTwitter />), name: "Twitter" },
        { icon: (<FaWhatsapp />), name: "Whatsapp" },
        { icon: (<FaLinkedin />), name: "Linkdin" },
    ]
    return (
        <>

            <motion.section
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-[100%] mx-auto  h-[100vh] flex flex-col justify-between  items-center" style={{ position: "sticky", top: "0px", left: "0px", overflowY: "scroll",opacity:"0.6" }}>
                <Header />
                <SideComonent num="5" text="Connect" />
                <div className="w-[100%] mx-auto h-[40px]  z-[20]"></div>
                <div className="flex flex-col w-[100%]">
                    <motion.div className="text-center font-bold py-[20px]  text-2xl"
                        initial={{ y: 100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                    >Connect With Us
                    </motion.div>
                    <motion.div className="text-center font-bold text-[40px] md:text-[80px] grad-text"
                        initial={{ y: 100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}

                    >
                        Stay Connected
                    </motion.div>
                    <div className="w-full mt-[30px] flex items-center gap-5  justify-center flex-wrap max-h-[90vh]" style={{ overflowY: "" }} >
                        {icons.map((data, index) => (
                            <motion.div
                                initial={{ y: 100, opacity: 0, scale: 1 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 1 + 0.09 * index, type: 'spring', stiffness: 300 }}
                                className="icon-bg  mx-[20px] bg-[#0a0b0f] z-1 w-[150px] h-[150px]  m-[20px] border-[#A301B1] rounded-[4px] border relative flex items-center justify-center flex-col" style={{ backgroundImage:"repeating-linear-gradient(45deg,#262626,#1a1a1a 7px ,#1a1a1a 7px"}}>
                                <span className="text-4xl soc-icon">{data.icon}</span>
                                <div className="link-font grad-text text-2xl text-[#a301b1] font-bold" style={{}}>{data.name}</div>
                                <img src={rect} alt="" className="absolute bottom-[-10px] scale-x-[0.5] left-[-35px]" />
                            </motion.div>
                        ))}


                    </div>
                </div>
                <div className=""></div>
            </motion.section>
        </>
    )
}

export default SocialIcons
