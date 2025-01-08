import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container  md:flex justify-center items-end translate-y-[30px] md:bottom-[-16px]">
      <footer className="h-full w-full flex items-center  lg:items-end justify-center md:justify-between lg:justify-around lg:p-4 mt-[20px]">
        <div className="social-media md:flex text-white mb-2  md:items-center md:translate-y-[13px]  lg:translate-y-0 justify-around w-1/3 translate-x-[-20px] hidden">
          <FaLinkedin className="text-[20px] lg:text-[25px] hover:text-[blue]" />
          <RiInstagramFill className="text-[20px] lg:text-[25px] hover:text-[#E1306C]" />
          <FaFacebookSquare className="text-[20px] lg:text-[25px] hover:text-[#1877F2]" />
          <FaTwitter className="text-[20px] lg:text-[25px] hover:text-[#1DA1F2]" />
        </div>
        <div className="text-center translate-y-[-15px] md:translate-y-[15px] lg:translate-y-0 text-[13px] md:text-[22px] md:w-1/3 mb-3">
          Copyright &copy; RGUKT,Nuzvid
        </div>
        <div className="hidden md:flex md:items-center md:translate-y-[14px] lg:translate-y-0 w-1/3 justify-around lg:text-[19px] mb-1">
          <h2>Updates</h2>
          <h2>Contact</h2>
          <h2>Events Schedule</h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
