import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userActions } from "../../store/userSlice";
import img from "../../assets/logo.png";
import FileBase64 from "react-file-base64";
import "./reg.css";
import signup from "../../assets/events/signup.webp";
import signupdetails from "../../assets/events/signupdetails.webp";
import profiledesk from "../../assets/events/profiledesk.webp";
import profilemobile from "../../assets/events/profilemobile.webp";
import { verifiedColleges } from "../../constants";
import "./RegisterForm.css";

const RegisterForm = () => {
  const location = useLocation();
  const [isVerifiedCollege, setIsVerifiedCollege] = useState(false);

  const getQueryParam = (name) => {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  };

  const initialData = {
    email: "",
    firstName: "",
    lastName: "",
    college: "",
    collegeId: "",
    branch: "",
    year: "",
    gender: "",
    phoneNumber: "",
    state: "",
    district: "",
    city: "",
    file: "",
    img: "",
    referal: getQueryParam("ref") || "",
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
  const [settingUser, setSettingUser] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const handleCheckboxChange = (e) => {
    setIsVerifiedCollege(e.target.checked);
  };

  const handleFileInputChange = async ({ base64, file }) => {
    if (!file) {
      setError("Please select a valid file.");
      return;
    }

    const acceptedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!acceptedImageTypes.includes(file.type)) {
      setError("Only image files (JPEG, PNG, JPG) are allowed.");
      return;
    }

    const fileSizeInMB = parseFloat(file.size) / (1024 * 1024); // Convert size to MB
    if (fileSizeInMB > 1) {
      setError("Image size should be less than 1MB.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/uploads/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data && response.data.webContentLink) {
        setData({ ...data, file: response.data.webContentLink }); // Use uploaded URL
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);

      // Use the Base64 string as a fallback
      setData({ ...data, file: "" });
      console.log({ base64 });
    }
  };

  const handleSubmit = async (e) => {
    setisReging(true);
    e.preventDefault();

    if (data.state === "" || data.district === "" || data.city === "") {
      setError("All fields are required");
      setisReging(false);
      return;
    }

    if (!data.terms) {
      setError("Please accept the Terms and Conditions");
      setisReging(false);
      return;
    }

    try {
      window.alert(
        "Please don't press back button after completion of payment.\n It will automatically be redirected to website after 5 secs of payment completion"
      );
      const {
        data: { order },
      } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/order/create`,
        {
          amount: data.amount,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          college: data.college,
          year: data.year,
          phno: data.phoneNumber,
          branch: data.branch,
          collegeId: data.collegeId,
        }
      );

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Teckzite 2k25",
        description: "Teckzite 2k25",
        image: img,
        order_id: order.id,
        handler: async function (response) {
          try {
            const res = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/user/order/verify`,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                order_id: order.id,
                amount: order.amount,
                razorpay_signature: response.razorpay_signature,
                userData: {
                  email: data.email,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  college: data.college,
                  phno: data.phoneNumber,
                  year: data.year,
                  branch: data.branch,
                  collegeId: data.collegeId,
                  gender: data.gender,
                  state: data.state,
                  district: data.district,
                  idUpload: data.file,
                  city: data.city,
                  mode: "online_mode",
                  referredBy: data.referal.toLowerCase(),
                },
              }
            );
            localStorage.setItem("token", res.data.token);
            dispatch(userActions.setUser(res.data.user));
            toast.success(res.data.message || "Account created Successfully!!");
            navigate("/profile");
          } catch (error) {
            toast.error(
              error?.response?.data.message ||
                "Failed to verify order or registering user. Please try again."
            );
          }
        },
        prefill: {
          name: data.firstName,
          email: data.email,
          contact: data.phoneNumber,
        },
        notes: {
          address: `${data.state},${data.district},${data.city}`,
        },
        theme: {
          color: "#06B6D4",
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
      data.collegeId === "" ||
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
    toast.error("Error while signing with Google");
  };

  const onSuccess = async (res) => {
    setIsLoading(true);
    const decodedUser = jwtDecode(res.credential);
    const { given_name, family_name, email, picture } = decodedUser;
    const domainPattern = /^(r|n|s|o)[0-9]{6}@(rguktn|rguktong|rguktsklm|rguktrkv)\.ac\.in$/;

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
      navigate("/profile");
    } catch (error) {
      setIsLoading(false);
      if (domainPattern.test(email)) {
        setData({
          ...data,
          collegeId: given_name,
          email: email,
          state: "Andhra Pradesh",
          district: "Yeluru",
          city: "Nuzvid",
          college: "RGUKT",
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
          email: email,
          img: picture,
        });
      }
      setSignIn(true);
      // window.alert("Oops Registrations are closed");
      // setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: newValue });
  };

  if (settingUser) {
    return (
      <section className="w-full min-h-[100vh] flex items-center justify-center flex-col gap-2 ">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-  dark:text-gray-600 fill-blue-600"
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
        <h1 className="text-2xl font-semibold">Creating User</h1>
        <h2 className="text-lg">Please wait.....</h2>
      </section>
    );
  }

  return (
    <>
      <section
        className="z-5 w-full h-full pt-[160px] pb-[20px] mt-[30px]  lg:mt-2"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/eventdetailsbg.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="w-[90%] max-w-[420px] z-10 mx-auto mb-20 flex justify-center items-center"
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
                <div className="w-full h-[100%] flex justify-center  items-center md:mx-auto md:ml-[0px] ml-[-50px] relative mt-[-60px] ">
                  <img
                    src={signup || "/placeholder.svg"}
                    alt=""
                    className="absolute pointer-events-none  left-0"
                  />

                  <div className="md:ml-[75px] ml-[60px] z-7 w-[200px] flex flex-col gap-[50px] lg:gap-[100px] mt-[30px]">
                    <div className="">
                      <p className="text-gray-200 text-center md:whitespace-nowrap text-[13px] md:text-[16px]">
                        Facing any Issues? Contact Us
                      </p>
                      <p className="text-gray-300 text-center  md:whitespace-nowrap flex flex-col text-[13px] md:text-[16px]">
                        <span>Y.Siddartha +91 93988 48215 </span>{" "}
                      </p>
                    </div>
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      buttonText="Sign up with Google"
                    />
                    <div className="md:whitespace-nowrap text-[13px] md:text-[16px]">
                      Failed to Regitser ?{" "}
                      <a
                        target="blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdiu4mQQKuuujGpAZiW6TnXHkRWHADigFVPcaueWR1hOGLpnQ/viewform?usp=dialog"
                        className="text-cyan-500 "
                      >
                        Fill this form
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          {signIn && (
            <div className=" md:mt-[-70px] flex justify-center items-center  md:p-[2px]  flex-col relative  overflow-x-hidden">
              <img
                src={profiledesk || "/placeholder.svg"}
                alt=""
                className="absolute pointer-events-none  h-full w-full  left-0"
              />
              <h4 className="font-semibold text-xl mt-[25px]">Register</h4>
             
              {!next && (
                <div className="w-[300px] ml-[20px] md:w-[90%]">
                  {!isRgukt && (
                    <div className=" mb-3  w-[90%]  grid grid-cols-1 md:grid-cols-2 gap-4 ">
                      {/* First Name */}
                      <div className="input-group relative">
                        <input
                          type="text"
                          id="firstName"
                          value={data.firstName}
                          name="firstName"
                          onChange={handleChange}
                          className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="firstName"
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                        >
                          First Name
                        </label>
                      </div>
                      {/* Last Name */}
                      <div className="input-group relative ">
                        <input
                          type="text"
                          id="lastName"
                          value={data.lastName}
                          name="lastName"
                          onChange={handleChange}
                          className="bg-transparent border-gray-300 text-white text-base block w-full  px-1 py-1.5 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="lastName"
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                        >
                          Last Name
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="verified-college"
                      className="h-5 w-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                      checked={isVerifiedCollege}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="verified-college"
                      className="text-[cyan] font-medium"
                    >
                    Are you from the Design Innovation Centre (DIC)? Select if yes
                    </label>
                  </div>

                  {/* College */}
                  <div className="mb-3 w-[90%]">
                    <div className="input-group mt-2 relative">
                      {isVerifiedCollege ? (
                        <select
                          id="college"
                          name="college"
                          value={data.college}
                          onChange={handleChange}
                          className="bg-transparent border-b text-white text-base block w-full px-3 py-2  focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        >
                          <option value="" disabled>
                            Select a college
                          </option>
                          {verifiedColleges.map((college, index) => (
                            <option key={index} value={college}>
                              {college}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          id="college"
                          value={data.college}
                          name="college"
                          onChange={handleChange}
                          className="bg-transparent border-b text-gray-700 text-base block w-full px-3 py-2 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      )}
                      <label
                        htmlFor="college"
                        className={`absolute left-1  ${isVerifiedCollege?"hidden":""} top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200`}
                      >
                        College
                      </label>
                    </div>
                  </div>
                  {/* Phone Number and ID Number */}
                  <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-group relative">
                      <input
                        type="text"
                        id="phoneNumber"
                        value={data.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                        className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="phoneNumber"
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                      >
                        Phone Number
                      </label>
                    </div>
                    <div className="input-group relative">
                      <input
                        type="text"
                        id="collegeId"
                        value={data.collegeId}
                        name="collegeId"
                        onChange={handleChange}
                        className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="collegeId"
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                      >
                        College ID
                      </label>
                    </div>
                  </div>

                  {/* Year and branch */}
                  <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <option value="Others">Others</option>
                    </select>
                    <select
                      id="branch"
                      value={data.branch}
                      name="branch"
                      onChange={handleChange}
                      className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                      style={{ borderBottom: "1px solid #eee" }}
                    >
                      <option value="">--Select Branch--</option>
                      <option value="PUC">PUC</option>
                      <option value="CSE">CSE</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="MECH">MECH</option>
                      <option value="CHEM">CHEM</option>
                      <option value="CIVIL">CIVIL</option>
                      <option value="MME">MME</option>
                      <option value="ROBOTICS">ROBOTICS</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  {/* Gender */}
                  <div className="w-[90%] mb-1 text-left">Gender</div>
                  <div className="mb-1 w-[80%] mr-[10%] flex items-center justify-between">
                    <div className="flex items-center mb-2">
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
                    <div className="flex items-center mb-2">
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
                    <div className="flex items-center mb-2">
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
                </div>
              )}
              {next && (
                <div className="md:w-[90%] w-[300px] ml-[20px] md:ml-[0px] overflow-x-hidden">
                  {!isRgukt && (
                    <>
                      <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* State */}
                        <div className="input-group relative">
                          <input
                            type="text"
                            id="state"
                            value={data.state}
                            name="state"
                            onChange={handleChange}
                            className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="state"
                            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                          >
                            State
                          </label>
                        </div>
                        {/* District */}
                        <div className="input-group relative">
                          <input
                            type="text"
                            id="district"
                            value={data.district}
                            name="district"
                            onChange={handleChange}
                            className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="district"
                            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                          >
                            District
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* City */}
                        <div className="input-group relative">
                          <input
                            type="text"
                            id="city"
                            value={data.city}
                            name="city"
                            onChange={handleChange}
                            className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="city"
                            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                          >
                            Village / Town / City
                          </label>
                        </div>
                        {/* Referral */}
                        <div className="input-group relative">
                          <input
                            type="text"
                            id="referal"
                            value={data.referal}
                            name="referal"
                            onChange={handleChange}
                            className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 peer"
                            placeholder=" "
                          />
                          <label
                            htmlFor="referal"
                            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200"
                          >
                            Referral Id (Optional)
                          </label>
                        </div>
                      </div>

                      <div className="my-3 w-[90%]">
                        <label
                          className="block mb-1 text-sm font-medium text-[#eee]"
                          htmlFor="file_input"
                        >
                          Upload Id Card
                        </label>
                        <FileBase64
                          id="file_input"
                          multiple={false}
                          onDone={handleFileInputChange}
                        />
                      </div>
                    </>
                  )}
                  {isRgukt && (
                    <div className="mb-3 w-[90%]">
                      <input
                        id="referal"
                        name="referal"
                        value={data.referal}
                        onChange={handleChange}
                        placeholder="Refferal Id"
                        className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
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
                      Accept{" "}
                      <a
                        href={
                          "https://docs.google.com/document/d/1CbrFplLJ8eWZdKc7KF4Yacm6xHIb6TBu/edit?usp=drivesdk&ouid=105229758609745283151&rtpof=true&sd=true"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-[#bb00ff]"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              )}
              {error && <div className="w-[90%] text-red-500">{error}</div>}
              <div className="w-[90%] mt-2 flex items-end justify-between">
                {!next && (
                  <>
                    <div></div>
                    <div
                      type="button"
                      className="text-white cursor-pointer bg-[#1DCFDC] hover:bg-[#0A69A5] font-medium rounded-md text-base px-6 py-1.5 mb-2"
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
                      className="text-white cursor-pointer bg-[#1DCFDC] hover:bg-[#0A69A5] font-medium rounded-md text-base px-6 py-1.5 me-2 mb-2"
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
    </>
  );
};

export default RegisterForm;
