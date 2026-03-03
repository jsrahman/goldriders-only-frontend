import React from "react";

import { useTranslations } from "next-intl";

const PromoOffer = () => {
  const t = useTranslations("promo");
  return <div>{t("offer")}</div>;
};

export default PromoOffer;
