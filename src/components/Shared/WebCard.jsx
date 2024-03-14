//eslint-disable-next-line
const webCard = ({ img, name, role }) => {
  return (
    <>
      <div className="team-item mb-5 w-[95%] max-w-[280px] mx-auto">
        <div className="team-thumb relative">
          <div
            className="shape-wrap w-full h-full absolute left-0 bottom-0 z-2"
            style={{ transform: "skew(-5deg)" }}
          >
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <img src={img} alt="thumb" className="absolute z-3" />
        </div>
        <div className="team-content">
          <span className="white-shape"></span>
          <h3 className="text-lg">{name}</h3>
          <h4>{role}</h4>
        </div>
      </div>
    </>
  );
};

export default webCard;
