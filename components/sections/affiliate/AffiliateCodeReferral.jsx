import React from "react";
import AffiliateLiveRewards from "./AffiliateLiveRewards";
import { useTranslations } from "next-intl";

const AffiliateCodeReferral = () => {
  const t = useTranslations("affiliate");
  return (
    <div className="affiliate-cards__referral">
      <div className="card refer-card ">
        <div className="card-body">
          <div className="card refer-card ">
            <div className="card-body">
              <h2 className="refer-card__title">{t("referral_title")}</h2>
              <div className="refer-card__card">
                <div className="card-item">
                  <span className="number">1/20</span>
                  <span className="badge badge--base pill">
                    {t("referral_codeCreated")}
                  </span>
                </div>
                <div className="card-item">
                  <span className="number">0</span>
                  <span className="badge badge--base pill">{t("referral_friends")}</span>
                </div>
              </div>
              <button className="btn btn--base w-xxl-50">{t("referral_createCode")}</button>
            </div>
          </div>
        </div>
      </div>
      <AffiliateLiveRewards />
    </div>
  );
};

export default AffiliateCodeReferral;
