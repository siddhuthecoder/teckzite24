import React from 'react';
import button from '../../assets/menu/button.png';
const EventButton = ({ name }) => {
    return (
        <div className=" flex justify-center items-center">
            <div className="relative">
                <img src={button} className="h-[50px] w-[100px]" />
                <div
                    className="absolute text-[15px] font-semibold text-white flex justify-center items-center z-[10px] top-[7px] right-[10px] left-[10px]"
                >
                    {name}
                </div>

            </div>
        </div>
    );
};

export default EventButton;
