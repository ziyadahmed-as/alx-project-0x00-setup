import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, styles }) => {
  const sizeClasses =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-base"
      : "px-6 py-3 text-lg";

  return (
    <button
      className={`bg-blue-600 text-white font-medium ${sizeClasses} ${shape} ${styles || ""}`}
    >
      {title}
    </button>
  );
};

export default Button;
