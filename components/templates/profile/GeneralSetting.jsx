"use client";
import SaveIcon from "@/components/svg/others/SaveIcon";
import React, { useState } from "react";
import Select from "react-select";
import InfoFillIcon from "@/components/svg/others/InfoFillIcon";
import useScreenSize from "@/hooks/useScreenSize";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generalSettingsSchema } from "@/lib/schema";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import Button from "@/components/templates/form/Button";

const GenderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "others", label: "Others" },
];

const GeneralSetting = () => {
  const { isMobile } = useScreenSize();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(generalSettingsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      country: "Austria",
      city: "",
      postcode: "",
      address: "",
    },
  });

  const handleSaveSettings = (data) => {
    console.log("Save settings:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // Add your API call here
  };

  return (
    <div className="card general-setting-card">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleSaveSettings)}>
          <div className="general-setting__header">
            <h2 className="title mb-0">{t("General Setting")}</h2>
            {!isMobile && (
              <Button
                type="submit"
                className="btn btn--base"
                isLoading={isLoading}
              >
                <SaveIcon /> {t("SAVE CHANGES")}
              </Button>
            )}
          </div>
          <div className="general-setting__body">
            <div className="row gy-2">
              <div className="col-md-6">
                <FormInput
                  label="First Name"
                  register={register}
                  name="firstName"
                  error={errors.firstName?.message}
                />
                <FormInput
                  label="Last Name"
                  register={register}
                  name="lastName"
                  error={errors.lastName?.message}
                />
                <div className="row">
                  <div className="col-4">
                    <FormInput
                      label="DD"
                      type="number"
                      register={register}
                      name="day"
                      error={errors.day?.message}
                    />
                  </div>
                  <div className="col-4">
                    <FormInput
                      label="MM"
                      type="number"
                      register={register}
                      name="month"
                      error={errors.month?.message}
                    />
                  </div>
                  <div className="col-4">
                    <FormInput
                      label="YYYY"
                      type="number"
                      register={register}
                      name="year"
                      error={errors.year?.message}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        placeholder="Gender"
                        className="w-100"
                        options={GenderOptions}
                        classNamePrefix="select2-wrapper"
                        onChange={(val) => field.onChange(val)}
                        value={field.value}
                      />
                    )}
                  />
                </div>
                <ErrorMessage message={errors.gender?.message} />
              </div>

              <div className="col-md-6">
                <div className="form-group has-info-icon">
                  <input
                    type="text"
                    className="form--control"
                    placeholder="Austria"
                    {...register("country")}
                  />
                  <label className="info-icon">
                    <InfoFillIcon />
                  </label>
                </div>
                <ErrorMessage message={errors.country?.message} />

                <div className="has-postcode">
                  <FormInput
                    className="w-100 flex-fill"
                    label="City"
                    wrapperClassName="w-100 flex-fill"
                    register={register}
                    name="city"
                    error={errors.city?.message}
                  />
                  <FormInput
                    className="post-code"
                    wrapperClassName="flex-fill"
                    label="Post Code"
                    register={register}
                    name="postcode"
                    error={errors.postcode?.message}
                  />
                </div>
                <FormInput
                  label="Address"
                  register={register}
                  name="address"
                  error={errors.address?.message}
                />
              </div>
            </div>
            {isMobile && (
              <Button
                type="submit"
                className="btn btn--base h-44 w-100"
                isLoading={isLoading}
              >
                <SaveIcon /> SAVE CHANGES
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralSetting;

function FormInput({
  label,
  type = "text",
  className = "",
  wrapperClassName = "",
  register,
  name,
  error,
}) {
  return (
    <div className={wrapperClassName}>
      <div className={`form-group ${className}`}>
        <label className="form--label">{label}</label>
        <input
          type={type}
          className="form--control"
          placeholder=""
          {...register(name)}
        />
      </div>
      <ErrorMessage message={error} />
    </div>
  );
}
