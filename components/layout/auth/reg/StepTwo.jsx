"use client";
import React, { useState } from "react";

import Link from "next/link";
import ArrowLeftIcon from "@/components/svg/others/ArrowLeftIcon";
import SocialLogin from "../SocialLogin";
import AuthWrapper from "../AuthWrapper";
import BonusCard from "@/components/templates/bonus/BonusCard";
import InputText from "@/components/templates/form/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schema";
import InputPass from "@/components/templates/form/InputPass";
import Button from "@/components/templates/form/Button";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import { useTranslations } from "next-intl";

const StepTwo = ({ setSteps, bonusType }) => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  function handleRegister(data) {
    setIsLoading(true);

    setTimeout(() => {
      setSteps(3);
      setIsLoading(false);
      console.log(data);
    }, 2000);

    console.log("Login Attempt", data);
  }

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(handleRegister)} className="account-wrapper">
        {bonusType === 1 && <BonusCard />}
        <h2 className="account-title">{t("header.register")}</h2>
        <div className="account-form">
          <InputText
            label={t("auth.email")}
            type="email"
            register={register}
            name="email"
            errors={errors}
          />

          <InputText
            label={t("auth.username")}
            type="text"
            register={register}
            name="username"
            errors={errors}
          />

          <InputPass
            label={t("auth.password")}
            register={register}
            name="password"
            errors={errors}
          />
        </div>
        <div>
          <div className="form--check">
            <input
              type="checkbox"
              id="terms"
              className="form-check-input m-0"
              {...register("terms")}
            />

            <label htmlFor="terms" className="form-check-label">
              {t("auth.u18Accept")}
              <Link href=""> {t("auth.termsAndConditions")} </Link> and
              <Link href=""> {t("auth.privacyPolicy")} </Link>
            </label>
          </div>
          <ErrorMessage className="my-1" message={errors.terms?.message} />
        </div>
        <Button
          className="btn btn--base w-100"
          type="submit"
          isLoading={isLoading}
        >
          {t("auth.nextStep")}
          <span className="ms-2">
            <ArrowLeftIcon color="hsl(var(--black))" />
          </span>
        </Button>
        <div className="account-social">
          <div className="account-social-title">
            <span className="text">{t("auth.orLogInWith")}</span>
          </div>
          <SocialLogin />
        </div>
      </form>
    </AuthWrapper>
  );
};

export default StepTwo;
