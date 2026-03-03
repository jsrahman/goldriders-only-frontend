"use client";
import WarningIcon from "@/components/svg/others/WarningIcon";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { withdrawBankSchema } from "@/lib/schema";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import Button from "@/components/templates/form/Button";
import { useTranslations } from "next-intl";

const WithdrawBank = () => {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("wallet");
  const tProfile = useTranslations("profile");
  const tGlobal = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(withdrawBankSchema),
    defaultValues: {
      currency: "EUR",
      bankCountry: "",
    },
  });

  const handleWithdraw = (data) => {
    console.log("Bank withdraw:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Add success notification or redirect
    }, 2000);
    // Add your API call here
  };

  return (
    <form onSubmit={handleSubmit(handleWithdraw)}>
      <div className="flex-between mb-20">
        <h4 className="mb-0">{t("availableBalance")}</h4>
        <p className="fs-12 fw-bold text--base">0 EUR</p>
      </div>
      <div className="wallet-form-block">
        <div className="form-group">
          <select {...register("currency")} className="form--control">
            <option value="EUR">{tGlobal("currency.eur")}</option>
            <option value="USD">{tGlobal("currency.usd")}</option>
          </select>
        </div>
        <ErrorMessage message={errors.currency?.message} />
        <div className="form-group">
          <label htmlFor="iban" className="form--label">
            {t("iban")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="iban"
            {...register("iban")}
          />
        </div>
        <ErrorMessage message={errors.iban?.message} />
        <div className="form-group">
          <label htmlFor="bic" className="form--label">
            {t("bic")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="bic"
            {...register("bic")}
          />
        </div>
        <ErrorMessage message={errors.bic?.message} />
        <div className="form-group">
          <label htmlFor="bankName" className="form--label">
            {t("bankName")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="bankName"
            {...register("bankName")}
          />
        </div>
        <ErrorMessage message={errors.bankName?.message} />
        <div className="form-group">
          <label htmlFor="accountOwner" className="form--label">
            {t("accountOwner")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="accountOwner"
            {...register("accountOwner")}
          />
        </div>
        <ErrorMessage message={errors.accountOwner?.message} />
        <div className="form-group">
          <select {...register("bankCountry")} className="form--control">
            <option value="">{tGlobal("Select County")}</option>
            <option value="Austria">Austria</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </div>
        <ErrorMessage message={errors.bankCountry?.message} />
      </div>
      <div className="wallet-form-block">
        <h4 className="title">{tProfile("personalInfo")}</h4>
        <div className="form-group">
          <label htmlFor="city" className="form--label">
            {tProfile("city")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="city"
            {...register("city")}
          />
        </div>
        <ErrorMessage message={errors.city?.message} />
        <div className="form-group">
          <label htmlFor="address" className="form--label">
            {tProfile("address")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="address"
            {...register("address")}
          />
        </div>
        <ErrorMessage message={errors.address?.message} />
      </div>
      <div className="wallet-note mb-20">
        <span className="icon">
          <WarningIcon />
        </span>
        <p className="text">{t("withdrawWarning1")}</p>
      </div>
      <div className="wallet-note mb-20">
        <span className="icon">
          <WarningIcon />
        </span>
        <p className="text">{t("withdrawWarning2")}</p>
      </div>

      <Button
        type="submit"
        className="btn btn--base w-100"
        isLoading={isLoading}
      >
        {t("withdraw").toUpperCase()}
      </Button>
    </form>
  );
};

export default WithdrawBank;
