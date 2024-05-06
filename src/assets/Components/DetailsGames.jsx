import { useState, useEffect } from "react";
import API_KEY from "../Api/key";

export default function DetailsGames() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const DetailsGames = await fetch(
        `https://api.rawg.io/api/games/{id}?key=${KEY}`,
      ); // replace id whit the id of the game
      //console.log(DetailsGames);
      const jsonDetailsGames = await DetailsGames.json();
      setData(jsonDetailsGames);
      console.log(jsonDetailsGames);
    };

    fetchData();
  }, []);
  /*
  return (
    <div>
      {data &&
        data.results &&
        data.results.map((DetailsGames, index) => (
          <div key={index}>
            <h2>{DetailsGames.name}</h2>
            <p>{DetailsGames.description}</p>
          </div>
        ))}
    </div>
  ); */
}
