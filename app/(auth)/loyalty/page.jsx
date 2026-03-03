"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import AccordionSection from "@/components/sections/AccordionSection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import LoyaltyBanner from "@/components/sections/Loyalty/LoyaltyBanner";
import LoyaltyBannerCard from "@/components/sections/Loyalty/LoyaltyBannerCard";
import LoyaltyLevel from "@/components/sections/Loyalty/LoyaltyLevel";
import useScreenSize from "@/hooks/useScreenSize";
import { loyaltyFaq } from "@/public/data/faqData";
import React from "react";
import { useTranslations } from "next-intl";

const LoyaltyPage = () => {
  const t = useTranslations("breadcrumbs");
  const { isMobile } = useScreenSize();
  return (
    <div className="content-area">
      <Header />
      <Breadcrumb activePage={t("loyalty")} />
      <div className="loyalty-content-area">
        <LoyaltyBanner />
        <LoyaltyLevel />
        {isMobile && (
          <div className="loyalty-card-section">
            <LoyaltyBannerCard />
          </div>
        )}
      </div>
      <AccordionSection data={loyaltyFaq} />
      <Footer />
    </div>
  );
};

export default LoyaltyPage;
