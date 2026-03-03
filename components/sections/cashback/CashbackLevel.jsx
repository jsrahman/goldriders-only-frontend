import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const CashbackLevel = ({ index, SELECTED_INDEX, data }) => {
  const t = useTranslations();
  return (
    <div
      key={index}
      className={`eligible-card  ${index === SELECTED_INDEX ? "selected" : ""} 
                ${index > SELECTED_INDEX ? "remaining" : ""}
                `}
    >
      <div className="eligible-card__thumb">
        <Image src={data.img} fill alt={"cashback-banner"} />
      </div>
      <h3 className="eligible-card__title">
        {data.title?.includes(".") || data.title?.includes("_")
          ? t(data.title)
          : data.title}
      </h3>
      <div className="eligible-card__info">
        <span className="level">{t(data.level)}</span>
        <span className="type">{t(data.type)}</span>
        <span className="desc">{t(data.desc)}</span>
      </div>
      <div className="active-text">
        {data.activeText
          ? data.activeText.includes(".") || data.activeText.includes("_")
            ? t(data.activeText)
            : data.activeText
          : ""}
      </div>
    </div>
  );
};

export default CashbackLevel;
