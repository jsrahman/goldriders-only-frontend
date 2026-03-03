"use client";

import { usePreferencesStore } from "@/store/preferences.store";
import React from "react";
import { useUiStore } from "@/store/ui.store";
import UserIcon from "@/components/svg/header/UserIcon";
import GoogleIcon from "@/components/svg/others/GoogleIcon";
import Link from "next/link";

import { useTranslations } from "next-intl";

const BannerCta = () => {
  const t = useTranslations("banner");
  const { preferences } = usePreferencesStore();
  const { setUi } = useUiStore();

  if (preferences.isAuth)
    return (
      <div className="banner__content-bottom">
        <button className="btn btn--base">{t("playNow")}</button>
        <span className="or">{t("or")}</span>
        <Link href="/profile" className="btn icon-button btn--dark">
          <UserIcon />
        </Link>
      </div>
    );

  return (
    <div className="banner__content-bottom">
      <button
        className="btn btn--base"
        onClick={() => setUi({ authType: "register", isAuthModalOpen: true })}
      >
        {t("registerNow")}
      </button>
      <span className="or">{t("or")}</span>
      <span className="btn icon-button btn--dark">
        <GoogleIcon />
      </span>
    </div>
  );
};

export default BannerCta;
