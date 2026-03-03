import React from "react";
import Banner from "@/components/sections/banner/Banner";
import Header from "@/components/layout/header/Header";
import RecentWin from "@/components/sections/recentWin/RecentWin";
import GameList from "@/components/sections/GameList";
import GameHelp from "@/components/sections/GameHelp";
import Providers from "@/components/sections/Providers";
import TopIcon from "@/components/svg/others/TopIcon";
import Footer from "@/components/layout/footer/Footer";
import CTA from "@/components/sections/CTA/CTA";
import SlotSectionIcon from "@/components/svg/section/SlotSectionIcon";
import LiveSectionIcon from "@/components/svg/section/LiveSectionIcon";

import { useTranslations } from "next-intl";

const IndexPage = () => {
  const t = useTranslations("home");
  return (
    <div className="content-area">
      <Header />
      <Banner />
      <RecentWin />
      <GameList icon={<TopIcon />} text={t("topRatedGames")} />
      <GameList icon={<SlotSectionIcon />} text={t("slotsGames")} />
      <GameList icon={<LiveSectionIcon />} text={t("liveCasino")} />
      <GameHelp />
      <Providers />
      <CTA />
      <Footer />
    </div>
  );
};

export default IndexPage;
