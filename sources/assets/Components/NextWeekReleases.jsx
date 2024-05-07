import { useState, useEffect } from "react";
import API from "../../API";

const NextWeekReleases = () => {
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
    <div>
      <h1>coucou</h1>
      {data &&
        data.results &&
        data.results.map((game, index) => (
          <div key={index}>
            <h2>{game.name}</h2>
            <p>Release Date: {game.released}</p>
            <p>{game.description}</p>
          </div>
        ))}
    </div>
  );
};
export default NextWeekReleases;
