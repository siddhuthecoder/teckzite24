import { useEffect } from 'react';
import './background.css'

const Background = () => {
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
        <h1 className="titleSection text-[3em] md:text-[7em] lg:text-[8em] font-bruno mt-[30px]">
          TECKZITE
        </h1>
        <h1 className="titleSection text-[3em] md:text-[7em] lg:text-[8em] font-bruno">
          2K25
        </h1>
      </section>
      <div className="light-effect"></div>
    </div>
  );
};

export default Background;
