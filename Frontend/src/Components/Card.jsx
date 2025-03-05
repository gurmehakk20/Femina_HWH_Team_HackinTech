import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg border border-gray-200 p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};
