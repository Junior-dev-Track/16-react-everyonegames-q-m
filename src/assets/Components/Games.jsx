import { useState, useEffect } from "react";
import API from "../Api/api";

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
    <div>
      {data &&
        data.results &&
        data.results.map((games, index) => (
          <div key={index}>
            <h2>{games.name}</h2>
            <img src={games.background_image} />
            <p>{games.description}</p>
          </div>
        ))}
    </div>
  );
}
