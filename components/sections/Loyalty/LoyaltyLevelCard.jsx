import InfoIcon from "@/components/svg/others/InfoIcon";
import LevelCheckIcon from "@/components/svg/others/LevelCheckIcon";
import LevelLockIcon from "@/components/svg/others/LevelLockIcon";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const LoyaltyLevelCard = ({ index, SELECTED_INDEX, level }) => {
  const t = useTranslations();
  return (
    <>
      <div
        className={`loyalty-level__item   ${
          index.toString() == SELECTED_INDEX.toString() ? "selected" : ""
        } ${level.isComplete ? "completed" : ""}`}
      >
        <div className="loyalty-level__header">
          <div className="loyalty-level__thumb">
            <Image src={level.img} fill alt={"loyalty-level"} />
          </div>
        </div>
        <div className="loyalty-level__body">
          <div className="loyalty-level__info">
            <h1 className="loyalty-level__info-title">{level.title}</h1>
            <p className="loyalty-level__info-level">{level.description}</p>
          </div>
          <div className="loyalty-level__features">
            {level.features.map((feature, index) => (
              <div className="loyalty-level__features-item" key={index}>
                <span className="text">{feature.title}</span>
                <RenderValue value={feature.value} />
              </div>
            ))}
          </div>
          <div className="loyalty-level__footer">
            <span className="text">{t("loyalty.depositReach")}</span>
            <span className="value">
              {level.dp} <InfoIcon />
            </span>
          </div>
        </div>

        <div className="active-text">{t("loyalty.yourLevel")}</div>
      </div>
    </>
  );
};

export default LoyaltyLevelCard;
function RenderValue({ value }) {
  switch (value) {
    case "checked":
      return (
        <span className="checked">
          <LevelCheckIcon />
        </span>
      );
    case "lock":
      return (
        <span className="lock">
          <LevelLockIcon />
        </span>
      );
    default:
      return <span className="value">{value}</span>;
  }
}
