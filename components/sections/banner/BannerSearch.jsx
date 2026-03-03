"use client";
import SearchButton from "@/components/layout/search/SearchButton";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslations } from "next-intl";
import React from "react";

const BannerSearch = () => {
  const { isMobile } = useScreenSize();

  const t = useTranslations("banner");

  if (isMobile) {
    return (
      <section className="banner-search">
        <SearchButton text={t("searchPlaceholder")} />
      </section>
    );
  }

  return null;
};

export default BannerSearch;
