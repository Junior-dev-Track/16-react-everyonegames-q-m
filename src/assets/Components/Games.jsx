import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";

export default function Games() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const games = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
      const jsonGames = await games.json();
      setData(jsonGames);
      console.log(jsonGames);
    };

    fetchData();
  }, []);
}
