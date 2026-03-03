"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarData } from "@/public/data/sidebar-data";
import { useUiStore } from "@/store/ui.store";
import useScreenSize from "@/hooks/useScreenSize";
import SidebarItem from "./SidebarItem";
import SidebarHead from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarSupport from "./Support";
import SearchButton from "../search/SearchButton";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const { ui, setUi } = useUiStore();
  const { isDesktop } = useScreenSize();
  const t = useTranslations();




  return (
    <aside
      className={`sidebar
      ${ui?.isCollapsible ? "collapsible" : ""}
      ${ui.isSidebarOpen ? "show" : "hide"}
      `}
    >
      <div className="sidebar-header">
        <SidebarHead />
      </div>

      <div className="sidebar-body">
        <div className="sidebar-body__list layout-menu">
          {ui?.isCollapsible && (
            <Link href="/" className="sidebar-header__logo">
              <Image
                width={44}
                height={38}
                src="/images/logo/collapsed-logo.png"
                alt={t("common.alt.logo")}
              />
            </Link>
          )}

          {!isDesktop && <SearchButton text={t("sidebar.searchForGame")} />}

          <SidebarItem
            type="button"
            icon="/images/sidebar/bonus.png"
            text={t("sidebar.bonus")}
          />
          <SidebarItem
            onClick={() => {
              setUi({ isSpinModalOpen: true });
            }}
            icon="/images/sidebar/spin.png"
            text={t("sidebar.spin")}
          />
        </div>

        {sidebarData.map((group, i) => (
          <div className="sidebar-body__list" key={i}>
            {group.map((item, j) => (
              <SidebarItem
                key={j}
                link={item.link}
                icon={item.img}
                text={t(item.title)}
              />
            ))}
          </div>
        ))}

        <SidebarSupport />
        <SidebarFooter />
      </div>
    </aside>
  );
};
export default Sidebar;
