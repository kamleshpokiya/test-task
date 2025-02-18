import React from "react";

interface CustomeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  classNameInput?: string;
}

const CustomeInput: React.FC<CustomeInputProps> = ({
  label,
  error,
  className,
  classNameInput,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...props}
        className={`border px-3 py-2 rounded-md text-white outline-none ${classNameInput} `}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CustomeInput;
