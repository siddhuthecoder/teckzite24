import React, { useState, useEffect } from 'react';
import '../../css/web.css';

const WebBanner = () => {
    const [scroll, setScroll] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const handleWidth = () => {
        setWidth(window.innerWidth);
    };

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleWidth);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const blurValue = 1 + scroll * 0.050;
    const backgroundStyle = {
        opacity: `${1 - scroll / (window.innerHeight / 2)}`,
        backgroundPosition: 'center bottom',
        backgroundSize: "cover",
        position: 'fixed',
        top: '0px',
        left: '0px'
    };

    const headingStyle = {
        opacity: 1 - scroll / (window.innerHeight / 2),

    };

    return (
        <>
            <div className="web-banner w-full min-h-[100vh] pointer-events-none flex justify-center items-center z-[1]" style={backgroundStyle}></div>
            <div className={` web-heading  w-full min-h-[100vh] flex justify-center items-center z-[11] relative pointer-events-none
                ${width >= 1200 && width < 1500 ? "  text-[120px]" : ""}
                ${width > 900 && width < 1200 ? "   text-[170px]" : ""}
                ${width >= 700 && width < 1025 ? "   text-[100px]" : ""}
                ${width >= 400 && width < 700 ? "   text-[100px]" : ""}
                ${width < 400 ? "   text-[60px]" : ""}
               `} style={headingStyle}>
                <div className="w-full text-center" style={{ position: "absolute", bottom: "150px" }}>web Team</div>

            </div>
        </>
    );
};

export default WebBanner;
