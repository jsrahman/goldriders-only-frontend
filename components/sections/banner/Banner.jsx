import React from "react";
import BannerCta from "./BannerCta";
import BannerSearch from "./BannerSearch";

import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("banner");

  return (
    <>
      <section className="banner banner-section">
        <div className="banner__background" />
        <div className="banner__content">
          <div className="banner__content-info">
            <h2 className="banner__content-sub-title">
              {t("register")} <span className="text--accent">&</span>{" "}
              {t("getReward")}
            </h2>
            <h1 className="banner__content-title">
              <span className="text--base">100%</span> {t("bonus")}
            </h1>
          </div>
          <BannerCta />
        </div>
      </section>
      <BannerSearch />
    </>
  );
};

export default Banner;
