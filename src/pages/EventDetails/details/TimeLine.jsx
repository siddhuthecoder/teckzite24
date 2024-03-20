import React from "react";

const TimeLine = ({ timeline }) => {
  return (
    <>
      <div className="mt-3 text-lg"><div dangerouslySetInnerHTML={{ __html: timeline }} /></div>
    </>
  );
};

export default TimeLine;
