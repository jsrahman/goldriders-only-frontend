import React from "react";
import { useTranslations } from "next-intl";

const WithdrawSidebarTab = ({ withdrawType, setWithdrawType }) => {
  const t = useTranslations("wallet");
  return (
    <div className="wallet-sidebar-tab">
      <button
        className={
          withdrawType === "bank"
            ? "btn btn--accent btn--sm fw-bold"
            : "btn text-white btn--sm"
        }
        onClick={() => setWithdrawType("bank")}
      >
        {t("banking")}
      </button>
      <button
        className={
          withdrawType === "crypto"
            ? "btn btn--accent btn--sm fw-bold"
            : "btn text-white btn--sm"
        }
        onClick={() => setWithdrawType("crypto")}
      >
        {t("cryptoTitle")}
      </button>
    </div>
  );
};

export default WithdrawSidebarTab;
