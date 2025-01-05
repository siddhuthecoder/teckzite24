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
    <main
      className="pt-5 flex justify-center items-center w-100 min-h-[100vh] bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('../../../register.png')",
      }}
    >
      <Header />
      <RegisterForm />
      <Contact className="mt-[30px]" />
    </main>
  );
};

export default Register;
