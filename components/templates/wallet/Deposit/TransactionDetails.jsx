import React from "react";
import CopyIcon from "@/components/svg/others/CopyIcon";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";

export default function TransactionDetails() {
  const { ui, setUi } = useUiStore();
  const t = useTranslations("wallet");
  return (
    <div className="deposit-progress">
      <h2 className="mb-20">{t("depositInProgress")}</h2>
      <h1 className="text-center mb-20">+800 USD</h1>

      <ul className="deposit-progress-list mb-20">
        <li className="deposit-progress-item">
          <p className="deposit-progress-item-label">{t("status")}</p>
          <p className="deposit-progress-item-text">{t("progressing")}</p>
        </li>
        <li className="deposit-progress-item bg-transparent">
          <p className="deposit-progress-item-label">{t("transactionId")}</p>
          <p className="deposit-progress-item-text">
            1234567890
            <span className="copy-btn">
              <CopyIcon />
            </span>
          </p>
        </li>
        <li className="deposit-progress-item">
          <p className="deposit-progress-item-label">{t("creditedAmount")}</p>
          <p className="deposit-progress-item-text">0 USD</p>
        </li>
        <li className="deposit-progress-item bg-transparent">
          <p className="deposit-progress-item-label">{t("orderAmount")}</p>
          <p className="deposit-progress-item-text">800 USD</p>
        </li>
        <li className="deposit-progress-item">
          <p className="deposit-progress-item-label">{t("paid")}</p>
          <p className="deposit-progress-item-text">
            800 USD
            <span className="copy-btn">
              <CopyIcon />
            </span>
          </p>
        </li>
        <li className="deposit-progress-item bg-transparent">
          <p className="deposit-progress-item-label">{t("created")}</p>
          <p className="deposit-progress-item-text">11/12/2025 11:45</p>
        </li>
      </ul>

      <h4 className="mb-20">{t("orderProgress")}</h4>

      <div className="deposit-progress-details mb-20">
        <div className="deposit-progress-details-item">
          <span className="circle"></span>
          <div className="content">
            <p className="title">{t("timeline.step1.title")}</p>
            <p className="text text--muted">{t("timeline.step1.desc")}</p>
            <p className="text--accent">{t("timeline.step1.time")}</p>
          </div>
        </div>
        <div className="deposit-progress-details-item">
          <span className="circle"></span>
          <div className="content">
            <p className="title">{t("timeline.step2.title")}</p>
            <p className="text text--muted">{t("timeline.step2.desc")}</p>
            <p className="text--accent">{t("timeline.step2.time")}</p>
          </div>
        </div>
        <div className="deposit-progress-details-item">
          <span className="circle"></span>
          <div className="content">
            <p className="text text--muted">{t("timeline.final.desc")}</p>
          </div>
        </div>
      </div>

      <button
        className="btn btn--base w-100"
        onClick={() => setUi({ walletTabKey: "tab" })}
      >
        {t("home")}
      </button>

      <p
        role="button"
        onClick={() => setUi({ walletTabKey: "feedback" })}
        className="account-link text-white mt-20"
      >
        {t("rateExperience")}
      </p>
    </div>
  );
}
