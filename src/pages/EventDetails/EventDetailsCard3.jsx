import React, { useEffect, useState } from "react";
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
import ed1 from "../../assets/img/ed/ed1.svg";
import ed2 from "../../assets/img/ed/ed2.svg";
import ed3 from "../../assets/img/ed/ed3.svg";
import ed4 from "../../assets/img/ed/ed4.svg";
import { userActions } from "../../store/userSlice";

const EventDetailsCard3 = () => {
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

    if (data.teamSize === 1) {
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
        }
      } else {
        setIsReg(false);
        return;
      }
    } else {
      setRegisterForm(true);
      setIsReg(false);
      return;
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
          src={ed4}
          alt="cover"
          className={`absolute top-0 left-0 z-[-1] ${
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
    <div className="w-full flex min-h-screen justify-center items-center">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-fixed bg-center z-0"
        style={{ backgroundImage: "url('../../../eventdetails.png')" }}
        onClick={() => handleSound()}
      ></div>
      <div className="w-[95%] max-w-[800px] mx-auto h-[450px] mt-5 relative max-md:absolute max-md:w-full max-md:h-screen max-md:overflow-y-scroll max-md:pt-[80px]">
        <div className="absolute max-md:relative top-3 w-full z-20">
          <div className="max-md:hidden flex items-center w-[90%] mx-auto justify-around gap-3 pb-2 border-b border-1 border-purple-900">
            <RenderTabs />
          </div>
          <h1 className="text-xl max-md:text-3xl my-2 w-full text-center font-joti text-[#FF48AB]">
            {data.name}
          </h1>
          <div className="md:h-[220px] grid grid-cols-12 p-3 max-md:pb-16">
            <div className="col-span-4 max-md:col-span-12 flex items-center w-full justify-start max-md:justify-center flex-col gap-3">
              <img
                src={data.img}
                alt={data.name}
                className="md:h-[220px] max-md:w-[70vw]"
              />
              <button
                className="px-8 py-1.5 rounded bg-gradient"
                onClick={handleRegister}
              >
                {isReg ? "Registering..." : "Register"}
              </button>
            </div>

            <div className="max-md:flex hidden mt-2 items-center w-[95vw] mx-auto justify-around gap-3 pb-2 border-b border-1 border-purple-900">
              <RenderTabs />
            </div>

            <div className="col-span-8 max-md:col-span-12 max-md:bg-[#10022A] max-md:py-5 w-full flex items-start flex-col px-4 max-md:px-2">
              <div className="div h-[230px] max-md:h-[fit-content] pt-2 text-white overflow-y-auto overflow-x-visible">
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
              <div className="w-full flex items-end flex-col px-10 max-md:mt-3">
                <h1 className="font-semibold text-lg">Prize Money :- </h1>
                {data.prizeMoney ? (
                  <>
                    <div
                      dangerouslySetInnerHTML={{ __html: data.prizeMoney }}
                    />
                  </>
                ) : (
                  "Updated soon"
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          src={ed1}
          alt=""
          className="absolute pointer-events-none scale-y-[1.1] hidden md:block md:rotate-[0deg] z-[0]  "
          style={{
            width: "800px",
            minHeight: "400px",
          }}
        />
        <img
          src={ed2}
          alt=""
          className="absolute max-md:hidden pointer-events-none  scale-[0.7] left-[-0px] md:left-[-20px] z-[0]  top-[5%] md:top-[20%]"
        />
        <img
          src={ed3}
          alt=""
          className="absolute max-md:hidden pointer-events-none  scale-[0.7] right-[-0px] md:right-[-20px] z-[0] top-[5%]  md:top-[20%]"
        />
      </div>
    </div>
  );

  const RenderRegistrationForm = () => {
    const renderInputFields = () => {
      const inputFields = [];
      for (let i = 0; i < data.teamSize; i++) {
        inputFields.push(
          <div className="mt-2" key={i}>
            <p className="text-sm text-black pb-1 pl-1">{`Team Member ${
              i + 1
            }`}</p>
            <input
              type="text"
              id={`team-${i + 1}`}
              className="w-full uppercase placeholder:capitalize px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder={`Team Member ${i + 1} TzkId`}
            />
          </div>
        );
      }
      return inputFields;
    };

    const [loading, setLoading] = useState(false);

    return (
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-[1200] scroll_in"
      >
        <div className="bg-white text-black w-[95%] max-w-lg p-4 rounded shadow-lg max-h-[90vh] scroll_in">
          <div className="flex items-center justify-between pb-4 border-b">
            <h3 className="text-xl font-semibold text-black">{data.name}</h3>
            <button
              type="button"
              onClick={() => setRegisterForm(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
            <form onSubmit={(e) => e.preventDefault()}>
              {renderInputFields()}
            </form>
          </div>
          <div className="flex justify-end pt-4">
            <button
              onClick={() => setRegisterForm(false)}
              className="px-4 py-1 bg-gray-300 text-gray-800 rounded mr-2 focus:outline-none"
            >
              Close
            </button>
            <button
              disabled={loading}
              className="px-4 py-1 bg-gradient text-white rounded focus:outline-none"
              onClick={async () => {
                setLoading(true);
                const teamMembers = [];
                let flag = false;
                let empty = false;
                let dups = false;

                for (let i = 0; i < data.teamSize; i++) {
                  const inputValue = document.getElementById(
                    `team-${i + 1}`
                  ).value;
                  if (inputValue === "" || inputValue.length !== 9) {
                    empty = true;
                  }
                  if (inputValue.toLowerCase() === userData.tzkid) {
                    flag = true;
                  }
                  if (teamMembers.includes(inputValue.toLowerCase())) {
                    dups = true;
                  }
                  teamMembers.push(inputValue.toLowerCase());
                }

                if (empty) {
                  toast.error("Invalid Teckzides Ids");
                  setLoading(false);
                } else if (dups) {
                  toast.error("Duplicate Teckzides Ids are not allowed");
                  setLoading(false);
                } else if (!flag) {
                  toast.error(
                    "Invalid Teckzite Ids !!\n You must be a part of team"
                  );
                  setLoading(false);
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
                    setLoading(false);
                    toast.success("Registered for the event Successfully");
                    dispatch(userActions.addEvent(res.data.event));
                    navigate("/profile");
                  } catch (error) {
                    toast.error(
                      error?.response?.data.message || "Internal Server Error"
                    );
                    setLoading(false);
                  } finally {
                    setRegisterForm(false);
                    setLoading(false);
                  }
                }
              }}
            >
              {loading ? "Registering...." : "Register"}
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
