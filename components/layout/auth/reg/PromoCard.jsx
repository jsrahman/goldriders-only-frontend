import React from "react";

import { useTranslations } from "next-intl";

const PromoCard = () => {
  const t = useTranslations("promo");
  return <div>{t("card")}</div>;
};

export default PromoCard;
