import React, { useEffect, useRef } from 'react';
import { Brain, Cpu, Network, Sparkles } from 'lucide-react';
import './RobowarAnimation.css';

const RobowarAnimation = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const elements = parallaxRef.current.querySelectorAll('.parallax-element');

      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '1';
        const scroll = window.pageYOffset;
        const elementTop = element.getBoundingClientRect().top + scroll;
        const distance = scroll - elementTop;

        element.style.transform = `translateY(${distance * Number(speed)}px) translateZ(${distance * Number(speed)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const title = "ROBOWARS";
  const description = "Where Machines Battle for Glory";
  const subtitle = "Experience the Future of Combat Technology";

  return (
    <div className="overflow-hidden">
      <div ref={parallaxRef} className="relative min-h-screen bg-black flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <div className="absolute inset-0 z-0">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="grid-background absolute inset-0"></div>
            <div className="lightning"></div>
            <div className="holographic"></div>
            <div className="sparks-container">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="spark"></div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="parallax-element" data-speed="0.2">
            <Brain className="absolute top-[29%] left-[27%] text-blue-400 w-14 h-14 animate-float" />
          </div>
          <div className="parallax-element" data-speed="0.3">
            <Cpu className="absolute top-1/3 right-1/4 text-purple-400 w-10 h-10 animate-float-delayed" />
          </div>
          <div className="parallax-element" data-speed="0.4">
            <Network className="fixed bottom-1/3 left-1/3 text-pink-400 w-12 h-12 animate-float" />
          </div>
          <div className="parallax-element" data-speed="0.5">
            <Sparkles className="absolute top-1/2 right-1/3 text-yellow-400 w-8 h-8 animate-float-delayed" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl sm:text-9xl font-bold mb-4 text-reveal flex flex-wrap justify-center">
              {title.split('').map((letter, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p className="text-xl sm:text-4xl text-blue-400 wave-text" style={{ animationDelay: '1s' }}>
              {description}
            </p>
            <p className="text-lg sm:text-xl text-gray-300 max-w-md sm:max-w-lg wave-text" style={{ animationDelay: '1.5s' }}>
              {subtitle}
            </p>
            <button
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transition-transform wave-text"
              style={{ animationDelay: '2s' }}
            >
              Enter Arena
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobowarAnimation;
