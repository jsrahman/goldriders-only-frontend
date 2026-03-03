import { useState } from "react";
import { gameListData } from "@/public/data/gameList";

const useAllGame = () => {
  const [games, setGames] = useState([...gameListData]);
  const [loading, setLoading] = useState(false);
  function addMoreGame() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGames((prevGames) => [...prevGames, ...gameListData]);
    }, 3000);
  }
  return { games, loading, addMoreGame };
};

export default useAllGame;
