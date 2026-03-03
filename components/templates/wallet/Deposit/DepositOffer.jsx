import ArrowRight from "@/components/svg/others/ArrowRight";
import React, { useState } from "react";
import BonusCard from "../../bonus/BonusCard";
import ClaimBonus from "../../bonus/ClaimBonus";
import NoBonus from "../../bonus/NoBonus";
import ArrowLeft from "@/components/svg/others/ArrowLeft";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";

const DepositOffer = () => {
  const { setUi } = useUiStore();
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();
  const [bonusType, setBonusType] = useState(1);
  const [isDisableReg, setIsDisableReg] = useState(false);

  function handleBackToDeposit() {
    setUi({ isWalletOfferView: false });
  }
  return (
    <>
      <div className="flex-align gap-2 mb-20">
        <button className="back-btn" onClick={handleBackToDeposit}>
          <ArrowLeft />
        </button>
        <h4 className="mb-0">{tGlobal("Select Bonus")}</h4>
      </div>
      <BonusCard
        handleBonusSelect={() => setBonusType(1)}
        isActive={bonusType === 1}
      />

      <ClaimBonus
        handleBonusSelect={() => setBonusType(2)}
        isActive={bonusType === 2}
        setIsDisableReg={setIsDisableReg}
      />
      <NoBonus
        handleBonusSelect={() => setBonusType(3)}
        isActive={bonusType === 3}
      />

      <div className="mt-20">
        <button
          className="btn btn--base w-100"
          disabled={isDisableReg}
          onClick={handleBackToDeposit}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default DepositOffer;
