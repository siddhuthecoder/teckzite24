import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="absolute top-[13%] max-md:bottom-0  md:translate-x-[-150px]">
        <p className="text-gray-200 text-center">
          Facing any Issues? Contact Us
        </p>
        <p className="text-gray-300 text-center">
          Y.Siddartha +91 93988 48215 siddhuthecoder@gmail.com{" "}
        </p>
      </div>
      <div className="absolute hidden bottom-[12%] ">
        <p className="text-gray-300 text-center">
          Note :- Btech final year and mtech students are not allowed{" "}
        </p>
      </div>
      <div  className="absolute top-[84%] translate-x-[-80px]">
        Failed to Regitser ? <a href="#" className="text-cyan-500">Fill this form</a>
      </div>
    </div>
  );
};

export default Contact;