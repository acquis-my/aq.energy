import React from "react";

const FieldError: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-red-700 text-sm">{children}</span>;
};

export default FieldError;
