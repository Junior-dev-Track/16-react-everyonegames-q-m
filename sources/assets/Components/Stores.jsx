import API from "../../API";
import { useState, useEffect } from "react";

const Stores = () => {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/stores?key=${KEY}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);

  return (
    <main>
      <div className="container-main">
        <h1>Stores</h1>
        {data &&
          data.results &&
          data.results.map((stores, index) => (
            <div key={index}>
              <h2>{stores.name}</h2>
              <h3>Popular items</h3>
              <p>{stores.games_count}</p>
              {stores.games &&
                Array.isArray(stores.games) &&
                stores.games.map((game, gameIndex) => (
                  <div key={gameIndex}>
                    <p>{game.name}</p>
                    <p>Added count: {game.added}</p>
                  </div>
                ))}

              <p>{stores.description}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Stores;
