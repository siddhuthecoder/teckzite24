import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../css/glitch.scss";
import "../../css/glitch2.scss";
import { IoMdClose } from "react-icons/io";
import google from "../../assets/img/google-play-badge.png";
import apple from "../../assets/img/apple.png";
import meebuddy from "../../assets/meenews.png";

const Home = () => {
  const [app, setApp] = useState(true);
  return (
    <main>
      <Header />
      <div className="absolute top-0 left-0 w-full h-full z-2 overflow-hidden">
        <video
          src={"/banner.mp4"}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        ></video>

        <div className="relative min-h-[100vh] w-full ">
          <img
            src={"/man.webp"}
            alt=""
            className="absolute bottom-0 min-w-[840px] scale-100 h-[90vh] max-h-[1000px] left-1/2 transform -translate-x-[52%] overflow-hidden"
          />
          <div className="w-full text-center absolute bottom-[-10%] h-[90vh]">
            <div
              className="glitch text-[72px] max-lg:text-[45px] lg:text-[50px] mt-[26vh] fontt"
              data-glitch="TECKZITE"
            >
              TECKZITE
            </div>
          </div>
          <motion.div
            initial={{ y: 400, opacity: 1, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0,
              type: "spring",
              stiffness: 20,
            }} //
            className={`w-full ${
              app ? "absolute" : "hidden"
            }  bottom-[10%] md:bottom-[12%] cursor-pointer min-h-[100px]`}
          >
            <div className="w-[80%] max-w-[500px] min-h-[100px] backdrop-blur-lg  mx-auto border rounded-[4px] flex flex-col">
              <div className="w-full flex px-2 py-1 flex-row-reverse">
                <IoMdClose
                  className="text-lg text-white"
                  onClick={() => setApp(false)}
                />
              </div>
              <div className="text-center uppercase text-base max-md:text-[12px]">
                NOW ACCESS Updates ON{" "}
                <span className="font-bold ">MEEBUDDY</span> APP
              </div>
              <div className="w-full flex items-center justify-center mt-2">
                <img src={meebuddy} alt="meenews" style={{ height: "35px" }} />
              </div>
              <div className="w-full grid grid-cols-12 mb-3 mt-2">
                <div className="col-span-2 max-md:col-span-1"></div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.meenews.android"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full col-span-3 max-md:col-span-4 pb-1"
                >
                  <img
                    src={google}
                    alt="google"
                    style={{ height: "35px" }}
                    className="mx-auto w-full"
                  />
                </a>
                <div className="col-span-2"></div>
                <a
                  href="https://apps.apple.com/sc/app/meenews/id6475638221"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full col-span-3 max-md:col-span-4 pb-1"
                >
                  <img
                    src={apple}
                    alt="apple"
                    style={{ height: "35px" }}
                    className="mx-auto w-full"
                  />
                </a>
                <div className="col-span-2 max-md:col-span-1"></div>
              </div>
            </div>
          </motion.div>
          {/*             <div className="w-full ">
              <div className="glitch fixed bottom w-full text-center text-[30px] bottom-[10%] " data-glitch="META VERSE" style={{}}>META VERSE</div>
            </div> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
