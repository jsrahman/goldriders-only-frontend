"use client";
import React, { useState } from "react";
import QuantityItem from "./QuantityItem";
import BonusCard from "../../bonus/BonusCard";
import CardIcon from "@/components/svg/others/CardIcon";
import CalenderIcon from "@/components/svg/others/CalenderIcon";
import CvcIcon from "@/components/svg/others/CvcIcon";
import UserIcon from "@/components/svg/others/UserIcon";
import EU from "@/public/images/thumbs/EU.svg";
import SSL from "@/public/images/thumbs/SSL.svg";
import DSS from "@/public/images/thumbs/DSS.png";
import Image from "next/image";
import { useUiStore } from "@/store/ui.store";
import WalletQuantity from "../WalletQuantity";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { depositCardSchema } from "@/lib/schema";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import Button from "@/components/templates/form/Button";
import { useTranslations } from "next-intl";

const DepositCard = () => {
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
    resolver: zodResolver(depositCardSchema),
    defaultValues: {
      amount: 50,
      saveCard: false,
    },
  });

  const handleDeposit = (data) => {
    console.log("Card deposit data:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUi({ walletTabKey: "depositProgress" });
    }, 2000);
    // Add your API call here
  };

  return (
    <form onSubmit={handleSubmit(handleDeposit)}>
      <h4 className="fs-14">{t("depositWithCard")}</h4>

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
      <div className="wallet-form-block">
        <div className="mb-3">
          <p className="title">{t("paymentCard")}</p>
        </div>
        <div className="row gy-0 gx-2">
          <div className="col-12">
            <div className="form-group">
              <span className="icon">
                <CardIcon />
              </span>
              <label className="form--label" htmlFor="cardNumber">
                {t("cardNumber")}
              </label>
              <input
                type="text"
                className="form--control"
                placeholder=""
                id="cardNumber"
                {...register("cardNumber")}
              />
            </div>
            <ErrorMessage message={errors.cardNumber?.message} />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="icon" htmlFor="expiryDate">
                <CalenderIcon />
              </label>

              <div className="card-number d-flex gap-2 align-items-center">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={2}
                  placeholder="MM"
                  className="form--control text-end"
                  id="expiryMonth"
                  {...register("expiryMonth")}
                />

                <span className="text--white">/</span>

                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={2}
                  className="form--control px-2"
                  id="expiryYear"
                  placeholder="YY"
                  {...register("expiryYear")}
                />
              </div>
            </div>

            <div className="d-flex gap-2 error-message">
              <ErrorMessage
                message={
                  errors.expiryMonth?.message || errors.expiryYear?.message
                }
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <span className="icon">
                <CvcIcon />
              </span>

              <label className="form--label" htmlFor="cvc">
                {t("cvc")}
              </label>

              <input
                type="text"
                inputMode="numeric"
                placeholder=""
                pattern="[0-9]*"
                maxLength={4}
                className="form--control"
                id="cvc"
                {...register("cvc")}
              />
            </div>

            <ErrorMessage message={errors.cvc?.message} />
          </div>

          <div className="col-12">
            <div className="form-group">
              <span className="icon">
                <UserIcon />
              </span>
              <label className="form--label" htmlFor="cardholderName">
                {t("cardholderName")}
              </label>
              <input
                type="text"
                className="form--control"
                placeholder=""
                id="cardholderName"
                {...register("cardholderName")}
              />
            </div>
            <ErrorMessage message={errors.cardholderName?.message} />
          </div>
          <div className="col-12">
            <div className="form--check lg-style">
              <input
                type="checkbox"
                className="form-check-input"
                id="saveForNextPayment"
                {...register("saveCard")}
              />
              <label className="form-check-label" htmlFor="saveForNextPayment">
                {t("saveCard")}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="wallet-form-footer">
        <div className="wallet-form-footer-item">
          <span className="thumb">
            <Image src={EU} alt="EU" />
          </span>
          <p className="text">{t("securePaymentInfo")}</p>
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
          <p className="text">{t("securePaymentInfo")}</p>
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

export default DepositCard;
