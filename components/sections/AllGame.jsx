"use client";
import React from "react";
import LoadMore from "../templates/LoadMore";
import useAllGame from "../../hooks/useAllGame";
import GameCard from "../templates/GameCard";

const AllGame = () => {
  const { games, loading, addMoreGame } = useAllGame();
  return (
    <section className="all-game">
      <div className="game-list">
        {games.map((item, index) => (
          <GameCard
            key={`${item.id}-${index}`}
            img={item.img}
            name={item.name}
            category={item.category}
            badge={item.badge}
          />
        ))}
      </div>
      <div className="text-center">
        <LoadMore cb={addMoreGame} loading={loading} />
      </div>
    </section>
  );
};

export default AllGame;
