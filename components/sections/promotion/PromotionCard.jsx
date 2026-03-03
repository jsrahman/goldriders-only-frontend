import Image from "next/image";
import React from "react";
import PromotionCardAction from "./PromotionCardAction";

import InfoIcon from "@/components/svg/others/InfoIcon";
import { useTranslations } from "next-intl";

const PromotionCard = ({ data }) => {
  const t = useTranslations();
  const disabled = data?.isExpired;
  return (
    <div className={`promotion-card ${disabled ? "disabled" : ""}`}>
      <div className="promotion-card__thumb position-relative">
        <Image src={data.img} fill alt={t("promo.alt_promotion")} />
        {disabled && (
          <span className="promotion-card__expired">{t("promo.expired")}</span>
        )}
      </div>
      <div className="promotion-card__info">
        <h2 className="promotion-card__title">{t(data?.title)}</h2>
        <h3
          className="promotion-card__subtitle"
          dangerouslySetInnerHTML={{
            __html: t.raw(data.subtitle),
          }}
        />
        <div className="promotion-card__action">
          <div className="promotion-card__action-btn">
            {disabled ? (
              <button className="btn btn--dark">{t("promo.expired")}</button>
            ) : (
              <button className="btn btn--base">{t("promo.depositNow")}</button>
            )}
            <button className="btn btn--dark icon-button">
              <InfoIcon />
            </button>
          </div>
          {!disabled && <PromotionCardAction data={data} />}
        </div>
        <p className="promotion-card__desc">{t(data?.desc)}</p>
      </div>
    </div>
  );
};

export default PromotionCard;
