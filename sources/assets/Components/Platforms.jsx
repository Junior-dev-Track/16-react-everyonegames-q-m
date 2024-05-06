import API from "../../API";
import { useState, useEffect } from "react";
import "../Styles/platforms/card-platforms.scss";
import "../Styles/platforms/container-platforms.scss";

const Platforms = () => {
  const QUERY = "platforms";
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
        <h1>Platforms</h1>
        <section className="container-platforms">
          {data &&
            data.results &&
            data.results.map((platform, index) => (
              <div key={index} className="card-platforms">
                <h2>{platform.name}</h2>
                <img src={platform.image_background} />
                <p>{platform.description}</p>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default Platforms;
