import LiveIcon from "@/components/svg/section/LiveIcon";
import SlotIcon from "@/components/svg/section/SlotIcon";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const WinTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const t = useTranslations();
  const tNav = useTranslations("nav");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const checkActiveTab = (tab) => {
    return activeTab === tab;
  };

  return (
    <div className="banner-tabs">
      <TabItem
        isActive={checkActiveTab("live")}
        text={t("common.all")}
        onClick={() => handleTabChange("live")}
      />
      <TabItem
        isActive={checkActiveTab("all")}
        icon={<SlotIcon />}
        text={tNav("slots").toUpperCase()}
        onClick={() => handleTabChange("all")}
      />
      <TabItem
        isActive={checkActiveTab("slot")}
        icon={<LiveIcon />}
        text={tNav("liveCasino").toUpperCase()}
        onClick={() => handleTabChange("slot")}
      />
    </div>
  );
};

export default WinTabs;

const TabItem = ({ icon, text, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`banner-tabs__item ${isActive ? " active" : ""}`}
    >
      {icon ? <div className="icon">{icon}</div> : null}
      <div className="text">{text}</div>
    </button>
  );
};
