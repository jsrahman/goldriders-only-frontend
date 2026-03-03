import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTA from "@/components/sections/CTA/CTA";
import Turnament from "@/components/sections/turnament/Turnament";
import React from "react";

import { useTranslations } from "next-intl";

const TurnamentPage = () => {
  const t = useTranslations("breadcrumbs");
  return (
    <div className="content-area">
      <Header />
      <Breadcrumb activePage={t("tournament")} />
      <Turnament />
      <CTA />
      <Footer />
    </div>
  );
};

export default TurnamentPage;
