import React from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTA from "@/components/sections/CTA/CTA";
import Promotion from "@/components/sections/promotion/Promotion";
import PromotionTab from "@/components/sections/promotion/PromotionTab";
import PromotionModal from "@/components/sections/promotion/PromotionModal";

import { useTranslations } from "next-intl";

const PromotionPage = () => {
  const t = useTranslations("breadcrumbs");
  function handleClose() { }
  return (
    <>
      <div className="content-area">
        <Header />
        <Breadcrumb activePage={t("promotions")} />
        <Promotion />
        <PromotionTab />
        <CTA />
        <Footer />
      </div>
      <PromotionModal handleClose />
    </>
  );
};

export default PromotionPage;
