import React, { useLayoutEffect, useState } from "react";

import Header from "../../components/Header/Header.jsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import name from "../../assets/img/contact/name.svg";
import email from "../../assets/img/contact/email.svg";
import phone from "../../assets/img/contact/phone.svg";
import subject from "../../assets/img/contact/subject.svg";
import text from "../../assets/img/contact/textarea.svg";

const Contact = () => {
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
          <div className=" bg-[#0f1214]  backdrop-blur-lg lg:pt-[8%] pb-[30px] pt-[50px] lg:h-[1100px] w-full lg:[clip-path:polygon(25%_0,_0_0,_0_100%,_25%_100%,_35%_95%,_65%_95%,_78%_100%,_100%_100%,_100%_0,_75%_0,_65%_5%,_35%_5%)]">
            <p className="text-[#f90cff]  w-[90%] font-rog m-auto font-semibold text-left text-lg pt-[40px]">
              # GET IN TOUCH
            </p>
            <h5 className="font-bold text-3xl w-[90%] m-auto text-left">
              Contact Us & Meet Our Team{" "}
              <span className="text-[#f90cff]">!</span>
            </h5>
            <div className="w-[90%] mx-auto flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <input
                    type="text"
                    className="w-[90%] mx-auto border-none ps-[20px] outline-none bg-transparent z-[2]"
                  />
                  <img
                    src={name}
                    alt=""
                    className="absolute left-0 ms-[-20px] w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <input
                    type="email"
                    className="w-[90%] mx-auto border-none ps-[20px] outline-none bg-transparent z-[2]"
                  />
                  <img
                    src={email}
                    alt=""
                    className="absolute left-0 ms-[-20px]  w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <input
                    type="number"
                    className="w-[90%] mx-auto border-none ps-[20px] outline-none bg-transparent z-[2]"
                  />
                  <img
                    src={phone}
                    alt=""
                    className="absolute left-0 ms-[-20px]  w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <select
                    name=""
                    id=""
                    className="w-[90%]   border-none outline-none bg-transparent z-[2]"
                  >
                    <option value=""></option>
                    <option value="">subject -1</option>
                    <option value="">subject -2</option>
                  </select>
                  <img
                    src={subject}
                    alt=""
                    className="absolute left-0 ms-[-20px]  w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center w-full relative h-[70px] ">
                  <input
                    type="text"
                    className="w-[90%] ms-[20px] mx-auto border-none outline-none bg-transparent z-[2]"
                  />
                  <img
                    src={text}
                    alt=""
                    className="absolute  left-0 ms-[-12px] scale-x-[1.1]  w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="send-btn text-center p-2">Send</div>
            </div>
            <p className="text-[#f90cff]  w-[90%] m-auto mt-[45px] font-semibold text-left text-lg">
              # INFORMATION
            </p>
            <h5 className="font-bold w-[90%] m-auto text-3xl text-left my-1">
              Contact Information's <span className="text-[#f90cff]">!</span>
            </h5>
            <div className="border-[1px] border-[#f90cff]  justify-between w-[90%] m-auto mt-[60px] p-[15px] items-center rounded-2xl flex bg-[#0f1214]  backdrop-blur-lg">
              <div className="pl-[15px] text-left">
                <FaLocationCrosshairs className="text-[50px] text-[#f90cff]" />
                <h4 className="font-semibold">ADDRESS:</h4>
                <p className="text-gray-500 font-semibold">
                  Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                  Kingdom
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#f90cff]  justify-between w-[90%] m-auto mt-[30px] p-[15px] items-center rounded-2xl flex bg-[#0f1214]  backdrop-blur-lg">
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

            <div className="w-1/2 h-[700px]  rotate-180 items-center justify-center bg-[#0f1214]  backdrop-blur-lg [clip-path:polygon(32%_10%,_46%_0,_100%_0,_100%_100%,_45%_100%,_32%_90%,_0_90%,_0_10%)]">
              <div className="w-[90%] rotate-180 h-[85%]">
                <p className="text-[#f90cff] font-semibold text-left text-lg">
                  # GET IN TOUCH
                </p>
                <h5 className="font-bold text-3xl text-left my-1">
                  Contact Us & Meet Our Team{" "}
                  <span className="text-[#f90cff]">!</span>
                </h5>
                <div className="w-full flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex items-center  w-full relative h-[70px] ">
                      <input
                        type="text"
                        className="w-[90%] mx-auto border-none outline-none bg-transparent z-[2]"
                      />
                      <img
                        src={name}
                        alt=""
                        className="absolute left-0 ms-[-20px]  w-full"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flex items-center  w-full relative h-[70px] ">
                      <input
                        type="email"
                        className="w-[90%] mx-auto border-none outline-none bg-transparent z-[2]"
                      />
                      <img
                        src={email}
                        alt=""
                        className="absolute left-0 ms-[-20px]  w-full"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex items-center  w-full relative h-[70px] ">
                      <input
                        type="text"
                        className="w-[90%] mx-auto border-none outline-none bg-transparent z-[2]"
                      />
                      <img
                        src={phone}
                        alt=""
                        className="absolute left-0 ms-[-20px]  w-full"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flex items-center  w-full relative h-[70px] ">
                      <select
                        name=""
                        id=""
                        className="w-[90%]  border-none outline-none bg-transparent z-[2]"
                      >
                        <option value=""></option>
                        <option value="">subject -1</option>
                        <option value="">subject -2</option>
                      </select>
                      <img
                        src={subject}
                        alt=""
                        className="absolute left-0 ms-[-20px]  w-full"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 ">
                    <div className="flex items-center  w-full relative h-[70px] ">
                      <input
                        type="text"
                        className="w-[90%] mx-auto border-none outline-none bg-transparent z-[2]"
                      />
                      <img
                        src={text}
                        alt=""
                        className="absolute scale-x-[1.5] left-0 ms-[-20px]  w-full"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="send-btn text-center p-2">Send</div>
                </div>
              </div>
            </div>
            {/* Right Card */}
            <div className="w-1/2 bg-[#0f1214]  backdrop-blur-lg cursor-default h-[700px] [clip-path:polygon(32%_10%,_46%_0,_100%_0,_100%_100%,_45%_100%,_32%_90%,_0_90%,_0_10%)]">
              <div className="w-[80%]  mt-[17%] m-auto">
                <p className="text-[#f90cff] font-semibold text-left text-lg">
                  # INFORMATION
                </p>
                <h5 className="font-bold text-3xl text-left my-1">
                  Contact Information's{" "}
                  <span className="text-[#f90cff]">!</span>
                </h5>
                <div className="border-[1px] mt-[20px]  border-[#f90cff]  p-[15px] items-center rounded-2xl flex bg-[#0f1214]  backdrop-blur-lg w-full h-[90px]">
                  <FaLocationCrosshairs className="text-[50px] text-[#f90cff]" />
                  <div className="pl-[15px] text-left">
                    <h4 className="font-semibold">ADDRESS:</h4>
                    <p className="text-gray-500 font-semibold">
                      Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United
                      Kingdom
                    </p>
                  </div>
                </div>

                <div className="border-[1px] mt-[10px] border-[#f90cff] p-[15px] items-center rounded-2xl flex bg-[#0f1214]  backdrop-blur-lg w-full h-[90px]">
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
          title="RGUKT NUZVID MAP"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
