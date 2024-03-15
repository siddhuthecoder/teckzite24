import React, { useLayoutEffect, useState } from "react";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Button from '../../components/Button.jsx'
import Header from "../../components/Header/Header.jsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";



const Contact = () => {
    const [isHover, setIsHover] = useState(false);
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
        <section className="absolute top-0 bg-black w-[99vw] m-auto overflow-x-hidden">
            <Header />

            {size[0] <= 1204 ? (
                <>
                    {/* laptop */}
                    <div className=" bg-[#0F1C23] lg:pt-[8%] pb-[30px] pt-[50px] lg:h-[1100px] w-full lg:[clip-path:polygon(25%_0,_0_0,_0_100%,_25%_100%,_35%_95%,_65%_95%,_78%_100%,_100%_100%,_100%_0,_75%_0,_65%_5%,_35%_5%)]">
                        <p className="text-[#f90cff] w-[90%] m-auto font-semibold text-left text-lg pt-[40px]">
                            # GET IN TOUCH
                        </p>
                        <h5 className="font-bold text-3xl w-[90%] m-auto text-left">
                            Contact Us & Meet Our Team{" "}
                            <span className="text-[#f90cff]">!</span>
                        </h5>
                        <div>
                            <div className="flex gap-3 bg-[#0F1C23]  w-[90%] m-auto mt-[40px]">
                                <div className=" border-[#f90cff] relative w-[50%] border-[1px] rounded h-[60px] ">
                                    <input
                                        type="text"
                                        className="w-full rounded pl-[16px] h-full bg-[#0F1C23]"
                                        placeholder={`${size[0] < 431 ? "Name" : "Your Name"}`}
                                    />
                                    <PermIdentityIcon className="absolute text-slate-500 right-1 top-4" />
                                </div>
                                <div className="border-[#f90cff] relative w-[50%] border-[1px] h-[60px] rounded">
                                    <input
                                        type="email"
                                        className=" w-full rounded pl-[16px] h-full bg-[#0F1C23]"
                                        placeholder={`${size[0] < 431 ? "Email" : "Email Address"}`}
                                    />
                                    <MailOutlineIcon className="absolute right-1 text-slate-500 top-4" />
                                </div>
                            </div>
                            <div className="flex gap-3 w-[90%] m-auto bg-[#0F1C23] mt-[20px]">
                                <div className=" border-[#f90cff] border-[1px] relative w-[50%] h-[60px] rounded ">
                                    <input
                                        type="number"
                                        className="w-full pl-[16px] rounded h-full bg-[#0F1C23]"
                                        placeholder={`${size[0] < 431 ? "Phone" : "Phone Number"}`}
                                    />
                                    <PhoneOutlinedIcon className="absolute right-1 text-slate-500 top-4" />
                                </div>
                                <div className="border-[#f90cff] text-slate-500 border-[1px] w-[50%] h-[60px] rounded">
                                    <select className="h-full rounded pl-[16px] w-full bg-[#0F1C23]">
                                        <option className="bg-[#0F1C23]" value={"subject"}>
                                            Subject
                                        </option>
                                        <option className="bg-[#0F1C23]" value={"subject1"}>
                                            Subject1
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex bg-[#0F1C23] w-[90%] m-auto mt-[20px]">
                                <div className=" border-[#f90cff] w-full relative min-h-[100px] border-[1px] rounded ">
                                    <textarea
                                        placeholder="Write Massage..."
                                        className="bg-[#0F1C23] rounded min-h-full w-full"
                                    ></textarea>
                                    <ChatBubbleOutlineOutlinedIcon className="absolute right-1 text-slate-500 top-2.5" />
                                </div>
                            </div>
                            <div className="m-[20px]">
                                <Button text="Send" link="/" />
                            </div>
                        </div>
                        <p className="text-[#f90cff]  w-[90%] m-auto mt-[45px] font-semibold text-left text-lg">
                            # INFORMATION
                        </p>
                        <h5 className="font-bold w-[90%] m-auto text-3xl text-left my-1">
                            Contact Information's <span className="text-[#f90cff]">!</span>
                        </h5>
                        <div className="border-[1px] border-[#f90cff]  justify-between w-[90%] m-auto mt-[60px] p-[15px] items-center rounded-2xl flex bg-[#0f1c23]">
                            <div className="pl-[15px] text-left">
                                <FaLocationCrosshairs className="text-[50px] text-[#f90cff]" />
                                <h4 className="font-semibold">ADDRESS:</h4>
                                <p className="text-gray-500 font-semibold">
                                    Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                                    Kingdom
                                </p>
                            </div>
                        </div>
                        <div className="border-[1px] border-[#f90cff]  justify-between w-[90%] m-auto mt-[30px] p-[15px] items-center rounded-2xl flex bg-[#0f1c23]">
                            <div className="pl-[15px] text-left">
                                <FaLocationCrosshairs className="text-[50px] text-[#f90cff]" />
                                <h4 className="font-semibold">ADDRESS:</h4>
                                <p className="text-gray-500 font-semibold">
                                    Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                                    Kingdom
                                </p>
                            </div>
                        </div>

                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-center ">
                        {/* Left Card */}

                        <div className="w-1/2 h-[700px]  rotate-180 items-center justify-center bg-[#0F1C23] [clip-path:polygon(32%_10%,_46%_0,_100%_0,_100%_100%,_45%_100%,_32%_90%,_0_90%,_0_10%)]">
                            <div className="w-[90%] rotate-180 h-[85%]">
                                <p className="text-[#f90cff] font-semibold text-left text-lg">
                                    # GET IN TOUCH
                                </p>
                                <h5 className="font-bold text-3xl text-left my-1">
                                    Contact Us & Meet Our Team{" "}
                                    <span className="text-[#f90cff]">!</span>
                                </h5>
                                <div>
                                    <div className="flex gap-3 bg-[#0F1C23] mt-[40px]">
                                        <div className=" border-[#f90cff] relative w-[40%] border-[1px] rounded h-[60px] ">
                                            <input
                                                type="text"
                                                className="w-full rounded pl-[10%] h-full bg-[#0F1C23]"
                                                placeholder="Your Name"
                                            />
                                            <PermIdentityIcon className="absolute text-slate-500 right-1 top-4" />
                                        </div>
                                        <div className="border-[#f90cff] relative w-[40%] border-[1px] h-[60px] rounded">
                                            <input
                                                type="email"
                                                className=" w-full rounded pl-[10%] h-full bg-[#0F1C23]"
                                                placeholder="Email Address"
                                            />
                                            <MailOutlineIcon className="absolute right-1 text-slate-500 top-4" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 bg-[#0F1C23] mt-[20px]">
                                        <div className=" border-[#f90cff] border-[1px] relative w-[40%] h-[60px] rounded ">
                                            <input
                                                type="number"
                                                className="w-full pl-[10%] rounded h-full bg-[#0F1C23]"
                                                placeholder="Phone Number"
                                            />
                                            <PhoneOutlinedIcon className="absolute right-1 text-slate-500 top-4" />
                                        </div>
                                        <div className="border-[#f90cff] text-slate-500 border-[1px] w-[40%] h-[60px] rounded">
                                            <select className="h-full rounded pl-[10%] w-full bg-[#0F1C23]">
                                                <option className="bg-[#0F1C23]" value={"subject"}>
                                                    Subject
                                                </option>
                                                <option className="bg-[#0F1C23]" value={"subject1"}>
                                                    Subject1
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex bg-[#0F1C23] mt-[20px]">
                                        <div className=" border-[#f90cff] w-[82%] relative min-h-[100px] border-[1px] rounded ">
                                            <textarea
                                                placeholder="Write Massage..."
                                                className="bg-[#0F1C23] rounded min-h-full w-full"
                                            ></textarea>
                                            <ChatBubbleOutlineOutlinedIcon className="absolute right-1 text-slate-500 top-2.5" />
                                        </div>
                                    </div>
                                    {/* send message button */}
                                    <div className="mt-[20px]">
                                        <Button text="Send" link="/" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Card */}
                        <div className="w-1/2 bg-[#0f1c23] cursor-default h-[700px] [clip-path:polygon(32%_10%,_46%_0,_100%_0,_100%_100%,_45%_100%,_32%_90%,_0_90%,_0_10%)]">
                            <div className="w-[80%]  mt-[17%] m-auto">
                                <p className="text-[#f90cff] font-semibold text-left text-lg">
                                    # INFORMATION
                                </p>
                                <h5 className="font-bold text-3xl text-left my-1">
                                    Contact Information's{" "}
                                    <span className="text-[#f90cff]">!</span>
                                </h5>
                                <div className="border-[1px] mt-[20px]  border-[#f90cff]  p-[15px] items-center rounded-2xl flex bg-[#0f1c23] w-full h-[90px]">
                                    <FaLocationCrosshairs className="text-[50px] text-[#f90cff]" />
                                    <div className="pl-[15px] text-left">
                                        <h4 className="font-semibold">ADDRESS:</h4>
                                        <p className="text-gray-500 font-semibold">
                                            Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                                            Kingdom
                                        </p>
                                    </div>
                                </div>

                                <div className="border-[1px] mt-[10px] border-[#f90cff] p-[15px] items-center rounded-2xl flex bg-[#0f1c23] w-full h-[90px]">
                                    <FaLocationDot className="text-[50px] text-[#f90cff]" />
                                    <div className="pl-[15px] text-left">
                                        <h4 className="font-semibold">ADDRESS:</h4>
                                        <p className="text-gray-500 font-semibold">
                                            Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                                            Kingdom
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
            {/* location map */}
            <div className="w-full h-[700px] max-md:h-[350px] mt-[70px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7639.355799710306!2d80.81927869129088!3d16.792693285986264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e5f312c661%3A0xab7189f421622491!2sIIIT%20Nuzvid%20Campus%2C%20Nuzividu%2C%20Andhra%20Pradesh%20521202!5e0!3m2!1sen!2sin!4v1709890608728!5m2!1sen!2sin"
                    className="w-full h-full"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            {/* logo */}
            <div className="w-[20%] max-md:w-[40%] max-sm:w-[80%] m-auto h-[80px] rotate-180 contact-logo [clip-path:polygon(20%_0%,_80%_0,_100%_100%,_0%_100%)]">
                <div className=" rotate-180 w-full  h-[80%] items-center">
                    <h2 className="font-bold text-3xl text-white text-center"> TECKZITE</h2>
                </div>
            </div>


        </section>
    );
};

export default Contact;
