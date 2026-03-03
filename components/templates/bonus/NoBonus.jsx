import Image from "next/image";
import React from "react";
import typeThreeThumb from "@/public/images/register/three.png";
import { useTranslations } from "next-intl";

const NoBonus = ({ handleBonusSelect, isActive }) => {
  const t = useTranslations();
  return (
    <label
      htmlFor="typeThree"
      className={`bonus-type ${isActive ? "active" : ""}`}
      onClick={handleBonusSelect}
    >
      <span className="bonus-type-thumb">
        <Image src={typeThreeThumb} unoptimized alt={"account"} />
      </span>
      <span className="bonus-type-content">
        <span className="bonus-type-text">
          {t("I Don&apos;t want Welcome Bonus")}
        </span>
      </span>
      <input type="radio" hidden name="registerType" id="typeThree" />
    </label>
  );
};

export default NoBonus;
