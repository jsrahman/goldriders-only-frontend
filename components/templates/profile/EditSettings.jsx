import React from "react";
import DropDown from "../DropDown";
import SaveIcon from "@/components/svg/others/SaveIcon";
import { langData } from "@/public/data/ui-data";
import { useTranslations } from "next-intl";

const EditSettings = () => {
  const t = useTranslations("settings");

  const privacyData = [
    {
      id: 0,
      name: t("show"),
    },
    {
      id: 1,
      name: t("hide"),
    },
  ];
  return (
    <div className="card setting-card">
      <div className="card-body">
        <div className="setting-card__setting">
          <h3 className="edit-title">{t("title")}</h3>
          <DropDown data={langData} />
        </div>
        <div className="setting-card__privacy">
          <h3 className="edit-title">{t("privacy")}</h3>

          <div className="setting-dropdown">
            <DropDown data={privacyData} />
            <span className="text">{t("gamingData")}</span>
          </div>

          <div className="setting-dropdown">
            <DropDown data={privacyData} />
            <span className="text">{t("publicUsername")}</span>
          </div>
        </div>
        <button className="btn btn--base h-44">
          <SaveIcon /> {t("save")}
        </button>
      </div>
    </div>
  );
};

export default EditSettings;
// export default EditSettings
