"use client";
import React from "react";
import ResponsiveTable from "../../templates/ResponsiveTable";
import {
  availableTabTable,
  availableTabSuccess,
  successTabData,
  mobileInfoData,
} from "@/public/data/promotions-data";
import CustomTab from "../../templates/CustomTab";
import useScreenSize from "@/hooks/useScreenSize";
import DropDown from "@/components/templates/DropDown";
import InfoIcon from "@/components/svg/others/InfoIcon";
import CircularProgress from "@/components/svg/others/CircularProgress";
import Image from "next/image";
import { useTranslations } from "next-intl";

const availableTableHead = availableTabTable.header;
const availableTableData = availableTabTable.data;
const activeTableHead = availableTabSuccess.header;
const activeTableData = availableTabSuccess.data;
const successTabHead = successTabData.header;
const successTabBody = successTabData.data;

const PromotionTab = () => {
  const t = useTranslations();
  const { isMobile } = useScreenSize();

  const dropdownData = [
    {
      id: 0,
      name: t("promo.status.claimed"),
      url: "#",
    },
    {
      id: 1,
      name: t("promo.status.success"),
      url: "#",
    },
    {
      id: 2,
      name: t("promo.status.completed"),
      url: "#",
    },
  ];

  if (isMobile)
    return (
      <div className="mobile-promotion">
        <div className="mobile-promotion__header">
          <DropDown data={dropdownData} defaultIndex={0} />
          <span className="info-message text--base d-flex gap-1">
            <span className="icon text--base">
              <InfoIcon />
            </span>
            <span className="text text--base">
              {t("promo.spinWinTitle")} {t("promo.spinWinDesc")}
            </span>
          </span>
        </div>

        <div className="mobile-promotion__body">
          <div className="mobile-promotion__item">
            <CircularProgress percent={10} />
          </div>
          {mobileInfoData.map((item) => (
            <div className="mobile-promotion__item" key={item.id}>
              <span className="icon">
                <Image
                  fill
                  unoptimized
                  alt={t("promo.alt.promotion")}
                  src={item.img}
                />
              </span>
              <span className="text">{t(item.text)}</span>
              <span className="number">{item.number}</span>
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <section className="promotion-tab">
      <CustomTab defaultActive="available">
        <CustomTab.Item name={t("promo.tabs.available")} tabKey="available">
          <ResponsiveTable
            header={availableTableHead}
            data={availableTableData}
          />
        </CustomTab.Item>

        <CustomTab.Item name={t("promo.status.success")} tabKey="success">
          <ResponsiveTable header={activeTableHead} data={activeTableData} />
        </CustomTab.Item>

        <CustomTab.Item name={t("promo.status.completed")} tabKey="completed">
          <ResponsiveTable header={successTabHead} data={successTabBody} />
        </CustomTab.Item>
      </CustomTab>
    </section>
  );
};

export default PromotionTab;
