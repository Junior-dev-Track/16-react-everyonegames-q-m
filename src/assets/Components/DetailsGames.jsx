import { useState, useEffect } from "react";
import API from "./API";

export default function DetailsGames() {
  const [data, setData] = useState([]);
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/games/{id}?key=${KEY}`; // replace id whit the id of the game

  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);

      setData(request);
    };
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
