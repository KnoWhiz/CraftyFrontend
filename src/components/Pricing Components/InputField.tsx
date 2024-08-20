"use client";

import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  width: string;
  height?: string;
  onChange?: (e: any) => void;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  width,
  height,
  onChange,
  value,
}) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className={`flex flex-col items-start justify-start w-${width}`}>
      <p className="font-raleway text-main-black text-2xl font-medium">
        {label}
      </p>
      {height ? (
        <textarea
          {...(value ? { value: value } : { value: input })}
          {...(onChange
            ? { onChange: onChange }
            : { onChange: (e) => setInput(e.target.value) })}
          aria-label="input"
          placeholder=""
          title=""
          className={`pt-2 border-solid border-[1.5px] border-main-black w-full min-h-${height ? height : `52`} rounded-2xl px-4`}
        />
      ) : (
        <input
          {...(value ? { value: value } : { value: input })}
          {...(onChange
            ? { onChange: onChange }
            : { onChange: (e) => setInput(e.target.value) })}
          aria-label="input"
          placeholder=""
          title=""
          className={`border-solid border-[1.5px] border-main-black w-full h-12 rounded-2xl px-4`}
        />
      )}
    </div>
  );
};

export default InputField;
