import { useState, useEffect } from "react";
import API from "../../API";

export default function Developers() {
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

  return <h1>coucou</h1>;
}
