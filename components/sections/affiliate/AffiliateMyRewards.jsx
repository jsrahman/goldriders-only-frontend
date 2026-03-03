import InfoIcon from "@/components/svg/others/InfoIcon";
import MoneyIcon from "@/components/svg/others/MoneyIcon";
import React from "react";
import { useTranslations } from "next-intl";

const AffiliateMyRewards = () => {
  const t = useTranslations("affiliate");
  return (
    <div className="affiliate-cards__my-rewards card">
      <div className="card-body my-rewards">
        <h2 className="my-rewards__title">{t("rewards_title")}</h2>
        <div className="my-rewards__content">
          <div className="my-rewards__cards">
            <div className="available-card">
              <h4 className="available-card__title">{t("rewards_available")}</h4>
              <span className="available-card__amount">0.00$</span>
              <span className="badge badge--base pill">
                {t("rewards_totalReceived")}: $0.00
              </span>
            </div>
            <div className="available-card">
              <h4 className="available-card__title">{t("rewards_available")}</h4>
              <span className="available-card__amount">0.00$</span>
              <span className="badge badge--base pill">
                {t("rewards_totalReceived")}: $0.00
              </span>
            </div>
          </div>
          <div className="my-rewards__info">
            <button className="btn btn--base">
              <MoneyIcon />
              {t("rewards_withdraw")}
            </button>
            <span className="btn btn--dark icon-button">
              <InfoIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateMyRewards;
