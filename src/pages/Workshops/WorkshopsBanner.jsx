import React, { useState, useEffect } from 'react'
import '../../css/workshops.css'
import '../../css/events.css'



const WorkshopsBanner = () => {
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
    const fontSize = `${50 - scroll * 2 / 10}px`;
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
        backgroundSize = `${330 + scroll * 3 / 2}%`;
    }


    const opacity = 1 - scroll / (window.innerHeight / 4);
    const marginTop = `${-100 + scroll * 5 / 2}px`;

    const DesktopBg = ({ scroll }) => {
        return (
            <>
                <div className="workshop-banner pointer-events-none  flex items-center justify-center z-[11] " style={{
                    opacity,
                    backgroundSize,
                    backgroundPosition: "center center",
                    maxHeight: "100vh",
                    overflowY: "hidden",
                    position: "sticky", top: "0px", left: "0px"
                }}>
                </div>
                <div className="workshop-heading w-full min-h-[100vh] flex justify-center items-center pointer-events-none z-[10]  " style={{ position: "fixed", top: "0px", left: "0px", opacity }}>
                    <div className={` text-[50px] sm: md:text-[87px]`} style={{ opacity }}>Workshops</div>
                </div>
            </>
        )
    }

    return (
        <>
            <DesktopBg scroll={scroll} />
        </>
    )
}

export default WorkshopsBanner
