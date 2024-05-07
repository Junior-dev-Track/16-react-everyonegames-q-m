import API from "../../API";
import { useState, useEffect } from "react";

const Creators = () => {
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
    <main>
      <div className="container-main">
        <h1>Creators</h1>
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
    </main>
  );
};

export default Creators;
