// const Preloader = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         playsInline
//         // poster="../../favicon.png"
//       >
//         <source src="../../preloader.mp4" type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default Preloader;

import { useEffect, useState } from "react";

const Preloader = () => {
  const [isStart, setIsStart] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsStart(true);
  //   }, 2000);
  // }, []);

  const Whole = ({ left }) => {
    return (
      <div
        className={`w-[100vw] h-screen flex items-center justify-center relative flex-col ${
          left && "-translate-x-1/2"
        }`}
      >
        <h1 className="text-3xl uppercase font-koneMono">Present Time</h1>
        <div className="my-8 flex items-center justify-evenly w-[90%] max-w-[1000px]">
          <h2 className="text-4xl">MAR 23 , 2024 22:30</h2>
        </div>
        <button
          className="bg-red-600 mt-3 px-5 py-1.5 border rounded border-red-700"
          style={{
            borderWidth: "5px",
            filter:
              "hue-rotate(137deg) drop-shadow(0 0 20px #23a347) brightness(120%)",
          }}
        >
          PRESS
        </button>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`absolute top-0 ${
          isStart ? "left-[-50%] opacity-25" : "left-0 opacity-100"
        } transition-all h-screen w-[50%] overflow-hidden`}
        style={{ transitionDuration: "2s" }}
      >
        <Whole />
      </div>
      <div
        className={`absolute top-0 ${
          isStart ? "right-[-50%] opacity-25" : "right-0 opacity-100"
        } transition-all h-screen w-[50%] overflow-hidden`}
        style={{ transitionDuration: "2s" }}
      >
        <Whole left={true} />
      </div>
    </div>
  );
};

export default Preloader;
