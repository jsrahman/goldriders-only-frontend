import Image from "next/image";
import React, { useState, useEffect } from "react";

import CheckIcon from "@/components/svg/others/CheckIcon";
import LoaderIcon from "@/components/svg/others/LoaderIcon";
import SendIcon from "@/components/svg/others/SendIcon";
import TimesIcon from "@/components/svg/others/TimesIcon";

import typeTwoThumb from "@/public/images/register/two.png";
import { useTranslations } from "next-intl";

/*
Estimated promo code value is "GOLD2024"
*/
const ClaimBonus = ({ handleBonusSelect, isActive, setIsDisableReg }) => {
  const [showPromoForm, setShowPromoForm] = useState(isActive);
  const [promoStatus, setPromoStatus] = useState("initial");
  const t = useTranslations();

  const handleInput = (e) => {
    if (e.target.value.length > 0) {
      setPromoStatus("send");
    } else {
      setPromoStatus("initial");
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    setPromoStatus("sending");
    setTimeout(() => {
      if (e.target.promoCode.value.toLowerCase() === "GOLD2024".toLowerCase()) {
        setPromoStatus("success");
      } else {
        setPromoStatus("error");
      }
    }, 2000);
  };

  function HandleSendIcon() {
    switch (promoStatus) {
      case "send":
        return (
          <button type="submit" className="icon">
            <SendIcon />
          </button>
        );
      case "sending":
        return (
          <span className="icon loader-animation">
            <LoaderIcon />
          </span>
        );
      case "success":
        return (
          <span className="icon">
            <CheckIcon />
          </span>
        );
      case "error":
        return (
          <span className="icon">
            <TimesIcon />
          </span>
        );
      default:
        return null;
    }
  }

  useEffect(() => {
    if (!isActive) {
      setIsDisableReg(false);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPromoStatus("initial");
      return;
    }
  }, [isActive, setIsDisableReg]);

  useEffect(() => {
    if (promoStatus === "success") {
      setIsDisableReg(false);
    } else if (isActive) {
      setIsDisableReg(true);
    }
  }, [promoStatus, setIsDisableReg, isActive]);

  return (
    <label
      htmlFor="typeTwo"
      className={`bonus-type ${isActive ? "active" : ""}`}
      onClick={() => handleBonusSelect(2)}
    >
      <span className="bonus-type-thumb">
        <Image src={typeTwoThumb} unoptimized alt={"account"} />
      </span>
      <span className="bonus-type-content">
        <span className="bonus-type-text">{t("I have Promo Code")}</span>
        {showPromoForm && isActive && (
          <form
            onSubmit={handleSend}
            className={
              promoStatus === "error" ? "promo-form error" : "promo-form"
            }
          >
            <input
              type="text"
              onChange={handleInput}
              name="promoCode"
              id="promoCode"
              className="form--control"
              placeholder="Enter Code (GOLD2024)"
            />
            {HandleSendIcon()}
          </form>
        )}
        {promoStatus === "error" && (
          <p className="fs-10 text--danger mt-1 fw-medium">
            {t("This bonus is not available for you")}
          </p>
        )}
      </span>
      <input
        type="radio"
        onChange={(e) => setShowPromoForm(e.target.checked)}
        hidden
        name="registerType"
        id="typeTwo"
      />
    </label>
  );
};

export default ClaimBonus;
