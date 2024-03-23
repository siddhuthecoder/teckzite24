import React from 'react'
import '../../css/home.css'
import '../../css/about.css'
import { motion } from 'framer-motion'
import Header from '../../components/Header/Header'
import SideComonent from './SideComonent'

const SocialIcons = () => {
    const icons = [
        { icon: "bi bi-instagram", name: "Instagram" },
        { icon: "bi bi-twitter", name: "Twitter" },
        { icon: "bi bi-whatsapp", name: "Whatsapp" },
        { icon: "bi bi-linkedin", name: "Linkdin" },
    ]
    return (
        <>

            <motion.section
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-[100%] mx-auto  h-[100vh] flex flex-col justify-between  items-center" style={{ position: "sticky", top: "0px", left: "0px", overflowY: "scroll",backgroundImage:"repeating-linear-gradient(45deg,#262626,#1a1a1a 7px ,#1a1a1a 7px",opacity:"0.6" }}>
                <Header />
                <SideComonent num="2" text="Connect" />
                <div className="w-[80%] mx-auto h-[40px]  z-[20]"></div>
                <div className="flex flex-col w-[80%]">
                    <motion.div className="text-center font-bold py-[20px]  text-3xl"
                        initial={{ y: 100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                    >Connect With Us
                    </motion.div>
                    <motion.div className="text-center font-bold md:text-8xl sm:text:6xl text-5xl grad-text"
                        initial={{ y: 100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}

                    >
                        Stay Connected
                    </motion.div>
                    <div className="w-full mt-[30px] flex items-center gap-5  justify-around flex-wrap max-h-[90vh]" style={{ overflowY: "" }} >
                        {icons.map((data, index) => (
                            <motion.div
                                initial={{ y: 100, opacity: 0, scale: 1 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + 0.09 * index, type: 'spring', stiffness: 100 }}
                                className="icon-bg  mx-[20px] bg-[#0a0b0f] z-1 w-[150px] h-[150px]  m-[20px] rounded-[4px] border relative flex items-center justify-center flex-col" style={{ position: "" }}>
                                <i class={`${data.icon} grad-text`}></i>
                                <div className="link-font grad-text font-bold" style={{}}>{data.name}</div>
                                <div className="text-white  opacity px-[20px] clip z-[0] right-[-5px] top-[-26px]" style={{ position: "absolute" }}>Connect</div>
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
