import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header/Header";
const PageNotFound = () => {
  return (
      <>
    <Header />
        <div
            className="h-screen flex flex-col items-center justify-center relative font-orbitron"
            style={{
                backgroundImage: "url('notfound.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative text-center space-y-8">
                {/* 404 Number */}
                <div className="text-white font-extrabold text-[5rem] sm:text-[7rem] md:text-[10rem] leading-none tracking-wide">
                    4
                    <span className="relative inline-block">
                        O
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold">
                            ?
                        </span>
                    </span>
                    4
                </div>

                {/* Error Message */}
                <div className="text-white text-lg sm:text-xl md:text-2xl px-4">
                    Sorry, the page you are looking for does not exist.
                </div>

                {/* Redirect Link */}
                <div className="mt-4">
                    <a
                        href="/"
                        className="text-blue-500 text-lg sm:text-xl md:text-2xl font-semibold hover:underline"
                    >
                        Please continue to our <span className="font-bold">home page</span>.
                    </a>
                </div>

                {/* Back to Home Button */}
                <div className="mt-8">
                    <a
                        href="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
      </div>
     </>
    );
};

export default PageNotFound;
