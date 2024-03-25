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
import preloader1 from "../assets/preloader.png";
import preloader2 from "../assets/preloader1.png";

const Preloader = ({ setLoading }) => {
  const [isStart, setIsStart] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    if (isStart) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [isStart, setLoading]);

  const handleStart = () => {
    setTimeout(() => {
      setIsStart(true);
    }, 2000);
    startTimer();
    setStartCount(true);
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setSecond((p) => (p + 5) % 60);
      setHour((p) => (p + 5) % 24);
      setMinute((p) => (p + 5) % 60);
      setMonth((p) => (p + 1) % 12);
      setDate((p) => (p + 2) % 31);
    }, 10);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
  };

  useEffect(() => {
    const fetchCurrentTime = () => {
      const now = new Date();
      setHour(now.getHours().toString().padStart(2, "0"));
      setMinute(now.getMinutes().toString().padStart(2, "0"));
      setSecond(now.getSeconds().toString().padStart(2, "0"));
      setDate(now.getDate().toString().padStart(2, "0"));
      setMonth((now.getMonth() + 1).toString().padStart(2, "0"));
    };

    const interval = setInterval(fetchCurrentTime, 1000);
    fetchCurrentTime();

    return () => clearInterval(interval);
  }, []);

  const Whole = ({ left }) => {
    return (
      <div
        className={`w-[100vw] h-screen flex items-center justify-center relative flex-col ${
          left && "-translate-x-1/2"
        }`}
      >
        <img
          src={preloader1}
          alt="preloaderimg"
          className="absolute h-[1000px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 max-md:hidden"
        />
        <img
          src={preloader2}
          alt="preloaderimg"
          className="absolute w-full top-[50%] left-[50%] -translate-x-1/2 scale-x-[2] scale-y-[1.5] -translate-y-1/2 md:hidden"
        />
        <h1 className="text-3xl max-md:text-lg max-md:pl-4 uppercase font-koneMono mt-10">
          {!startCount ? "Present Time" : "Travelling"}
        </h1>
        <div className="my-8 max-md:pl-4 flex items-center justify-evenly w-[90%] max-w-[1000px]">
          <h2 className="text-4xl max-md:text-2xl">
            {isStart
              ? "-- : -- : -- - --/--"
              : `${hour}:${minute}:${second} - ${date}/${month}`}
          </h2>
        </div>
        <button
          onClick={handleStart}
          className="bg-red-600 mt-3 max-md:ml-4 px-5 py-1.5 border rounded border-red-700"
          style={{
            borderWidth: "5px",
            filter:
              !startCount &&
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
