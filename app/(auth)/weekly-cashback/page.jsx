"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import AccordionSection from "@/components/sections/AccordionSection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import WeeklyCashbackBanner from "@/components/sections/cashback/WeeklyCashbackBanner";
import { cashbackFaq } from "@/public/data/faqData";
import React from "react";
import { useTranslations } from "next-intl";

const WeeklyCashbackPage = () => {
  const t = useTranslations("breadcrumbs");
  return (
    <div className="content-area">
      <Header />
      <Breadcrumb activePage={t("cashback")} />
      <WeeklyCashbackBanner />
      <AccordionSection data={cashbackFaq} />
      <Footer />
    </div>
  );
};

export default WeeklyCashbackPage;
