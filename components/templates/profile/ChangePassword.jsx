"use client";
import React, { useState } from "react";
import { EyeIcon } from "@/components/svg/others/EyeIcon";
import { EyeIconOpen } from "@/components/svg/others/EyeIconOpen";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "@/lib/schema";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import Button from "../form/Button";
import { useTranslations } from "next-intl";

const ChangePassword = () => {
  const t = useTranslations("password");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const handleChangePassword = (data) => {
    console.log("Change password:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Add your API call here
    // On success, you can reset the form:
    // reset();
  };

  return (
    <div className="change-password card">
      <div className="card-body">
        <h2 className="title">{t("title")}</h2>
        <form onSubmit={handleSubmit(handleChangePassword)}>
          <PassWordField
            label={t("current")}
            register={register}
            name="currentPassword"
            error={errors.currentPassword?.message}
          />
          <PassWordField
            label={t("new")}
            register={register}
            name="newPassword"
            error={errors.newPassword?.message}
          />
          <PassWordField
            label={t("confirm")}
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <Button
            type="submit"
            className="btn btn--base reset-pass h-44"
            isLoading={isLoading}
          >
            {t("reset")}
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;

function PassWordField({ label, register, name, error }) {
  const [passType, setPassType] = useState("password");
  return (
    <>
      <div className="form-group">
        <label className="form--label">{label}</label>
        <div className="password-field">
          <input
            type={passType}
            className="form--control"
            placeholder=""
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
      </div>
      <ErrorMessage message={error} />
    </>
  );
}
