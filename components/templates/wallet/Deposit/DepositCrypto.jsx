import React from "react";
import BonusCard from "../../bonus/BonusCard";
import CopyIcon from "@/components/svg/others/CopyIcon";
import { useTranslations } from "next-intl";

const DepositCrypto = () => {
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();
  return (
    <>
      <div className="wallet-form-block">
        <div className="flex-between mb-3">
          <p className="title">{t("availableBonus")}</p>
        </div>
        <BonusCard clickHandler={true} isActive={true} />
      </div>

      <div className="wallet-form-block">
        <div className="flex-between mb-3">
          <p className="title">{tGlobal("Your USDT-Tether deposit address")}</p>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form--control"
            readOnly
            value="TEQjxoVj24oJpcwKRWZfF1KmVe1xH7vZdt"
          />
          <button className="form-group-copy">
            <CopyIcon />
          </button>
        </div>
      </div>

      <button className="btn btn--base btn--sm">{t("selectOffer")}</button>
    </>
  );
};

export default DepositCrypto;
