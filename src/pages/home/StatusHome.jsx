import React, { useState, useEffect } from 'react';
import '../../css/home.css';
import { motion } from 'framer-motion'
import Header from '../../components/Header/Header'
import SideComonent from './SideComonent'


const StatusHome = () => {
    const data = [
        { count: 25, name: "projects" },
        { count: 10, name: "events" },
        { count: 50, name: "workshops" },
        { count: 30, name: "sponsors" }, // Corrected spelling of "sponsors"
    ];

    const Counter = ({ count }) => {
        const [counter, setCounter] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                if (counter < count) {
                    setCounter(prevCounter => prevCounter + 1);
                } else {
                    clearInterval(interval);
                }
            }, 70);

            return () => clearInterval(interval);
        }, [counter, count]);

        return <>{counter}</>;
    };
    return (
        <>
            
            <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full justify-center items-center flex-col h-[100vh]" style={{ overflowY: "scroll", position: "sticky", top: "0px", left: "0px" }}>
                <Header />
                <SideComonent num="2" text="STATISTICS" />
                
                <div className="w-full h-[100vh] flex flex-col justify-between items-center">
                    <div className=""></div>
                    <div className="w-full flex justify-center  gap-3 flex-wrap">
                        {data.map((item, index) => (
                            <motion.div
                                initial={{ y: 150, opacity: 0, scale: 1 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + 0.099 * index, type: 'spring', stiffness: 300 }}
                                key={index} className="w-[150px] h-[150px] md:w-[150px] md:h-[150px]  flex flex-col icon-bg mx-3 ">
                                <div className="w-full items-center justify-center   text-[30px] grad-text font-bold  flex">
                                    <Counter className="" count={item.count} />
                                    <div className="text-white px-3" style={{ fontSize: "20px" }}>+</div>
                                </div>
                                <div className=" text-white text-center uppercase font-bold text-[20px] ">{item.name}</div>
                            </motion.div>
                        ))}
                    </div>
                    <div className=""></div>
                </div>
            </motion.div>
        </>
    );
};

export default StatusHome;
