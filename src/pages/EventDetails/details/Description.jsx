import React from "react";

const Description = ({ desc, rules, teamSize }) => {
  return (
    <div className="flex w-full flex-col ps-[12px] ">
      <h2 className="text-lg w-full mb-2">
        <span className="font-semibold">Team Size :-</span> {teamSize}
      </h2>
      <h2 className="text-lg w-full font-semibold text-[white]">Description</h2>
      <div
        className="text-white w-full text-base mt-1 "
        style={{ textIndent: "20px" }}
      >
        <div dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
      {rules.length > 0 && (
        <h2 className="text-lg w-full font-semibold text-[white] mt-4">
          Rules
        </h2>
      )}
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
