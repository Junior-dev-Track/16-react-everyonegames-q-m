import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";

export default function Games() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const games = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
      if (!games.ok) {
        throw new Error(`HTTP error! status: ${games.status}`);
      }
      const jsonGames = await games.json();
      setData(jsonGames);

      console.log(jsonGames);
    };

    fetchData();
  }, []);
  return (
    <div>
      {data &&
        data.results &&
        data.results.map((games, index) => (
          <div key={index}>
            <h2>{games.name}</h2>
            <p>{games.description}</p>
          </div>
        ))}
    </div>
  );
}
