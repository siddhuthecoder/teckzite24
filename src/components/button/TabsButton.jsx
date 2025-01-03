import React from 'react';
import tabbutton from '../../assets/events/tabbutton.png'
const TabsButton = ({ name, isActive }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative lg:h-[50px] lg:w-[100px] md:w-[80px] h-[40px] w-[65px] flex justify-center items-center">
        {isActive && (
          <>
            <img
              src={tabbutton}
              className="absolute inset-0 md:h-[50px] md:w-[150px] h-[35px] w-[75px]"
              alt="Active Event Button"
            />
            <div className="absolute top-[15px] md:[0px] md:text-[15px] text-[10px] font-bold text-white z-[10]">
              {name}
            </div>
          </>
        )}
        {!isActive && (
          <div className="md:text-[15px] text-[10px] font-bold text-white">{name}</div>
        )}
      </div>
    </div>
  );
};

export default TabsButton;
