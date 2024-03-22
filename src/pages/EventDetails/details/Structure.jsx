import React from "react";

const Structure = ({ structure }) => {
  return (
    <>
      <div className="text-lg ">
        <div dangerouslySetInnerHTML={{ __html: structure }} />
      </div>
    </>
  );
};

export default Structure;
