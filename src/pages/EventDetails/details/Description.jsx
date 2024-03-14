import React from 'react'

const Description = () => {
    return (
        <div className="flex w-full flex-col ps-[12px] " >
            <div className="text-2xl font-bold text-[white]">Description</div>
            <p className="text-white text-[15px] " style={{ textIndent: "40px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et iure vero ab sunt suscipit soluta rerum libero nemo debitis ad eum, quod nihil dignissimos eligendi itaque delectus vitae tempore?
            </p>
            <div className="text-2xl font-bold text-[white]">FORMAT</div>
            <div className="text-[20px] font-bold text-[white]">Round 1: Abstract Submission</div>
            <ul className="ps-3 list-none list-inside">
                <li className="text-[13px] ps-3 list-disc">et consectetur adipisicing elit. Ducimus et iure vero ab sunt suscipit sol</li>
                <li className="text-[13px] ps-3 list-disc">et consectetur adipisicing elit. Ducimus et iure vero ab sunt suscipit sol</li>
                <li className="text-[13px] ps-3 list-disc">et consectetur adipisicing elit. Ducimus et iure vero ab sunt suscipit sol</li>

            </ul>
            <div className="text-[20px] font-bold text-[white] pt-[20px]">Round 2: Project Submission</div>
            <ul className="ps-3 list-none list-inside">
                <li className="text-[13px] ps-3 list-disc">et consectetur adipisicing elit. Ducimus et iure vero ab sunt suscipit sol</li>
                <li className="text-[13px] ps-3 list-disc">et consectetur adipisicing elit. Ducimus et iure vero ab sunt suscipit sol</li>
                <li className="text-[13px] ps-3 list-disc">et consectetur adipisicing elit. Ducimus et iure vero ab sunt suscipit sol</li>

            </ul>

        </div>
    )
}

export default Description
