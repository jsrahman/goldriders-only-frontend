import InfoIcon from "@/components/svg/others/InfoIcon";
import Image from "next/image";
import React from "react";
import TrunamentCardAction from "./TrunamentCardAction";
import TunamentCountDown from "./TunamentCountDown";
import { useTranslations } from "next-intl";

const TurnamentCard = ({ data }) => {
  const t = useTranslations("tournament");
  return (
    <div className="turnament-card  position-relative">
      <div className="turnament-card__playson">
        <span className="playson__badge">{data.badge}</span>
        <span className="playson__time">
          {t("endIn")} <TunamentCountDown targetTime={data.time} />
        </span>
      </div>
      <div className="turnament-card__thumb">
        <Image src={data.img} fill unoptimized alt={""} />
      </div>
      <div className="turnament-card__content">
        <h2 className="turnament-card__title">{data.title}</h2>
        <h2 className="turnament-card__number">{data.number}</h2>
      </div>
      <TrunamentCardAction />
    </div>
  );
};

export default TurnamentCard;
