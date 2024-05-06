import { useState, useEffect } from "react";
import API from "../../API";

export default function Platforms() {
  const [data, setData] = useState([]);
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/platforms?key=${KEY}`;

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
        data.results.map((platform, index) => (
          <div key={index}>
            <h2>{platform.name}</h2>
            <img src={platform.image_background} />
            <p>{platform.description}</p>
          </div>
        ))}
    </div>
  );
}
