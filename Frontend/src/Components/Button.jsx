// Button.jsx
import React from "react";

const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;  // This is the default export
