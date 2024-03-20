import React from "react";

const contact = ({ contact }) => {
  return (
    <>
      <div className="mt-3 text-lg"><div dangerouslySetInnerHTML={{ __html: contact }} /></div>
    </>
  );
};

export default contact;
