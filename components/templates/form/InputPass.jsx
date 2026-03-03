"use client";
import { EyeIcon } from "@/components/svg/others/EyeIcon";
import { EyeIconOpen } from "@/components/svg/others/EyeIconOpen";
import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const InputPass = ({
  register = () => {},
  name = "",
  errors = {},
  label = "Password",
  placeholder = "",
}) => {
  const [passType, setPassType] = useState("password");

  return (
    <div className="form-group">
      <label className="form--label">{label}</label>
      <div className="password-field">
        <input
          type={passType}
          className="form--control"
          placeholder={placeholder}
          {...register(name)}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() =>
            setPassType(passType === "password" ? "text" : "password")
          }
        >
          {passType === "password" ? <EyeIcon /> : <EyeIconOpen />}
        </button>
      </div>
      <ErrorMessage message={errors[name]?.message} />
    </div>
  );
};

export default InputPass;
