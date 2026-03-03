"use client";
import React, { useEffect } from "react";
import SidebarFill from "../../svg/sidebar/SidebarFill";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";
import { useUiStore } from "@/store/ui.store";
import { useBackdropStore } from "@/store/backdrop.store";
import { useTranslations } from "next-intl";

const HeaderToggler = () => {
  const { isDesktop, isMobile } = useScreenSize();
  const { setUi } = useUiStore();
  const openBackdrop = useBackdropStore((state) => state.open);
  const t = useTranslations("header");

  function toggleSidebar() {
    setUi({
      isSidebarOpen: true,
    });
    openBackdrop(() => {
      setUi({ isSidebarOpen: false });
    });
  }


  if (isDesktop) {
    return null;
  }

  return (
    <div className="header-top">
      <button className="header-top__icon" onClick={toggleSidebar}>
        <SidebarFill />
      </button>
      <div className="header__logo">
        {isMobile ? (
          <Image
            src="/images/logo/mobile-logo.png"
            alt={t("logoAlt")}
            objectFit="contain"
            width={40}
            height={32}
          />
        ) : (
          <Image
            src="/images/logo/logo.png"
            alt={t("logoAlt")}
            width={152}
            height={34}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderToggler;
