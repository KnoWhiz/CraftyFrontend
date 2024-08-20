import React from "react";

interface InputFieldProps {
  label: string;
  width: string;
  onChange: (e: any) => void;
  value: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  width,
  onChange,
  value,
}) => {
  return (
    <div className={`flex flex-col items-start justify-start w-${width}`}>
      <p className="font-raleway text-main-black text-2xl font-medium">
        {label}
      </p>
      <input
        value={value}
        onChange={onChange}
        className="border-solid border-[1.5px] border-main-black w-full h-12 rounded-2xl px-4"
      />
    </div>
  );
};

export default InputField;
