import Header from "../../components/Header/Header";
import Animation from "../../components/Animation";
import { useState, useEffect } from "react";
import img from '../../assets/events/tabbutton.webp'
const ContactUs= () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition);
    };
  }, []);

  return (
    <section className="relative w-full  overflow-x-hidden">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/contact_bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="w-full text-white"
      >
        <Header />

        <Animation title="Contact Us" />
       
        <div className="relative z-5 my-[100px] w-full flex flex-col overflow-x-auto">
        <div className="sm:w-[40%] w-[95%] mx-auto   py-2 gap-5 md:mt-[300px]    mt-[0px]">
              <div className="font-bold text-2xl md:text-3xl ps-2 py-2">Get in Touch</div>
              <div className="text-1xl sm:text-1xl p-2 text-[grey]">Contact us and meet our team</div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-5 ">
                <div className="relative flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Name</label>
                      
                      <img src={img} className=" h-[50%] w-[90%]" />
                      <input  type='text' name="username" 
                      
                      className="absolute bottom-6 left-2 bg-black bg-opacity-0  outline-none  p-2 pb-2 w-[80%] "  />
                    </div>
                    <div className="relative flex flex-col">
                      <label htmlFor="" className="mx-2 mt-2 ps-2">Email</label>
                      <img src={img} className=" h-[50%] w-[90%]" />
                      <input  type='text' name="email" className="absolute bottom-6 bg-opacity-0 left-2 bg-black  outline-none  p-2 pb-2 w-[80%] "   />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2  ">
                    <div className="relative flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Phone</label>
                      <img src={img} className=" h-[50%] w-[90%]" />
                      <input  type='text' name="phno" className="  absolute bottom-6 left-2 bg-black bg-opacity-0  outline-none  p-2 pb-2 w-[80%] "   />
                    </div>
                    <div className="relative flex flex-col">
                      <label htmlFor="" className="ps-2 mx-2 mt-2">Subject</label>
                      <img src={img} className=" h-[50%] w-[90%]" />
                      <input  type='text' name="subject" className="absolute bottom-6 left-2 bg-black bg-opacity-0 outline-none  p-2 pb-2 w-[80%] "   />
                    </div>
                </div>
                <div className="w-[96%] mx-auto  grid-cols-1 sm:grid-cols-2    ">
                    <div className="relative flex flex-col w-full col-span-1 sm:col-span-2">
                      <label htmlFor="" className="ps-2 mx-2 mt-2"> Message  </label>
                      <div>
                      <img src={img} className=" h-[100%] w-[95%]" />
                      <textarea name="msg" className="absolute sm:bottom-6 bottom-2 left-2  bg-black bg-opacity-0 outline-none  h-max  p-2 pb-2 w-[90%] "  id="" cols="50" rows="2"></textarea>
                      </div>
                    </div>
                    
                </div>
                <button className="btn px-[40px] py-2 font-bold bg-[green] rounded-[5px] ms-2 my-6" >Send</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;