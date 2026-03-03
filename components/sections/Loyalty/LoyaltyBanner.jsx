"use client";
import Image from "next/image";
import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import LoyaltyBannerCard from "./LoyaltyBannerCard";
import { useTranslations } from "next-intl";

const LoyaltyBanner = () => {
  const { isMobile } = useScreenSize();
  const t = useTranslations("loyalty");
  return (
    <section className="loyalty-banner position-relative">
      <div className="loyalty-banner__bg">
        {!isMobile ? (
          <Image
            src={"/images/loyalty/loyalty-bg.png"}
            fill
            alt={"loyalty-banner"}
          />
        ) : (
          <Image
            src={"/images/loyalty/loyalty-mobile-bg.png"}
            fill
            alt={"loyalty-banner"}
          />
        )}
      </div>
      {!isMobile && <LoyaltyBannerCard />}
      <div className="loyalty-banner__content">
        <h1 className="loyalty-banner__title">{t("banner.title")}</h1>
        <p className="loyalty-banner__desc">
          {t("banner.desc")}
        </p>
      </div>
    </section>
  );
};

export default LoyaltyBanner;
