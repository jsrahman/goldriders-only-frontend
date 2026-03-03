import React from "react";
import SidebarCollapse from "../../svg/sidebar/SidebarCollapse";
import SidebarFill from "../../svg/sidebar/SidebarFill";
import Link from "next/link";
import Image from "next/image";
import { useUiStore } from "@/store/ui.store";
import { useBackdropStore } from "@/store/backdrop.store";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslations } from "next-intl";

const SidebarHead = () => {
  const closeBackdrop = useBackdropStore((state) => state.close);
  const { ui, setUi } = useUiStore();
  const { isDesktop } = useScreenSize();
  const t = useTranslations("header");
  const tSidebar = useTranslations("sidebar");

  function toggleSidebar() {
    setUi({
      isSidebarOpen: false,
    });
    closeBackdrop();
  }
  function toggleCollapsible() {
    setUi({
      isCollapsible: !ui?.isCollapsible,
    });
  }

  if (isDesktop) {
    return (
      <>
        <button
          className="sidebar-header__collapsible flex-shrink-0"
          onClick={toggleCollapsible}
        >
          {ui?.isCollapsible ? <SidebarCollapse /> : <SidebarFill />}
        </button>
        {!ui?.isCollapsible && (
          <Link href="/" className="sidebar-header__logo">
            <Image
              width={152}
              height={34}
              src="/images/logo/logo.png"
              alt={t("logoAlt")}
            />
          </Link>
        )}
      </>
    );
  } else {
    return (
      <div className="flex-align">
        <button
          className="sidebar-header__collapsible flex-shrink-0"
          onClick={toggleSidebar}
        >
          <SidebarCollapse />
        </button>
        <h2 className="sidebar-header__title">{tSidebar("menu")}</h2>
      </div>
    );
  }
};

export default SidebarHead;
