"use client";
import React from "react";
import LoginIcon from "@/components/svg/sidebar/LoginIcon";
import useScreenSize from "@/hooks/useScreenSize";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";

const HeaderLogin = () => {
  const { screenSize } = useScreenSize();
  const { setUi } = useUiStore();
  const t = useTranslations();
  return (
    <>
      <button
        className="btn btn--base"
        onClick={() => {
          setUi({ authType: "register", isAuthModalOpen: true });
        }}
      >
        {t("header.register")}
      </button>
      <button
        className="btn btn--dark"
        onClick={() => {
          setUi({ authType: "login", isAuthModalOpen: true });
        }}
      >
        {screenSize > 424 ? t("header.login") : <LoginIcon />}
      </button>
    </>
  );
};

export default HeaderLogin;
