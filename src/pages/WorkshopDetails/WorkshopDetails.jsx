import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./WorkshopDetails.module.css";
import Description from "./details/Description";
import Instructor from "./details/Instructor";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Contact from "./details/Contact";
import Department from "./details/Department";
import Structure from "./details/Structure";
import ed1 from "../../assets/img/ed/ed1.svg";
import ed2 from "../../assets/img/ed/ed2.svg";
import ed3 from "../../assets/img/ed/ed3.svg";
import ed4 from "../../assets/img/ed/ed4.svg";
import RenderRegistrationForm from "./RenderRegistrationForm";
import eventdetailsdesk from '../../assets/events/ewDetails.png';
import EventButton from "../../components/button/EventButton";
import tabbutton from "../../assets/events/tabbutton.png";
const WorkshopDetails = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const workshopData = useSelector((state) => state.workshop.data);
  const [registerForm, setRegisterForm] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };

  useEffect(() => {
    if (workshopData) {
      const workshop = workshopData.find((e) => e._id === id);
      if (workshop) {
        setData(workshop);
        setLoading(false);
      } else {
        navigate("/workshopdetails");
      }
    }
  }, [id, workshopData, navigate]);

  const handleRegister = async () => {
    setRegisterForm(true);
    // window.alert("Only offline registration are allowed");
  };

  const tabs = [
    { label: "Description", value: "Description" },
    { label: "Instructor", value: "Instructor" },
    { label: "Structure", value: "Structure" },
    { label: "Department", value: "Department" },
    { label: "Contact", value: "Contact" },
  ];

  const RenderTabs = () => {
     {/* max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 mt-36 */}
    return tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        className={`text-[15px] mt-[10px] md:mt-[0px] flex items-center justify-center flex-wrap relative`}
        style={{ width: "120px", height: "40px" }}
        onClick={() => {
          handleSound();
          setActiveTab(tab.value);
        }}
      >
        <span className="p-2 ">{tab.label}</span>
        <img
          src={tabbutton}
          alt="cover"
          className={`absolute top-0 left-0 z-[-1] pointer-events-none ${
            activeTab === tab.value ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "120px", height: "40px" }}
        />
      </button>
    ));
  };

  const RenderLoadingIndicator = () => (
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

  const RenderWorkshopDetails = () => (
    <div className="w-full flex min-h-screen justify-center items-center">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-fixed bg-center z-0"
        style={{ backgroundImage: "url('../../../eventdetails.png')" }}
      ></div>
      <div className="w-[95%] max-w-[800px] mx-auto h-[450px] mt-5 relative max-md:absolute max-md:w-full max-md:h-screen max-md:overflow-y-scroll max-md:pt-[80px]">
        <div className="absolute max-md:relative top-3 w-full">
          <div className="max-md:hidden mt-[20px] flex items-center w-[90%] mx-auto justify-around flex-wrap gap-3 pb-2 ">
            <RenderTabs />
          </div>
          <h1 className="text-xl max-md:text-3xl my-2 w-full text-center font-joti text-[#0A69A5] ">
            {data.name}
          </h1>
          <div className="md:h-[220px] grid grid-cols-12 p-3 max-md:pb-16">
            <div className="col-span-4 max-md:col-span-12 flex items-center w-full justify-start max-md:justify-center md:ml-[25px] flex-col gap-3">
              <img
                src={data.workshopImg}
                alt={data.name}
                className="md:h-[220px] max-md:w-[70vw]"
              />
              {/*<button
                className="px-8 py-1.5 rounded bg-gradient"
                onClick={handleRegister}
              >
                Register
              </button>*/}
              <div onClick={handleRegister}><EventButton name="Register"/></div>
            </div>

            <div className="max-md:flex hidden mt-2 items-center w-[95vw]  mx-auto justify-around flex-wrap gap-1 pb-2 border-b border-1 border-purple-900">
              <RenderTabs />
            </div>

            <div className="col-span-8 max-md:col-span-12 max-md:bg-[#0a8ea5] max-md:py-5 w-full flex items-start flex-col px-4 max-md:px-2">
              <div className="div h-[240px] max-md:h-[fit-content] w-full pt-2 text-white overflow-y-auto overflow-x-visible">
                {activeTab === "Description" && <Description data={data} />}
                {activeTab === "Instructor" && <Instructor data={data} />}
                {activeTab === "Contact" && <Contact data={data} />}
                {activeTab === "Department" && <Department data={data} />}
                {activeTab === "Structure" && <Structure data={data} />}
              </div>
              <div className="w-full flex items-end flex-col px-10 max-md:mt-3">
                <h1 className="font-semibold text-lg">Registration Fee :- </h1>
                {data.entryFee ? (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: data.entryFee }} />
                  </>
                ) : (
                  "Updated soon"
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          src={eventdetailsdesk}
          alt=""
          className="absolute pointer-events-none scale-y-[1.1] hidden md:block md:rotate-[0deg] z-[0]  "
          style={{
            width: "880px",
            minHeight: "420px",
          }}
        />
       {/* <img
          src={ed2}
          alt=""
          className="absolute max-md:hidden pointer-events-none  scale-[0.7] left-[-0px] md:left-[-20px] z-[0]  top-[5%] md:top-[20%]"
        />
        <img
          src={ed3}
          alt=""
          className="absolute max-md:hidden pointer-events-none  scale-[0.7] right-[-0px] md:right-[-20px] z-[0] top-[5%]  md:top-[20%]"
        />*/}
      </div>
    </div>
  );

  return (
    <>
      <Header />
      {registerForm && (
        <RenderRegistrationForm setRegisterForm={setRegisterForm} data={data} />
      )}
      {loading ? <RenderLoadingIndicator /> : <RenderWorkshopDetails />}
    </>
  );
};

export default WorkshopDetails;
