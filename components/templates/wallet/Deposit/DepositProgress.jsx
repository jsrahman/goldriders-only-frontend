import React from "react";
import Image from "next/image";
import checkThumb from "@/public/images/thumbs/check.png";
import otherBank from "@/public/images/bank/other.png";
import CopyIcon from "@/components/svg/others/CopyIcon";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";

export default function DepositProgress() {
  const t = useTranslations("wallet");
  const { ui, setUi } = useUiStore();
  return (
    <div className="deposit-progress">
      <h2 className="mb-20">{t("depositInProgress")}</h2>
      <div className="deposit-progress-thumb mb-20">
        <Image src={checkThumb} alt="thumb" />
      </div>

      <ul className="deposit-progress-list mb-20">
        <li className="deposit-progress-item">
          <p className="deposit-progress-item-label">{t("depositMethod")}</p>
          <p className="deposit-progress-item-text">
            <Image src={otherBank} alt="bank" />
          </p>
        </li>
        <li className="deposit-progress-item bg-transparent">
          <p className="deposit-progress-item-label">{t("depositMethod")}</p>
          <p className="deposit-progress-item-text">
            1234567890
            <span className="copy-btn">
              <CopyIcon />
            </span>
          </p>
        </li>
        <li className="deposit-progress-item">
          <p className="deposit-progress-item-label">{t("time")}</p>
          <p className="deposit-progress-item-text">11/12/2025 11:45</p>
        </li>
        <li className="deposit-progress-item bg-transparent">
          <p className="deposit-progress-item-label">{t("expressIn")}</p>
          <p className="deposit-progress-item-text">00:23:45</p>
        </li>
        <li className="deposit-progress-item">
          <p className="deposit-progress-item-label">{t("depositAmount")}</p>
          <p className="deposit-progress-item-text">800 USD</p>
        </li>
      </ul>

      <button
        className="btn btn--base w-100"
        onClick={() => setUi({ walletTabKey: "transactionDetails" })}
      >
        {t("madeDeposit.cap")}
      </button>
    </div>
  );
}
