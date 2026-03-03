"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import redCoin from "@/public/images/thumbs/redcoin.png";
import greenCoin from "@/public/images/thumbs/greencoin.png";
import money from "@/public/images/thumbs/money.png";
import group from "@/public/images/thumbs/group.png";
import box from "@/public/images/thumbs/box.png";
import MoneyIcon from "@/components/svg/others/MoneyIcon";
import GiftIcon from "@/components/svg/others/GiftIcon";
import InfoIcon from "@/components/svg/others/InfoIcon";
import WageredSlide from "../WageredSlide";
import { useUiStore } from "@/store/ui.store";

const Balance = () => {
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();
  const tBonus = useTranslations("bonus");
  const { setUi } = useUiStore();
  function showWalletModal(type) {
    setUi({ isBalanceModalOpen: false });
    setTimeout(() => {
      setUi({ isWalletModalOpen: true, walletTabType: type });
    }, 200);
  }
  return (
    <div className="withdraw-balance">
      <button
        className="btn btn--base w-100 mb-20"
        onClick={() => showWalletModal("deposit")}
      >
        {t("depositNow")}
      </button>

      <div className="balance-group">
        <div className="balance-group-item bg-color">
          <span className="thumb">
            <Image src={redCoin} alt="redCoin" />
          </span>
          <span className="content">
            <p className="title">{tGlobal("Real Balance")}</p>
            <h6 className="amount">$ 500</h6>
          </span>
        </div>
        <div className="balance-group-item">
          <span className="thumb">
            <Image src={greenCoin} alt="greenCoin" />
          </span>
          <span className="content">
            <p className="title">{t("bonusBalance")}</p>
            <h6 className="amount">$ 500</h6>
          </span>
        </div>
      </div>

      <div className="balance-claim">
        <div className="balance-group-item">
          <span className="money">
            <Image src={money} alt="greenCoin" />
          </span>
          <span className="content">
            <p className="title">
              {tGlobal("Cashback")}{" "}
              <span className="text--base fw-bold">5%</span>
            </p>
            <h6 className="amount">$ 16</h6>
          </span>
        </div>
        <div className="balance-group-item">
          <span className="content">
            <p className="fs-10 fw-semibold text--white">
              {tGlobal("Next level")}
            </p>
            <p className="fs-10 fw-semibold text--base">+5%</p>
          </span>
          <button className="btn btn--dark pill">{tGlobal("CLAIM")}</button>
        </div>
      </div>

      <div className="balance-claim">
        <div className="balance-group-item">
          <span className="money">
            <Image src={group} alt="greenCoin" />
          </span>
          <span className="content">
            <p className="title">
              {tGlobal("Referral Rewards")}{" "}
              <span className="text--base fw-bold">25%</span>
            </p>
            <h6 className="amount">$ 0.00</h6>
          </span>
        </div>
        <button
          type="button"
          className="btn btn--base pill"
          onClick={() => showWalletModal("withdraw")}
        >
          <MoneyIcon />
          {t("withdraw").toUpperCase()}
        </button>
      </div>

      <div className="claim-bonus">
        <div className="claim-bonus-top">
          <div className="claim-bonus-content">
            <span className="claim-badge">
              <GiftIcon />
              {t("bonus").toUpperCase()}
            </span>
            <h3 className="title">{tBonus("firstDepositFull")}</h3>
          </div>
          <div className="claim-bonus-box">
            <Image src={box} alt="greenCoin" />
          </div>
        </div>
        <WageredSlide percent={67} start={1460} end={3000} className="w-100" />

        <div className="flex-between wagered-text">
          <span className="text--muted fs-10 fw-semibold">
            {tGlobal("Wagered")} 67%
          </span>
          <span className="d-flex">
            <InfoIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Balance;
