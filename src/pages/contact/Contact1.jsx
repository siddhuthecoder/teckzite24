import React,{useState,useEffect} from 'react'
import Header from '../../components/Header/Header'
import './contact.css'
import { IoLocation } from "react-icons/io5";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const Contact1 = () => {
  const [edit, setEdit] = useState({
    username: "",
    email: "",
    phno: "",
    subject:"",
    msg:"",
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
        case "subject":
        setEdit({ ...edit, msg: value });
        break;

      default:
        break;
    }
  };

  const handleSend = async () => {
    const temp = {
      to_name: "sribabumandraju@gmail.com",
      from_name: edit.email,
      message: `Name ${edit.username} ${edit.msg} contact: ${edit.phno} `,
    };
    try {
      await emailjs.send("service_ID", "template_ID", temp, {
        publicKey: "PUBLICKEY HERE",
      });
      console.log("successfully sended")
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        return;
      }
    }
  };


  return (
    <div className="w-full flex justify-center items-center   h-screen overflow-x-hidden">
        <Header />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="w-[95%] mx-auto   py-2 gap-5  mt-[300px]   md:mt-[0px]">
              <div className="font-bold text-2xl md:text-3xl ps-2 py-2">Get in Touch</div>
              <div className="text-1xl sm:text-1xl p-2 text-[grey]">Contact us and meet our team</div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-5 ">
                    <div className="flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Name</label>
                      <input  type='text' name="username" className="input-bg  pb-4 bg-cover py-2 -none outline-none ps-2 relative mx-2 mt-2 " style={{}} onClick={handleChange} />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="mx-2 mt-2 ps-2">Email</label>
                      <input  type='text' name="email" className="input-bg pb-4 bg-cover py-2 -none outline-none ps-2 relative  mx-2 mt-2" style={{}} onClick={handleChange} />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2  ">
                    <div className="flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Phone</label>
                      <input  type='text' name="phno" className="input-bg pb-4 bg-cover py-2 -none outline-none ps-2 relative mx-2 mt-2 " style={{}} onClick={handleChange} />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Subject</label>
                      <input  type='text' name="subject" className="input-bg pb-4 bg-cover py-2   outline-none ps-2 relative mx-2 mt-2 " style={{}} onClick={handleChange} />
                    </div>
                </div>
                <div className="w-[96%] mx-auto  grid-cols-1 sm:grid-cols-2    ">
                    <div className="flex flex-col w-full col-span-1 sm:col-span-2">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">   </label>
                      <textarea name="msg" className="input-bg bg-cover sm:bg-cover py-2 w-full   outline-none ps-2 relative mt-4  " id="" cols="50" rows="10"></textarea>
                    </div>
                    
                </div>
                <button className="btn px-[40px] py-2 font-bold bg-[green] rounded-[5px] ms-2 my-2" onClick={handleSend}>Send</button>
            </div>
            <div className="w-[95%] mx-auto  py-2  flex flex-col  ">
            <div className="font-bold text-2xl md:text-3xl ps-2 py-2">Information</div>
            <div className="text-1xl sm:text-1xl p-2 text-[grey]">Contact Information & Stay connected with us</div>
              <div className="info-bg bg-cover w-[90%] mt-5 mx-auto px-2  text-[white] ms-3 flex items-center">
                <IoLocation className='text-[30px] text-[#f529a3] me-5' />  
                <div className="">RGUKT ,NUZVID ,Hanuman juction</div>
              </div>
              <div className="info-bg bg-cover w-[90%] mt-5 mx-auto px-2  text-[white] ms-3 flex items-center">
                <IoLocation className='text-[30px] text-[#f529a3] me-5' />  
                <div className="">RGUKT ,NUZVID ,Hanuman juction</div>
              </div>
              <div className="info-bg bg-cover w-[90%] mt-5 mx-auto px-2  text-[white] ms-3 flex items-center">
                <IoLocation className='text-[30px] text-[#f529a3] me-5' />  
                <div className="">RGUKT ,NUZVID ,Hanuman juction</div>
              </div>  
              <div className="info-bg bg-cover w-[90%] mt-5 mx-auto px-2  text-[white] ms-3 flex items-center">
                <IoLocation className='text-[30px] text-[#f529a3] me-5' />  
                <div className="">RGUKT ,NUZVID ,Hanuman juction</div>
              </div>  
              <div className="info-bg bg-cover w-[90%] mt-5 mx-auto px-2  text-[white] ms-3 flex items-center">
                <IoLocation className='text-[30px] text-[#f529a3] me-5' />  
                <div className="">RGUKT ,NUZVID ,Hanuman juction</div>
              </div>  
            </div>
        </div>
    </div>
  )
}

export default Contact1
