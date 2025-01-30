import { useEffect, useState } from "react";
import "../css/glitch.scss";
import "../css/glitch2.scss";

const Preloader = ({ setLoading }) => {
  const [isStart, setIsStart] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [assetsLoaded, setAssetsLoaded] = useState(false);

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

  useEffect(() => {
    // Load the `scene_mobile.splinecode` file
    const loadSplineFile = async () => {
      try {
        // Simulate loading the spline file
        const response = await fetch("/path/to/scene_mobile.splinecode");
        if (response.ok) {
          setAssetsLoaded(true); // Set assetsLoaded to true once loaded
        } else {
          console.error("Failed to load scene_mobile.splinecode");
        }
      } catch (error) {
        console.error("Error loading spline file:", error);
      }
    };

    loadSplineFile();
  }, []);

  useEffect(() => {
    if (!isStart) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isStart]);

  useEffect(() => {
    if (isStart) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [isStart, setLoading]);

  const handleStart = () => {
    setStartCount(true);
    setTimeout(() => {
      setIsStart(true);
    }, 1500);
  };

  const Whole = ({ left }) => {
    return (
      <div
        className={`w-[100vw] h-screen flex items-center justify-center relative overflow-hidden flex-col ${
          left ? "-translate-x-1/2" : ""
        }`}
      >
        <img
          src={"/preloader_desktop.png"}
          alt="preloaderimg"
          className={`absolute h-[1000px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 max-md:hidden ${
            startCount && "animate-pulse"
          }`}
          style={{ animationDuration: "750ms" }}
        />
        <img
          src={"/preloader_mobile.png"}
          alt="preloaderimg"
          className={`absolute w-full top-[50%] left-[50%] -translate-x-1/2 scale-x-[2.2] scale-y-[1.8] -translate-y-1/2 md:hidden`}
        />
        <h1 className="text-3xl max-md:text-lg font-[ROG] max-md:pl-4 uppercase mt-10">
          {isStart ? (
            "?????????"
          ) : (
            <>
              {!startCount ? (
                <div
                  data-glitch="AI"
                  className="glitch text-[#1DCFDC] font-bold mt-[40px] md:mt-[20px] text-[24px] md:text-[30px]"
                >
                  AI
                </div>
              ) : (
                <div
                  data-glitch="Generating.."
                  className="text-[#1DCFDC] glitch mt-[45px] text-[22px] md:text-[30px]"
                >
                  Generating..
                </div>
              )}
            </>
          )}
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
          className="bg-red-600 mt-3 max-md:ml-4 px-5 py-1.5 border rounded border-red-700 cursor-pointer"
          style={{
            borderWidth: "5px",
            filter:
              !startCount &&
              "hue-rotate(137deg) drop-shadow(0 0 20px #23a347) brightness(120%)",
          }}
          disabled={!assetsLoaded} // Disable button until assets are loaded
        >
          {assetsLoaded ? "PRESS" : "Loading..."}
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
        style={{ transitionDuration: "2s", transitionDelay: "200ms" }}
      >
        <Whole />
      </div>
      <div
        className={`absolute top-0 ${
          isStart ? "right-[-50%] opacity-25" : "right-0 opacity-100"
        } transition-all h-screen w-[50%] overflow-hidden`}
        style={{ transitionDuration: "2s", transitionDelay: "200ms" }}
      >
        <Whole left={true} />
      </div>
    </div>
  );
};

export default Preloader;
