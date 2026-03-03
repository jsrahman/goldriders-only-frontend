import React from "react";
import PromotionCard from "./PromotionCard";
import { promotionData } from "@/public/data/promotions-data";

const Promotion = () => {
  return (
    <section className="promotion-section">
      {promotionData.map((item) => (
        <PromotionCard data={item} key={item.id} />
      ))}
    </section>
  );
};

export default Promotion;
