import ETWSCard from "../../components/Shared/ETWSCard";
import { useState } from "react";
import EventsBanner from "./EventsBanner";
import "../../css/events.css";
import Header from "../../components/Header/Header";

const Events = () => {
  const [tab, setTab] = useState("ALL");
  return (
    <main>
      <Header />
      <EventsBanner />
      <div className="w-full flex flex-col h-[100vh] overflow-y-scroll fixed top-[10%] ">
        <div className="w-full flex items-center justify-center flex-wrap mt-[20px]  ">
          <button
            className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${
              tab === "ALL" ? "active-tab" : ""
            }`}
            onClick={() => {
              setTab("ALL");
            }}
          >
            ALL
          </button>
          <button
            className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${
              tab === "CSE" ? "active-tab" : ""
            }`}
            onClick={() => {
              setTab("CSE");
            }}
          >
            CSE
          </button>
          <button
            className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${
              tab === "ECE" ? "active-tab" : ""
            }`}
            onClick={() => {
              setTab("ECE");
            }}
          >
            ECE
          </button>
          <button
            className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${
              tab === "MME" ? "active-tab" : ""
            }`}
            onClick={() => {
              setTab("MME");
            }}
          >
            MME
          </button>
          <button
            className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${
              tab === "MECH" ? "active-tab" : ""
            }`}
            onClick={() => {
              setTab("MECH");
            }}
          >
            MECH
          </button>
          <button
            className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${
              tab === "CHEM" ? "active-tab" : ""
            }`}
            onClick={() => {
              setTab("CHEM");
            }}
          >
            CHEM
          </button>
          <button
            className={`tab  w-[100px] h-[30px] mx-[10px] mt-[12px] ${
              tab === "CIVIL" ? "active-tab" : ""
            }`}
            onClick={() => {
              setTab("CIVIL");
            }}
          >
            CIVIL
          </button>
        </div>
        <div className="w-full">
          {tab === "ALL" && (
            <>
              <div className="w-full flex items-center justify-around gap-4 flex-wrap">
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
                <ETWSCard className="mx-4" />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;
