import React from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import AccordionSection from "@/components/sections/AccordionSection";
import AffiliateCards from "@/components/sections/affiliate/AffiliateCards";
import AffiliateTabs from "@/components/sections/affiliate/AffiliateTabs";
import Breadcrumb from "@/components/sections/Breadcrumb";
import DropDown from "@/components/templates/DropDown";
import { affiliateData } from "@/public/data/faqData";
import { useTranslations } from "next-intl";

const AffiliatePage = () => {
  const t = useTranslations();
  const tAuth = useTranslations("breadcrumbs");
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

      <Breadcrumb
        activePage={tAuth("affiliate")}
        subLink={{ name: tAuth("profile"), url: "/profile" }}
      >
        <DropDown defaultIndex={1} data={dropdownData} />
      </Breadcrumb>

      <AffiliateCards />
      <AffiliateTabs />
      <AccordionSection
        header={t("support.faq")}
        data={affiliateData}
      />
      <Footer />
    </div>
  );
};

export default AffiliatePage;
