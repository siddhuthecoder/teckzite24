import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className="footer_container  md:flex justify-center items-end translate-y-[30px] lg:bottom-[-16px] font-bruno">
      <footer className="h-full w-full flex items-center  lg:items-end justify-center lg:justify-between lg:justify-around lg:p-4 mt-[20px]">
        <div className="social-media lg:flex text-white mb-2  md:items-center md:translate-y-[13px]  lg:translate-y-0 justify-around w-1/3 translate-x-[-20px] hidden">
          <FaLinkedin className="text-[20px] lg:text-[25px] hover:text-[blue]" />
          <RiInstagramFill className="text-[20px] lg:text-[25px] hover:text-[#E1306C]" />
          <FaFacebookSquare className="text-[20px] lg:text-[25px] hover:text-[#1877F2]" />
          <FaTwitter className="text-[20px] lg:text-[25px] hover:text-[#1DA1F2]" />
        </div>
        <div className="text-center whitespace-nowrap translate-y-[-8px] md:translate-y-[18px] lg:translate-y-0 text-[12px] md:text-[16px] md:w-1/3 mb-3 font-bruno">
          Copyright &copy; RGUKT,Nuzvid
        </div>
        <div className="hidden lg:flex md:items-center md:translate-y-[14px] lg:translate-y-0 w-1/3 justify-around lg:text-[16px] mb-1">
      <h2
        className="cursor-pointer hover:underline font-bruno"
        onClick={() => navigate("/eventupdates")}
      >
        Updates
      </h2>
      <h2
        className="cursor-pointer hover:underline font-bruno"
        onClick={() => navigate("/contact")}
      >
        Contact
      </h2>
      <h2
        className="cursor-pointer hover:underline font-bruno"
        onClick={() => navigate("/schedule")}
      >
        Events Schedule
      </h2>
    </div>
      </footer>
    </div>
  );
};

export default Footer;
