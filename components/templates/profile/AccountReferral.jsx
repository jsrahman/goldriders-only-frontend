"use client";
import CopyIcon from "@/components/svg/others/CopyIcon";
import React from "react";
import SocialShare from "../SocialShare";
import useScreenSize from "@/hooks/useScreenSize";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const codeItem = [
  {
    title: "Referral code",
    code: "ZDZQFDIU",
  },
  {
    title: "Referral Link",
    code: "http://goldriders.com/?ref=JGJU1R8Z",
  },
];
const AccountReferral = () => {
  const { isMobile } = useScreenSize();
  const t = useTranslations();

  function handelCopy(code) {
    navigator.clipboard.writeText(code);
    toast.success(t("Copied to clipboard"));
  }

  return (
    <div className="card  referral-card">
      <div className="referral-card__info">
        {codeItem.map((item, index) => (
          <div className="info-item" key={index}>
            <p className="title">{t(item.title)}</p>
            <div className="content">
              <span className="code">{item.code}</span>
              {isMobile ? (
                <button
                  onClick={() => handelCopy(item.code)}
                  className="btn btn--base icon-button"
                >
                  <CopyIcon />
                </button>
              ) : (
                <button
                  className="btn btn--base inline-flex align-items-center gap-1"
                  onClick={() => handelCopy(item.code)}
                >
                  <CopyIcon /> {t("COPY")}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <SocialShare />
    </div>
  );
};

export default AccountReferral;
