import React, { useState } from "react";
import SearchInput from "./SearchInput";
import DefaultSearchGame from "./DefaultSearchGame";
import DefaultProvider from "./DeafultProvider";
import { useTranslations } from "next-intl";

const DefaultSearch = () => {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations();
  return (
    <>
      <div className="search-modal__tab">
        <button
          onClick={() => setActiveTab(0)}
          className={`search-modal__tab-item ${
            activeTab === 0 ? "active" : ""
          }`}
        >
          {t("Continue Playing")}
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`search-modal__tab-item ${
            activeTab === 1 ? "active" : ""
          }`}
        >
          {t("Providers")}
        </button>
      </div>
      <div className="search-modal__body">
        {activeTab === 0 ? <DefaultSearchGame /> : ""}
        {activeTab === 1 ? <DefaultProvider /> : ""}
      </div>
    </>
  );
};

export default DefaultSearch;
