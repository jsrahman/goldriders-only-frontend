import DownloadIcon from "@/components/svg/others/DownloadIcon";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AffiliateBanner = () => {
  const t = useTranslations("affiliate");
  return (
    <div className="affiliate-cards__banner card">
      <div className="card-body">
        <div className="thumbs-list position-relative">
          <Image src="/images/thumbs/affite-banner.png" alt="banner" fill />
        </div>
        <div className="thumbs-info">
          <h2 className="title">{t("banner_title")}</h2>
          <p className="desc">
            {t("banner_desc")}
          </p>
          <div className="btn-list">
            <button className="btn btn--base">
              <DownloadIcon /> {t("banner_downloadBanner")}
            </button>
            <button className="btn btn--base">
              <DownloadIcon /> {t("banner_downloadLogo")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateBanner;
