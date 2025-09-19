import React from "react";  

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}   
const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full ${className}`}>
      {label}
    </button>
  );
}
export default Button;