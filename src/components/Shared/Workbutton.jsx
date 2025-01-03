import React from 'react';
import Wbutton from '../../assets/img/Wbutton.png';
const Workbutton = ({ name }) => {
    return (
        <div className=" flex justify-center items-center">
            <div className="relative">
                <img src={Wbutton} className="h-[50px] w-[100px]" />
                <div
                    className="absolute text-[15px] font-semibold text-white flex justify-center items-center z-[10px] top-[7px] right-[10px] left-[10px]"
                >
                    {name}
                </div>

            </div>
        </div>
    );
};

export default Workbutton;