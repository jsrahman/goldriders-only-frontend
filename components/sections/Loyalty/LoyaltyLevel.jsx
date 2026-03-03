"use client";
import React, { useRef } from "react";
import LeftIcon from "@/components/svg/others/LeftIcon";
import RightIcon from "@/components/svg/others/RightIcon";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LoyaltyLevelCard from "./LoyaltyLevelCard";
import { loyaltyLevels } from "@/public/data/loyaltyLevels";
import useScreenSize from "@/hooks/useScreenSize";

const LoyaltyLevel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const SELECTED_INDEX = 5;
  const isMobile = useScreenSize();

  return (
    <section className="loyalty-level">
      <div className="section-head justify-content-end">
        <div className="section-head__right">
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
        <div className="loyalty-level__list">
          <Swiper
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            initialSlide={SELECTED_INDEX}
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={isMobile ? 10 : 20}
            freeMode={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            {loyaltyLevels.map((level, index) => (
              <SwiperSlide key={index} style={{ width: "var(--card-width)" }}>
                <LoyaltyLevelCard
                  index={index}
                  SELECTED_INDEX={SELECTED_INDEX}
                  level={level}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyLevel;
