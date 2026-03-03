"use client";

import React from "react";
import UserIcon from "@/components/svg/header/UserIcon";
import NotificationHeader from "../notification/NotificationHeader";
import useScreenSize from "@/hooks/useScreenSize";
import AuthModal from "../auth/AuthModal";
import { useUiStore } from "@/store/ui.store";
import { usePreferencesStore } from "@/store/preferences.store";
import HeaderLeft from "./HeaderLeft";
import PlayIcon from "@/components/svg/others/PlayIcon";
import HeaderLogin from "./HeaderLogin";
import Link from "next/link";
import PlusIcon from "@/components/svg/others/PlusIcon";
import { useTranslations } from "next-intl";

const Header = () => {
  const { isTablet, screenSize } = useScreenSize();
  const { setUi } = useUiStore();
  const { preferences } = usePreferencesStore();
  const t = useTranslations("header");

  return (
    <>
      <header className="header">
        <HeaderLeft />
        <div className="header__button ms-auto">
          {preferences.isAuth ? (
            <>
              <NotificationHeader />
              <div className="btn btn--dark deposit-btn">
                <button
                  type="button"
                  className="inset-0 position-absolute"
                  onClick={() => setUi({ isBalanceModalOpen: true })}
                />
                € 124.00
                {screenSize < 1199 && (
                  <span
                    role="button"
                    onClick={() => setUi({ isWalletModalOpen: true })}
                  >
                    <PlusIcon />
                  </span>
                )}
              </div>
              <button
                className="btn btn--base reg-btn"
                type="button"
                onClick={() => setUi({ isWalletModalOpen: true })}
              >
                {t("deposit")}
              </button>
              <Link href="/profile" className="btn btn--dark icon-button">
                <UserIcon />
              </Link>
            </>
          ) : (
            <HeaderLogin />
          )}
        </div>
      </header>
      <React.Suspense fallback={null}>
        <AuthModal />
      </React.Suspense>
    </>
  );
};

export default Header;
