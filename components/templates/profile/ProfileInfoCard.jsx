import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ProfileInfoCard = () => {
  const t = useTranslations();
  return (
    <div className="bonus-card">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bonus-card__item">
          <div className="bonus-card__info">
            <h2 className="title">{t("Total Reward")}</h2>
            <h3 className="amount">$0.00</h3>
          </div>
          <div className="bonus-card__thumb">
            <Image
              fill
              alt="card-thumb"
              src={"/images/thumbs/bonus-card1.png"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileInfoCard;
