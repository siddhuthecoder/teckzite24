import React, { useState, useEffect } from 'react'
import '../../css/coreteam.css'

const CoreteamBanner = () => {
    const [scroll, setScroll] = useState(window.scrollY);
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
    const opacity = 1 - scroll / (window.innerHeight / 4);

    let backgroundSize;

    if (width > 1000) {
        backgroundSize = `${100 + scroll / 2}%`;
    } else if (width <= 1000 && width > 700) {
        backgroundSize = `${250 + scroll / 2}%`;
    }
    else if (width <= 700 && width > 500) {
        backgroundSize = `${215 + scroll * 3 / 2}%`;
    }
    else if (width <= 500) {
        backgroundSize = `${430 + scroll * 3 / 2}%`;
    }



    const DesktopBg = ({ scroll }) => {
        return (
            <>
                <div className="core-banner pointer-events-none flex items-center justify-center z-[3] " style={{
                    opacity,
                    backgroundSize,
                    backgroundPosition: "center top",
                    maxHeight: "100vh",
                    overflowY: "hidden",
                    position: "sticky", top: "0px", left: "0px"
                }}>
                </div>
                <div className="core-heading w-full min-h-[100vh] flex justify-center items-center pointer-events-none z-[10] " style={{ position: "fixed", top: "0px", left: "0px" }}>
                    <div className={`text-center w-full text-[60px] mt-[-25%] sm:mt-[-15%] sm: md:text-[87px]`} style={{ opacity }}>Core Team</div>
                </div>
            </>
        )
    }

    return (
        <div>
            <DesktopBg scroll={scroll} />
        </div>
    )
}

export default CoreteamBanner
