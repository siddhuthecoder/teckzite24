import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { toast } from "react-hot-toast";
import "./eventDetails.css";
import Description from "./details/Description";
import Contact from "./details/Contact";
import TimeLine from "./details/TimeLine";
import Structure from "./details/Structure";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import tabbutton from "../../assets/events/tabbutton.webp";
import EventButton from "../../components/button/EventButton";
import eventdetailsdesk from "../../assets/events/eventdetailsdesk.webp";
import { userActions } from "../../store/userSlice";

const EventDetailsCard3 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState("Description");
  const [registerForm, setRegisterForm] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isReg, setIsReg] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const eventData = useSelector((state) => state.event.data);
  const userData = useSelector((state) => state.user.data);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]); // Added handleResize to dependencies

  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };

  useEffect(() => {
    if (eventData) {
      const event = eventData.find((e) => e._id === id);
      if (event) {
        setData(event);
        setLoading(false);
      } else {
        navigate("/eventdetails");
      }
    }
  }, [id, eventData, navigate]);

  const handleRegister = async () => {
    setIsReg(true);
    if (!userData) {
      toast.error("Log in to register to an event");
      setIsReg(false);
      return;
    }

    if (userData.regEvents.includes(id)) {
      toast.error("You are already registered to this event");
      setIsReg(false);
      return;
    }

    if (data.teamSize > 1) {
      setRegisterForm(true);
      setIsReg(false);
      return;
    }

    if (window.confirm("Are you sure you want to register to this event")) {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/events/register/${data._id}`,
          {
            tzkIds: [userData.tzkid],
          },
          {
            
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsReg(false);
        toast.success("Registered for the event Successfully");
        dispatch(userActions.addEvent(res.data.event));
        navigate("/profile");
      } catch (error) {
        toast.error(error?.response?.data.message || "Internal Server Error");
        setIsReg(false);
      }
    } else {
      setIsReg(false);
    }
  };

  const tabs = [
    { label: "About", value: "Description" },
    { label: "Structure", value: "Structure" },
    { label: "TimeLine", value: "TimeLine" },
    { label: "Contact", value: "Contact" },
  ];

  const RenderTabs = () => {
    return tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        className={`text-[15px] mt-[10px] md:mt-[0px] flex items-center justify-center flex-wrap relative`}
        style={{ width: "120px", height: "40px" }}
        onClick={() => setActiveTab(tab.value)}
      >
        <img
          src={tabbutton || "/placeholder.svg"}
          alt="cover"
          className={`absolute top-0 left-0 z-[1] ${
            activeTab === tab.value ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "120px", height: "40px" }}
        />
        <span className="p-2">{tab.label}</span>
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

  const RenderEventDetails = () => (
    <div className="w-full flex min-h-screen justify-center items-center relative">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-fixed bg-center "
        style={{ backgroundImage: "url('/notfound.webp')" }}
        onClick={() => handleSound()}
      ></div>
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 "></div>
      <div className="w-[95%] max-w-[800px] mx-auto h-[450px] mt-5 relative  max-md:absolute max-md:w-full max-md:h-screen max-md:overflow-y-scroll max-md:pt-[80px]">
        <div className="absolute max-md:relative top-[10px] w-full md:mt-[25px]">
          <div className="max-md:hidden flex items-center w-[90%] mx-auto justify-around gap-3 pb-2">
            <RenderTabs />
          </div>
          <h1 className="text-xl max-md:text-3xl my-2 w-full text-center font-bruno text-[#0A69A5] ">
            {data.name}
          </h1>
          <div className="md:h-[220px] grid grid-cols-12 p-3 max-md:pb-16 ">
            <div className="col-span-4 max-md:col-span-12 flex items-center w-full justify-start max-md:justify-center flex-col gap-3 md:ml-[10px]">
              <img
                src={data.img || "/placeholder.svg"}
                alt={data.name}
                className="md:h-[220px] max-md:w-[70vw] mr-3 "
              />
              <div onClick={handleRegister}>
                <EventButton name={isReg ? "Registering..." : "Register"} />
              </div>
            </div>

            <div className="max-md:flex hidden mt-2 items-center w-[95vw] mx-auto justify-around gap-3 pb-2 border-b border-1 border-purple-900 overflow-x-auto">
              <RenderTabs />
            </div>

            <div className="col-span-8 max-md:col-span-12 max-md:bg-[rgba(42,46,56,0.56)] max-md:py-5 w-full  md:w-[94%] flex items-start flex-col px-4 max-md:px-2 rounded-[12px] border border-[rgba(255,255,255,0.125)] backdrop-blur-[18px] backdrop-saturate-200 md:ml-3 md:mr-1">
              <div className="div h-[230px] max-md:h-[fit-content] pt-2 text-white overflow-y-auto overflow-x-visible  ">
                {activeTab === "TimeLine" && (
                  <TimeLine timeline={data.timeline} />
                )}
                {activeTab === "Structure" && (
                  <Structure structure={data.structure} />
                )}
                {activeTab === "Description" && (
                  <Description
                    desc={data.desc}
                    rules={data.rules}
                    teamSize={data.teamSize}
                  />
                )}
                {activeTab === "Contact" && (
                  <Contact contact={data.contact_info} />
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          src={eventdetailsdesk || "/placeholder.svg"}
          alt=""
          className="absolute pointer-events-none scale-y-[1.1] scale-x-[1.0] hidden md:block md:rotate-[0deg]"
          style={{
            width: "800px",
            minHeight: "450px",
          }}
        />
      </div>
    </div>
  );

  const RenderRegistrationForm = () => {
    const [teamMembers, setTeamMembers] = useState(
      Array(data.teamSize).fill("")
    );
    const [loading, setLoading] = useState(false);

    const handleInputChange = (index, value) => {
      const newTeamMembers = [...teamMembers];
      newTeamMembers[index] = value;
      setTeamMembers(newTeamMembers);
    };

    const handleSubmit = async () => {
      setLoading(true);
      let flag = false;
      let empty = false;
      let dups = false;

      const uniqueMembers = new Set(teamMembers.map((m) => m.toLowerCase()));

      if (teamMembers.some((m) => m === "" || m.length !== 9)) {
        empty = true;
      }
      if (
        !teamMembers
          .map((m) => m.toLowerCase())
          .includes(userData.tzkid.toLowerCase())
      ) {
        flag = true;
      }
      if (uniqueMembers.size !== teamMembers.length) {
        dups = true;
      }

      if (empty) {
        toast.error("Invalid Teckzite Ids");
      } else if (dups) {
        toast.error("Duplicate Teckzite Ids are not allowed");
      } else if (flag) {
        toast.error("Invalid Teckzite Ids! You must be a part of the team");
      } else {
        const token = localStorage.getItem("token");
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/events/register/${data._id}`,
            {
              tzkIds: teamMembers,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toast.success("Registered for the event Successfully");
          dispatch(userActions.addEvent(res.data.event));
          navigate("/profile");
        } catch (error) {
          toast.error(error?.response?.data.message || "Internal Server Error");
        } finally {
          setRegisterForm(false);
        }
      }
      setLoading(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 text-white w-[95%] max-w-lg p-6 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-white/30">
            <h3 className="text-xl font-semibold">
              {data.name} - Team Registration
            </h3>
            <button
              onClick={() => setRegisterForm(false)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="mt-3">
                <p className="text-sm pb-1 pl-1">{`Team Member ${
                  index + 1
                }`}</p>
                <input
                  type="text"
                  value={member}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="w-full uppercase bg-white/20 text-white placeholder-gray-300 px-3 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder={`Team Member ${index + 1} TzkId`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-4">
            <button
              onClick={() => setRegisterForm(false)}
              className="px-4 py-1 bg-white/20 text-white rounded-lg mr-2 focus:outline-none hover:bg-white/30"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-4 py-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg focus:outline-none hover:from-blue-500 hover:to-blue-700"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {registerForm && <RenderRegistrationForm />}
      {loading ? <RenderLoadingIndicator /> : <RenderEventDetails />}
    </>
  );
};

export default EventDetailsCard3;
