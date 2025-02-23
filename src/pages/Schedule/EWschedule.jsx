import React, { useState } from 'react';
import './EWschedule.css';
import Header from '../../components/Header/Header';
import Eve from './scheduleConstants';

const EWschedule = () => {
  const [tab, setTab] = useState('Events');

  return (
    <div className="container mx-auto py-16 px-4 relative mt-[30px]">
      {/* Timeline divider */}
      <div className="absolute top-0 md:left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-gray-900 to-teal-900 w-1 h-full rounded-md"></div>

      {/* Event cards */}
      {Eve.events.map((event, index) => (
        <div
          key={index}
          className={`relative w-full md:w-1/2 p-6 transition-all duration-500 ease-in-out 
          ${index % 2 === 0 ? 'ml-0 md:ml-auto' : 'ml-0 md:mr-auto'} 
          ${index % 2 === 0 ? 'text-left' : 'text-left'}`}
        >
          {/* Connector dot */}
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

          {/* Event card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border-b-4 border-teal-600">
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              {event.Name_of_the_Event}
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              <span className="font-bold text-teal-400">Department:</span> {event.Department}
            </p>

            {/* Rounds */}
            <div className="text-gray-300 text-sm">
              <h3 className="font-bold text-teal-400 mb-2">Rounds:</h3>
              {event.Rounds.map((round, roundIndex) => (
                <div key={roundIndex} className="mb-4">
                  <p className="font-medium text-gray-400">{round.Round}</p>
                  <p>
                    <span className="text-teal-400 font-bold">Date:</span> {round.Date}
                  </p>
                  <p>
                    <span className="text-teal-400 font-bold">Time:</span> {round.Time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
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

