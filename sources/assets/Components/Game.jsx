import API from "../../API";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Game = () => {
  const QUERY = "games";
  const { ID } = useParams();
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/${QUERY}/${ID}?key=${KEY}`;

  const [data, setData] = useState();
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.log(`Query ${ID} :`, request);
      setData(request);
    };
  }, []);

  return (
    <main>
      <div className="container-main">
        {data && (
          <section>
            <h1>{data.name}</h1>
            <img src={data.background_image} />
          </section>
        )}
      </div>
    </main>
  );
};

export default Game;
