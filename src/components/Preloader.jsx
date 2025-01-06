import React, { useState, useEffect } from 'react';

const Preloader = ({ setLoading }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setLoading(false); // Stop loading after the timeout
      }, 2600);
    }
  }, [isClicked, setLoading]);

  const onClickHandler = () => {
    setIsClicked(true);
  };

  return (
    <div className="z-50 text-center bg-[#1E1C1C] h-screen relative overflow-hidden w-full">
      <img
        src="desktopPreloader.png"
        className={`h-full w-full object-cover hidden md:block imagesenter z-0 ${
          isClicked ? 'imagesenterclick' : ''
        }`}
        alt="Enter"
      />
        <img
        src="mobilePreloader.png"
        className={`h-full w-full object-cover md:hidden imagesenter z-0 ${
          isClicked ? 'imagesenterclick' : ''
        }`}
        alt="Enter"
      />

      {!isClicked && (
        <div
          onClick={onClickHandler}
          className="w-full absolute left-0 top-0 h-screen flex items-center justify-center bg-white bg-opacity-5 backdrop-blur-lg z-10"
        >
          <button
            className="enter-btn text-white font-bold px-2 py-1 z-50 rounded-md text-[50px] font-bruno"
          >
            Enter
          </button>
        </div>
      )}
    </div>
  );
};

export default Preloader;
