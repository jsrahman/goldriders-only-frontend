import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/sections/Breadcrumb";
import ProfileDetails from "@/components/templates/profile/ProfileDetails";
import AccountTab from "@/components/templates/profile/AccountTab";
import DropDown from "@/components/templates/DropDown";
import React from "react";
import { useTranslations } from "next-intl";

const AccountPage = () => {
  const t = useTranslations("breadcrumbs");
  const tDrop = useTranslations("dropdown");

  const dropdownData = [
    {
      id: 0,
      name: tDrop("account"),
      url: "/profile",
    },
    {
      id: 1,
      name: tDrop("affiliate"),
      url: "/affiliate",
    },
  ];
  return (
    <div className="content-area">
      <Header />
      <Breadcrumb activePage={t("account")}>
        <DropDown data={dropdownData} />
      </Breadcrumb>
      <ProfileDetails />
      <AccountTab />
      <Footer />
    </div>
  );
};

export default AccountPage;
