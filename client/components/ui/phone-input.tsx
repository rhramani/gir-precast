import React from "react";
import _PhoneInput from "react-phone-input-2";
const PhoneInput = (_PhoneInput as any).default || _PhoneInput;
import "react-phone-input-2/lib/style.css";
import { cn } from "@/lib/utils";

interface CustomPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  value,
  onChange,
  className,
  disabled
}) => {
  return (
    <div className={cn("phone-input-container", className)}>
      <PhoneInput
        country={"in"}
        value={value}
        onChange={onChange}
        disabled={disabled}
        inputClass="!w-full !h-11 !text-[15px] !text-gray-700 !bg-transparent !border-gray-300 !rounded !pl-14 !transition-all"
        buttonClass="!bg-gray-50 !border-gray-300 !border-r-0 !rounded-l !h-11"
        enableSearch={true}
        disableSearchIcon={true}
        searchPlaceholder="Search country..."
        autoFormat={true}
      />
    </div>
  );
};

export default CustomPhoneInput;
