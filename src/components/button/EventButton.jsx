import React from 'react';
import button from '../../assets/menu/button.png';
const EventButton = ({ name }) => {
    return (
        <div className=" flex justify-center items-center font-bruno">
            <div className="relative">
                <img src={button} className="h-[50px] w-[115px]" />
                <div
                    className="absolute text-[15px] font-semibold text-white flex justify-center items-center z-[10px] top-[7px] right-[15px] left-[10px] font-bruno"
                >
                    {name}
                </div>

            </div>
        </div>
    );
};

export default EventButton;
