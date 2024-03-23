import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AboutHome from './AboutHome';
import SocialIcons from './SocialIcons';
import Home from './home'
import Home1 from './home1'
import SpeakersHome from './SpeakersHome';
import SponsersHome from './SponsersHome';

const ScrollHome = () => {
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
    return (
        <>
            {scroll <= 500 &&  <Home1 />
            }
            {scroll > 500 && scroll <= 1000 && <AboutHome />
            }
            {scroll > 1000 && scroll <= 1500 && <SocialIcons />
            }
            {scroll > 1500 && scroll <= 2000 && <SponsersHome />
            }
            {scroll > 2000 && scroll <= 2400 && <SpeakersHome />
            }
            <div className="w-full h-[2400px]"></div>
        </>

    )
}

export default ScrollHome
