// Slider.jsx
import React from "react";

const Slider = ({ value, onChange, min = 0, max = 10, step = 1 }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-pink-500"
    />
  );
};

export default Slider;  // Default export
