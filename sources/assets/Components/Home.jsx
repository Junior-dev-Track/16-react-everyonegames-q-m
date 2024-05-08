import API from "../../API";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/home/container-game.scss";
import "../Styles/home/card-game.scss";

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
        <h1>Game Lists</h1>
        <section className="container-game">
          {data &&
            data.results &&
            data.results.map((result, index) => (
              <div key={index} className="card-game">
                <img src={result.background_image} />
                <div className="card-game-contents">
                  {result.parent_platforms &&
                    Array.isArray(result.parent_platforms) &&
                    result.parent_platforms.map((element, platformIndex) => (
                      <p key={platformIndex}>{element.platform.name}</p>
                    ))}
                  <Link to={`/game/${result.id}`}>
                    <button>{result.name}</button>
                  </Link>
                </div>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
