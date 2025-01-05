import React from "react";
const Instructor = ({data}) => {
  return (
    <div className="flex text-center w-full flex-col ps-[12px] ">
      <div className="text-2xl text-center font-bold text-[white]">Instructor</div>
      <img src={data.instructorImage} alt="instructor_image" className="w-[150px] mt-[10px] h-[150px] m-auto" />
      <h2 className="font-bold">{data.instructorName}</h2>
      <p className="text-black">{data.instructorSpecifications}</p>
    </div>
  );
};

export default Instructor;
