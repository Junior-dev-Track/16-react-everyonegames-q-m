import API from "../../API";
import { useState, useEffect } from "react";

const Stores = () => {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/stores?key=${KEY}`;

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
        <h1>Stores</h1>
        {data &&
          data.results &&
          data.results.map((stores, index) => (
            <div key={index}>
              <h2>{stores.name}</h2>

              <p>{stores.description}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Stores;
