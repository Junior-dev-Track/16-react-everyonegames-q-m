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
                  {result.parent_platforms.map((element, index) => (
                    <p key={index}>{element.platform.name}</p>
                  ))}
                  <Link to="/game/:id">
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
