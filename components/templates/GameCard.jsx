import Image from "next/image";
import React from "react";
import PlayIcon from "../svg/others/PlayIcon";
import Link from "next/link";
import { useTranslations } from "next-intl";

const GameCard = ({ img, name, category, badge }) => {
  const t = useTranslations();
  return (
    <div className="game-card">
      <div className="game-card__thumb">
        <Link className="game-link" href={`/game/${name}`}></Link>
        <span className={`game-card__badge  ${badgeClass(badge)}`}>
          {badge}
        </span>
        <Image
          src={img}
          fill
          alt={t("common.alt.cardThumb")}
          sizes="(max-width: 768px) 100vw, 20vw"
        />
        <Link href={`/game/${name}`} className="play-icon">
          <PlayIcon />
        </Link>
      </div>
      <div className="game-card__content">
        <h5 className="game-card__name">
          <Link href={`/game/${name}`}>{name}</Link>
        </h5>
        <span className="game-card__category"> {category}</span>
      </div>
    </div>
  );
};

export default GameCard;

function badgeClass(badge) {
  if (badge.toLowerCase() === "top") {
    return "top-badge";
  } else if (badge.toLowerCase() === "live") {
    return "live-badge";
  } else if (badge.toLowerCase() === "new") {
    return "new-badge";
  }
}
