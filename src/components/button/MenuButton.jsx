import React from 'react';
import button from '../../assets/menu/button.png';
const MenuButton = ({ name, action }) => {
      

    return (
        <div className="menu-btn flex justify-center items-start">
            <div className="relative cursor-pointer">
                <img src={button} className="h-[60px] w-[150px]" />
                <div
                    className="absolute   text-white flex justify-center items-center  z-[10px] top-[12px] right-[10px] left-[10px]"
                   onClick={action}
                >
                    {name}
                </div>
            </div>
        </div>
    );
};

export default MenuButton;


