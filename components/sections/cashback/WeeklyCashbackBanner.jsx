"use client";
import CashbackCheck from "@/components/svg/section/CashbackCheck";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CashbackUnCheck from "@/components/svg/section/CashbackUnCheck";
import useScreenSize from "@/hooks/useScreenSize";
import CashbackWithdrawCard from "./CashbackWithdrawCard";
import CashbackLevel from "./CashbackLevel";
import { cashbackCard } from "@/public/data/cashbackdata";
import { useTranslations } from "next-intl";

const WeeklyCashbackBanner = () => {
  const SELECTED_INDEX = 2;
  const { screenSize } = useScreenSize();
  const t = useTranslations("cashback");
  return (
    <section className="cashback-banner">
      <div className="cashback-banner__bg">
        <Image
          src={"/images/cashback/section-bg.png"}
          fill
          alt={"cashback-banner"}
        />
      </div>
      <div className="cashback-banner__top">
        <div className="cashback-content">
          <h1 className="cashback-content__title">{t("title")}</h1>
          <p className="cashback-content__desc">
            {t("desc")}
          </p>

          {screenSize > 991 && <CashbackWithdrawCard />}
        </div>
        <div className="cashback-thumb">
          {screenSize > 576 ? (
            <Image
              src={"/images/cashback/section-thumb.png"}
              fill
              alt={"cashback-banner"}
            />
          ) : (
            <Image
              src={"/images/cashback/section-thumb-mobile.png"}
              fill
              alt={"cashback-banner"}
            />
          )}
        </div>
      </div>
      <div className="cashback-banner__cashback ">
        <Swiper
          initialSlide={SELECTED_INDEX}
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          {cashbackCard.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "var(--card-width)" }}>
              <CashbackLevel
                index={index}
                data={item}
                SELECTED_INDEX={SELECTED_INDEX}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {screenSize < 991 && <CashbackWithdrawCard />}
    </section>
  );
};

export default WeeklyCashbackBanner;
