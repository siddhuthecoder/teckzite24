import React from 'react'

const Structure = ({data}) => {
  return (
    <div className="flex w-full text-left flex-col ps-[12px] " >
            <div className="text-2xl font-bold text-[white]">Structure</div>
            <p className="text-white text-[15px] " style={{ textIndent: "40px" }}>
                <div dangerouslySetInnerHTML={{ __html: data.structure }} />
            </p>
        </div>
  )
}

export default Structure