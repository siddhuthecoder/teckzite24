import React, { useState, useRef } from 'react';
import '../../css/home.css';
import { GiPlayButton } from "react-icons/gi";
import { motion } from 'framer-motion'
import Header from '../../components/Header/Header'
import SideComponent from './SideComonent'; // Corrected spelling

const AboutHome = () => {
    const [isPlaying, setIsPlaying] = useState(true); // Set to true to autoplay
    const videoRef = useRef(null);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.section className=" relative w-full min-h-[100vh] flex-col flex justify-center z-[5]" style={{
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
            <SideComponent  num="1" text="ABOUT" />
            <div className="w-full ">
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 1 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 150 }} //
                    className=" h-screen   flex justify-center items-center w-full flex-wrap ">
                        <div className="about-bg     rounded-[4px] w-full relative max-w-[500px] " style={{ overflow: "hidden" }}>
                            <iframe
                                title="YouTube Video"
                                ref={videoRef}
                                className="mx-auto  w-full rounded-[10px]  h-[40vh] md:h-[55vh]"
                                src="https://www.youtube.com/embed/nTVnxxkPTXI?autoplay=1&mute=1&controls=0" // YouTube embed URL with autoplay, mute, and no controls
                                allowFullScreen
                            ></iframe>
                            {!isPlaying && (
                                <div className="w-full h-[100%] flex justify-center items-center" style={{ position: "absolute", top: "0px", left: "0px" }}>
                                    <button
                                        className="custom-play-button w-[50px] flex justify-center items-center  h-[50px] animate-blink rounded-[50%]"
                                        onClick={togglePlay}
                                        aria-label="Play Video"
                                    >
                                        <GiPlayButton className="text-4xl" />
                                    </button>
                                </div>
                            )}
                            <div className="w-full " style={{ position: 'absolute', bottom: "0px", left: "0%" }}>
                                <div className="mx-auto video-clip animate-bounce text-center cursor-pointer max-w-[200px]  z-[10]">Know More ..</div>
                            </div>
                        </div>
                        <div className="w-full max-w-[500px]   justify-between flex flex-col min-h-[10vh] ps-[20px] ">
                            <div className="font-bold text-2xl md:text-4xl ">About</div>
                            <p className="text-[white] text-[15px] py-[10px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloru
                                m voluptatem labore animi rerum eum quibusdam nesciunt, quidem excepturi esse mollitia 
                                est! Quae odio, animi ab delectus doloribus quod deserunt.
                            </p>
                            <p className="text-[white] text-[15px] py-[10px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloru
                                m voluptatem labore animi rerum eum quibusdam nesciunt, quidem excepturi esse mollitia 
                                est! Quae odio, animi ab delectus doloribus quod deserunt.
                            </p>
                            <p className="text-[white] text-[15px] py-[10px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloru
                                m voluptatem labore animi rerum eum quibusdam nesciunt, quidem excepturi esse mollitia 
                                est! Quae odio, animi ab delectus doloribus quod deserunt.
                            </p>

                            
                            <div className="w-full flex  flex-row-reverse text-[#f529a3] font-bold px-[20px]">Know more...</div>
                        </div>
                </motion.div>
               
            </div>
        </motion.section>
    );
};

export default AboutHome;
