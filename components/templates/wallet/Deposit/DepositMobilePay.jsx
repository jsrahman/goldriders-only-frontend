import React, { useState } from "react";
import QuantityItem from "./QuantityItem";
import BonusCard from "../../bonus/BonusCard";
import EU from "@/public/images/thumbs/EU.svg";
import SSL from "@/public/images/thumbs/SSL.svg";
import DSS from "@/public/images/thumbs/DSS.png";
import Image from "next/image";
import { useUiStore } from "@/store/ui.store";
import WalletQuantity from "../WalletQuantity";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/templates/form/Button";
import { mobilePaySchema } from "@/lib/schema";

import { useTranslations } from "next-intl";

const DepositMobilePay = () => {
  const { setUi } = useUiStore();
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("wallet");

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mobilePaySchema),
    defaultValues: {
      amount: 50,
    },
  });

  const handleDeposit = (data) => {
    console.log("Mobile pay deposit data:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUi({ walletTabKey: "depositProgress" });
    }, 2000);
    // Add your API call here
  };

  return (
    <form onSubmit={handleSubmit(handleDeposit)}>
      <h4 className="fs-14">{t("depositWithMobilePay")} </h4>
      <WalletQuantity
        setValue={setValue}
        register={register}
        getValues={getValues}
        watch={watch}
        error={errors.amount?.message}
      />
      <div className="wallet-form-block">
        <div className="mb-3">
          <p className="title">{t("availableBonus")}</p>
        </div>

        <BonusCard
          handleBonusSelect={() => setUi({ isWalletOfferView: true })}
          clickHandler={true}
          isActive={true}
        />
      </div>

      <div className="wallet-form-footer">
        <div className="wallet-form-footer-item">
          <span className="thumb">
            <Image src={EU} alt="EU" />
          </span>
          <p className="text">{t("fundsSafe")}</p>
        </div>
        <div className="wallet-form-footer-item">
          <span className="thumb">
            <Image src={DSS} alt="EU" />
          </span>
        </div>
        <div className="wallet-form-footer-item">
          <span className="thumb">
            <Image src={SSL} alt="EU" />
          </span>
          <p className="text">{t("fundsSafe")}</p>
        </div>
      </div>
      <Button
        type="submit"
        className="btn btn--base w-100"
        isLoading={isLoading}
      >
        {t("depositNow").toUpperCase()}
      </Button>
    </form>
  );
};

export default DepositMobilePay;
