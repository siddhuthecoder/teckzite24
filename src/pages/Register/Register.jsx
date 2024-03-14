import Header from "../../components/Header/Header";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <main className="pt-5 flex justify-center items-center w-100 h-[100vh]">
      <Header />
      <RegisterForm />
    </main>
  );
};

export default Register;
