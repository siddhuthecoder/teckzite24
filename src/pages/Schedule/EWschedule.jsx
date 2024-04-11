import React from 'react'
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
                            <div className="font-bold text-2xl text-[aqua] ">Rounds</div>
                            <div className="">{
                                Eve.events[index].Rounds.map((r,index) => (
                                    <>
                                        <div className="flex items-center">{r.Round}</div>
                                        <div className="flex items-center">
                                            <div className="text-[#f529a3] font-bold pe-[10px]">Date :</div>
                                            <div className="text-white">{r.Date}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="text-[#f529a3] font-bold pe-[10px]">Time :</div>
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

export default EWschedule
