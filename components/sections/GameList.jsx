/* eslint-disable react-hooks/refs */
"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gameListData } from "@/public/data/gameList";
import LeftIcon from "../svg/others/LeftIcon";
import RightIcon from "../svg/others/RightIcon";
import GameCard from "../templates/GameCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const GameList = ({ className = "", icon, text, img = null }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const t = useTranslations("games");

  return (
    <section className={`${className} game-section`}>
      <div className="section-head">
        <div className="section-head__left">
          {img ?
            <span className="section-icon">
              <Image width={44} priority height={44} src={img} alt={text} />
            </span>
            :
            <div className="section-icon">{icon}</div>
          }

          <h1 className="section-text mb-0">{text}</h1>
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
          spaceBetween={10}
          freeMode={true}
        >
          {gameListData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "var(--card-width)" }}>
              <GameCard
                img={item.img}
                name={item.name}
                category={item.category}
                badge={item.badge}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GameList;
