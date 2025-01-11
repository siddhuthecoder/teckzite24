import { useEffect } from "react";
import Header from "../../components/Header/Header";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
const Register = () => {
  const userData = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/profile");
    }
  }, [navigate, userData]);

  return (
   <div className="w-full min-h-screen flex justify-center items-center">
      <Header />
      <RegisterForm />
      <Contact className="mt-[30px]" />
      </div>
  );
};

export default Register;