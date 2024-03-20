import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/userSlice";
import img from "../../assets/logo.png";
import "./reg.css";

const RegisterForm = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    college: "",
    collegeId: "",
    branch: "",
    year: "",
    gender: "",
    phoneNumber: "",
    idNumber: "",
    state: "",
    district: "",
    city: "",
    file: "",
    img: "",
    referal: "",
    amount: process.env.REACT_APP_OUTSIDERS,
    terms: false,
  };
  const [data, setData] = useState(initialData);
  const [signIn, setSignIn] = useState(false);
  const [next, setNext] = useState(false);
  const [error, setError] = useState(null);
  const [isRgukt, setIsRgukt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReging, setisReging] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    setisReging(true);
    e.preventDefault();

    if (data.state === "" || data.district === "" || data.city === "") {
      setError("All fields are required");
      setisReging(false);
      return;
    }

    if (isRgukt && data.file === "") {
      setError("Upload id proof");
      toast.error("Upload id proof");
      setisReging(false);
      return;
    }

    if (!data.terms) {
      setError("Please accept the Terms and Conditions");
      setisReging(false);
      return;
    }

    try {
      const {
        data: { order },
      } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/order/create`,
        { amount: data.amount, email: data.email }
      );

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Teckzite 2k24",
        description: "Test Transaction",
        image: img,
        order_id: order.id,
        handler: async function (response) {
          try {
            console.log(response);
            console.log(order);
            const {
              data: { success },
            } = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/user/order/verify`,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                order_id: order.id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            if (success) {
              await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/user/register`,
                {
                  email: data.email,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  college: data.college,
                  phno: data.phoneNumber,
                  year: data.year,
                  branch: data.branch,
                  collegeId: data.collegeId,
                  gender: data.gender,
                  img: data.img,
                  state: data.state,
                  district: data.district,
                  idUpload: data.file,
                  city: data.city,
                  mode: "online_mode",
                  referredBy: data.referal,
                  razorpay_order_id: response.razorpay_order_id,
                }
              );
            }
            toast.success("Account created Sucessfully!!\n Login again");
            navigate("/");
          } catch (error) {
            console.error("Failed to verify order:", error);
            toast.error("Failed to verify order. Please try again.");
          }
        },
        prefill: {
          name: data.firstName,
          email: data.email,
          contact: data.phoneNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.on("payment.failed", function (response) {
        toast.error("Payment failed: " + response.error);
        setisReging(false);
        return;
      });

      razor.open();
      setisReging(false);
    } catch (error) {
      console.error("Error occurred during payment:", error);
      toast.error(
        error?.response?.data?.message ||
          "Failed to process payment. Please try again."
      );
      setisReging(false);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.college === "" ||
      data.phoneNumber === "" ||
      data.idNumber === "" ||
      data.year === "" ||
      data.gender === ""
    ) {
      setError("All Fields are required");
      return;
    }

    if (data.phoneNumber.length !== 10) {
      setError("Phone Number must be 10 characters");
      return;
    }

    setNext(true);
  };

  const onFailure = (error) => {
    console.log("Error: " + error);
    toast.error("Error while signing with Google");
  };

  const onSuccess = async (res) => {
    setIsLoading(true);
    const decodedUser = jwtDecode(res.credential);
    const { given_name, family_name, email, picture } = decodedUser;
    const domainPattern = /@(rguktn|rgukto|rgukts|rguktr)\.ac\.in$/;

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        {
          email,
          sub: email,
        }
      );
      localStorage.setItem("token", res.data.token);
      dispatch(userActions.setUser(res.data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      if (domainPattern.test(email)) {
        setData({
          ...data,
          idNumber: given_name,
          firstName: family_name.split(" ").slice(1).join(" ").toLowerCase(),
          lastName: family_name.split(" ")[0].toLowerCase(),
          amount: process.env.REACT_APP_RGUKT_FEE,
        });
        setIsRgukt(true);
      } else {
        setData({
          ...data,
          firstName: given_name,
          lastName: family_name,
          email,
          img: picture,
        });
      }
      setSignIn(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: newValue });
  };

  return (
    <section className="z-30 w-full pt-[80px] pb-[20px]">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-[420px] mx-auto mb-20 border border-primary rounded-md backdrop-filter backdrop-blur-lg px-3 py-2 flex justify-center items-center"
      >
        {!signIn && (
          <>
            {isLoading ? (
              <div className="h-[200px] flex items-center justify-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="my-16 mx-auto">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  buttonText="Sign up with Google"
                />
              </div>
            )}
          </>
        )}
        {signIn && (
          <div className="py-2 w-full flex justify-center items-center flex-col">
            <h4 className="font-semibold mt-2 mb-4 text-xl">Register</h4>
            {!next && (
              <>
                <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <input
                    type="text"
                    id="firstName"
                    value={data.firstName}
                    name="firstName"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="First Name"
                    required
                  />
                  {/* Last Name */}
                  <input
                    type="text"
                    id="lastName"
                    value={data.lastName}
                    name="lastName"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="Last Name"
                    required
                  />
                </div>
                {/* College */}
                <div className="mb-3 w-[90%]">
                  <input
                    type="text"
                    id="college"
                    value={data.college}
                    name="college"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="College"
                    required
                  />
                </div>
                {/* Phone Number and ID Number */}
                <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="phoneNumber"
                    value={data.phoneNumber}
                    name="phoneNumber"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="text"
                    id="idNumber"
                    value={data.idNumber}
                    name="idNumber"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="Id Number"
                    required
                  />
                </div>
                {/* Year */}
                <div className="mb-3 w-[90%]">
                  <select
                    id="year"
                    value={data.year}
                    name="year"
                    onChange={handleChange}
                    className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <option value="">--Select Year--</option>
                    <option value="PUC-1">PUC 1</option>
                    <option value="PUC-2">PUC 2</option>
                    <option value="E1">E1</option>
                    <option value="E2">E2</option>
                    <option value="E3">E3</option>
                    <option value="E4">E4</option>
                  </select>
                </div>
                {/* Gender */}
                <div className="w-[90%] mb-1 text-left">Gender</div>
                <div className="mb-1 w-[80%] mr-[10%] flex items-center justify-between">
                  <div className="flex items-center mb-4">
                    <input
                      id="male"
                      type="radio"
                      value="male"
                      name="gender"
                      checked={data.gender === "male"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="male"
                      className="ms-2 text-base font-medium text-[#eee]"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="female"
                      type="radio"
                      value="female"
                      name="gender"
                      checked={data.gender === "female"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="female"
                      className="ms-2 text-base font-medium text-[#eee]"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="others"
                      type="radio"
                      value="others"
                      name="gender"
                      checked={data.gender === "others"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="others"
                      className="ms-2 text-base font-medium text-[#eee]"
                    >
                      Others
                    </label>
                  </div>
                </div>
              </>
            )}
            {next && (
              <>
                <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="state"
                    name="state"
                    value={data.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                    style={{ borderBottom: "1px solid #eee" }}
                  />
                  <input
                    id="district"
                    name="district"
                    value={data.district}
                    onChange={handleChange}
                    placeholder="District"
                    className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                    style={{ borderBottom: "1px solid #eee" }}
                  />
                </div>
                <div className="mb-3 w-[90%]">
                  <input
                    id="city"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                    placeholder="Village / Town / City"
                    className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                    style={{ borderBottom: "1px solid #eee" }}
                  />
                </div>
                {!isRgukt && (
                  <div className="my-3 w-[90%]">
                    <label
                      className="block mb-1 text-sm font-medium text-[#eee]"
                      htmlFor="file_input"
                    >
                      Upload Id Card
                    </label>
                    <input
                      className="block w-full text-sm text-white border border-[#eee] rounded-sm cursor-pointer bg-transparent"
                      id="file_input"
                      type="file"
                    />
                  </div>
                )}
                <div className="flex items-center my-3 w-[90%] justify-start">
                  <input
                    id="terms"
                    type="checkbox"
                    value={data.terms}
                    name="terms"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-[#eee]"
                  >
                    Accept Terms and Conditions
                  </label>
                </div>
              </>
            )}
            {error && <div className="w-[90%] text-red-500">{error}</div>}
            <div className="w-[90%] mt-2 flex items-end justify-between">
              {!next && (
                <>
                  <div></div>
                  <div
                    type="button"
                    className="text-white cursor-pointer bg-[rgba(152,65,255,0.8)] hover:bg-primary font-medium rounded-md text-base px-6 py-1.5 mb-2"
                    onClick={handleNext}
                  >
                    Next
                  </div>
                </>
              )}
              {next && (
                <>
                  <div
                    type="button"
                    className="text-white cursor-pointer bg-[rgba(152,65,255,0.8)] hover:bg-primary font-medium rounded-md text-base px-6 py-1.5 me-2 mb-2"
                    onClick={() => setNext(false)}
                  >
                    Prev
                  </div>
                  <div
                    type="submit"
                    disabled={isReging}
                    onClick={handleSubmit}
                    className="text-white cursor-pointer bg-green-600 hover:bg-green-700 font-medium rounded-md text-base px-6 py-1.5 me-2 mb-2"
                  >
                    {isReging ? "Submitting..." : "Submit"}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default RegisterForm;
