"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { withdrawCryptoSchema } from "@/lib/schema";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import Button from "@/components/templates/form/Button";
import { useTranslations } from "next-intl";

const WithdrawCrypto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("wallet");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(withdrawCryptoSchema),
  });

  const handleWithdraw = (data) => {
    console.log("Crypto withdraw:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Add success notification or redirect
    }, 2000);
    // Add your API call here
  };

  return (
    <form onSubmit={handleSubmit(handleWithdraw)}>
      <h4 className="mb-20">{t("walletAddress").toUpperCase()}</h4>
      <div className="form-group mb-20">
        <label htmlFor="walletAddress" className="form--label">
          {t("walletAddress")}
        </label>
        <input
          type="text"
          className="form--control"
          placeholder=""
          id="walletAddress"
          {...register("walletAddress")}
        />
      </div>
      <ErrorMessage message={errors.walletAddress?.message} />
      <Button
        type="submit"
        className="btn btn--base w-100"
        isLoading={isLoading}
      >
        {t("withdrawToWallet").toUpperCase()}
      </Button>
    </form>
  );
};

export default WithdrawCrypto;
