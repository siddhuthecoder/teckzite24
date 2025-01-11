import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TabsButton from "../../components/button/TabsButton";
import EWCard from "../../components/Shared/EWCard";
import Eventsbg from "./Eventsbg";
import { useSelector } from "react-redux";

const Events = () => {
  const [tab, setTab] = useState("ALL");
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const eventData = useSelector((state) => state.event.data);

  useEffect(() => {
    if (eventData) {
      setFilteredEvents(eventData);
    }
  }, [eventData]);

  useEffect(() => {
    if (eventData) {
      const filtering = eventData.filter((data) => data.dep === tab);
      setFilteredEvents(filtering);
    }
  }, [eventData, tab]);

  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      <Header />

      <Eventsbg isEventOpen={true} />
      <div className="relative w-full flex flex-col min-h-[85vh] pb-5">
        <div className="text-center font-joti text-3xl mt-5">Events</div>
        <div className="w-full flex items-center gap-2 justify-center flex-wrap px-5 mt-7">
          {[
            "OPEN TO ALL",
            "PUC",
            "CSE",
            "ECE",
            "EE",
            "MME",
            "MECH",
            "CHEM",
            "CIVIL",
            "ROBOTICS",
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setTab(
                  item === "EE" ? "EEE" : item === "OPEN TO ALL" ? "ALL" : item
                );
                setIsActive(true);
                handleSound();
              }}
            >
              <TabsButton
                name={item}
                isActive={
                  tab === (item === "EE" ? "EEE" : item === "OPEN TO ALL" ? "ALL" : item)
                }
              />
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {filteredEvents ? (
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-0 z-0">
              {filteredEvents.map((event, index) => (
                <div key={index} className="cursor-pointer">
                  <EWCard
                    img={event.img}
                    id={event._id}
                    name={event.name}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              role="status"
              className="flex items-center justify-center w-[fit-content] min-h-[400px]"
            >
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
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;



// import Style from "./Events.module.css";
// import { useEffect, useState } from "react";
// import EventsBanner from "./EventsBanner";
// import Header from "../../components/Header/Header";
// import EWCard from "../../components/Shared/EWCard";
// import { useSelector } from "react-redux";
// import TabsButton from "../../components/button/TabsButton";
// import Eventsbg from "./Eventsbg";
// const Events = () => {
//   const [tab, setTab] = useState("ALL");
//   const [filteredEvents, setFilteredEvents] = useState(null);
//   const [isActive, setIsActive] = useState(false);
//   const eventData = useSelector((state) => state.event.data);
//   useEffect(() => {
//     if (eventData) {
//       setFilteredEvents(eventData);
//     }
//   }, [eventData]);

//   useEffect(() => {
//     if (eventData) {
//       const filtering = eventData.filter((data) => data.dep === tab);
//       setFilteredEvents(filtering);
//     }
//   }, [eventData, tab]);
//   const handleSound = () => {
//     const audio = new Audio("./click.wav");
//     audio.play();
//   };

//   return (
//     <main className="w-full overflow-x-hidden">
//       <Header />
//       {/* <EventsBanner /> */}
//       <Eventsbg ></Eventsbg>
//       <div className="w-full flex flex-col  min-h-[85vh] pb-5 sticky ">
//         <div className="text-center font-joti text-3xl">Events</div>
//         <div className="w-full flex items-center gap-2 justify-center flex-wrap px-[20px] mt-7">
//           {[
//             "OPEN ALL",
//             "PUC",
//             "CSE",
//             "ECE",
//             "EE",
//             "MME",
//             "MECH",
//             "CHEM",
//             "CIVIL",
//             "ROBOTICS",
//           ].map((item, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 setTab(
//                   item === "EE" ? "EEE" : item === "OPEN ALL" ? "ALL" : item
//                 );
//                 setIsActive(true);
//                 handleSound();
//               }}
//             >
//               <TabsButton name={item}  isActive={tab===(item==="EE"?"EEE":item==="OPEN ALL"?"ALL":item)}/>
//             </div>
//           ))}
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//           {filteredEvents ? (
//             <>
//               <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-10">
//                 {filteredEvents.map((event, index) => (
//                   <EWCard
//                     key={index}
//                     img={event.img}
//                     id={event._id}
//                     name={event.name}
//                   />
//                 ))}
//               </div>
//             </>
//           ) : (
//             <div
//               role="status"
//               className="flex items-center justify-center w-[fit-content] min-h-[400px]"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//                 viewBox="0 0 100 101"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                   fill="currentFill"
//                 />
//               </svg>
//               <span className="sr-only">Loading...</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };
// export default Events;



{/*import Style from "./Events.module.css";
import { useEffect, useState } from "react";
import EventsBanner from "./EventsBanner";
import Header from "../../components/Header/Header";
import EWCard from "../../components/Shared/EWCard";
import TabsButton from "../../components/Button/TabsButton";
import { useSelector } from "react-redux";
const Events = () => {
  const [tab, setTab] = useState("ALL");
  const [filteredEvents, setFilteredEvents] = useState(null);
  const eventData = useSelector((state) => state.event.data);
  useEffect(() => {
    if (eventData) {
      setFilteredEvents(eventData);
    }
  }, [eventData]);

  useEffect(() => {
    if (eventData) {
      const filtering = eventData.filter((data) => data.dep === tab);
      setFilteredEvents(filtering);
    }
  }, [eventData, tab]);
  const handleSound = () => {
    const audio = new Audio("./click.wav");
    audio.play();
  };

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <EventsBanner />
      <div className="w-full flex flex-col z-10 min-h-[85vh] pb-5 sticky">
        <div className="text-center font-joti text-3xl">Events</div>
        <div className="w-full flex items-center gap-2 justify-center flex-wrap mt-7">
          {[
            "OPEN FOR ALL",
            "PUC",
            "CSE",
            "ECE",
            "EE",
            "MME",
            "MECH",
            "CHEM",
            "CIVIL",
            "ROBOTICS",
          ].map((item, index) => (
            <button
              key={index}
              className={`tab rounded-sm px-2 h-[30px] mx-[10px] mt-[12px] ${
                tab ===
                (item === "EE" ? "EEE" : item === "OPEN FOR ALL" ? "ALL" : item)
                  ? "gradient-bg"
                  : ""
              }`}
              onClick={() => {
                setTab(
                  item === "EE" ? "EEE" : item === "OPEN FOR ALL" ? "ALL" : item
                );
                handleSound();
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {filteredEvents ? (
            <>
              <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {filteredEvents.map((event, index) => (
                  <EWCard
                    key={index}
                    img={event.img}
                    id={event._id}
                    name={event.name}
                  />
                ))}
              </div>
            </>
          ) : (
            <div
              role="status"
              className="flex items-center justify-center w-[fit-content] min-h-[400px]"
            >
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
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;
*/}