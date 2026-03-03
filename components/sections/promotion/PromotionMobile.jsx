import React from "react";
import { useTranslations } from "next-intl";

const PromotionMobile = () => {
  const t = useTranslations("promo");
  return <div>{t("mobile")}</div>;
};

export default PromotionMobile;
