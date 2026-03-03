import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CTA from "@/components/sections/CTA/CTA";
import Breadcrumb from "@/components/sections/Breadcrumb";
import React from "react";
import AllGame from "@/components/sections/AllGame";
import DropDown from "@/components/templates/DropDown";
import slotData from "@/public/data/slot-data";
import { useTranslations } from "next-intl";

const SlotsPage = () => {
  const t = useTranslations("breadcrumbs");
  return (
    <div className="content-area">
      <Header />
      <Breadcrumb activePage={t("slots")}>
        <DropDown data={slotData} />
      </Breadcrumb>
      <AllGame />
      <CTA />
      <Footer />
    </div>
  );
};

export default SlotsPage;
