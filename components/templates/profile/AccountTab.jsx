"use client";
import React from "react";
import CustomTab from "../CustomTab";
import AccountGameHistory from "./AccountGameHistory";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslations } from "next-intl";

const AccountTab = () => {
  const t = useTranslations("history");
  const { isMobile } = useScreenSize();
  if (isMobile) {
    return (
      <section className="account-tab">
        <div className="account-tab__item">
          <AccountGameHistory />
        </div>
      </section>
    );
  }

  return (
    <section className="account-tab">
      <CustomTab defaultActive="txhistory">
        <CustomTab.Item tabKey="txhistory" name={t("tx")}>
          <AccountGameHistory title={t("transaction")} />
        </CustomTab.Item>
        <CustomTab.Item tabKey="gameHistory" name={t("game")}>
          <AccountGameHistory title={t("game")} />
        </CustomTab.Item>
      </CustomTab>
    </section>
  );
};

export default AccountTab;
