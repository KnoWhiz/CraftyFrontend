import React from "react";

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
  return (
    <div className={`flex flex-col items-start justify-start w-${width}`}>
      <p className="font-raleway text-main-black text-2xl font-medium">
        {label}
      </p>
      {height ? (
        <textarea
          {...(value ? { value: value } : {})}
          {...(onChange ? { onChange: onChange } : {})}
          className={`pt-2 border-solid border-[1.5px] border-main-black w-full h-${height} rounded-2xl px-4`}
        />
      ) : (
        <input
          {...(value ? { value: value } : {})}
          {...(onChange ? { onChange: onChange } : {})}
          className={`border-solid border-[1.5px] border-main-black w-full h-12 rounded-2xl px-4`}
        />
      )}
    </div>
  );
};

export default InputField;
