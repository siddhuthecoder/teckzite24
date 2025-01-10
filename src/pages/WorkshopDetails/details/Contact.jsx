import React from 'react'

const Contact = ({data}) => {
  return (
    <div className="flex w-full text-left flex-col ps-[12px] " >
            <div className="text-2xl font-bold text-[white]">Contact</div>
            <div className="text-white text-[15px] " style={{ textIndent: "40px" }}>
                <div dangerouslySetInnerHTML={{ __html: data.contact }} />
            </div>
            
        </div>
  )
}

export default Contact