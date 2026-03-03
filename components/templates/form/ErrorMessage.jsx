import React from "react";

const ErrorMessage = ({ message, className }) => {
  if (!message) return null;
  return (
    <p className={`text--danger error-message fs-10 ${className}`}>{message}</p>
  );
};

export default ErrorMessage;
