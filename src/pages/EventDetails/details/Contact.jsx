import React from "react";

const contact = ({ contact }) => {
  return (
    <>
      <div className="text-lg">
        <div dangerouslySetInnerHTML={{ __html: contact }} />
      </div>
    </>
  );
};

export default contact;
