"use client";
import React, { useEffect, useState } from "react";
import QuantityItem from "./Deposit/QuantityItem";
import { walletQuantityItems } from "@/public/data/ui-data";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import { useTranslations } from "next-intl";

const WalletQuantity = ({ register, error, setValue, getValues, watch }) => {
  const t = useTranslations("wallet");
  const [activeValue, setActiveValue] = useState(null);
  const amountValue = watch("amount");

  function handleRegisterAmount(value) {
    setValue("amount", value);
    setActiveValue(value);
  }

  useEffect(() => {
    setActiveValue(amountValue);
  }, [amountValue]);

  return (
    <div className="wallet-form-block">
      <div className="flex-between mb-3">
        <p className="title">{t("enterQuantity")}</p>
        <p className="fs-12 fw-semibold">
          {t("min", { min: "€5" })} <span className="text--base">{t("max", { max: "€500" })}</span>
        </p>
      </div>
      <div className="wallet-quantity">
        {walletQuantityItems.map((item) => (
          <QuantityItem
            key={item.id}
            value={item.value}
            isActive={Number(item.value) === Number(activeValue)}
            handleClick={() => handleRegisterAmount(item.value)}
          />
        ))}
      </div>
      <input
        type="number"
        className="form--control"
        {...register("amount", { valueAsNumber: true })}
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export default WalletQuantity;
