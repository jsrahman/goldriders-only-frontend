import React, { useState } from "react";
import DepositSelection from "./DepositSelection";
import DepositCard from "./DepositCard";
import DepositCrypto from "./DepositCrypto";
import DepositMobilePay from "./DepositMobilePay";
import DepositOffer from "./DepositOffer";
import DepositOthers from "./DepositOthers";
import { useUiStore } from "@/store/ui.store";

const DepositTab = () => {
  const { ui } = useUiStore();
  function selectDepositView() {
    if (ui.isWalletOfferView) {
      return <DepositOffer />;
    }
    switch (ui.depositView) {
      case "others":
        return <DepositOthers />;
      case "card":
        return <DepositCard />;
      case "mobilePay":
      case "spay":
      case "googlePay":
        return <DepositMobilePay />;
      case "crypto":
        return <DepositCrypto />;
      default:
        return <DepositCard />;
    }
  }

  return (
    <div className="wallet-wrapper">
      <DepositSelection />

      <div className="wallet-wrapper-body">{selectDepositView()}</div>
    </div>
  );
};

export default DepositTab;
