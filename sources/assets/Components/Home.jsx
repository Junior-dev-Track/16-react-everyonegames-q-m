import API from "../../API";
import { useState, useEffect } from "react";
import "../Styles/home/card-game.scss";
import "../Styles/home/container-game.scss";

const Home = () => {
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
        <h1>Games</h1>
        <section className="container-game">
          {data &&
            data.results &&
            data.results.map((game, index) => (
              <div key={index} className="card-game">
                <h2>{game.name}</h2>
                <img src={game.background_image} />
                <p>{game.description}</p>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
