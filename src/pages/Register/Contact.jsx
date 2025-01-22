import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="absolute top-[13%] max-md:bottom-0 translate-x-[-120px] md:translate-x-[-300px] lg:translate-x-[-150px]  mt-[-5px] md:mt-[10px] md:flex lg:block">
        <p className="text-gray-200 text-center whitespace-nowrap">
          Facing any Issues? Contact Us
        </p>
        <p className="text-gray-300 text-center md:whitespace-nowrap ">
          Y.Siddartha +91 93988 48215 siddhuthecoder@gmail.com{" "}
        </p>
      </div>
      <div className="absolute hidden bottom-[12%] ">
        <p className="text-gray-300 text-center">
          Note :- Btech final year and mtech students are not allowed{" "}
        </p>
      </div>
      <div  className="absolute top-[84%] translate-x-[-120px] md:translate-x-[-80px] whitespace-nowrap">
        Failed to Regitser ? <a href="#" className="text-cyan-500">Fill this form</a>
      </div>
    </div>
  );
};

export default Contact;