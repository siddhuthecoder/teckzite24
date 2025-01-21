import { useEffect } from 'react';
import './background.css'
import { useSelector } from 'react-redux';

const Background = () => {

  const userData = useSelector((state) => state.user.data);
  
  if (!userData) {
    //add logic for the redirect /register
  }

  
  
  
  useEffect(() => {
    const pos = document.documentElement;

    const handleMouseMove = (e) => {
      pos.style.setProperty('--x', `${e.clientX}px`);
      pos.style.setProperty('--y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="back h-screen">
    <section className="section">
      <h1 className="titleSection text-[3em] md:text-[7em] lg:text-[8em] font-bruno mt-[30px] hidden md:block">
        TECKZITE
      </h1>
      <h1 className="titleSection text-[3em] md:text-[7em] lg:text-[8em] font-bruno hidden md:block">
        2K25
      </h1>
   

    </section>
    <div className="light-effect"></div>
  </div>
  
  );
};

export default Background;
