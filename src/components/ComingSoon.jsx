import Header from "./Header/Header";
const Coming = () => {
  return (
    <>
      <Header />
        <div
            className="h-screen flex flex-col items-center justify-center space-y-8 font-orbitron relative"
            style={{
                backgroundImage: "url('comingsoonbg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Content */}
            <div className="relative  flex flex-col items-center justify-center space-y-8">
                {/* Top Message */}
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
                   Under Construction
                </div>

                {/* Coming Soon Text */}
                <div className="text-center text-white font-extrabold space-y-6">
                    <div className="flex items-center justify-center space-x-3 text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-wide">
                        <span>C</span>
                        <img
                            src="https://thumbs.wbm.im/pw/medium/cf3856a1c655538917c7afc782baaa94.avif"
                            alt="rotating letter image"
                            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 animate-spin"
                        />
                        <span>ming</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-wide">
                        <span>S</span>
                        <img
                            src="https://thumbs.wbm.im/pw/medium/cf3856a1c655538917c7afc782baaa94.avif"
                            alt="rotating letter image"
                            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 animate-spin"
                        />
                        <img
                            src="https://thumbs.wbm.im/pw/medium/cf3856a1c655538917c7afc782baaa94.avif"
                            alt="rotating letter image"
                            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 animate-spin"
                        />
                        <span>n</span>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="text-center text-white text-xs sm:text-sm md:text-base lg:text-lg px-4">
                     Meanwhile, you can view and register for events!
                </div>
            </div>
      </div>
      </>
    );
};

export default Coming;
