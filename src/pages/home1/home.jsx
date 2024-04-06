import Header from "../../components/Header/Header";
import { motion } from 'framer-motion'
import {useState} from 'react'
import "../../css/glitch.scss";
import "../../css/glitch2.scss";
import { IoMdClose } from "react-icons/io";
import google from '../../assets/img/google-play-badge.png'
import apple from '../../assets/img/apple.png'


const Home = () => {
  const [app,setApp] = useState(true)
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
          transition={{ duration: 1, delay: 0,type: 'spring', stiffness: 20 }} //
           className={`w-full ${app?"absolute":"hidden"}  bottom-[14%] md:bottom-[12%] cursor-pointer min-h-[140px] md:min-h-[140px]`}>
            <div className="w-[80%] max-w-[500px] min-h-[140px] md:h-[140px] backdrop-blur-lg  mx-auto border rounded-[4px] flex flex-col"> 
              <div className="w-full flex flex-row-reverse">
                <IoMdClose style={{}} className="text-[30px] text-[orange]"  onClick={() => setApp(false)}/>
              </div>
              <div className="text-center">GET IT ON THE OUR <span className="text-[black] font-bold ">MEEBUDDY</span> APP</div>
              <div className="w-full flex items-center flex-wrap gap-4">
                <img src={google} alt="" className="mx-auto" style={{width:"160px",height:"70px"}} />
                <img src={apple} alt="" className="mx-auto mb-3" style={{width:"160px",height:"50px"}} />
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
