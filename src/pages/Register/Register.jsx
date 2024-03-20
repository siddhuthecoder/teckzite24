import { useEffect } from "react";
import Header from "../../components/Header/Header";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const userData = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [navigate, userData]);

  return (
    <main className="pt-5 flex justify-center items-center w-100 h-[100vh]">
      <Header />
      <RegisterForm />
    </main>
  );
};

export default Register;
