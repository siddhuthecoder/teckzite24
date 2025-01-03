import React from 'react';
import button from '../../assets/menu/button.png';
import {useNavigate} from 'react-router-dom';
const MenuButton = ({ name, text, action }) => {
      const navigate=useNavigate();
    const handleClick = () => {
        if (action === "console") {
            console.log(text); 
        } else if (action === "alert") {
            alert(text); 
        } else if (action === "navigate") {
            navigate('./footer');
        } else if (action === "print") {
            console.log(text); 
        }
    };
    return (
        <div className="menu-btn flex justify-center items-start">
            <div className="relative">
                <img src={button} className="h-[60px] w-[150px]" />
                <div
                    className="absolute   text-white flex justify-center items-center  z-[10px] top-[5px] right-[10px] left-[10px]"
                   onClick={handleClick}
                >
                    {name}
                </div>
            </div>
        </div>
    );
};

export default MenuButton;
