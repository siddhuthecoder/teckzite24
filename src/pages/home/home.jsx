import Header from "../../components/Header/Header";
import video from "../../assets/home/banner.mp4";
import man from "../../assets/home/man.webp";
// import { motion } from 'framer-motion'
import "../../css/glitch.scss";
import "../../css/glitch2.scss";

const Home = () => {
  return (
    <main  >
      <Header />
      <div className="absolute  top-0 left-0 w-full h-full z-2 overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        ></video>
        <div className="relative min-h-[100vh] w-full ">
          <img
            src={man}
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
        </div>
      </div>
    </main>
  );
};

export default Home;
