import React from 'react'
import './NEschedule.scss'
import Eve from './scheduleConstants'
import {NE} from './NE.js'

const NEchedule = () => {
  return (
    <>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-[40px]">
            <div className="flex flex-col">
                <div className="text-center text-3xl font-joti">DAY 1</div>
                <div className="timeline  w-[95%] max-w-[400px] mx-auto  my-[10%] mb-[200px] ">
                <div className="outer ">
                {
                    NE.day_01.events.map((data,index) => (
                        <div className="card" data-content={data.Department}>
                            <div className="info backdrop-blur-lg">
                                <h3 className="title text-2xl font-bold" style={{color:"aqua"}}>{data.event}</h3>
                                <div className="flex flex-col ps-3">
                                   
                                    <div className="w-full flex flex-row-reverse">
                                        <div className="text-white font-bold">{data.time}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                    
                </div>
            </div>
            </div>
            <div className="flex flex-col">
            <div className="text-center text-3xl font-joti">DAY 2</div>
                <div className="timeline  w-[95%] max-w-[400px] mx-auto  my-[10%] mb-[200px] ">
                <div className="outer ">
                {
                    NE.day_02.events.map((data,index) => (
                        <div className="card" data-content={data.Department}>
                            <div className="info backdrop-blur-lg">
                                <h3 className="title text-2xl font-bold" style={{color:"aqua"}}>{data.event}</h3>
                                <div className="flex flex-col ps-3">
                                   
                                    <div className="w-full flex flex-row-reverse">
                                        <div className="text-white font-bold">{data.time}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                    
                </div>
            </div>
            </div>
            <div className="flex flex-col">
                <div className="text-center text-3xl font-joti">DAY 3</div>
                <div className="timeline  w-[95%] max-w-[400px] mx-auto  my-[10%] mb-[200px] ">
                <div className="outer ">
                {
                    NE.day_03.events.map((data,index) => (
                        <div className="card" data-content={data.Department}>
                            <div className="info backdrop-blur-lg">
                                <h3 className="title text-2xl font-bold" style={{color:"aqua"}}>{data.event}</h3>
                                <div className="flex flex-col ps-3">
                                   
                                    <div className="w-full flex flex-row-reverse">
                                        <div className="text-white font-bold">{data.time}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                    
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default NEchedule
