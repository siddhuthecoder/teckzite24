import React from "react";

const Description = ({ desc, rules }) => {
  return (
    <div className="flex w-full flex-col ps-[12px] ">
      <h2 className="text-2xl w-full mt-3 font-bold text-[white]">
        Description
      </h2>
      <p
        className="text-white w-full text-lg mt-1 "
        style={{ textIndent: "20px" }}
      >
        {desc}
      </p>
      <h2 className="text-2xl w-full font-bold text-[white] mt-4">Rules</h2>
      <ul style={{ listStyleType: "disc" }}>
        {rules.map((r, index) => (
          <li className="pl-5 text-lg">
            {`${index + 1}.    `}
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
