import React from "react";

const Button = ({ children, isLoading, ...props }) => {
  if (isLoading) {
    return (
      <button {...props} disabled={true}>
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span className="ps-2 " role="status">
          {children}
        </span>
      </button>
    );
  }
  return <button {...props}>{children}</button>;
};

export default Button;
