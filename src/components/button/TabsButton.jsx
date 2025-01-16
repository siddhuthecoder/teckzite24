import React from 'react';
import tabbutton from '../../assets/events/tabbutton.webp'
const TabsButton = ({ name, isActive }) => {
  return (
    <div className="flex justify-center items-center font-bruno">
      <div
        className="relative lg:h-[50px] lg:w-[120px] md:w-[80px] h-[40px] w-[85px] flex justify-center items-center gap-[20px]">
        {isActive && (
          <>
            <img
              src={tabbutton}
              className="absolute inset-0 md:h-[36px] md:w-[300px] h-[25px] w-[180px] cursor-pointer"
              alt="Active Event Button"
            />
            <div className="absolute md:top-[7px] top-[6px] md:text-[14px] text-[10px] font-bold font-bruno text-white z-[10] whitespace-nowrap">
              {name}
            </div>
          </>
        )}
        {!isActive && (
          <div className="md:text-[15px] text-[10px] font-bold text-white font-bruno whitespace-nowrap">{name}</div>
        )}
      </div>
    </div>
  );
};

export default TabsButton;
