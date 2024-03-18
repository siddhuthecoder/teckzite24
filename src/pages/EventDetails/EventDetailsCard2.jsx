import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./eventDetails.css";
import Description from "./details/Description";
import Contact from "./details/Contact";
import TimeLine from "./details/TimeLine";
import Structure from "./details/Structure";
import right from "../../assets/events/after.png";
import left from "../../assets/events/before.png";
import { useSelector } from "react-redux";
import { Button } from "../../components";

const EventDetailsCard2 = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const eventData = useSelector((state) => state.event.data);

  useEffect(() => {
    if (eventData) {
      const event = eventData.find((e) => e._id === id);
      setData(event);
      setLoading(false);
    }
  }, [id, eventData]);

  const tabs = [
    { label: "About", value: "Description" },
    { label: "Structure", value: "Structure" },
    { label: "TimeLine", value: "TimeLine" },
    { label: "Contact", value: "Contact" },
  ];

  const renderTabs = () => {
    return tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        className={`tab border text-[15px] mt-[10px] md:mt-[0px] ${
          activeTab === tab.value ? " active-tab " : ""
        }`}
        style={{ width: "100px", height: "40px" }}
        onClick={() => setActiveTab(tab.value)}
      >
        {tab.label}
      </button>
    ));
  };

  const renderLoadingIndicator = () => (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const renderEventDetails = () => (
    <div className="w-full h-[100vh] justify-center pt-[100px] max-md:pt-[450px] pb-24 flex  items-center overflow-auto  ">
      <div className=" card-box  w-[90%] mx-auto  max-w-[900px] h-[auto]  relative grid grid-cols-12 ">
        <div className="absolute left-[-6%] top-[20%] hidden md:block">
          <img src={left} alt="" style={{ transform: "scale(0.5)" }} />
        </div>
        <div className="absolute right-[-6%] top-[20%] hidden md:block">
          <img src={right} alt="" style={{ transform: "scale(0.5)" }} />
        </div>
        <div className="p-4 -200 w-full  col-span-12 md:col-span-4 lg:col-span-4 md:backdrop-blur-lg   flex flex-col justify-between ">
          <div className="font-[ROG] font-bold w-full flex items-center justify-center ">
            <div className="font-bold text-2xl text-center">{data.name}</div>
          </div>
          <div className="font-[ROG] font-bold w-full flex justify-center items-center ">
            <img
              src={data.img}
              alt=""
              style={{ transform: "scale(0.8)", maxWidth: "300px" }}
            />
          </div>

          <div className="w-100 flex justify-between items-center">
            <div className="font-[ROG] font-bold md:text-center flex items-center">
              <button className="text-white rounded-sm bg-gradient hover:bg-primary design_btn px-5 py-1.5 font-serif">
                Register
              </button>
            </div>
            <div className="flex flex-col font-ROG md:hidden">
              <div className="font-bold">PRIZE MONEY</div>
              <div className="text-center font-bold">
                {data.prizeMoney ? `${data.prizeMoney}/-` : "Updated soon"}
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-lg p-4 -200 w-full col-span-12 md:col-span-8  lg:col-span-8  flex flex-col justify-between items-center">
          <div className="font-[ROG] font-bold w-full flex items-center ">
            <div className="font-bold flex w-full items-center  justify-start flex-wrap ">
              {renderTabs()}
            </div>
          </div>
          <div className="h-[200px] w-full mt-[10px] overflow-y-auto">
            {activeTab === "TimeLine" && <TimeLine timeline={data.timeline} />}
            {activeTab === "Structure" && (
              <Structure structure={data.structure} />
            )}
            {activeTab === "Description" && (
              <Description desc={data.desc} rules={data.rules} />
            )}
            {activeTab === "Contact" && <Contact contact={data.contact_info} />}
          </div>
          <div className="w-full flex items-center flex-row-reverse">
            <div className="hidden md:flex flex-col font-ROG">
              <div className="font-bold">PRIZE MONEY</div>
              <div className="text-center font-bold">
                {data.prizeMoney ? `${data.prizeMoney}/-` : "Updated soon..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      {loading ? renderLoadingIndicator() : renderEventDetails()}
    </>
  );
};

export default EventDetailsCard2;
