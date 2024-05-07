import { useState, useEffect } from "react";
import API from "../../API";

const Developers = () => {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/developers?key=${KEY}`;

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
        <h1>Developers</h1>
      </div>
    </main>
  );
};

export default Developers;
