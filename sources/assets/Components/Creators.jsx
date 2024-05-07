import { useState, useEffect } from "react";
import API from "../../API";

export default function Creators() {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/creators=${KEY}`;
  const [data, setData] = useState();

  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);

  return (
    <div>
      <h2>coucou</h2>
      {data &&
        data.results &&
        data.results.map((creators, index) => (
          <div key={index}>
            <h2>{creators.name}</h2>
            <img src={creators.image} />
            <p>{creators.description}</p>
          </div>
        ))}
    </div>
  );
}
