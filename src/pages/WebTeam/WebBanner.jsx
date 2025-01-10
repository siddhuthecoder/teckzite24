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
        // filter: `blur(${blurValue}px)`,
        backgroundPosition: 'center bottom',
        backgroundSize: "cover",
        position: 'fixed',
        top: '0px',
        left: '0px'
    };

    const headingStyle = {
        opacity: 1 - scroll / (window.innerHeight / 2),

    };
    const opacity = `${1 - scroll / (window.innerHeight / 2)}`;
    const fontSize = `${100 - scroll * (1) / 2}px`;
    const backgroundSize = `${170 + scroll / 2}%`;
    const marginTop = `${-80 + scroll * 1.8 * 1 / 1}px`;

    return (
        <>
            <div className="web-banner w-full min-h-[100vh] pointer-events-none flex justify-center items-center z-[1]" style={backgroundStyle}></div>
            <div className={` web-heading  w-full min-h-[100vh] flex justify-center items-center z-[11] relative pointer-events-none
               `} style={headingStyle}>
                <div className="w-full text-center text-[70px] md:text-[70px] lg:text-[90px] " style={{}}>web Team</div>

            </div>
        </>
    );
};

export default WebBanner;
