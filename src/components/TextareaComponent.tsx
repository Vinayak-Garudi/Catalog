import { Textarea } from "@nextui-org/react";
import React from "react";

interface TextAreaProps {
  key?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label?: string;
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const TextareaComponent: React.FC<React.PropsWithChildren<TextAreaProps>> = ({
  key,
  variant = "bordered",
  label = "",
  placeholder = "",
  minRows = 3,
  maxRows = 8,
  value = "",
  onChange,
  className = "",
}) => {
  return (
    <Textarea
      key={key}
      variant={variant}
      label={label}
      placeholder={placeholder}
      minRows={minRows}
      maxRows={maxRows}
      value={value}
      onChange={onChange}
      className={`col-span-12 md:col-span-6 mb-6 md:mb-0 ${className}`}
    />
  );
};

export default TextareaComponent;
