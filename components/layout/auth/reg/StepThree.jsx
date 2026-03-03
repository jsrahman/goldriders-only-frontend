"use client";
import Link from "next/link";
import Select from "react-select";
import AuthWrapper from "../AuthWrapper";
import BonusCard from "@/components/templates/bonus/BonusCard";
import {
  countryOptions,
  currencyOptions,
  genderOptions,
} from "@/public/data/registerData";
import { useUiStore } from "@/store/ui.store";
import { usePreferencesStore } from "@/store/preferences.store";
import Button from "@/components/templates/form/Button";
import { registerDetailsSchema } from "@/lib/schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import InputText from "@/components/templates/form/InputText";
import { useTranslations } from "next-intl";

const StepThree = ({ bonusType }) => {
  const t = useTranslations();
  const { setUi } = useUiStore();
  const { setPreferences } = usePreferencesStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerDetailsSchema),
  });

  function handleRegister(data) {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setUi({ isAuthModalOpen: false });
      setPreferences({ isAuth: true });
    }, 2000);

    console.log("Register Attempt", data);
  }

  return (
    <>
      <AuthWrapper>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="account-wrapper"
        >
          {bonusType === 1 && <BonusCard />}
          <h2 className="account-title">{t("header.register")}</h2>
          <div className="account-form">
            <div className="row">
              <div className="col-12">
                <InputText
                  register={register}
                  name="name"
                  errors={errors}
                  label={t("auth.name")}
                  type="text"
                />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="lastName" className="form--label">
                    {t("auth.lastName")}
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
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        options={genderOptions}
                        classNamePrefix="select2-wrapper"
                        placeholder={t("profile.gender")}
                        onChange={(val) => field.onChange(val)}
                        value={field.value}
                      />
                    )}
                  />
                </div>
                <ErrorMessage message={errors.gender?.message} />
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="date"
                    className="form--control"
                    placeholder=""
                    id="date"
                    {...register("date")}
                  />
                </div>
                <ErrorMessage message={errors.date?.message} />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <Controller
                    name="currency"
                    control={control}
                    render={({ field }) => (
                      <Select
                        options={currencyOptions}
                        classNamePrefix="select2-wrapper"
                        placeholder={t("currency.usd")}
                        onChange={(val) => field.onChange(val)}
                        value={field.value}
                      />
                    )}
                  />
                </div>
                <ErrorMessage message={errors.currency?.message} />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form--label">
                    {t("auth.enterPhone")}
                  </label>
                  <input
                    type="text"
                    className="form--control"
                    placeholder=""
                    id="phoneNumber"
                    {...register("phoneNumber")}
                  />
                </div>
                <ErrorMessage message={errors.phoneNumber?.message} />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <Select
                        options={countryOptions}
                        classNamePrefix="select2-wrapper"
                        placeholder={t("profile.country")}
                        onChange={(val) => field.onChange(val)}
                        value={"sd"}
                      />
                    )}
                  />
                </div>
                <ErrorMessage message={errors.country?.message} />
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="address" className="form--label">
                    {t("auth.enterAddress")}
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
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="postalCode" className="form--label">
                    {t("auth.enterPostalCode")}
                  </label>
                  <input
                    type="text"
                    className="form--control"
                    placeholder=""
                    id="postalCode"
                    {...register("postalCode")}
                  />
                </div>
                <ErrorMessage message={errors.postalCode?.message} />
              </div>
            </div>
          </div>
          <div>
            <div className="form--check">
              <input
                type="checkbox"
                {...register("terms")}
                className="form-check-input"
                id="terms"
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
            {t("header.register")}
          </Button>
        </form>
      </AuthWrapper>
    </>
  );
};

export default StepThree;
