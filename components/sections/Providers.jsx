/* eslint-disable react-hooks/refs */

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import TopIcon from "../svg/others/TopIcon";
import LeftIcon from "../svg/others/LeftIcon";
import RightIcon from "../svg/others/RightIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import providerListData from "@/public/data/provider-list";
import { useTranslations } from "next-intl";
const Providers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const t = useTranslations("games");

  return (
    <section className="providers-section">
      <div className="section-head">
        <div className="section-head__left">
          <div className="section-icon">
            <TopIcon />
          </div>
          <h1 className="section-text mb-0">{t("topRatedGames")}</h1>
        </div>

        <div className="section-head__right">
          <Link href={"#"} className="btn btn--dark">
            {t("viewAll")}
          </Link>
          <div className="btn-list">
            <button ref={prevRef} className="btn btn--dark icon-button">
              <LeftIcon />
            </button>

            <button ref={nextRef} className="btn btn--dark icon-button">
              <RightIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="section-content">
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={6}
          freeMode={true}
        >
          {providerListData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "160px" }}>
              <div className="provider-card">
                <Image
                  src={item.img}
                  alt={t("providerAlt")}
                  width={160}
                  height={160}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Providers;
