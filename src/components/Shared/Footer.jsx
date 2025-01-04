import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container hidden  md:flex justify-center items-end translate-y-[30px] md:bottom-[-12px]">
      <footer className="h-full w-full flex  lg:items-end justify-between lg:justify-around lg:p-4 mt-[20px]">
        <div className="social-media flex text-white gap-[20px] md:items-center md:translate-y-[20px] lg:translate-y-0">
        <FaLinkedin />
        <RiInstagramFill />
        <FaFacebookSquare />
        <FaTwitter />

        </div>
        <div className="text-center translate-x-[70px] xl:translate-x-[100px] translate-y-[38px] lg:translate-y-[-30px]">Copyright &copy; RGUKT,Nuzvid</div>
        <div className="flex gap-[20px] md:items-center md:translate-y-[20px] lg:translate-y-0">
          <h2>Contact</h2>
          <h2>Stalls</h2>
          <h2>Events Schedule</h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
