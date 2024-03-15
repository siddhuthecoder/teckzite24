import { Link } from "react-router-dom";

// eslint-disable-next-line
const Button = ({ text, link }) => {
  return link ? (
    <Link to={link}>
      <button className="text-white rounded-sm bg-gradient hover:bg-primary design_btn px-16 text-lg py-2.5 font-medium font-serif">
        {text}
      </button>
    </Link>
  ) : (
    <button className="text-white rounded-sm bg-gradient hover:bg-primary design_btn px-16 text-lg py-2.5 font-medium font-serif">
      {text}
    </button>
  );
};

export default Button;
