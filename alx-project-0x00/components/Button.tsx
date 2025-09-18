import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  // Size classes mapping
  const sizeClasses: { [key: string]: string } = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition-colors`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
