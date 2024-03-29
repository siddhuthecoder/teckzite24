import React from 'react'
import Header from '../../components/Header/Header'
import './contact.css'


const Contact1 = () => {
  return (
    <div className="w-full flex justify-center items-center   h-screen">
        <Header />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 border">
            <div className="w-full  h-[80vh] py-2 gap-5 ">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2  ">
                    <div className="flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Name</label>
                      <input  type='text' className="input-bg pb-4 bg-contain py-2 border-none outline-none ps-2 relative mx-2 mt-2 " style={{}} />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="mx-2 mt-2 ps-2">Email</label>
                      <input  type='text' className="input-bg pb-4 bg-contain py-2 border-none outline-none ps-2 relative  mx-2 mt-2" style={{}} />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2  ">
                    <div className="flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Phone</label>
                      <input  type='text' className="input-bg pb-4 bg-contain py-2 border-none outline-none ps-2 relative mx-2 mt-2 " style={{}} />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">SUbject</label>
                      <input  type='text' className="input-bg pb-4 bg-contain py-2   outline-none ps-2 relative mx-2 mt-2 " style={{}} />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1   ">
                    <div className="flex flex-col w-full">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Message</label>
                      <textarea name="" className="input-bg bg-contain sm:bg-cover py-2 w-full scale-y-[1.4] sm:scale-y-[1]  outline-none ps-2 relative mt-4 mx-2 " id="" cols="60" rows="10"></textarea>
                    </div>
                    
                </div>
            </div>
            <div className="w-full  py-2 border">

            </div>
        </div>
    </div>
  )
}

export default Contact1
