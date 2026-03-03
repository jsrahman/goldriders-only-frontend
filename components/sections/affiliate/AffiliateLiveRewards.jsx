import React from "react";
import { useTranslations } from "next-intl";

const AffiliateLiveRewards = () => {
  const t = useTranslations("affiliate");
  return (
    <div className="card rewards-card">
      <div className="card-body">
        <div className="rewards-card__title">{t("liveRewards_title")}</div>
        <div className="rewards-card__input">
          <span className="text">{t("liveRewards_total")}</span>
          <span className="amount">$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default AffiliateLiveRewards;
