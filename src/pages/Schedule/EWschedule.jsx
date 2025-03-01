import React, { useState } from 'react';
import './EWschedule.css';
import Header from '../../components/Header/Header';
import eventData from './scheduleConstants';


const EWschedule = () => {
  const [selectedDay, setSelectedDay] = useState('Mar 10');

  return (
    <div className="flex flex-col items-center p-[20px]"  >
      {/* Tabs */}
      <div className="flex gap-4">
        {Object.keys(eventData).map((day, index) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-md ${
              selectedDay === day ? 'bg-teal-600 text-white' : 'bg-gray-800 text-teal-400'
            }`}
          >
            <div className="text-lg">DAY {index + 1}</div>
            <div className="text-sm">{day}</div>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-2xl my-[100px]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-teal-600 w-1 h-full"></div>
        {eventData[selectedDay].map((event, index) => (
          <div
            key={index}
            className={`relative mb-8 p-4 bg-gray-800 text-teal-400 rounded-md shadow-md ${
              index % 2 === 0 ? 'ml-auto' : 'mr-auto'
            }`}
            style={{ width: '45%' }}
          >
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p>{event.time}</p>
            <p>{event.department}</p>
            <div
              className={`absolute w-4  h-4 bg-teal-600 rounded-full border-2 border-gray-800 ${
                index % 2 === 0 ? 'left-full' : 'right-full'
              }`}
              style={{ top: '50%' }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default EWschedule;


{/*import React from 'react'
import './EWschedule.css'
import Header from '../../components/Header/Header'
import Eve from './scheduleConstants'

const EWschedule = () => {
  return (
   <>

     <div className="timeline  w-[95%] max-w-[800px] mx-auto h-screen my-[10%] mb-[200px] ">
        
        <div className="outer ">
           {
            Eve.events.map((data,index) => (
                <div className="card" data-content={data.Department}>
                    <div className="info backdrop-blur-lg">
                        <h3 className="title text-2xl font-bold">{data.Name_of_the_Event}</h3>
                        <div className="flex flex-col ps-3">
                            <div className="font-bold text-2xl text-[green] ">Rounds</div>
                            <div className="">{
                                Eve.events[index].Rounds.map((r,index) => (
                                    <>
                                        <div className="flex items-center">{r.Round}</div>
                                        <div className="flex items-center">
                                            <div className="text-[#1DCFDC] font-bold pe-[10px]">Date :</div>
                                            <div className="text-white">{r.Date}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="text-[#1DCFDC] font-bold pe-[10px]">Time :</div>
                                            <div className="text-white">{r.Time}</div>
                                        </div>
                                    </>
                                ))
                            }</div>
                            <div className="w-full flex flex-row-reverse">
                                <div className="text-white font-bold">{data.Department}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
           }
            
        </div>
    </div>
   </>
  )
}

export default EWschedule*/}






{/*import React from 'react'
import './EWschedule.css'
import Header from '../../components/Header/Header'
import Eve from './scheduleConstants'
const EWschedule = () => {
  const [tab,setTab] = useState("Events")

  return (
    <div className="container mx-auto py-16 px-4 relative mt-[30px]">
      


      
      <div className="absolute top-0 md:left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-gray-900 to-teal-900 w-1 h-full rounded-md"></div>

      
      {Eve.events.map((item, index) => (
        <div
          key={index}
          className={`relative w-full md:w-1/2 p-6 transition-all duration-500 ease-in-out 
          ${index % 2 === 0 ? "ml-0 md:ml-auto" : "ml-0 md:mr-auto"} 
          ${index % 2 === 0 ? "text-left" : "text-left"}`}
        >
          
          <div
            className={` md:block hidden absolute w-4 h-4 bg-teal-600 rounded-full border-2 border-gray-800 transform 
            -translate-x-1/2 md:translate-x-0 
            ${index % 2 === 0 ? "left-[50%] md:-left-2" : "right-[50%] md:-right-2"}`}
            style={{ top: "50%" }}
          ></div>
         
         <div
            className={` md:hidden  absolute w-4 h-4 bg-teal-600 rounded-full border-2 border-gray-800 transform 
            -translate-x-1/2 md:translate-x-0 
            ${index % 2 === 0 ? "left-0" : "left-0"}`}
            style={{ top: "50%" }}
          ></div>

          
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border-b-4 border-teal-600">
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm mb-4">{item.description}</p>
            <a
              href="#"
              className="text-teal-400 text-sm font-medium hover:underline hidden"
            >
              Learn more...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ewschedule;*/}

