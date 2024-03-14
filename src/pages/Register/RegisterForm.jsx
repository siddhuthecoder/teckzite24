import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    college: "",
    year: "",
    gender: "",
    phoneNumber: "",
    idNumber: "",
    state: "",
    district: "",
    city: "",
    file: "",
    img: "",
    terms: false,
  };
  const [data, setData] = useState(initialData);
  const [signIn, setSignIn] = useState(false);
  const [next, setNext] = useState(false);
  const [error, setError] = useState(null);
  const [isRgukt, setIsRgukt] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.state === "" || data.district === "" || data.city === "") {
      setError("All fields are required");
      return;
    }

    if (isRgukt && data.file === "") {
      setError("Upload id proof");
      return;
    }

    if (!data.terms) {
      setError("Please accept the Terms and Conditions");
      return;
    }

    // Handle form submission
    alert("Registrations will be opened soon");
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log(data);
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
    console.log(res);
    const decodedUser = jwtDecode(res.credential);
    const { given_name, family_name, email, picture } = decodedUser;
    const domainPattern = /@(rguktn|rgukto|rgukts|rguktr)\.ac\.in$/;

    if (domainPattern.test(email)) {
      setData({
        ...data,
        idNumber: given_name,
        firstName: family_name.split(" ").slice(1).join(" ").toLowerCase(),
        lastName: family_name.split(" ")[0].toLowerCase(),
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
          <div className="my-16 mx-auto">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              buttonText="Sign up with Google"
            />
          </div>
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
                    className="text-white cursor-pointer bg-green-600 hover:bg-green-700 font-medium rounded-md text-base px-6 py-1.5 me-2 mb-2"
                  >
                    Submit
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
