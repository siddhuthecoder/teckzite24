import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./WorkshopDetails.module.css";
import Description from "./details/Description";
import right from "../../assets/events/after.png";
import left from "../../assets/events/before.png";
import Instructor from "./details/Instructor";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Contact from "./details/Contact";
import Department from "./details/Department";
import Structure from "./details/Structure";

const WorkshopDetails = () => {
  const [tab, setTab] = useState("Description");
  const workshopData = useSelector((state) => state.workshop.data);
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    workshopData.map((item) => {
      item._id === id && setData(item);
    });
  }, [workshopData, id]);

  return (
    <>
      <Header />
      <div className="w-full h-[100vh] justify-center pt-[100px] max-md:pt-[450px] pb-24 flex  items-center overflow-auto  ">
        <div className=" card-box  w-[90%] mx-auto  max-w-[900px] h-[auto]  relative grid grid-cols-12 ">
          <div className="absolute left-[-6%] top-[20%] hidden md:block">
            <img src={left} alt="" style={{ transform: "scale(0.5)" }} />
          </div>
          <div className="absolute right-[-6%] top-[20%] hidden md:block">
            <img src={right} alt="" style={{ transform: "scale(0.5)" }} />
          </div>
          <div class="p-4 -200 w-full  col-span-12 md:col-span-4 lg:col-span-4 md:backdrop-blur-lg   flex flex-col justify-between ">
            <div className="font-[ROG] font-bold w-full flex items-center justify-center ">
              <div className="font-bold text-2xl text-center">{data.name}</div>
            </div>
            <div className="font-[ROG] font-bold w-full flex justify-center items-center ">
              <img
                src={data.workshopImg}
                alt="workshop image"
                style={{ transform: "scale(0.8)", maxWidth: "300px" }}
              />
            </div>

            <div className="w-100 flex justify-between items-center">
              <div className="font-[ROG] font-bold md:text-center flex items-center">
                <button className="send-btn">Register</button>
              </div>
              <div className="flex flex-col font-ROG md:hidden">
                <div className="font-bold">ENTRY FEE</div>
                <div className="text-center font-bold">{data.entryFee} /-</div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-lg p-4 -200 w-full col-span-12 md:col-span-8  lg:col-span-8  flex flex-col justify-between items-center">
            <div className="font-[ROG] font-bold w-full flex items-center ">
              <div className="font-bold flex w-full items-center  justify-start flex-wrap ">
                <button
                  className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${
                    tab === "Description" ? " active-tab " : ""
                  }`}
                  style={{ width: "100px", height: "40px" }}
                  onClick={() => setTab("Description")}
                >
                  Description
                </button>
                <button
                  className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${
                    tab === "Instructor" ? " active-tab" : ""
                  }`}
                  style={{ width: "100px", height: "40px" }}
                  onClick={() => setTab("Instructor")}
                >
                  Instructor
                </button>
                <button
                  className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${
                    tab === "Structure" ? " active-tab " : ""
                  }`}
                  style={{ width: "100px", height: "40px" }}
                  onClick={() => setTab("Structure")}
                >
                  Structure
                </button>
                <button
                  className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${
                    tab === "Department" ? " active-tab" : ""
                  }`}
                  style={{ width: "100px", height: "40px" }}
                  onClick={() => setTab("Department")}
                >
                  Deparment
                </button>
                <button
                  className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${
                    tab === "Contact" ? " active-tab " : ""
                  }`}
                  style={{ width: "100px", height: "40px" }}
                  onClick={() => setTab("Contact")}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="h-[200px] w-full mt-[10px] overflow-y-auto">
              {tab === "Description" && <Description data={data} />}
              {tab === "Instructor" && <Instructor data={data} />}
              {tab === "Contact" && <Contact data={data} />}
              {tab === "Department" && <Department data={data} />}
              {tab === "Structure" && <Structure data={data} />}
            </div>
            <div className="w-full flex items-center flex-row-reverse">
              <div className="hidden md:flex flex-col font-ROG ">
                <div className="font-bold">ENTRY FEE</div>
                <div className="text-center font-bold">{data?.entryFee} /-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkshopDetails;
