import React, { useState } from "react";
import AuthWrapper from "../AuthWrapper";
import BonusCard from "@/components/templates/bonus/BonusCard";
import ClaimBonus from "@/components/templates/bonus/ClaimBonus";
import NoBonus from "@/components/templates/bonus/NoBonus";
import { useTranslations } from "next-intl";

const StepOne = ({ bonusType, setBonusType, setSteps }) => {
  const [isDisableReg, setIsDisableReg] = useState(false);
  const t = useTranslations("auth");

  return (
    <AuthWrapper>
      <div className="account-wrapper">
        <h2 className="account-title">{t("chooseWelcomeBonus")}</h2>
        <div className="account-form">
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
        </div>
        <button disabled={isDisableReg} className="btn btn--base w-100" onClick={() => setSteps(2)}>
          {t("choose")}
        </button>
      </div>
    </AuthWrapper>
  );
};

export default StepOne;
