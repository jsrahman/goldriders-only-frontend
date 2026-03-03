import GameList from "@/components/sections/GameList";
import TopIcon from "@/components/svg/others/TopIcon";
import { useTranslations } from "next-intl";
import React from "react";

const DefaultSearchGame = () => {
  const t = useTranslations();
  return (
    <div className="default-search-game">
      <GameList
        text={t("CONTINUE PLAYING")}
        className="search-game"
        icon={<TopIcon />}
      />

      <GameList
        text={t("FAVORITES")}
        className="search-game"
        icon={<TopIcon />}
      />
    </div>
  );
};

export default DefaultSearchGame;
