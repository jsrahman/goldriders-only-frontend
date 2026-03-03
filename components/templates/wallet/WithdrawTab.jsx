import React, { useState } from "react";
import Arrow from "@/components/svg/others/Arrow";
import Image from "next/image";
import WarningIcon from "@/components/svg/others/WarningIcon";
import WalletLocation from "./WalletLocation";
import WithdrawSidebarCrypto from "./withdraw/WithdrawSidebarCrypto";
import WithdrawSidebarBank from "./withdraw/WithdrawSidebarBank";
import WithdrawSidebarTab from "./withdraw/WithdrawSidebarTab";
import WithdrawBank from "./withdraw/WithdrawBank";
import WithdrawCrypto from "./withdraw/WithdrawCrypto";

const WithdrawTab = () => {
  const [withdrawType, setWithdrawType] = useState("bank");
  return (
    <div className="wallet-wrapper">
      <div className="wallet-wrapper-sidebar">
        <WithdrawSidebarTab
          withdrawType={withdrawType}
          setWithdrawType={setWithdrawType}
        />

        {withdrawType == "bank" && <WithdrawSidebarBank />}

        {withdrawType == "crypto" && <WithdrawSidebarCrypto />}
      </div>

      <div className="wallet-wrapper-body">
        {withdrawType == "bank" && <WithdrawBank />}
        {withdrawType == "crypto" && <WithdrawCrypto />}
      </div>
    </div>
  );
};

export default WithdrawTab;
