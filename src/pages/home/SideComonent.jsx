import React from 'react'

const SideComonent = ({num ,text}) => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 hidden md:block opacity-1  border z-[-1]">
      <div className="absolute left-[0%] w-[100px] h-[100vh] flex items-center justify-center ">
        <div className="flex flex-col">
            <div className="text-center side-num relative">0{num}</div>
            <div className="text-center side-head relative font-koneMono">{text}</div>
        </div>
      </div>
    </div>
  )
}

export default SideComonent
