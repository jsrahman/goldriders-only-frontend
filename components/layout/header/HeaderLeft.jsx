"use client";
import React, { useState } from "react";
import HeaderToggler from "./HeaderToggler";
import CasinoIcon from "@/components/svg/header/CasinoIcon";
import LiveIcon from "@/components/svg/header/LiveIcon";
import SearchButton from "../search/SearchButton";
import { useTranslations } from "next-intl";

const HeaderLeft = () => {
  const [activeTab, setActiveTab] = useState("casino");
  const t = useTranslations("header");
  const tBanner = useTranslations("banner");

  return (
    <>
      <HeaderToggler />
      <div className="header__tabs tabs">
        <button
          className={`header__tabs-item casino tab ${activeTab === "casino" ? "active" : ""
            }`}
          onClick={() => setActiveTab("casino")}
        >
          <span className="icon">
            <CasinoIcon />
          </span>
          {t("casino")}
        </button>
        <button
          className={`header__tabs-item tab ${activeTab === "live" ? "active" : ""
            }`}
          onClick={() => setActiveTab("live")}
        >
          <span className="icon">
            <LiveIcon />
          </span>
          {t("liveCasino")}
        </button>
      </div>
      <SearchButton text={tBanner("searchPlaceholder")} />
    </>
  );
};

export default HeaderLeft;
