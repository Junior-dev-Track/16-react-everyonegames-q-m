import { useState, useEffect } from "react";
import API from "../Api/api";

export default function Genre() {
  const [data, setData] = useState([]);
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/genres/{id}?key=${KEY}`; // replace id

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
