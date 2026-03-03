import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/sections/Breadcrumb";
import ThumbnailEdit from "@/components/templates/profile/ThumbnailEdit";
import DropDown from "@/components/templates/DropDown";
import React from "react";
import EditSettings from "@/components/templates/profile/EditSettings";
import ChangePassword from "@/components/templates/profile/ChangePassword";
import GeneralSetting from "@/components/templates/profile/GeneralSetting";
import UploadKYC from "@/components/templates/profile/UploadKYC";
import { kycData } from "@/public/data/kyc-data";
import { useTranslations } from "next-intl";

const AccountEditPage = () => {
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
      <section className="profile-edit">
        <div className="row gy-1">
          <div className="col-md-6">
            <ThumbnailEdit />
          </div>
          <div className="col-md-6">
            <EditSettings />
            <ChangePassword />
          </div>
          <div className="col-12">
            <GeneralSetting />
          </div>
          {kycData.map((item) => (
            <div className="col-sm-6 col-xl-4 " key={item.name}>
              <UploadKYC data={item} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountEditPage;
