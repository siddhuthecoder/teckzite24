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
      <h1 className="titleSection text-[3em] md:text-[7em] lg:text-[8em] font-bruno mt-[30px] hidden md:block">
        TECKZITE
      </h1>
      <h1 className="titleSection text-[3em] md:text-[7em] lg:text-[8em] font-bruno hidden md:block">
        2K25
      </h1>
      <svg width={320} height={130} className="flex justify-center items-center bg-transparent md:hidden">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <path id="curve" d="M 0 120 C 0 120,130 0,320 120" fill="transparent"></path>
  <text className="text" textAnchor="middle">
    <textPath
      className="text_path font-bruno text-[3em]"
      href="#curve"
      startOffset="50%"
      style={{
        stroke: '#0A69A5',
        strokeWidth: 2,
        fill: 'transparent',
        filter: 'url(#glow)',
      }}
    >
      TECKZITE
    </textPath>
  </text>
</svg>

    </section>
    <div className="light-effect"></div>
  </div>
  
  );
};

export default Background;
