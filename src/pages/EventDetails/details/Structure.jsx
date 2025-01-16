import React from "react";

const Structure = ({ structure }) => {
  return (
    <>
      <div className="text-lg text-wrap">
        <div dangerouslySetInnerHTML={{ __html: structure }} className="text-wrap" />
      </div>
    </>
  );
};

export default Structure;
