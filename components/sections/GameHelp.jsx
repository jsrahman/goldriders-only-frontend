"use client";
import React from "react";
import Image from "next/image";
import GameCard from "../templates/GameCard";
import { gameListData } from "@/public/data/gameList";
import { useTranslations } from "next-intl";

const GameHelp = () => {
  const t = useTranslations("gameHelp");
  return (
    <section className="help-section py-40">
      {/* Background layers */}
      <div className="help-section__bg">
        <Image
          fill
          src={"/images/help/bg-coin.png"}
          alt={t("alt.bgCoin")}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="help-section__overlay">
        <Image
          fill
          src={"/images/help/section-bg.png"}
          alt={t("alt.overlay")}
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* Thumbs images */}
      <div className="image-thumbs">
        <div className="image-thumbs__inner man">
          <Image
            fill
            src={"/images/help/man.png"}
            alt={t("alt.man")}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="image-thumbs__inner woman">
          <Image
            fill
            src={"/images/help/woman.png"}
            alt={t("alt.woman")}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="section-content">
        <div className="section-content__inner">
          <div className="section-content__inner-thumb">
            <div className="bg-frame">
              <Image
                fill
                src={"/images/help/slotBg.png"}
                alt={t("alt.slotBg")}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="section-content__inner-content">
            {/* Slider Icons */}
            <div className="slider-icon">
              <div className="image-thumbs__inner number">
                <Image
                  fill
                  src={"/images/help/777.png"}
                  alt="777"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="image-thumbs__inner jackpot">
                <Image
                  fill
                  src={"/images/help/jackpot.png"}
                  alt={t("alt.jackpot")}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="image-thumbs__inner card">
                <Image
                  fill
                  src={"/images/help/card-thumb.png"}
                  alt={t("alt.card")}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <h2 className="section-content__title">
              {t("title.part1")} <span className="text--accent">{t("title.part2")}</span>
            </h2>

            {/* Linear CSS Ticker */}
            <div className="help-slider">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="help-slider__item">
                  <div className="ticker">
                    <div className="ticker-track">
                      {[...gameListData, ...gameListData].map((item, i) => (
                        <div className="ticker-item" key={i}>
                          <GameCard {...item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHelp;
