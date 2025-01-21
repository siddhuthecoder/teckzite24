import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import { userActions } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RenderRegistrationForm = ({ setRegisterForm, data }) => {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultEmail = userData ? userData.email : "";
  const defaultIdNumber = userData ? userData.collegeId : "";
  const defaultCollege = userData ? userData.college : "";
  const defaultName = userData
    ? `${userData.firstName} ${userData.lastName}`
    : "";
  const defaultPhno = userData ? userData.phno : "";
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(defaultEmail);
  const [idNumber, setIdNumber] = useState(defaultIdNumber);
  const [college, setCollege] = useState(defaultCollege);
  const [name, setName] = useState(defaultName);
  const [phno, setPhno] = useState(defaultPhno);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      email === "" ||
      idNumber === "" ||
      college === "" ||
      name === "" ||
      phno === ""
    ) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/workshops/register/${data._id}`,
          {
            email,
            idNumber,
            name,
            phno,
            college,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(res.data.message || "Registerd Successfully");
        dispatch(
          userActions.addWorkshop({
            id: data._id,
            name: data.name,
            workshopImg: data.workshopImg,
          })
        );
        navigate("/profile");
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/workshops/register/${data._id}`,
          {
            email,
            idNumber,
            name,
            phno,
            college,
          }
        );
        console.log(res.data);
        toast.success(res.data.message || "Registerd Successfully");
      }
    } catch (err) {
      toast.error(
        err?.response?.data.message || "Check your Internet connection"
      );
    } finally {
      setRegisterForm(false);
      setLoading(false);
    }
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-[1200] scroll_in"
    >
      <div className="backdrop-blur-[18px] backdrop-saturate-200  text-white w-[95%] max-w-lg p-4 rounded shadow-lg max-h-[90vh] scroll_in">
        <div className="flex items-center justify-between pb-4 border-b">
          <h3 className="text-xl font-semibold text-white">{data.name}</h3>
          <button
            type="button"
            onClick={() => setRegisterForm(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-2">
              <label
                htmlFor="username"
                className="text-sm text-white pb-1 pl-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full placeholder:capitalize px-3 py-2 border text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="college" className="text-sm text-white pb-1 pl-1">
                College
              </label>
              <input
                type="text"
                id="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full placeholder:capitalize px-3 py-2 border text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="email" className="text-sm text-white pb-1 pl-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full placeholder:capitalize px-3 py-2 border text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="idNumber"
                className="text-sm text-white pb-1 pl-1"
              >
                Id Number
              </label>
              <input
                type="text"
                id="idNumber"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full placeholder:capitalize px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="phno" className="text-sm text-white pb-1 pl-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phno"
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
                className="w-full placeholder:capitalize px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-end pt-4">
          <button
            onClick={() => setRegisterForm(false)}
            className="px-4 py-1 bg-gray-300 text-gray-800 rounded mr-2 focus:outline-none"
          >
            Close
          </button>
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="px-4 py-1 bg-gradient text-white rounded focus:outline-none"
          >
            {loading ? "Registering...." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderRegistrationForm;
