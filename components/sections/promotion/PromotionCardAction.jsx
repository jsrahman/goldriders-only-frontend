"use client";
import Copy2 from "@/components/svg/others/Copy2";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const PromotionCardAction = ({ data }) => {
  const inputRef = useRef(null);
  const t = useTranslations();
  const tPromo = useTranslations("promo");

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand("copy");
    toast.success(t("common.copied"));
  };

  return (
    <div className="promotion-card__action-copy">
      <div className="form-group m-0">
        <label className="form--label">{tPromo("code")}</label>
        <input
          type="text"
          className="form--control"
          value={data.code}
          readOnly
          ref={inputRef}
        />
      </div>
      <span role="button" onClick={handleCopy} className="copy">
        <Copy2 />
      </span>
    </div>
  );
};

export default PromotionCardAction;
