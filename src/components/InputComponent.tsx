import { Input } from "@nextui-org/react";
import React from "react";

interface inputProps {
  size?: "sm" | "md" | "lg";
  type?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label?: string;
  placeholder?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  isClearable?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
  className?: string;
}

const InputComponent: React.FC<React.PropsWithChildren<inputProps>> = ({
  size = "sm",
  type = "text",
  variant = "bordered",
  label = "",
  placeholder = "",
  radius = "sm",
  isClearable = true,
  isRequired = false,
  isReadOnly = false,
  isDisabled = false,
  isInvalid = false,
  onChange,
  onClear,
  className,
}) => {
  return (
    <Input
      size={size}
      type={type}
      variant={variant}
      label={label}
      placeholder={placeholder}
      radius={radius}
      isClearable={isClearable}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      onChange={onChange}
      onClear={onClear}
      className={className}
    />
  );
};

export default InputComponent;
