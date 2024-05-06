import { useState, useEffect } from "react";
import API from "./API";

export default function Genre() {
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
    <div>
      {data &&
        data.results &&
        data.results.map((genres, index) => (
          <div key={index}>
            <h2>{genres.name}</h2>

            <p>{genres.description}</p>
          </div>
        ))}
    </div>
  );
}
