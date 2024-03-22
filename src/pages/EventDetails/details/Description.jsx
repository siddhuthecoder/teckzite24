import React from "react";

const Description = ({ desc, rules }) => {
  return (
    <div className="flex w-full flex-col ps-[12px] ">
      <h2 className="text-xl w-full font-semibold text-[white]">Description</h2>
      <div
        className="text-white w-full text-base mt-1 "
        style={{ textIndent: "20px" }}
      >
        <div dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
      <h2 className="text-xl w-full font-semibold text-[white] mt-4">Rules</h2>
      <ul style={{ listStyleType: "none" }}>
        {rules.map((r, index) => (
          <li className="pl-5 text-base" key={index}>
            {`${index + 1}.    `}
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
