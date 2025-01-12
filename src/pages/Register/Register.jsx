import { useEffect } from "react";
import Header from "../../components/Header/Header";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import sbg from "../"
const Register = () => {
  const userData = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/profile");
    }
  }, [navigate, userData]);

  return (
   <div className="w-full min-h-screen flex justify-center items-center relative"  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/assets/cbg.jpg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
  >
      <Header />
      <RegisterForm />
      <Contact className="mt-[30px]" />
      </div>
  );
};

export default Register;