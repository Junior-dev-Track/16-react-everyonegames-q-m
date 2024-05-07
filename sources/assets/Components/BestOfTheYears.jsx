import { useState, useEffect } from "react";
import API from "../../API";

const BestOfTheYears = () => {
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
      <div>
        <h1>coucou</h1>
        <section>
          {data &&
            data.results &&
            data.results.map((game, index) => (
              <div key={index}>
                <h2>{game.name}</h2>

                <p>{game.description}</p>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default BestOfTheYears;
