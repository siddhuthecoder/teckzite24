import React from "react";
import Header from "./Header/Header";

export const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="w-screen relative h-screen overflow-hidden">
        <div className="absolute w-full h-full flex top-0 z-20 left-0 items-center justify-center gap-2 flex-col">
          <h1 className="font-bold text-7xl">
            <span className="text-[#9b1ba7]">4</span>0
            <span className="text-[#57128f]">4</span>
          </h1>
          <p className="font-semibold text-xl px-3 mb-[-18px] text-center">
            You are lost some where in Metaverse
          </p>
          <button className="send-btn text-white">Back to Home</button>
        </div>
      </div>
    </>
  );
};
