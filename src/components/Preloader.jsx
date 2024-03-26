import { useEffect, useState } from "react";
import BackgroundAnimation from "./Shared/BackgroundAnimation";
import '../css/glitch.scss'
import '../css/glitch2.scss'

const Preloader = ({ setLoading }) => {
  const [isStart, setIsStart] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  if(isStart){
    const toggleLightInterval = setInterval(() => {
      setIsToggled(prevState => !prevState);
    }, 200);
  }

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
    }, 2000);
    startTimer();
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
          src={"/preloader.png"}
          alt="preloaderimg"
          className={`absolute h-[1000px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 max-md:hidden ${
            startCount && "animate-pulse"
          }`}
          style={{ animationDuration: "750ms" }}
        />
        <img
          src={"/preloader1.png"}
          alt="preloaderimg"
          className={`absolute w-full top-[50%] left-[50%] -translate-x-1/2 scale-x-[2.2] scale-y-[1.8] -translate-y-1/2 md:hidden`}
        />
        {isToggled ? (
          <img
            src={"/lighton.svg"}
            alt="light"
            className="absolute top-[5%] right-[10%] w-[100px] h-[100px]"
          />
        ) : (
          <img
            src={"/lightoff.svg"}
            alt="light"
            className="absolute top-[5%] w-[100px] h-[100px]"
            style={{ right: "calc(10%)" }}
          />
        )}

        <h1 className="text-3xl max-md:text-lg font-[ROG] max-md:pl-4 uppercase mt-10">
          {isStart ? (
            "?????????"
          ) : (
            <>
              {!startCount ? <><div data-glitch="METAVERSE" className="glitch text-[#f529a3]">METAVERSE</div></> : (
                <><div data-glitch="PRESENT" className="glitch">PRESENTs</div></>
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
          onClick={() => {
            handleStart()
          }}
          className="bg-red-600 mt-3 max-md:ml-4 px-5 py-1.5 border rounded border-red-700 cursor-pointer"
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
      <BackgroundAnimation />
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
