import React, { useState } from 'react';
import './button.css'; // Import your CSS file

const TabButton = ({ name }) => {
    const styles = {
        fontWeight: "bold",
        color: "hsl(300, 100%, 50%)",
        textShadow: "0 0 10px rgba(150, 0, 255, 0.8)",
        transition: "text-shadow 0.3s ease-in-out",
    };


    return (
        <button style={{ transform: "scale(0.8)" }} className="mx-auto">
            <span className="font-bold  text-[25px]" style={styles}>{name}</span>
            <div id="clip">
                <div id="leftTop" class="corner"></div>
                <div id="rightBottom" class="corner"></div>
                <div id="rightTop" class="corner"></div>
                <div id="leftBottom" class="corner"></div>
            </div>
            <span id="rightArrow" class="arrow"></span>
            <span id="leftArrow" class="arrow"></span>
        </button>
    );
}
export default TabButton;
