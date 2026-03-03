import React from "react";
import LevelProgressForward from "../../svg/others/LevelProgressForward";
import WageredSlide from "../../templates/WageredSlide";
import InfoIcon from "../../svg/others/InfoIcon";
import LevelForward from "../../svg/others/LevelForward";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LoyaltyBannerCard = () => {
  const t = useTranslations("loyalty");
  return (
    <div className="loyalty-banner__card">
      <div className="loyalty-header">
        <div className="current-level level-item">
          <span className="level-thumb">
            <Image
              src={"/images/loyalty/level1.png"}
              fill
              alt={"loyalty-level"}
            />
          </span>
          <p className="level-text">{t("level.gold")}</p>
        </div>
        <div className="level-forward level-item">
          <LevelForward />
        </div>
        <div className="next-level level-item">
          <span className="level-thumb">
            <Image
              src={"/images/loyalty/level2.png"}
              fill
              alt={"loyalty-level"}
            />
          </span>
          <p className="level-text">{t("level.platinum")}</p>
        </div>
      </div>
      <div className="loyalty-content">
        <div className="loyalty-point">
          <p className="loyalty-point__title">{t("currentPoints")}</p>
          <span className="loyalty-point__info" role="button">
            <InfoIcon />
          </span>
        </div>
        <WageredSlide
          percent={50}
          start={50}
          end={100}
          svg={<LevelProgressForward />}
        />
      </div>
    </div>
  );
};

export default LoyaltyBannerCard;
