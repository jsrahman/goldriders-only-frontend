import Arrow from "@/components/svg/others/Arrow";
import TsImage from "@/public/images/payment/te.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import TronImage from "@/public/images/payment/t.png";

export default function WithdrawSidebarCrypto() {
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();
  return (
    <>
      <div className="flex-between mb-20">
        <p className="fs-12 fw-semibold">{t("enterQuantity")}</p>
        <p className="fs-12 fw-semibold">
          {t("min", { min: "€5" })}{" "}
          <span className="text--base">{t("max", { max: "€500" })}</span>
        </p>
      </div>

      <div className="crypto-sidebar-list">
        <p className="title text--muted">{t("useFiatConverter")}</p>
        <div className="crypto-sidebar-list-item">
          <span className="label">34,456</span>
          <div className="content">
            <Image src={TronImage} alt="" />
            <span className="text">{tGlobal("currency.eur")}</span>
            <span className="icon">
              <Arrow />
            </span>
          </div>
        </div>
        <div className="crypto-sidebar-list-item">
          <span className="label">34,456</span>
          <div className="content">
            <Image src={TsImage} alt="" />
            <span className="text">{tGlobal("currency.eur")}</span>
          </div>
        </div>
      </div>

      <div className="crypto-type-wrapper mb-3">
        <label className="crypto-type" htmlFor="crypto-type-one-withdraw">
          <input
            type="radio"
            id="crypto-type-one-withdraw"
            name="crypto-type-withdraw"
            hidden
          />
          TRC20
        </label>
        <label className="crypto-type" htmlFor="crypto-type-two-withdraw">
          <input
            type="radio"
            id="crypto-type-two-withdraw"
            name="crypto-type-withdraw"
            hidden
          />
          ERC20
        </label>
        <label className="crypto-type" htmlFor="crypto-type-three-withdraw">
          <input
            type="radio"
            id="crypto-type-three-withdraw"
            name="crypto-type-withdraw"
            hidden
          />
          BEP20
        </label>
      </div>

      <p className="fs-12 fw-semibold">
        {t("min", { min: "€5" })}{" "}
        <span className="text--base">{t("max", { max: "€500" })}</span>
      </p>
    </>
  );
}
