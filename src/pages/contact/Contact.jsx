import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import { FaLocationDot, FaLocationCrosshairs } from "react-icons/fa6";
import name from "../../assets/img/contact/name.svg";
import email from "../../assets/img/contact/email.svg";
import phone from "../../assets/img/contact/phone.svg";
import subject from "../../assets/img/contact/subject.svg";
import text from "../../assets/img/contact/textarea.svg";

const Contact = () => {
  return (
    <section className="absolute top-0 bg-black w-full m-auto overflow-x-hidden">
      <Header />
      <div className="bg-[#0f1214] backdrop-blur-lg pt-8 md:pt-[8%] pb-10 md:pb-[30px] flex flex-col items-center justify-center h-screen">
        <div className="max-w-[900px] w-[90%] mx-auto flex flex-col">
          <p className="text-[#f90cff] font-semibold text-left text-lg mb-4">
            # GET IN TOUCH
          </p>
          <h5 className="font-bold text-3xl text-left mb-6">
            Contact Us & Meet Our Team <span className="text-[#f90cff]">!</span>
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-center relative h-12">
              <input
                type="text"
                className="w-full border-none pl-12 outline-none bg-transparent"
                placeholder="Name"
              />
              <img src={name} alt="" className="absolute left-0 ml-2 w-6 h-6" />
            </div>
            <div className="flex items-center relative h-12">
              <input
                type="email"
                className="w-full border-none pl-12 outline-none bg-transparent"
                placeholder="Email"
              />
              <img
                src={email}
                alt=""
                className="absolute left-0 ml-2 w-6 h-6"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-center relative h-12">
              <input
                type="number"
                className="w-full border-none pl-12 outline-none bg-transparent"
                placeholder="Phone"
              />
              <img
                src={phone}
                alt=""
                className="absolute left-0 ml-2 w-6 h-6"
              />
            </div>
            <div className="flex items-center relative h-12">
              <select className="w-full border-none outline-none bg-transparent">
                <option value="">Subject - 1</option>
                <option value="">Subject - 2</option>
              </select>
              <img
                src={subject}
                alt=""
                className="absolute left-0 ml-2 w-6 h-6"
              />
            </div>
          </div>
          <div className="flex items-center relative h-12">
            <textarea
              className="w-full border-none pl-12 outline-none bg-transparent"
              placeholder="Message"
            ></textarea>
            <img src={text} alt="" className="absolute left-0 ml-2 w-6 h-6" />
          </div>
          <button className="send-btn text-center p-2 mt-4">Send</button>
          <p className="text-[#f90cff] font-semibold text-left text-lg mt-6">
            # INFORMATION
          </p>
          <h5 className="font-bold text-3xl text-left mb-4">
            Contact Information's <span className="text-[#f90cff]">!</span>
          </h5>
          <div className="border-[1px] border-[#f90cff] rounded-lg p-4 mb-4 flex items-center bg-[#0f1214] backdrop-blur-lg">
            <FaLocationCrosshairs className="text-[#f90cff] mr-4" />
            <div>
              <h4 className="font-semibold">ADDRESS:</h4>
              <p className="text-gray-500">
                Floor 2, 4 Naval St, Ancoats, Manchester M4 6EW, United Kingdom
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#f90cff] rounded-lg p-4 flex items-center bg-[#0f1214] backdrop-blur-lg">
            <FaLocationDot className="text-[#f90cff] mr-4" />
            <div>
              <h4 className="font-semibold">ADDRESS:</h4>
              <p className="text-gray-500">
                Ragiv Ghandi Universtiy of Knowledge Technologies, Nuzvid
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
