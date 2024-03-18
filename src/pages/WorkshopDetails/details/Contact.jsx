import React from 'react'

const Contact = ({data}) => {
  return (
    <div className="flex w-full text-left flex-col ps-[12px] " >
            <div className="text-2xl font-bold text-[white]">Contact</div>
            <p className="text-white text-[15px] " style={{ textIndent: "40px" }}>
                {data.contact}
            </p>
            
        </div>
  )
}

export default Contact