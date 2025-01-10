import React from 'react'

const Department = ({data}) => {
  return (
    <div className="flex w-full text-left flex-col ps-[12px] " >
            <div className="text-2xl font-bold text-[white]">Department</div>
            <p className="text-white text-[15px] " style={{ textIndent: "40px" }}>
                {data.dep}
            </p>
        </div>
  )
}

export default Department