import API from "../../API";
import { useState, useEffect } from "react";

const ScreeShots = () => {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/games/{game_pk}/screenshots?key=${KEY}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);
};

export default ScreeShots;
