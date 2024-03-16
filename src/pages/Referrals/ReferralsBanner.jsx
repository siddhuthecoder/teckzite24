import React, { useState, useEffect } from 'react';
import '../../css/referrals.css';

const ReferralsBanner = () => {
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
        backgroundPosition: 'center center',
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
            <div className="ref-banner w-full min-h-[100vh] flex justify-center items-center pointer-events-none z-[1]" style={backgroundStyle}></div>
            <div className={`ref-heading w-full min-h-[100vh] flex justify-center items-center z-[2] relative
               
               `} style={headingStyle}>
                <div className="text-[50px]  sm:text-[60px] md:text-[70px]" style={{ position: "absolute", bottom: "200px" }}>Referrals</div>
            </div>
        </>
    );
};

export default ReferralsBanner;
