import { Link } from "react-router-dom";

// eslint-disable-next-line
const Button = ({ text, link }) => {
  return link ? (
    <Link to={link}>
      <button
        className="text-white rounded-sm bg-gradient hover:bg-primary design_btn px-[4px]   font-serif"
        style={{ padding: "0px", transform: "scale(0.5)" }}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button className="text-white rounded-sm bg-gradient hover:bg-primary design_btn px-16 font-serif">
      {text}
    </button>
  );
};

export default Button;
