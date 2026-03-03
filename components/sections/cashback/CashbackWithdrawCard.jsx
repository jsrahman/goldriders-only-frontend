import React from "react";
import CashbackCheck from "@/components/svg/section/CashbackCheck";
import CashbackUnCheck from "@/components/svg/section/CashbackUnCheck";

import { useTranslations } from "next-intl";

const CashbackWithdrawCard = () => {
  const t = useTranslations();
  return (
    <div className="withdraw-card">
      <div className="withdraw-card__header">
        <div className="withdraw-card__left">
          <p className="withdraw-card__title">
            {t("cashback.withdrawCards.title")}
          </p>
          <span className="withdraw-card__amount">0$</span>
        </div>
        <div className="withdraw-card__btn">
          <button className="btn btn--base">
            {t("cashback.withdrawCards.btn")}
          </button>
        </div>
      </div>
      <ul className="withdraw-card__list">
        <li className="withdraw-card__item">
          <span className="check">
            <CashbackCheck />
          </span>
          <span className="text">{t("cashback.withdrawCards.noPending")}</span>
        </li>
        <li className="withdraw-card__item">
          <span className="check">
            <CashbackUnCheck />
          </span>
          <span className="text">
            {t("cashback.withdrawCards.noUnfinished")}
          </span>
        </li>
        <li className="withdraw-card__item">
          <span className="check">
            <CashbackUnCheck />
          </span>
          <span className="text">{t("cashback.withdrawCards.minLimit")}</span>
        </li>
      </ul>
    </div>
  );
};

export default CashbackWithdrawCard;
