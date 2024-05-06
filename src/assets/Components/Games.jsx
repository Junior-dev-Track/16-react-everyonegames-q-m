import { useState, useEffect } from "react";
import API from "./API";

import "../SCSS/main.scss";
import "../SCSS/card-game.scss";

export default function Games() {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/games?key=${KEY}`;
  const [data, setData] = useState();

  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);

  return (
    <main>
      {data &&
        data.results &&
        data.results.map((game, index) => (
          <div key={index} className="card-game">
            <h2>{game.name}</h2>
            <img src={game.background_image} />
            <p>{game.description}</p>
          </div>
        ))}
    </main>
  );
}
