"use client";
import MobileIcon from "@/components/svg/others/MobileIcon";
import Instagram from "@/components/svg/social/Instagram";
import TelegramIcon from "@/components/svg/social/TelegramIcon";
import Link from "next/link";
import React from "react";

import { useTranslations } from "next-intl";

const FooterAction = ({ className = "" }) => {
  const t = useTranslations("footer");
  return (
    <div className={`${className} footer-action`}>
      <div className="footer-content__social">
        <Link href={"#"} className="footer-content__social-icon">
          <TelegramIcon />
        </Link>
        <Link href={"#"} className="footer-content__social-icon">
          <Instagram />
        </Link>
      </div>
      <Link href={"#"} className="footer-content__mobile">
        <span className="icon">
          <MobileIcon />
        </span>
        <div className="footer-content__mobile-text">
          <span className="text">{t("casinoApp")}</span>
          <span className="sub-text">{t("getOnPhone")}</span>
        </div>
      </Link>
    </div>
  );
};

export default FooterAction;
