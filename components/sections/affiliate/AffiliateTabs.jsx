"use client";
import ArrowDownIcon from "@/components/svg/others/ArrowDownIcon";
import RulesIcon from "@/components/svg/others/RulesIcon";
import CustomTab from "@/components/templates/CustomTab";
import ResponsiveTable from "@/components/templates/ResponsiveTable";
import useScreenSize from "@/hooks/useScreenSize";
import {
  commissionTable,
  friendsTable,
  rewardsTable,
} from "@/public/data/affiliate-table-data";
import React from "react";
import { useTranslations } from "next-intl";

const AffiliateTabs = () => {
  const t = useTranslations("affiliate");
  const { isMobile } = useScreenSize();
  if (isMobile) {
    return (
      <section className="affiliate-tab">
        <div className="table-dropdown">
          <div className="table-dropdown__text">
            <span className="text">{t("tabs_period")}</span>
            <span className="time">{t("tabs_last7Days")}</span>
          </div>
          <span className="icon ms-auto">
            <ArrowDownIcon />
          </span>
        </div>
        <ResponsiveTable
          header={rewardsTable.header}
          data={rewardsTable.data}
        />
      </section>
    );
  }
  return (
    <section className="affiliate-tab">
      <CustomTab defaultActive={"rewards"} headerRight={<RightBtn />}>
        <CustomTab.Item name={t("tabs_rewards")} tabKey={"rewards"}>
          <ResponsiveTable
            header={rewardsTable.header}
            data={rewardsTable.data}
          />
        </CustomTab.Item>
        <CustomTab.Item name={t("tabs_commission")} tabKey={"commission"}>
          <ResponsiveTable
            header={commissionTable.header}
            data={commissionTable.data}
          />
        </CustomTab.Item>
        <CustomTab.Item name={t("tabs_referral")} tabKey={"referral"}>
          <ResponsiveTable
            header={commissionTable.header}
            data={commissionTable.data}
          />
        </CustomTab.Item>
        <CustomTab.Item name={t("tabs_referralCode")} tabKey={"referral-code"}>
          <ResponsiveTable
            header={rewardsTable.header}
            data={rewardsTable.data}
          />
        </CustomTab.Item>
        <CustomTab.Item name={t("tabs_friends")} tabKey={"Friends"}>
          <ResponsiveTable
            header={friendsTable.header}
            data={friendsTable.data}
          />
        </CustomTab.Item>
      </CustomTab>
    </section>
  );
};

export default AffiliateTabs;

function RightBtn() {
  const t = useTranslations("affiliate");
  return (
    <button className="btn btn--base btn--sm">
      <RulesIcon /> {t("tabs_rules")}
    </button>
  );
}
