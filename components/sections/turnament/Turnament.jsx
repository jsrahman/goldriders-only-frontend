import React from "react";
import TurnamentCard from "./TurnamentCard";
import trunamentData from "@/public/data/trunamentData";

const Turnament = () => {
  return (
    <section className="turnament-section">
      {trunamentData.map((item) => (
        <TurnamentCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Turnament;
