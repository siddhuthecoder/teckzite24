import React from "react";

const Structure = ({ structure }) => {
  return (
    <>
      <div className="text-lg mt-3"><div dangerouslySetInnerHTML={{ __html: structure }} /></div>
    </>
  );
};

export default Structure;
