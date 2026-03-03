import React from "react";
import ErrorMessage from "./ErrorMessage";

const InputText = ({
  register = () => {},
  name = "",
  errors = {},
  label = "",
  placeholder = "",
  type = "text",
  ...props
}) => {
  return (
    <>
      <div className="form-group">
        <label className="form--label">{label}</label>
        <input
          type={type}
          className="form--control"
          placeholder={placeholder}
          {...register(name)}
          {...props}
        />
      </div>
      <ErrorMessage message={errors[name]?.message} />
    </>
  );
};

export default InputText;
