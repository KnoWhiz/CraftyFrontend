import React from "react";

const DocLabel = ({ label }: { label: string }) => {
  return (
    <div className="bg-line-gray p-2 rounded-xl inline-block">
      <p>{label}</p>
    </div>
  );
};

export default DocLabel;
