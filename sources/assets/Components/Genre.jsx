import API from "../../API";
import { useState, useEffect } from "react";

const Genre = () => {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/genres/{id}?key=${KEY}`;

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
        <h1>Genre</h1>
        {data &&
          data.results &&
          data.results.map((genres, index) => (
            <div key={index}>
              <h2>{genres.name}</h2>

              <p>{genres.description}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Genre;
