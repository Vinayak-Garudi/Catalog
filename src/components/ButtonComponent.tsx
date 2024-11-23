import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  theme?: "primary" | "secondary" | "success" | "danger";
}

const ButtonComponent: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  onClick,
  type = "button",
  disabled = false,
  className = "",
  children,
  theme = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-1
         rounded
         text-white
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
    </button>
  );
};

export default ButtonComponent;
