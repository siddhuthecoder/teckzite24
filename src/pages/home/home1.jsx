import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import "../../css/glitch.scss";
import "../../css/glitch2.scss";

const Home1 = () => {
  return (
    <>
      <motion.section
        className=" relative w-full min-h-[100vh] overflow-hidden   flex-col flex  justify-between"
        style={{
          position: "sticky",
          top: "0px",
          left: "0px",
        }}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <video
          src={"/banner.mp4"}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        ></video>
        <div className="relative min-h-[100vh] w-full ">
          <img
            src={`/man.webp`}
            alt=""
            className="absolute bottom-0 min-w-[840px] scale-100 h-[90vh] max-h-[1000px] left-1/2 transform -translate-x-[52%] overflow-hidden"
          />
          <div className="w-full text-center absolute bottom-[-10%] h-[90vh]">
            <div
              className="glitch text-[72px] max-lg:text-[45px] lg:text-[50px] mt-[26vh]"
              data-glitch="TECKZITE"
            >
              TECKZITE
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home1;
