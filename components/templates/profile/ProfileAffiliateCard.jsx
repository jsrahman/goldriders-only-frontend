import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ProfileAffiliateCard = () => {
  const t = useTranslations();
  return (
    <div className="profile-affiliate">
      <div className="profile-affiliate__thumb">
        <Image
          width={120}
          height={100}
          src={"/images/thumbs/account-affiliate.png"}
          unoptimized
          priority
          alt={"account"}
        />
      </div>
      <div className="profile-affiliate__info">
        <h2 className="title">{t("Affiliate")}</h2>
        <h3 className="subtitle">
          <span className="text--accent">{t("Get 25%")}</span>{" "}
          {t("affiliate commission on wagers")}
        </h3>
        <p className="desc">{t("affiliate commission on wagers")}</p>
      </div>
    </div>
  );
};

export default ProfileAffiliateCard;
