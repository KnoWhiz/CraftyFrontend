import React from "react";

const DocLine = ({ lines, label }: { lines: string[]; label: string }) => {
  const docLines = lines.map((line, index) => (
    <p
      key={index}
      className={`${line.substring(0, 1) === "#" ? `font-extralight` : `font-normal`} text-black font-raleway text-base`}
    >
      {line}
    </p>
  ));

  return (
    <div className="w-full ">
      {label !== "" && <p className="text-main-black mb-4">{label}</p>}
      <div className="flex flex-col justify-start items-start bg-line-gray w-full">
        <ul className="ml-4 my-4 text-xl">{docLines}</ul>
      </div>
    </div>
  );
};

export default DocLine;
