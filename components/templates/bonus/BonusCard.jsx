import Image from "next/image";
import React from "react";
import typeOneThumb from "@/public/images/register/one.png";
import ArrowRight from "@/components/svg/others/ArrowRight";
import { useTranslations } from "next-intl";

const BonusCard = ({
  handleBonusSelect = () => { },
  isActive,
  clickHandler = false,
}) => {
  const t = useTranslations();
  return (
    <label
      htmlFor="typeOne"
      className={`bonus-type ${isActive ? "active" : ""}`}
      onClick={handleBonusSelect}>
      <span className="bonus-type-thumb">
        <Image src={typeOneThumb} unoptimized alt={"account"} />
      </span>
      <span className="bonus-type-content">
        <span className="bonus-type-title">{t("bonus.casinoFirst")}</span>
        <span className="bonus-type-text">
          <span className="text--base d-inline">{t("cta.percentage")}</span> {t("bonus.upTo")}{" "}
          <span className="text--base d-inline">{t("auth.warningBonusAmount")}</span> {t("promotions.freeSpins")}
        </span>
      </span>

      {clickHandler && (
        <div className="bonus-type-arrow">
          <ArrowRight />
        </div>
      )}
      <input type="radio" hidden name="registerType" id="typeOne" />
    </label>
  );
};

export default BonusCard;
