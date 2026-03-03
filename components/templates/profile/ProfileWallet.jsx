import Image from "next/image";
import React from "react";
import walletIcon from "@/public/images/account/coin.png";
import CoinBlueIcon from "@/public/images/account/coin-base.png";
import CashbackIcon from "@/public/images/account/cashback.png";

import { useTranslations } from "next-intl";

const ProfileWallet = () => {
  const t = useTranslations("wallet");
  return (
    <div className="card  wallet-card">
      <div className="card-body">
        <div className="wallet-ballance">
          <div className="wallet-info">
            <h2 className="wallet-name text--base">{t("title")}</h2>
            <h3 className="wallet-amount">$0.00</h3>
          </div>
          <div className="ballance-list">
            <div className="ballance-item">
              <span className="icon">
                <Image src={walletIcon} alt="wallet" />
              </span>
              <div className="info">
                <span className="title">{t("realBalance")}</span>
                <span className="amount">$500</span>
              </div>
            </div>
            <div className="ballance-item">
              <span className="icon">
                <Image src={CoinBlueIcon} alt="wallet" />
              </span>
              <div className="info">
                <span className="title">{t("bonusBalance")}</span>
                <span className="amount">$500</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wallet-action">
          <button className="btn btn--base">{t("deposit")}</button>
          <button className="btn btn--accent">{t("withdraw")}</button>
        </div>
        <div className="wallet-cashback">
          <div className="cashback-item">
            <span className="icon">
              <Image src={CashbackIcon} alt="wallet" />
            </span>
            <div className="info">
              <p className="title">
                {t("cashback")} <strong className="text--base">5%</strong>
              </p>
              <span className="amount">€16</span>
            </div>
          </div>
          <div className="next-level">
            <div className="info">
              <span className="title">{t("nextLevel")}</span>
              <span className="amount text--base">+5%</span>
            </div>
            <button className="btn btn--dark claim-btn">{t("claim")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWallet;
