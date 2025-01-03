import { Button } from "@nextui-org/react";
import React from "react";

interface ButtonProps {
  onClick?: (e: any) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  theme?: "primary" | "secondary" | "success" | "danger";
  isLoading?: boolean;
  isIconOnly?: boolean;
}

const ButtonComponent: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  onClick,
  type = "button",
  disabled = false,
  className = "",
  children,
  theme = "primary",
  isLoading = false,
  isIconOnly = false,
}) => {
  return (
    <>
      {!isIconOnly ? (
        <Button
          type={type}
          onClick={onClick}
          isDisabled={disabled}
          isLoading={isLoading}
          radius="none"
          className={`px-4 py-1 h-auto w-auto min-w-0
         text-background
         ${
           theme === "primary"
             ? "bg-primary"
             : theme === "secondary"
             ? "bg-secondary"
             : theme === "success"
             ? "bg-success"
             : "bg-danger"
         }
        ${
          theme === "primary"
            ? "hover:bg-primaryHover"
            : theme === "secondary"
            ? "hover:bg-secondaryHover"
            : theme === "success"
            ? "hover:bg-successHover"
            : "hover:bg-dangerHover"
        }
         ${className}`}
        >
          {children}
        </Button>
      ) : (
        <button className={className}>{children}</button>
      )}
    </>
  );
};

export default ButtonComponent;
