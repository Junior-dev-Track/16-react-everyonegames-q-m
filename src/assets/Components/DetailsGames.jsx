import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";

export default function DetailsGames() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const DetailsGames = await fetch(
        `https://api.rawg.io/api/games/{id}?key=${API_KEY}`
      ); // replace id whit the id of the game
      //console.log(DetailsGames);
      const jsonDetailsGames = await DetailsGames.json();
      setData(jsonDetailsGames);
      console.log(jsonDetailsGames);
    };

    fetchData();
  }, []);
}
