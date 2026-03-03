"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { recentWinData } from "@/public/data/recentWin";
import WinTabs from "./WinTabs";

import "swiper/css";
import RecentIcon from "@/components/svg/others/RecentIcon";
import Link from "next/link";

const RecentWin = () => {
  const t = useTranslations();
  return (
    <section className="recent-win">
      <div className="section-head">
        <div className="section-head__left">
          <div className="section-icon">
            <RecentIcon />
          </div>
          <h1 className="section-text mb-0">{t("recentWin.title")}</h1>
        </div>

        <div className="section-head__right">
          <WinTabs />
        </div>
      </div>

      <div className="section-content">
        <Swiper slidesPerView={"auto"} freeMode={true}>
          {recentWinData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "var(--card-width)" }}>
              <div className="win-card">
                <Link href={`/game/${item.id}`} className="win-card__link" />
                <div className="win-card__thumb">
                  <Image
                    src={item.img}
                    fill
                    alt={t("common.alt.cardThumb")}
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
                <div className="win-card__price"> {item.price}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentWin;
