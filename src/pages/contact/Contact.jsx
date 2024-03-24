import React, { useState } from "react";

import Header from "../../components/Header/Header.jsx";
import { FaLocationDot } from "react-icons/fa6";
import name from "../../assets/img/contact/name.svg";
import email from "../../assets/img/contact/email.svg";
import phone from "../../assets/img/contact/phone.svg";
import subject from "../../assets/img/contact/subject.svg";
import text from "../../assets/img/contact/textarea.svg";
import i1 from "../../assets/img/contact/get.png";
import i2 from "../../assets/img/contact/info.png";
import ad from "../../assets/img/contact/address.svg";
import { IoMdCall } from "react-icons/io";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const Contact = () => {
  const [edit, setEdit] = useState({
    username: "",
    email: "",
    phno: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setEdit({ ...edit, username: value });
        break;
      case "phno":
        setEdit({ ...edit, phno: value });
        break;
      case "email":
        setEdit({ ...edit, email: value });
        break;
      case "msg":
        setEdit({ ...edit, msg: value });
        break;

      default:
        break;
    }
  };

  const handleSend = async () => {
    const temp = {
      to_name: "rajva5727@gmail.com",
      from_name: edit.email,
      message: `Name ${edit.username} ${edit.msg} contact: ${edit.phno} `,
    };
    try {
      await emailjs.send("service_ID", "template_ID", temp, {
        publicKey: "PUBLICKEY HERE",
      });
      console.log("SUCCESS!");
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }

      console.log("ERROR", err);
    }
  };

  return (
    <section className="relative top-0 w-[99vw] min-h-screen py-[80px] m-auto overflow-x-hidden">
      <Header />
      <>
        <div className="bg-[#0f1214] grid grid-cols-2 max-sm:grid-cols-1 gap-4 p-[3%] w-full ">
          <div className="w-full">
            <img src={i1} className="w-[150px] h-[30px]" alt="" />
            <h5 className="font-semibold text-2xl mt-[10px] m-auto text-left">
              Contact Us & Meet Our Team
            </h5>
            <div className="w-full mx-auto flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <input
                    type="text"
                    name="username"
                    value={edit.username}
                    onChange={handleChange}
                    className="w-[90%] mx-auto border-none ps-[20px] outline-none bg-transparent z-[2]"
                  />
                  <img
                    src={name}
                    alt=""
                    className="absolute left-0 ms-[-20px] w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <input
                    type="email"
                    name="email"
                    value={edit.email}
                    onChange={handleChange}
                    className="w-[90%] mx-auto border-none ps-[20px] outline-none bg-transparent z-[2]"
                  />
                  <img
                    src={email}
                    alt=""
                    className="absolute left-0 ms-[-20px]  w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <input
                    type="number"
                    name="phno"
                    value={edit.phno}
                    onChange={handleChange}
                    className="w-[90%] mx-auto border-none ps-[20px] outline-none bg-transparent z-[2]"
                  />
                  <img
                    src={phone}
                    alt=""
                    className="absolute left-0 ms-[-20px]  w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="grid mt-[30px] w-full">
                <div className="flex h-[130px] items-center w-full relative ">
                  <textarea
                    name="msg"
                    onChange={handleChange}
                    value={edit.msg}
                    className=" w-full min-h-[100px] md:min-h-[60px] md:max-h-[60px] max-sm:max-h-[50px] max-sm:min-h-[50px] md:mt-[20px] pt-[70px] text-lg max-h-[100px] outline-none bg-transparent z-[2]"
                  ></textarea>
                  <img
                    src={text}
                    alt="text"
                    className="absolute  left-3 scale-y-[1.8] bottom-3 ms-[-12px] w-full"
                  />
                </div>
              </div>
              <div
                onClick={handleSend}
                className="bg-[#DE7CE7] w-[80px] rounded-md mt-[40px]  text-center p-2"
              >
                Send
              </div>
              <div className="grid grid-cols-2">
                <div className="w-full"></div>
                <div className="flex items-center m-4  w-full relative h-[70px] ">
                  <select
                    name=""
                    id=""
                    className="w-[90%]   border-none outline-none bg-transparent z-[2]"
                  >
                    <option value=""></option>
                    <option value="">subject -1</option>
                    <option value="">subject -2</option>
                  </select>
                  <img
                    src={subject}
                    alt=""
                    className="absolute left-0 ms-[-20px]  w-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0f1214] mb-[50px] w-full ">
            <img src={i2} className="w-[150px] h-[30px]" alt="contact" />
            <h5 className="font-semibold text-2xl mt-[10px] m-auto text-left">
              Contact Information
            </h5>
            <div className=" mt-[20px] relative text-[#DE7CE7]">
              <img src={ad} alt="contact" />
              <FaLocationDot
                fontSize={"25px"}
                className="absolute xl:bottom-3 lg:bottom-3 bottom-2 left-3 z-[2]"
              />
            </div>
            <div className="relative mt-[20px]  text-[#DE7CE7]">
              <img src={ad} alt="contact" />
              <IoMdCall
                fontSize={"25px"}
                className="absolute xl:bottom-3 lg:bottom-3 bottom-2 left-3 z-[2]"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Contact;
