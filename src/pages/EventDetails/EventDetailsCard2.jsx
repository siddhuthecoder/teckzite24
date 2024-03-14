import React, { useEffect, useLayoutEffect, useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import img from '../../assets/event.webp'
import './eventDetails.css'
import Criteria from "./details/Criteria";
import Description from "./details/Description";
import Rules from "./details/Rules";
import right from '../../assets/events/after.png'
import left from '../../assets/events/before.png'
import { IoLocationSharp } from "react-icons/io5";


const EventDetailsCard2 = () => {
    const [tab, setTab] = useState("Description")
    const [navBar, setNavBar] = useState("description");
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return (
        <>
            <div className="w-full h-[100vh] justify-center flex  items-center overflow-auto  ">
                <div className=" card-box  w-[90%] mx-auto  max-w-[900px] h-[auto]  relative grid grid-cols-12 "  >
                    <div className="absolute left-[-6%] top-[20%] hidden md:block">
                        <img src={left} alt="" style={{ transform: "scale(0.5)" }} />
                    </div>
                    <div className="absolute right-[-6%] top-[20%] hidden md:block">
                        <img src={right} alt="" style={{ transform: "scale(0.5)" }} />
                    </div>
                    <div class="p-4 -200 w-full  col-span-12 md:col-span-4 lg:col-span-4 md:backdrop-blur-lg   flex flex-col justify-between ">
                        <div className="font-[ROG] font-bold w-full flex items-center justify-center ">
                            <div className="font-bold text-2xl text-center">EVENT TITLE</div>
                        </div>
                        <div className="font-[ROG] font-bold w-full flex justify-start items-start ">
                            <img src={img} alt="" style={{ transform: "scale(0.8)" }} />
                        </div>

                        <div className="w-100 flex justify-between items-center">
                            <div className="font-[ROG] font-bold md:text-center flex items-center"><span className="pe-[10px]"><IoLocationSharp /></span><span>OFFLINE</span></div>
                            <div className="flex flex-col font-ROG md:hidden">
                                <div className="font-bold">PRIZE MONEY</div>
                                <div className="text-center font-bold">20,000/-</div>
                            </div>
                        </div>
                    </div>
                    <div class="backdrop-blur-lg p-4 -200 w-full col-span-12 md:col-span-8  lg:col-span-8  flex flex-col justify-between items-center" >
                        <div className="font-[ROG] font-bold w-full flex items-center ">
                            <div className="font-bold flex w-full items-center  justify-start flex-wrap ">
                                <button className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${tab == "Description" ? " active-tab " : ""}`} style={{ width: "100px", height: "40px" }} onClick={() => setTab("Description")} >Description</button>
                                <button className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${tab == "Criteria" ? " active-tab" : ""}`} style={{ width: "100px", height: "40px" }} onClick={() => setTab("Criteria")}>Criteria</button>
                                <button className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${tab == "Rules" ? " active-tab" : ""}`} style={{ width: "100px", height: "40px" }} onClick={() => setTab("Rules")}>Rules</button>
                                <button className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${tab == "Contact" ? " active-tab" : ""}`} style={{ width: "100px", height: "40px" }} onClick={() => setTab("Contact")}>Contact</button>
                            </div>
                        </div>
                        <div className="h-[200px] mt-[10px] overflow-y-auto">
                            {tab == "Description" && <Description />}
                            {tab == "Criteria" && <Criteria />}
                            {tab == "Rules" && <Rules />}
                        </div>
                        <div className="w-full flex items-center flex-row-reverse">
                            <div className="hidden md:flex flex-col font-ROG ">
                                <div className="font-bold">PRIZE MONEY</div>
                                <div className="text-center font-bold">20,000/-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetailsCard2;
