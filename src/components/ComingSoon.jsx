import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";

const ComingSoon = () => {
  return (
    <>
      <Header />
      <section
        className="absolute top-0 left-0 w-full z-2 min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('../../comingsoon.webp')",
        }}
      >
        <div className="w-full h-screen bg-[#491549] opacity-65"></div>
        <div className="absolute w-[50%] max-sm:w-[80%] max-sm:-left-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="font-bold text-xl md:text-3xl xl:text-6xl text-white opacity-100">
            WE ARE COMING SOON
          </h3>
          <p className="mt-[40px] md:text-sm sm:text-xs xl:text-lg text-xs">
            This page is under construction
          </p>
          <div className="max-sm:flex-col flex m-auto mt-[40px] max-sm:w-full text-center xl:w-[70%] justify-center gap-7">
            <Link
              to="/"
              style={{ backgroundColor: "#221C3E" }}
              className="comeBtn w-[40%] max-sm:h-[30px] rounded-[5px] max-sm:w-[70%] m-auto max-sm:text-sm flex items-center justify-center md:text-sm"
            >
              {" "}
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="comeBtn w-[40%] max-sm:h-[30px] rounded-[5px] max-sm:w-[70%] m-auto max-sm:text-base flex items-center justify-center md:text-sm"
            >
              {" "}
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
