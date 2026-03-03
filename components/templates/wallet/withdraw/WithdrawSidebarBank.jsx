import React from "react";
import WalletLocation from "../WalletLocation";
import exchangeThumb from "@/public/images/thumbs/exchange.png";
import Image from "next/image";
import TronImage from "@/public/images/payment/t.png";

import { useTranslations } from "next-intl";

const WithdrawSidebarBank = () => {
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();
  return (
    <>
      <WalletLocation />

      <div className="select-pay-wrapper mb-20">
        <div className="pay-item active flex-fill">
          <Image src={exchangeThumb} alt="" />
          <span className="text">{t("bankingTransactions")}</span>
        </div>
      </div>

      <div className="flex-between mb-2">
        <p className="fs-12 fw-semibold">{t("enterQuantity")}</p>
        <p className="fs-12 fw-semibold">
          {t("min", { min: "€5" })}{" "}
          <span className="text--base">{t("max", { max: "€500" })}</span>
        </p>
      </div>

      <div className="crypto-sidebar-list">
        <div className="crypto-sidebar-list-item">
          <span className="label">34,456</span>
          <div className="content">
            <Image src={TronImage} alt="" />
            <span className="text">{tGlobal("currency.eur")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawSidebarBank;
