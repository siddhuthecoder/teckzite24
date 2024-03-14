import { FaArrowUp } from "react-icons/fa6";

const goUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const GoUpBtn = () => {
  return (
    <div
      className="absolute bottom-[5%] cursor-pointer animate-bounce z-[1000] right-[5%] bg-gradient rounded-full w-[40px] h-[40px] flex justify-center items-center"
      style={{ position: "fixed", animationDuration: "2s" }}
      onClick={goUp}
    >
      <FaArrowUp />
    </div>
  );
};

export default GoUpBtn;
