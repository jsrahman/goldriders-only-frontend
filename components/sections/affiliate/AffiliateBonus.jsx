import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AffiliateBonus = () => {
  const t = useTranslations("affiliate");
  return (
    <div className="card affiliate-bonus">
      <div className="card-body">
        {Array.from({ length: 4 }).map((item, index) => (
          <div className="affiliate-bonus__item" key={index}>
            <div className="affiliate-bonus__thumb">
              <Image src="/images/thumbs/bonus-card1.png" alt="bonus" fill />
            </div>
            <div className="affiliate-bonus__info">
              <p className="affiliate-bonus__name">{t("bonus_totalReward")}</p>
              <span className="affiliate-bonus__amount">0.00$</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateBonus;
