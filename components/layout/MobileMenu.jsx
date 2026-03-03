"use client";
import Link from "next/link";
import React from "react";
import CasinoIcon from "@/components/svg/footer-menu/CasinoIcon";
import FooterPromo from "@/components/svg/footer-menu/FooterPromo";
import FooterSearchIcon from "@/components/svg/footer-menu/FooterSearchIcon";
import LiveIcon from "@/components/svg/footer-menu/LiveIcon";
import DepositIcon from "@/components/svg/sidebar/DepositIcon";
import useScreenSize from "@/hooks/useScreenSize";
import { usePreferencesStore } from "@/store/preferences.store";
import LoginIcon from "../svg/sidebar/LoginIcon";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";


const MobileMenu = () => {
  const { preferences } = usePreferencesStore();
  const { setUi } = useUiStore();
  const { screenSize } = useScreenSize();
  const t = useTranslations("mobileMenu");

  if (screenSize > 576) return null;

  function handleLogin() {
    setUi({ authType: "login", isAuthModalOpen: true });
  }

  function handleDeposit() {
    setUi({ isWalletModalOpen: true });
  }

  return (
    <nav className="mobile-menu">
      <Link className="mobile-menu__link" href={"/"}>
        <span className="icon">
          <CasinoIcon />
        </span>
        <span className="text">{t("casino")}</span>
      </Link>

      <Link className="mobile-menu__link" href={"/"}>
        <span className="icon">
          <LiveIcon />
        </span>
        <span className="text">{t("live")}</span>
      </Link>

      {preferences.isAuth ? (
        <button
          className="mobile-menu__link center-item"
          onClick={handleDeposit}
        >
          <span className="icon">
            <DepositIcon />
          </span>
          <span className="text">{t("deposit")}</span>
        </button>
      ) : (
        <button
          className="mobile-menu__link center-item"
          type="button"
          onClick={handleLogin}
        >
          <span className="icon">
            <LoginIcon />
          </span>
          <span className="text">{t("signIn")}</span>
        </button>
      )}

      <Link className="mobile-menu__link" href={"/"}>
        <span className="icon">
          <FooterSearchIcon />
        </span>
        <span className="text">{t("search")}</span>
      </Link>
      <Link className="mobile-menu__link" href={"/"}>
        <span className="icon">
          <FooterPromo />
        </span>
        <span className="text">{t("promo")}</span>
      </Link>
    </nav>
  );
};

export default MobileMenu;
