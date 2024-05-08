import API from "../../API";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/home/container-game.scss";
import "../Styles/home/card-game.scss";

import transformNameIntoLogo from "../Functions/transformNameIntoLogo";

const Home = () => {
  const QUERY = "games";
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/${QUERY}?key=${KEY}`;

  const [data, setData] = useState([]);

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
        <h1>Games List</h1>
        <section className="container-game">
          {data &&
            data.results &&
            data.results.map((key, index) => (
              <div key={index} className="card-game">
                <img className="card-game-image" src={key.background_image} />

                <div className="card-game-contents">
                  <div className="card-game-contents-platforms">
                    {key.parent_platforms &&
                      key.parent_platforms.map((element, index) => (
                        <span
                          className="card-game-contents-platforms-logos"
                          key={index}
                        >
                          {transformNameIntoLogo(element.platform.slug)}
                        </span>
                      ))}
                  </div>

                  <Link to={`/game/${key.id}`}>
                    <button className="button-basic">{key.name}</button>
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
