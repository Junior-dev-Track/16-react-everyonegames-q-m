import API from "../../API";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Game = () => {
  const QUERY = "games";
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/${QUERY}?key=${KEY}`;

  const [data, setData] = useState();
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.log(`Query ${QUERY} :`, request);
      setData(request);
    };
  }, []);

  return (
    <main>
      <div className="container-main">
        <h1>Nom du jeu</h1>
      </div>
    </main>
  );
};

export default Game;
