import React from 'react'

const TableCard = (props) => {
  return (
    <div className="w-full justify-between mt-[10px] text-center px-[3%] bg-[rgba(255,255,255,0.125)] items-center py-[15px] flex [clip-path:polygon(50%_0%,_97%_0,_100%_50%,_97%_100%,_3%_100%,_0_50%,_3%_0)]">
        <p className="min-w-[10%] font-bold overflow-x-hidden text-2xl">{props.rank}</p>
        <p className="min-w-[35%] font-bold overflow-x-hidden text-2xl">{props.name}</p>
        <p className="min-w-[35%] font-bold overflow-x-hidden text-2xl">{props.email}</p>
        <p className="min-w-[20%] font-bold overflow-x-hidden text-2xl">{props.referrals}</p>
    </div>
  )
}

export default TableCard