import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import CTA from '@/components/sections/CTA/CTA';
import GameList from '@/components/sections/GameList';
import TopIcon from '@/components/svg/others/TopIcon';
import LobbyBreadcrumb from '@/components/templates/LobbyBreadcrumb';
import React from 'react'
import { useTranslations } from "next-intl";

const LobbyPage = () => {
    const t = useTranslations("lobby");
    const tAuth = useTranslations("breadcrumbs");
    return (
        <div className="content-area">
            <Header />
            <Breadcrumb activePage={tAuth("lobby")} >
                <LobbyBreadcrumb />
            </Breadcrumb>
            <GameList text={t("slots")} icon={<TopIcon />} />
            <GameList text={t("liveCasino")} icon={<TopIcon />} />
            <GameList text={t("hotGames")} icon={<TopIcon />} />
            <GameList text={t("topPicks")} icon={<TopIcon />} />
            <GameList text={t("newReleases")} icon={<TopIcon />} />
            <GameList text={t("fishGames")} icon={<TopIcon />} />
            <CTA />
            <Footer />
        </div>
    );
}

export default LobbyPage