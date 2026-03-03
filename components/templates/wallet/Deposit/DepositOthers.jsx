import React, { useState } from "react";
import BonusCard from "../../bonus/BonusCard";
import WalletQuantity from "../WalletQuantity";
import { useUiStore } from "@/store/ui.store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { depositOthersSchema } from "@/lib/schema";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import Button from "@/components/templates/form/Button";
import { useTranslations } from "next-intl";

const DepositOthers = () => {
  const { setUi } = useUiStore();
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(depositOthersSchema),
    defaultValues: {
      amount: 50,
    },
  });

  const handleDeposit = (data) => {
    console.log("Deposit data:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUi({ walletTabKey: "depositProgress" });
    }, 2000);
  };

  return (
    <form className="wallet-form" onSubmit={handleSubmit(handleDeposit)}>
      <h4 className="fs-14">{t("depositWithOthers")}</h4>

      <div className="wallet-form-block">
        <div className="form-group">
          <label className="form--label" htmlFor="firstName">
            {t("firstName")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="firstName"
            {...register("firstName")}
          />
        </div>
        <ErrorMessage message={errors.firstName?.message} />
        <div className="form-group">
          <label className="form--label" htmlFor="lastName">
            {t("lastName")}
          </label>
          <input
            type="text"
            className="form--control"
            placeholder=""
            id="lastName"
            {...register("lastName")}
          />
        </div>
        <ErrorMessage message={errors.lastName?.message} />
        <div className="form-group">
          <label className="form--label" htmlFor="email">
            {t("email")}
          </label>
          <input
            type="email"
            className="form--control"
            placeholder=""
            id="email"
            {...register("email")}
          />
        </div>
        <ErrorMessage message={errors.email?.message} />
      </div>

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

      <Button
        type="submit"
        className="btn btn--base w-100"
        isLoading={isLoading}
      >
        {t("depositNow")}
      </Button>
    </form>
  );
};

export default DepositOthers;
