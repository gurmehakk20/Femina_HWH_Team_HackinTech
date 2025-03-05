import React from 'react';

export const Select = ({ value, onChange, children }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
    >
      {children}
    </select>
  );
};

export const SelectItem = ({ value, children }) => {
  return (
    <option value={value} className="py-2">
      {children}
    </option>
  );
};
